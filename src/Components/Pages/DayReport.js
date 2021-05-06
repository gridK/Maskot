import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from '../Utilities/MiniCardDark';
import HeatMap from '../Utilities/HeatMap';
import OverviewBox from '../Utilities/OverviewBox';
import DetectionResultCard from '../Utilities/DetectionResultCard';
import FullWidthCard from '../Utilities/FullWidthCard';
import Paginator from '../Utilities/Pagination';
import '../../Styles/maskot-styling.scss';
import HeaderView from '../Utilities/HeaderView';


function DayReport() {
    return (
        <Container fluid>
            <HeaderView title="Mask Inspection Record" pageNum={3} />
            <OverviewBox page="day"/>
            <HeatMap />
            <div>
                <h1 className="main-sub-title main-temp-margin">Location Inspection</h1>
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
                    path="/inspection"
                    />
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
                    path="/inspection"
                    />
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
                    path="/inspection"
                    />           
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
                    path="/inspection"
                    />           
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
                    path="/inspection"
                    />
            </div>
            <div className="pagination-view">
                <Paginator />
            </div>
        </Container>
    );
}

export default DayReport;