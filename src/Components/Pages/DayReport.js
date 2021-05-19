import React, { useState , useEffect,  useReducer ,useCallback, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from '../Utilities/MiniCardDark';
import HeatMap from '../Utilities/HeatMap';
import OverviewBox from '../Utilities/OverviewBox';
import DetectionResultCard from '../Utilities/DetectionResultCard';
import FullWidthCard from '../Utilities/FullWidthCard';
import Paginator from '../Utilities/Pagination';
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';
import axios from 'axios';


import {
    useParams
  } from "react-router-dom";
import { GetDayReportInfo } from '../../UrlDict';

function DayReport() {
    const  params  = useParams();
    console.log(params.date)
    const currentDate = params.date
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [overview, setOverview] = useState([]);
    const [overviewRate, setOverviewRate] = useState([]);
    const [heatmap, setHeatmap] = useState([]);
    const [records, setRecords] = useState([]);
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });

    const fetchlocationinspection = (pagenum) => {
        let params = {
            type: "location inspection",
            data: {
                page: pagenum,
                pageSize: 1,
                date: currentDate,
                dateFormat: "d MMM yyyy"
            }
        }
        return GetDayReportInfo(params)
        .then(
            response => {
                const locationData = response.data.data.items
                const {totalPage, totalItem} = response.data.data
                setPaginators(prev => {
                    return ({ ...prev,
                    totalPage: totalPage,
                    totalItem: totalItem});
                })
                setRecords(locationData)
                console.log("fetch location api")
            }
        )
    }

    const fetchHeatMap = () => {
        let params = {
            type: "main",
            data: {
                date: currentDate,
                dateFormat: "d MMM yyyy",
                startTime: "10:00",
                endTime: "21:00"
            }
        }
        return GetDayReportInfo(params)
        .then(
            response => {
                setHeatmap(response.data)
                console.log("fetch heat map")
                console.log(response.data)
            }
        )
    }

    const fetchOverViewRate = () => {
        let params = {
            type: "overview-rate",
            data: {
                date: currentDate,
                dateFormat: "d MMM yyyy"
            }
        }
        return GetDayReportInfo(params)
        .then(
            response => {
                setOverviewRate(response.data)
                console.log("fetch overview rate")
                // console.log(response.data)
            }
        )
    }

    const fetchAPI = () => {
        let params = {
            type: "overview",
            data: {
                date: currentDate,
                dateFormat: "d MMM yyyy"
            }
        }
        GetDayReportInfo(params)
        .then(
            response =>{
                setOverview(response.data)
                let api_1 = fetchOverViewRate()
                let api_2 = fetchHeatMap()
                let api_3 = fetchlocationinspection(1)
                axios.all([api_1, api_2, api_3])
                .then(
                    () => {
                        setIsLoaded(true)
                    }
                )
                console.log("fetch main api")
                
            }
        )

    }

    function  setCurrentPage(pagenum) {
        setPaginators({currentPage : pagenum });
        console.log(pagenum)
        console.log(Paginators)
        fetchlocationinspection(pagenum)
        
    }

    useEffect( () => {
        fetchAPI()
        console.log("fetch all apis")
    }, [])

    return (
        <>
        { isLoaded &&
        <Container fluid>
            <HeaderView title="Mask Inspection Record" date={currentDate} pageNum={3} />
            <OverviewBox data={overview.data} overviewRate={overviewRate.data} page="day"/>
            <div className="d-flex justify-content-end mr-4 mb-2">
                <img src="/img/Heat_Map_Metered.jpg" alt="heat_metered"></img>
            </div>
            <HeatMap data={heatmap} startTime={10} endTime={21}/>
            <div>
                <h1 className="main-sub-title main-temp-margin">Location Inspection</h1>
                <FullWidthCard 
                    label_A="Floor 1" 
                    value_A="Main Atrium" 
                    icon="/img/icons8-protection-mask-128.svg" 
                    iconUnit="/img/icons8-person-64.svg"
                    label_B="Total With Mask" 
                    value_B="1,560" 
                    label_C="Total Without Mask" 
                    value_C="230" 
                    label_D="Rate" 
                    value_D="14.74%" 
                    path="/inspection"
                    />
                
            </div>
            <div className="pagination-view">
                <Paginator setPage={number => setCurrentPage(number)} currentPage={Paginators.currentPage} totalPage={Paginators.totalPage} totalItem={Paginators.totalItem}/>
            </div>
        </Container>
        }
        </>
    );
}

export default DayReport;