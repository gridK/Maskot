import React, { useState} from 'react';
import '../../Styles/maskot-styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import heatData from './heatData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

function HeatColor(value){
    console.log(value)
    if(value >= 0.15){
        return{ 'background-color': '#F17841' };
    }
    else if(value >= 0.13){
        return{ 'background-color': '#F4986F' };
    }
    else if(value >= 0.11){
        return{ 'background-color': '#F8B79A' };
    }
    else if(value >= 0.1){
        return{ 'background-color': '#FDD4C1' };
    }
    else if(value >= 0.075){
        return{ 'background-color': '#FCE7DD' };
    }
    else{
        return{ 'background-color': '#FCF4F0' };
    }
}

function HeatMap(props) {
    const heat_data = props.data.data.heatmap
    console.log(heat_data)
    var time_slot = []
    for (var i = props.startTime ; i <= props.endTime; i++){
        time_slot.push(i)
    }
    // console.log(heat_data[0].datas.filter(x => x.time === "10:00")[0].time)



    return (
        <div className="heat-map-view">
            <div class="heat-map-row">
                    <Col xl="2" />
                    <Col xl="auto" > 
                        <Row>
                        {
                            time_slot.map(slot => 
                                <div class="heat-map-column-header text-center">
                                    <h5 className="heat-map-label column-label">{slot}:00</h5>
                                </div>
                            )
                        }
                        </Row>
                    </Col>
            </div>
            
            {
                
                heat_data.map(location =>
                    <div class="heat-map-row">
                        <Col xl="2" className="d-flex  justify-content-end">
                            <div className=" align-self-center">
                                <h5 className="heat-map-label row-label">{location.locationNameEn}</h5>
                            </div>
                        </Col>
                        <Col xl="auto">
                        <Row>
                            {
                                time_slot.map(slot => 
                                    <>
                                        { undefined !== location.datas.filter(x => x.time === slot+":00")[0] ?
                                            <NavLink to={"/main/timereport/"+location.locationId+"/"+location.locationNameEn+"/"+props.date+"/"+slot+":00"} className="heat-map-box ">
                                                <div class="heat-map-inner-box" style={HeatColor(location.datas.filter(x => x.time === slot+":00")[0].ratio)}>
                                                </div>
                                                <div class="heat-map-inner-box-overlay "></div>
                                                <img src="/img/visibility-white.svg" className="heat-map-inner-box-overlay-icon" alt="see"></img>
                                            </NavLink>
                                            :
                                            <div className="heat-map-box ">
                                                <div class="heat-map-inner-box" style={{backgroundColor:'#F5f4f2'}} >
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            }
                        </Row>
                        </Col>
                    </div>
                )
            }
                
            <div class="d-flex justify-content-center mt-3">
                <img src="/img/visibility-black.svg" className="below-label-icon" alt="see"></img>
                <h5 class="ml-2 heat-map-label below-label my-auto">Click on timeslot to see detail</h5>
            </div>
        </div>
    );
}

export default HeatMap;