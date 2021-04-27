import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';

function DetectionResultCard(props) {
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

export default DetectionResultCard;