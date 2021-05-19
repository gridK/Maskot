import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderView from '../Utilities/HeaderView';
import FilterDropDown from '../Utilities/FilterDropDown';
import Row from 'react-bootstrap/Row';
import MiniViewBtn from '../Utilities/MiniViewBtn';

function MainTimeLine(){
    return(
        <Container fluid> 
            <h1 className="main-title">Timeline</h1>
            <h1 className="main-sub-title">Insert Photo</h1>
            <h5 className="main-description-text">Upload a straight face photo of person to generate a timeline</h5>
            <Row>
                <FilterDropDown type="filter" filterName="Date"/>
            </Row>
            <div className="my-5 ml-2">
                <img src="/img/Group 124.jpg" alt="drop-file-area" width="98%"></img>
            </div>

            <Row className="justify-content-end mr-3">
                <MiniViewBtn type="search-redirect" redirectPath="/timeline/report"/>
            </Row>
        </Container>
    );
}

export default MainTimeLine;