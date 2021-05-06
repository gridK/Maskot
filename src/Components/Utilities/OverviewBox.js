import React from 'react';
import '../../Styles/maskot-styling.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniCardDark from './MiniCardDark';

function OverviewBox(props){
    return (
        <div className="overview-box">
            <Row noGutters={true}>
                <Col  sm="auto" >
                    { props.page === "day" ?
                        <Row>
                            <Col sm="2">
                                <h5 className="overview-header">Overview</h5>
                            </Col>
                            <Col sm="auto">
                                <Row>
                                    <p className="overview-trend">D <span >2.4%</span></p>
                                    <p className="overview-trend">W <span >2.4%</span></p>
                                    <p className="overview-trend">M <span >2.4%</span></p>
                                </Row>
                            </Col>
                            {/* implement conditional rendering based on trend  */}
                        </Row>
                        :
                        <h5 className="overview-header">Overview</h5>
                    }
                    <Row className="overview-margin-mini-card">
                        <Col md="auto">
                            <MiniCardDark  label="Total With Mask" value="27,500" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                        </Col>
                        <Col md="auto">
                            <MiniCardDark label="Total Without Mask" value="2,850" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                        </Col>
                        <Col md="auto">
                            <MiniCardDark  label="Rate" value="12.59%" icon="/img/icons8-protection-mask-128.svg" iconUnit="/img/icons8-person-64.svg"/> 
                        </Col>
                    </Row>
                </Col>
                <Col className="ml-4 d-flex align-items-center justify-content-center" sm="2">
                    <img src="/img/Disease.jpg" className="overview-box-img" alt="disease"></img>
                </Col>
            </Row>
        </div>
    );
}

export default OverviewBox;