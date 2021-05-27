import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';
import ImageView from './ImageView';

function DetectionResultCardV1(props) {
    return (
        <div className="detection-result-card">
            <div className="detail">
                <Row className="detail-padding">
                    <Col md="8" className="text-container">
                        <h4>11:00 HRS.</h4>
                    </Col>
                    <Col md="2">
                        <img className="button-icon" src="/img/icons8-expand-96.png"></img>
                    </Col>
                    <Col md="2">
                        <img className="button-icon" src="/img/icons8-delete-bin-90.png"></img>
                    </Col>
                </Row>
            </div>
            <div className="gradient-layer"></div>
            <div className="overlay-image-frame"></div>
            <img className="profile-icon-button" src="/img/icons8-user-90.png"></img>
            <img className="overlay-image" src="/img/sample.png"></img>
            <div className="overlay"></div>
            <img className="image" src="/img/sample.png"></img>
        </div>
    );
}

// function DetectionResultCard(props){
//     console.log(props)
//     return(
//         <div className="not-wearing-mask-detection-card">
//             <ImageView type="big" src="/img/sample.png"/>
//             <div className="not-wearing-mask-detection-detail">
//                 <Row className="ml-2" noGutters={true}>
//                     <ImageView type="small-result" src="/img/Mask Group 36.png"/>
//                     <ImageView type="small-result" src="/img/Mask Group 36.png"/>
//                     <ImageView type="small-result" src="/img/Mask Group 36.png"/>
//                     <ImageView type="more-img" imgNum={5}/>
//                 </Row>
//                 <div className="not-wearing-mask-detection-footer">
//                     <Row >
//                         <Col md="8" className="ml-1">
//                             <div className="mini-time-slot-card">
//                                 10:00 HRS.
//                             </div>

//                         </Col>
//                         <img className="ml-3 mr-3" src="/img/Icon awesome-expand.svg" ></img>
//                         <img src="/img/Icon awesome-trash.svg" ></img>

//                     </Row>
//                 </div>
//             </div>
//         </div>
//     );
// }

function DetectionResultCard(props){
    console.log(props)
    return(
        props.imageUrl ?
        <div className="not-wearing-mask-detection-card">
            <ImageView type="big" src={props.imageUrl}/>
            <div className="not-wearing-mask-detection-detail">
                <Row className="ml-2" noGutters={true}>
                    <ImageView type="small-result" src="/img/Mask Group 36.png"/>
                    <ImageView type="small-result" src="/img/Mask Group 36.png"/>
                    <ImageView type="small-result" src="/img/Mask Group 36.png"/>
                    <ImageView type="more-img" imgNum={5}/>
                </Row>
                <div className="not-wearing-mask-detection-footer">
                    <Row >
                        <Col md="8" className="ml-1">
                            <div className="mini-time-slot-card">
                                {props.capturedTime} HRS.
                            </div>

                        </Col>
                        <img className="ml-3 mr-3" src="/img/Icon awesome-expand.svg" ></img>
                        <img src="/img/Icon awesome-trash.svg" ></img>

                    </Row>
                </div>
            </div>
        </div> : <></>
    );
}
export default DetectionResultCard;