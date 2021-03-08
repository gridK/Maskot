import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../../Styles/maskot-styling.scss';
import MiniCard from '../Utilities/MiniCard';
import MiniViewBtn from '../Utilities/MiniViewBtn';
import FullWidthCard from '../Utilities/FullWidthCard';
import FilterDropDown from '../Utilities/FilterDropDown';

function InspectionRecords(){
    return(
        <Container fluid >
            <div className="view-bread-position-fixed">
                <Breadcrumb >
                    <Breadcrumb.Item active={true}>
                        Dashboard
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active={true}>
                        Inspection Record
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="view-filter-group">
                <Row>
                    <FilterDropDown type="filter"/>
                    <FilterDropDown type="filter"/>
                    <FilterDropDown />
                </Row>
            </div>
            <div >
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


export default InspectionRecords;