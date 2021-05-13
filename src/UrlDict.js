import React from 'react';
import axios from 'axios';

const baseUrl = "https://maskot-dev.azurewebsites.net/api/v1";

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
            return axios.get(baseUrl+`/dashboard/histories-locations?page=${params.data.page}&pageSize=${params.data.pageSize}&date=03/05/2021`)
        default:
            return ("params type mismatch.");
            
    }
}


export {GetMainDashBoardInfo};