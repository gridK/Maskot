import React, { useState} from 'react';
import '../../Styles/maskot-styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeatMap from '../Utilities/HeatMap';

function DayReport() {
    return (
        <Container fluid >
            <HeatMap />
        </Container>
    );
}

export default DayReport;