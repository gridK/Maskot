import React from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import '../../Styles/maskot-styling.scss';
import MiniViewBtn from '../Utilities/MiniViewBtn';


function FullWidthCard(props) {
    return(
        <div className="full-width-card-box ">
            <Row className="full-width-card-inner-padding">
                <Col className="full-width-card-partial" xl="3">
                    <div className="mini-card-text-big">
                        <p>{props.label_A}</p>
                        <Row className="mini-card-value-text">
                            <h2>{props.value_A}</h2>
                        </Row>
                        
                    </div>
                </Col>
                <Col xl="2" className=" mr-5">
                    <Row className="full-width-inner-padding">
                        <img src={props.icon} className="mini-card-icon"></img>
                        <div className="mini-card-text">
                            <p>{props.label_B}</p>
                            <Row className="mini-card-value-text">
                                <h4>{props.value_B}</h4>
                                <img src={props.iconUnit} ></img>
                            </Row>
                            
                        </div>
                    </Row>
                </Col>
                <Col  className=" col-xl-2-5">
                    <Row className="full-width-inner-padding">
                        <img src={props.icon} className="mini-card-icon"></img>
                        <div className="mini-card-text">
                            <p>{props.label_C}</p>
                            <Row className="mini-card-value-text">
                                <h4>{props.value_C}</h4>
                                <img src={props.iconUnit} ></img>
                            </Row>
                        </div>
                    </Row>
                </Col>
                <Col className="">
                    <div className="mini-card-text">
                        <p>{props.label_D}</p>
                        <Row className="mini-card-value-text">
                            <h4>{props.value_D}</h4>
                        </Row>
                        
                    </div>
                </Col>
                <Col className="full-width-card-partial justify-content-center">
                    <MiniViewBtn />
                </Col>
            </Row>
        </div>
    );
}

export default FullWidthCard;