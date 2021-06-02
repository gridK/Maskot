import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';


function MiniCard(props) {
    return(
        <div className="mini-card-box float-right">
            <Row className="mini-card-inner-padding">
                { props.notMasked ?
                    <img src={props.icon} className="mini-card-icon not-masked"></img>
                    :
                    <img src={props.icon} className="mini-card-icon "></img>
                }
                <div className="mini-card-text ">
                    <p>{props.label}</p>
                    <Row className="mini-card-value-text" noGutters="true">
                        <Col  lg="auto">
                            <h4>{props.value}</h4>
                        </Col>
                        <Col >
                            <img src={props.iconUnit} ></img>
                        </Col>
                    </Row>
                    
                </div>
            </Row>
        </div>
    );
}

export default MiniCard;