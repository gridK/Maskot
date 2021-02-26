import React from "react";
import '../Styles/maskot-styling.scss';
import App from '../App';

const navList = [
    {img: '/img/blank-icon.svg',item: "Dashboard", pages: 1},
    {img: '/img/blank-icon.svg',item:"Timeline" , pages: 2},
    {img: '/img/blank-icon.svg',item:"Temi Overview" , pages: 3},
    {img: '/img/blank-icon.svg',item:"Setting" , pages: 4}
]


function NavItem(props) {
    return (
        <div>
            <div className="side-nav-item">
                <img src={props.img} className="side-nav-item-icon" ></img>
                <p className="side-nav-item-text" >{props.item}</p>
            </div>
        </div>
    );
}


function SideNav(props) {
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