import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from '../Utilities/MiniCardDark';
import OverviewBox from '../Utilities/OverviewBox';
import DetectionResultCard from '../Utilities/DetectionResultCard';
import FilterDropDown from '../Utilities/FilterDropDown';
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';


function TimeReport() {
    return (
        <Container fluid>
            <HeaderView title="Main Atrium" page="time"/>
            <OverviewBox page="time"/>
            <h1 className="main-sub-title main-temp-margin">Not Wearing Mask Detection Result</h1>
            <div className="view-filter-group">
                <Row>
                    <FilterDropDown type="filter"/>
                    <FilterDropDown />
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

export default TimeReport;