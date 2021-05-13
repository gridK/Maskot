import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';
import TimeSlotCard, {TimelineDetailCard, TimelineWithoutMaskDetection} from '../Utilities/TimeSlotCard';
import ImageView from '../Utilities/ImageView';
import CarouselControl from '../Utilities/CarouselControl';

function TimeLine (){
    return (
        <Container fluid>
            <HeaderView title="Timeline"  backToPreviousPath="/main/timereport" backToPreviousText="Back to Search" />
            <h3 className="timeline-results">Found 20 Results</h3>
            <div className="horizontal-scroll-view">
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="10:00" location="Main Atrium" isActive={true}/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
                <TimeSlotCard time="09:00" location="Main Atrium"/>
            </div>
            <Row className="timeline-inspection-view" noGutters={true}>
                <Col lg={6} >
                    <ImageView type="big" src="/img/Group 184.png"/>
                    <CarouselControl />
                </Col>
                <Col lg={6}>
                    <TimelineDetailCard time="10:00" location="Main Atrium" Maskvalue={35} UnMaskvalue={20}/>
                    <TimelineWithoutMaskDetection />
                </Col>
            </Row>
        </Container>
    );
}

export default TimeLine;