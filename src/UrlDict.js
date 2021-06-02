import React from 'react';
import axios from 'axios';

const baseUrl = "https://maskot-devs.azurewebsites.net/api/v1";

const exampleParams = {
    type: "main",
    data: {
        startDate:"01/05/2015",
        endDate:"29/05/2015"
    }
}
// Naming convention GET / Post , Page Name, data detail

function GetMainDashBoardInfo(params){
    switch (params.type){
        case "main":
            return axios.get(baseUrl+`/dashboard/dashboards?startDate=${params.data.startDate}&endDate=${params.data.endDate}`)
        case "location inspection":
            return axios.get(baseUrl+`/dashboard/histories-locations?page=${params.data.page}&pageSize=${params.data.pageSize}&date=${params.data.date}`)
        default:
            return ("params type mismatch.");
            
    }
}

function GetInspectionRecordInfo(params) {
    switch (params.type){
        case "main":
            return axios.get(baseUrl+`/dashboard/histories-dates?startDate=${params.data.date}&page=${params.data.page}&pageSize=${params.data.pageSize}`)
        default:
            return ("params type mismatch.");
    }
}

function GetDayReportInfo(params) {
    switch(params.type){
        case "main":
            return axios.get(baseUrl+`/dashboard/heatmaps?startTime=${params.data.startTime}&dateFormat=${params.data.dateFormat}&date=${params.data.date}&endTime=${params.data.endTime}`)
        case "overview":
            return axios.get(baseUrl+`/dashboard/statistics?date=${params.data.date}&dateFormat=${params.data.dateFormat}`)
        case "overview-rate":
            return axios.get(baseUrl+`/dashboard/statistic-compares?date=${params.data.date}&dateFormat=${params.data.dateFormat}`)
        case "location inspection":
            return axios.get(baseUrl+`/dashboard/histories-locations?page=${params.data.page}&pageSize=${params.data.pageSize}&date=${params.data.date}&dateFormat=${params.data.dateFormat}`)
        default:
            return ("params type mismatch.");
    }
}

function GetTimeReportInfo(params) {
    switch(params.type){
        case "main":
            return axios.get(baseUrl+`/dashboard/mask-transactions?date=${params.data.date}&startTime=${params.data.startTime}&dateFormat=${params.data.dateFormat}&endTime=${params.data.endTime}&page=${params.data.page}&pageSize=${params.data.pageSize}&locationId=${params.data.locationId}`)
        case "overview":
            return axios.get(baseUrl+`/dashboard/statistic-locations?date=${params.data.date}&dateFormat=${params.data.dateFormat}&time=${params.data.time}&locationId=${params.data.locationId}`)
        default:
            return ("params type mismatch.");
    }
}

function GetTimeLineInfo(params) {
    switch(params.type) {
        case "main":
            // return axios({
            //     url:baseUrl+`/dashboard/timelines`,
            //     method:'POST',
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //       },
            //     data:params.data.image
            // })
            return axios.post(baseUrl+`/dashboard/timelines`,params.data.image,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
        case "timeline-info":
            return axios.post(baseUrl+`/dashboard/timelines-info`,params.data)
        default:
            return ("params type mismatch.");
    }
}
export {GetMainDashBoardInfo, 
        GetInspectionRecordInfo,
        GetDayReportInfo,
        GetTimeReportInfo,
        GetTimeLineInfo
        };