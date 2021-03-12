import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';

function DetectionResultCard(props) {
    return (
        <div className="detection-result-card">
            <div className="detail">
                <h4>11:00 HRS.</h4>
            </div>
            <div className="gradient-layer"></div>
            <div className="overlay-image-frame"></div>
            <img className="overlay-image" src="/img/sample.png"></img>
            <div className="overlay"></div>
            <img className="image" src="/img/sample.png"></img>
        </div>
    );
}

export default DetectionResultCard;