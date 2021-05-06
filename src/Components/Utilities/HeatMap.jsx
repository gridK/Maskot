import React, { useState} from 'react';
import '../../Styles/maskot-styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import heatData from './heatData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

function HeatColor(value){
    if(value >= 15){
        return{ 'background-color': '#F17841' };
    }
    else if(value >= 13){
        return{ 'background-color': '#F4986F' };
    }
    else if(value >= 11){
        return{ 'background-color': '#F8B79A' };
    }
    else if(value >= 10){
        return{ 'background-color': '#FDD4C1' };
    }
    else if(value >= 7.5){
        return{ 'background-color': '#FCE7DD' };
    }
    else{
        return{ 'background-color': '#FCF4F0' };
    }
}

function HeatMap() {
    return (
        <div className="heat-map-view">
            <div class="heat-map-row">
                    <Col xl="2" />
                    <Col xl="auto" > 
                        <Row>
                        {
                            heatData[0].percentages.map(slot => 
                                <div class="heat-map-column-header text-center">
                                    <h5 className="heat-map-label column-label">{slot.time}:00</h5>
                                </div>
                            )
                        }
                        </Row>
                    </Col>
            </div>
            
            {
                
                heatData.map(location =>
                    <div class="heat-map-row">
                        <Col xl="2" className="d-flex  justify-content-end">
                            <div className=" align-self-center">
                                <h5 className="heat-map-label row-label">{location.location}</h5>
                            </div>
                        </Col>
                        <Col xl="auto">
                        <Row>
                            {
                                location.percentages.map(slot => 
                                    <NavLink to="/timereport" className="heat-map-box ">
                                        <div class="heat-map-inner-box" style={HeatColor(slot.value)}>
                                        </div>
                                        <div class="heat-map-inner-box-overlay "></div>
                                        <img src="/img/visibility-white.svg" className="heat-map-inner-box-overlay-icon" alt="see"></img>
                                    </NavLink>
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