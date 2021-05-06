import React from 'react';
import '../../Styles/maskot-styling.scss';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';


function HeaderView(props){
    return(
        <div className="header-view-position-fixed">
            <Breadcrumb >
                <Breadcrumb.Item active={true}>
                    Dashboard
                </Breadcrumb.Item>
                { props.pageNum >= 2 &&
                    <Breadcrumb.Item active={true}>
                        Inspection Record
                    </Breadcrumb.Item>
                }
                { props.pageNum >= 3 &&
                    <Breadcrumb.Item active={true}>
                        Day report
                    </Breadcrumb.Item>
                }
            </Breadcrumb>
            { props.title != null &&
                <>
                <Row noGutters={true}>
                    <h3 className="header-view-title">{props.title}</h3>
                </Row>
                <Row noGutters={true} className="header-view-sub-title">
                    <img src="/img/icons8-calendar-256.svg" className="header-view-icon" alt="date"></img>
                    <h5>February 3, 2021</h5>
                    { props.page === "time" ?
                        <>
                        <img src="/img/icons8-clock.svg" className="header-view-icon" alt="time"></img>
                        <h5>10:00 HRS.</h5>
                        </>
                    :
                        <></>

                    }
                </Row>
                </>
            }
        </div>
    );

}

export default HeaderView;