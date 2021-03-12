import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from '../Utilities/MiniCardDark';
import DetectionResultCard from '../Utilities/DetectionResultCard';
import '../../Styles/maskot-styling.scss';


function DayReport() {
    return (
        <Container fluid>
            <div className="header-view-position-fixed">
                <Row>
                    <h1 className="main-title">Main Atrium</h1>
                </Row>
                <Row className="main-sub-title-2">
                    <img src="/img/icons8-calendar-256.svg" className="main-item-icon"></img>
                    <h5>February 3, 2021</h5>
                    <img src="/img/icons8-calendar-256.svg" className="main-item-icon"></img>
                    <h5>10:00 HRS.</h5>
                </Row>
            </div>
            <div className="overview-box">
                <h5 className="overview-header">Overview</h5>
                <Row className="overview-margin-mini-card">
                    <Col md="auto">
                        <MiniCardDark  label="Total With Mask" value="27,500" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                    </Col>
                    <Col md="auto">
                        <MiniCardDark label="Total Without Mask" value="2,850" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                    </Col>
                    <Col md="auto">
                        <MiniCardDark  label="Rate" value="12.59%" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                    </Col>
                </Row>
            </div>
            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
            </Row>
            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
            </Row>
            <Row className="detection-result-container">
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
                <Col md="4" className="temp">
                    <DetectionResultCard></DetectionResultCard>
                </Col>
            </Row>
        </Container>
    );
}

export default DayReport;