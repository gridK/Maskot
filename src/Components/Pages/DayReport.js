import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/maskot-styling.scss';


function DayReport() {
    return (
        <Container fluid>
            <Row>
                <h1 className="main-title">Main Atrium</h1>
            </Row>
            <Row className="main-sub-title-2">
                <img src="/img/icons8-calendar-256.svg" className="main-item-icon"></img>
                <h5>February 3, 2021</h5>
                <img src="/img/icons8-calendar-256.svg" className="main-item-icon"></img>
                <h5>10:00 HRS.</h5>
            </Row>
            <Row className="overview-box">
                <h5 className="overview-header">Overview</h5>
            </Row>
        </Container>
    );
}

export default DayReport;