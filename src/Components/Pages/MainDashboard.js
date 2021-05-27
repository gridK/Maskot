import React, { useState , useEffect,  useReducer ,useCallback, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/maskot-styling.scss';
import MiniCard from '../Utilities/MiniCard';
import MiniViewBtn from '../Utilities/MiniViewBtn';
import FullWidthCard from '../Utilities/FullWidthCard';
import InspectionBarChart from '../Utilities/BarChart';
import Paginator from '../Utilities/Pagination';

import {GetMainDashBoardInfo} from '../../UrlDict';
import {DateTimeToFullString, DateTimeToLocaleDateStringLeadZero} from '../../Provider';
import axios from 'axios';

function DashboardTitle(){
    var currentDate = DateTimeToFullString(new Date());
    return(
        <Col className="col-xxl-7" xl="6" lg="7" md="8">
            <h1 className="main-title">Dashboard</h1>
            <Col>
                <Row className="main-date-text pl-0">
                    <img src="/img/icons8-calendar-256.svg" className="main-item-icon" alt="calendar"></img>
                    <h5>{currentDate}</h5>
                </Row>
            </Col>
        </Col>
    );
}

function DashboardMiniCards(props){
    return(
        <Col className="col-xxl-5 " xl="6" lg="5" md="4">
            <Row>
                <Col xl="6">
                    <MiniCard  label="Total With Mask" value={props.totalWithMask} icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                </Col>
                <Col xl="6">
                    <MiniCard notMasked={true}label="Total Without Mask" value={props.totalWithoutMask} icon="/img/Group 22.jpg" iconUnit="/img/icons8-person-64.svg"/> 
                </Col>
            </Row>
        </Col>
    );
}


function MainDashBoard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [records, setRecords] = useState([]);
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });
    var startDate = "16/05/2021";
    var endDate = "26/05/2021";
    const fetchlocationinspection = (pagenum) => {
        var currentDate = new Date()
        let params = {
            type: "location inspection",
            data: {
                page: pagenum,
                pageSize: 1,
                date: DateTimeToLocaleDateStringLeadZero(currentDate),
            }
        }
        console.log(params)
        GetMainDashBoardInfo(params)
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
                console.log(response)
                console.log("fetch location api")
            }
        )
    }

    const fetchAPI = () => {
        let params = {
            type: "main",
            data: {
                startDate: startDate,
                endDate: endDate
            }
        }
        GetMainDashBoardInfo(params)
        .then(
            response => {
                setItems(response.data)
                fetchlocationinspection(1)
                setIsLoaded(true)
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
        console.log("fetch both api")
    }, [])

    return(
        <>
        {isLoaded &&
        <Container fluid >
            <div className=" view-main-position-fixed">
                <Row >   
                    <DashboardTitle />
                    <DashboardMiniCards totalWithMask={items.data.totalWithMask} totalWithoutMask={items.data.totalWithoutMask}/>
                </Row>
            </div>
            <div>
                
                <div >
                    <div>
                        <Col>
                            <Row className="main-inspection-record-view d-flex align-items-center">
                            
                                <h1 className="main-sub-title mr-2">Inspection Record</h1>
                                <MiniViewBtn type="view" link={"/main/inspection/"+ DateTimeToLocaleDateStringLeadZero(new Date()).replaceAll( "/" ,"-") } />
                            </Row>
                        </Col>
                        <h5 className="main-description-text">Not wearing mask inspection rate</h5>
                    
                        <InspectionBarChart inspectionRecords={items.data.inspectionRecords}/>
                        <h1 className="main-sub-title main-temp-margin">Daily Location Inspection</h1>
                    </div>
                    <div>
                    { records.map( record => 
                        <FullWidthCard 
                            label_A={"Floor "+record.floorNumber}
                            value_A={record.locationNameEn}
                            icon="/img/icons8-protection-mask-128.svg" 
                            iconUnit="/img/icons8-person-64.svg"
                            label_B="Total With Mask" 
                            value_B={record.withMask} 
                            label_C="Total Without Mask" 
                            value_C={record.withoutMask} 
                            label_D="Without Mask Ratio" 
                            value_D={(record.withoutMaskRate*100).toFixed(2) +" %"}
                            path="/main/inspection"
                            />
                        )
                    }
                    </div>
                </div>
                <div className="pagination-view">
                    <Paginator setPage={number => setCurrentPage(number)} currentPage={Paginators.currentPage} totalPage={Paginators.totalPage} totalItem={Paginators.totalItem} />
                </div>
            </div>
        </Container>
        }
        </>
        
    );
}

export default MainDashBoard;