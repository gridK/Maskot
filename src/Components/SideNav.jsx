import React from "react";
import '../Styles/maskot-styling.scss';
import App from '../App';
import {NavLink} from 'react-router-dom'
const navList = [
    {img: '/img/blank-icon.svg',item: "Dashboard", pages: '/main'},
    {img: '/img/blank-icon.svg',item:"Timeline" , pages: '/timeline/main'},
    // {img: '/img/blank-icon.svg',item:"Temi Overview" , pages: '/temi'},
    // {img: '/img/blank-icon.svg',item:"Setting" , pages: '/setting'}
]


function NavItem(props) {
    return (
        <div>
            <NavLink  to={props.pages}  activeClassName="active" className="side-nav-item">
                <img src={props.img} className="side-nav-item-icon" ></img>
                <p className="side-nav-item-text" >{props.item}</p>
            </NavLink>
        </div>
    );
}


function SideNav(props) {
    return (
        <div className="side-nav">
            <h1 className="side-nav-header">MASKOT</h1>
            {navList.map((navItem) => 
                <NavItem img={navItem.img} item={navItem.item} pages={navItem.pages}/> 
            )}
        </div>
    );
}

export default SideNav;