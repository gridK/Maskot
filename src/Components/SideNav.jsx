import React from "react";
import '../Styles/maskot-styling.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const navList = [
    {img: '/img/blank-icon.svg',item: "Dashboard"},
    {img: '/img/blank-icon.svg',item:"Timeline"},
    {img: '/img/blank-icon.svg',item:"Temi Overview"},
    {img: '/img/blank-icon.svg',item:"Setting"}
]


function NavItem(props) {
    return (
        <div>
            <div className="side-nav-item">
                <img src={props.img} className="side-nav-item-icon" ></img>
                <p className="side-nav-item-text">{props.item}</p>
            </div>
        </div>
    );
}


function SideNav() {
    return (
        <div className="side-nav">
            <h1 className="side-nav-header">MASKOT</h1>
            {navList.map((navItem) => 
                <NavItem img={navItem.img} item={navItem.item}/> 
            )}
        </div>
    );
}

export default SideNav;