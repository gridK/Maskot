import React from 'react';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../Styles/maskot-styling.scss';

function MiniCardDark(props) {
    return(
        <div className="mini-card-box-dark">
            <Row className="mini-card-inner-padding">
                <div className="mini-card-icon-background"></div>
                { props.label === "Total With Mask" &&
                    <img src={props.icon} className="mini-card-icon"></img>
                }
                { props.label === "Total Without Mask" &&
                    <img src={props.icon} className="mini-card-icon not-masked"></img>
                }
                { props.label === "Rate" &&
                    <img src={props.icon} className="mini-card-icon rate"></img>
                }
                <div className="mini-card-text">
                    <p>{props.label}</p>
                    <Row className="mini-card-value-text " noGutters="true">
                        <h4>{props.value}</h4>
                        <img src={props.iconUnit} ></img>
                    </Row>
                    
                </div>
            </Row>
        </div>
    );
}

export default MiniCardDark;