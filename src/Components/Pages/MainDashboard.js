import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Styles/maskot-styling.scss';
import MiniCard from '../Utilities/MiniCard';
import MiniViewBtn from '../Utilities/MiniViewBtn';
import FullWidthCard from '../Utilities/FullWidthCard';
import InspectionBarChart from '../Utilities/BarChart';

function MainDashBoard() {
    return(
        <Container fluid>
            <Row>   
                <Col className="col-xxl-7" xl="6" lg="7" md="8">
                    <h1 className="main-title">Dashboard</h1>
                    <Row className="main-date-text">
                        <img src="/img/icons8-calendar-256.svg" className="main-item-icon" ></img>
                        <h5>February 3, 2021</h5>
                    </Row>
                </Col>
                <Col className="col-xxl-5" xl="6" lg="5" md="4">
                    <Row>
                        <Col md="6">
                            <MiniCard  label="Total With Mask" value="27,500" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                        </Col>
                        <Col md="6">
                            <MiniCard label="Total Without Mask" value="2,850" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="main-inspection-record-view d-flex align-items-center">
            
                <h1 className="main-sub-title">Inspection Record</h1>
                <MiniViewBtn />
            </Row>
            <h5 className="main-description-text">Not wearing mask inspection rate</h5>
            {/* <InspectionBarChart /> */}
            <h1 className="main-sub-title main-temp-margin">Daily Location Inspection</h1>
            <div ClassName="main-daily-location-inspection-scroll-view">
                <FullWidthCard 
                    label_A="Floor 1" 
                    value_A="Main Atrium" 
                    icon="/img/icons8-protection-mask-128.svg" 
                    iconUnit="/img/icons8-person-64.svg"
                    label_B="Total With Mask" 
                    value_B="1,560" 
                    label_C="Total Without Mask" 
                    value_C="230" 
                    label_D="Rate" 
                    value_D="14.74%" 
                    />
            </div>
        </Container>
    );
}

export default MainDashBoard;