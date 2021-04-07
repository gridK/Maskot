import React, { useState} from 'react';
import '../../Styles/maskot-styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import heatData from './heatData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            {
                heatData.map(location =>
                    <div class="heat-map-row">
                        <Col xl="2">
                            <h5>{location.location}</h5>
                        </Col>
                        <Col xl="auto">
                        <Row>
                            {
                                location.percentages.map(slot => 
                                    <div class="heat-map-box ">
                                        <div class="heat-map-inner-box" style={HeatColor(slot.value)}></div>
                                    </div>
                                )
                            }
                        </Row>
                        </Col>
                    </div>
                )
            }
                

        </div>
    );
}

export default HeatMap;