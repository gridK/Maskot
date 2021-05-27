import React from 'react';
import '../../Styles/maskot-styling.scss';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import {DateTimeToFullString, DateTimeToLocaleDateStringLeadZero} from '../../Provider';

function TargetedPicture(props){
    return (
        <div className="target-picture-box">
                <img src={props.targetedImg} alt="target-pic" className="target-picture-img"/>
                <h3 className="target-picture-text">Target Picture</h3>
        </div>
    );
}

function HeaderView(props){
    const [date, month, year] = props.date.split(" ")
    return(
        <div className="header-view-position-fixed">
            <Row>
                <Col lg="8">
                { props.backToPreviousPath !== undefined &&
                    <NavLink to={props.backToPreviousPath}>
                        <h3 className="back-to-previous">{'< '+props.backToPreviousText}</h3>
                    </NavLink>
                }
                { (props.title !== "Timeline" && props.backToPreviousPath === undefined) &&
                <Breadcrumb >
                    <Breadcrumb.Item >
                        <NavLink to="/main/" className="inactive">
                            Dashboard
                        </NavLink>
                    </Breadcrumb.Item>
                    { props.pageNum >= 2 &&
                        <Breadcrumb.Item >
                            <NavLink to={"/main/inspection/"+ DateTimeToLocaleDateStringLeadZero(new Date()).replaceAll( "/" ,"-") }>
                                Inspection Record
                            </NavLink>
                        </Breadcrumb.Item>
                    }
                    { props.pageNum >= 3 &&
                        <Breadcrumb.Item >
                            <NavLink to={"/main/dayreport/"+props.date}>
                                Day report
                            </NavLink>
                        </Breadcrumb.Item>
                    }
                </Breadcrumb>
                }
                { props.title != null &&
                    <>
                    <Row noGutters={true}>
                        <h3 className="header-view-title">{props.title}</h3>
                    </Row>
                    <Row noGutters={true} className="header-view-sub-title">
                        <img src="/img/icons8-calendar-256.svg" className="header-view-icon" alt="date"></img>
                        <h5>{month+" "+date +", "+year}</h5>
                        { props.page === "time" ?
                            <>
                            <img src="/img/icons8-clock.svg" className="header-view-icon" alt="time"></img>
                            <h5>{props.time} HRS.</h5>
                            </>
                        :
                            <></>

                        }
                    </Row>
                    </>
                }
                </Col>
                <Col className="d-flex align-items-end">
                    { props.title === "Timeline" &&
                        <TargetedPicture targetedImg={props.targetedImg}/>
                    }
                </Col>

            </Row>
        </div>
    );

}

export default HeaderView;