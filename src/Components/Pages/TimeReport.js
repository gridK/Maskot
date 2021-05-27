import React, { useState , useEffect,  useReducer ,useCallback, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from '../Utilities/MiniCardDark';
import OverviewBox from '../Utilities/OverviewBox';
import DetectionResultCard from '../Utilities/DetectionResultCard';
import FilterDropDown from '../Utilities/FilterDropDown';
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';
import axios from 'axios';
import Paginator from '../Utilities/Pagination';

import {
    useParams
  } from "react-router-dom";
import { GetTimeLineInfo, GetTimeReportInfo } from '../../UrlDict';

function TimeReport() {
    const  params  = useParams();
    const currentDate = params.date;
    const currentLocationId = params.locationId
    const currentSlot = params.slot
    const currentLocation = params.locationNamEn
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [overview, setOverview] = useState([]);
    const [ SelectedTime , setSelectedTime] = useState([])
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });

    var TimeSelectList = []

    function constructTimeSelectList() {
        var times = []
        var tempTimeSlot = currentSlot.split(":");
        var hour = parseInt(tempTimeSlot[0])
        var minute = parseInt(tempTimeSlot[1])

        times.push(`${hour}:00 - ${hour}:${minute+10}`)
        // setSelectedTime(`${hour}:00 - ${hour}:${minute+10}`)
        minute += 10;
        for (var i = 0; i < 4; i++) {
            times.push(`${hour}:${minute} - ${hour}:${minute+10}`)
            minute += 10;
        }
        times.push(`${hour}:${minute} - ${hour+1}:00`)
        TimeSelectList = times;
        console.log(TimeSelectList)
    }

    constructTimeSelectList();
    // var TimeSelectList = ["9:00", "10:00","11:00"]
   
    // for (var i = 0; i < 3; i++) {
    //     console.log("hey");
    //   }
    
    const fetchAPI = () => {
        let params = {
            type: "overview",
            data: {
                date: currentDate,
                dateFormat: "d MMM yyyy",
                time: currentSlot,
                locationId: currentLocationId
            }
        }
        GetTimeReportInfo(params)
        .then(
            response =>{
                setOverview(response.data)
                console.log(response.data)
                setIsLoaded(true)
            }
        )        
    }
    
    const fetchmainAPI = (pagenum) => {
        const splittedTimeSlot = SelectedTime.split(" - ");
        const startTime = splittedTimeSlot[0]
        const endTime = splittedTimeSlot[1]
        let params = {
            type: "main",
            data: {
                date: currentDate,
                page: pagenum,
                pageSize: 5,
                startTime: startTime,
                endTime: endTime,
                dateFormat: "d MMM yyyy",
                locationId: currentLocationId
            }
        }
        
        const main = GetTimeReportInfo(params)

        axios.all([main]).then(
            axios.spread((...allData) => {
                console.log(allData);
                const mainData = allData[0].data.data.items
                const {totalPage, totalItem} = allData[0].data.data
                console.log(mainData);
                setPaginators(prev => {
                    return ({ ...prev,
                    totalPage: totalPage,
                    totalItem: totalItem});
                })
                setItems(mainData)
            })
        )
    }

    function  setCurrentPage(pagenum) {
        setPaginators({currentPage : pagenum });
        console.log(pagenum)
        console.log(Paginators)
        fetchmainAPI(pagenum) 
    }

    function  setCurrentPage(pagenum) {
        setPaginators({currentPage : pagenum });
        console.log(pagenum)
        console.log(Paginators)
        // fetchlocationinspection(pagenum)
        
    }
    function setTimeFilter(value) {
        setSelectedTime(value)
        console.log(value)
    }

    function callFilterTime() {
        setPaginators({
            currentPage : 1,
            totalPage: 1,
            totalItem: 1,
        });
        fetchmainAPI(1)
        console.log("got ya na");
    }

    useEffect( () => {
        // constructTimeSelectList()
        setTimeFilter(TimeSelectList[0])
        fetchAPI()
        console.log("fetch all apis")
    }, [])

    return (
        <>
        { isLoaded &&
        <Container fluid>
            <HeaderView title={currentLocation} backToPreviousPath={"/main/dayreport/"+currentDate} backToPreviousText="Back to Day Report" page="time" date={currentDate} time={currentSlot}/>
            <OverviewBox data={overview.data} page="time"/>
            <h1 className="main-sub-title main-temp-margin">Not Wearing Mask Detection Result</h1>
            <div className="view-filter-group">
                <Row>
                    <FilterDropDown setFilter={value => setTimeFilter(value)} selectList={TimeSelectList} type="filter" filterName="Time"/>
                    <FilterDropDown onClickEvent={callFilterTime}/>
                </Row>
            </div>
            
            {/* index % 3 == 0 && <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard  {...record}/>
                </Col>
                { (index % 3 == 2 || index == items.length-1) && </Row> } */}

            {/* {items.map( (record, index) => 
                index % 3 == 0 ? 
                    <Row className="detection-result-container">
                        <Col md="4" className="temp">
                            <DetectionResultCard  {...record}/>
                        </Col> 
                    : index % 3 == 2 ? 
                        <Col md="4" className="temp">
                            <DetectionResultCard  {...record}/>
                        </Col>
                    </Row> 
                    : index == items.length - 1 ?
                        <Col md="4" className="temp">
                            <DetectionResultCard  {...record}/>
                        </Col>
                    : 
                        <Col md="4" className="temp">
                            <DetectionResultCard  {...record}/>
                        </Col>
            )} */}

            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
            </Row>
            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard /> 
                </Col>
            </Row>
            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard />
                </Col>
            </Row>
            <div className="pagination-view">
                <Paginator setPage={number => setCurrentPage(number)} currentPage={Paginators.currentPage} totalPage={Paginators.totalPage} totalItem={Paginators.totalItem}/>
            </div>
        </Container>
        }
        </>
    );
}

export default TimeReport;