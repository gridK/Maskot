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

import {
    useParams
  } from "react-router-dom";
import { GetTimeReportInfo } from '../../UrlDict';

function TimeReport() {
    const  params  = useParams();
    const currentDate = params.date;
    const currentLocationId = params.locationId
    const currentSlot = params.slot
    const currentLocation = params.locationNamEn
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [overview, setOverview] = useState([]);
    const [ SelectedTime , setSelectedTime] = useState("9:00")
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });
    var TimeSelectList = ["9:00", "10:00","11:00"]
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

    function setTimeFilter(value) {
        setSelectedTime(value)
        console.log(value)
      }

    useEffect( () => {
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
                    <FilterDropDown />
                </Row>
            </div>
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
        </Container>
        }
        </>
    );
}

export default TimeReport;