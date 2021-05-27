import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageView from './ImageView';


function TimeSlotCard(props) {

    return (
        <>{ props.currentTimeline !== undefined ?
            <>
            { props.currentTimeline.time === props.time ?
                <div className="time-slot-card-active">
                    <h2>{props.time}</h2>
                    <h5>{props.location}</h5>
                </div>
                :
                <div className="time-slot-card-grey" onClick={() => props.setTimeLine(props.detectedIds, props.time, props.location)}>
                    <h2>{props.time}</h2>
                    <h5>{props.location}</h5>
                </div>
            }
            </>
            :
            <div className="time-slot-card-grey" onClick={() => props.setTimeLine(props.detectedIds, props.time, props.location)}>
                <h2>{props.time}</h2>
                <h5>{props.location}</h5>
            </div>
        }
        </>
    );
}

function TimelineDetailCard(props){
    return (    
        <div className="timeline-detail-card">
            <div className="timeline-detail-card-top">
                <h1>
                    {props.time} HRS
                </h1>
                <h3>
                    {props.location}
                </h3>
            </div>
            <Row>
                <h2>Possible Contact</h2>
            </Row>
            <Row className="pl-4">
                <Col md={5}>
                    <Row noGutters={true}>
                        <div className="mini-card-icon-background"></div>
                        <img src="/img/icons8-protection-mask-128.svg" alt="mask"className="mini-card-icon"></img>
                        <div className="mini-timeline-card-text">
                            <p>Total With Mask</p>
                            <Row className="mini-card-value-text" noGutters="true">
                                <Col  lg="auto">
                                    <h4>{props.Maskvalue}</h4>
                                </Col>
                                <Col >
                                    <img src="/img/icons8-person-64.svg" ></img>
                                </Col>
                            </Row>
                            
                        </div>
                    </Row>
                </Col>
                <Col >
                    <Row noGutters={true}>
                        <div className="mini-card-icon-background"></div>
                        <img src="/img/icons8-protection-mask-128.svg" alt="mask"className="mini-card-icon"></img>
                        <div className="mini-timeline-card-text ">
                            <p>Total Without Mask</p>
                            <Row className="mini-card-value-text" noGutters="true">
                                <Col  lg="auto">
                                    <h4>{props.UnMaskvalue}</h4>
                                </Col>
                                <Col >
                                    <img src="/img/icons8-person-64.svg" ></img>
                                </Col>
                            </Row>
                            
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}


function TimelineWithoutMaskDetection(){
    return (
        <div className="timeline-without-mask-detection">
            <h4 className="timeline-without-mask-title">Without Mask Detection Result</h4>
            <div className="horizontal-scroll-view">
                <ImageView type="small" src="/img/Mask Group 36.png"/>
                <ImageView type="small" src="/img/Mask Group 36.png"/>
                <ImageView type="small" src="/img/Mask Group 36.png"/>
                <ImageView type="small" src="/img/Mask Group 36.png"/>
                <ImageView type="small" src="/img/Mask Group 36.png"/>
            </div>
        </div>
    );
}

export default TimeSlotCard;

export {TimelineDetailCard, TimelineWithoutMaskDetection};