import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageView from './ImageView';


function TimeSlotCard(props) {
    if (props.currentTimeLine !== undefined){
        console.log( props.currentTimeLine +"     "+ props.time)
    }
    return (
        <>{ props.currentTimeline === undefined ?
            <>
            { props.currentTimeLine === props.time ?
                <button className="time-slot-card-active">
                    <h2>{props.time}</h2>
                    <h5>{props.location}</h5>
                </button>
                :
                <button className="time-slot-card-grey" onClick={() => props.setTimeLine(props.detectedIds, props.time, props.location)}>
                    <h2>{props.time}</h2>
                    <h5>{props.location}</h5>
                </button>
            }
            </>
            :
            <button className="time-slot-card-grey" onClick={() => props.setTimeLine(props.detectedIds, props.time, props.location)}>
                <h2>{props.time}</h2>
                <h5>{props.location}</h5>
            </button>
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
                        <img src="/img/Group 22@2x.png" alt="mask" className="mini-card-icon"></img>
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


function TimelineWithoutMaskDetection(props){
    var baseUrl = ' https://0dee03d3fcf8.ngrok.io'
    var imageUrl = props.withOutMaskFaceCoord.images[props.currentNum-1].imageUrl
    return (
        <div className="timeline-without-mask-detection">
            <h4 className="timeline-without-mask-title">Without Mask Detection Result</h4>
            <div className="horizontal-scroll-view">
                { props.withOutMaskFaceCoord.images[props.currentNum-1].withoutMaskedFaceCoords.map( record => {
                    return(<ImageView type="small" 
                        src={baseUrl+"/utils/crop-image?img="+imageUrl+"&coord="+record}/>);
                })

                }
            </div>
        </div>
    );
}

export default TimeSlotCard;

export {TimelineDetailCard, TimelineWithoutMaskDetection};