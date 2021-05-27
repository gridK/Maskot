import React from 'react';
import '../../Styles/maskot-styling.scss';
import {NavLink} from 'react-router-dom'

function MiniViewBtn(props) {

    function selectFilter(event) {
        const value = event.target.value
        props.setFilter(value);
    }

    return(
        <>
        { props.type === "view" ?
            <NavLink to={props.link} className="mini-btn view-btn">
                <h5>View</h5>
                <img src="/img/chevron-pointing.svg" alt="view-btn"></img>
            </NavLink>
          :
            <>
            { props.type === "search-redirect" ?
                <NavLink to={props.redirectPath} className="mini-btn search-btn ">
                    <h5>Search</h5>
                </NavLink>
            :
                <button className="mini-btn search-btn " onClick={props.onClickEvent}>
                    <h5 >Search</h5>
                </button>
            }
            </>
        }
        </>
    );

}

export default MiniViewBtn;