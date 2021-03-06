import React from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import '../../Styles/maskot-styling.scss';
import MiniViewBtn from '../Utilities/MiniViewBtn';


function FullWidthCard(props) {
    return(
        <div className="full-width-card-box mt-3">
            <Row className="full-width-card-inner-padding">
                <Col className="full-width-card-partial" xl="3">
                    <div className="mini-card-text-big">
                        <p>{props.label_A}</p>
                        <Row className="mini-card-value-text" >
                            <Col  lg="auto">
                                <h2>{props.value_A}</h2>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
                <Col xl="2-5" className=" mr-2">
                    <Row className="full-width-inner-padding">
                        <img src={props.icon} className="mini-card-icon"></img>
                        <div className="mini-card-text">
                            <p>{props.label_B}</p>
                            <Row className="mini-card-value-text" noGutters="true">
                                <Col  lg="auto">
                                    <h4>{props.value_B}</h4>
                                </Col>
                                <Col className="d-flex">
                                    <img src={props.iconUnit}  className="align-self-start"></img>
                                </Col>
                            </Row>
                            
                        </div>
                    </Row>
                </Col>
                <Col  xl="2-5">
                    <Row className="full-width-inner-padding">
                        <img src={props.iconNon} className="mini-card-icon not-masked"></img>
                        <div className="mini-card-text">
                            <p >{props.label_C}</p>
                            <Row className="mini-card-value-text" noGutters="true">
                                <Col  lg="auto" >
                                    <h4>{props.value_C}</h4>
                                </Col>
                                <Col className="d-flex" >
                                    <img src={props.iconUnit} className="align-self-start" ></img>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Col>
                <Col xl="2-5" className="">
                    <div className="mini-card-text pl-2">
                        <p>{props.label_D}</p>
                        <Row className="mini-card-value-text" noGutters="true">
                            <Col  lg="auto" >
                                <h4>{props.value_D}</h4>
                            </Col>
                        </Row>
                        
                    </div>
                </Col>
                <Col className="full-width-card-partial justify-content-center">
                    <MiniViewBtn  type="view" link={props.path}/>
                </Col>
            </Row>
        </div>
    );
}

export default FullWidthCard;