import React from 'react';
import '../../Styles/maskot-styling.scss';
import {NavLink} from 'react-router-dom'

function MiniViewBtn(props) {
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
                <div className="mini-btn search-btn ">
                    <h5>Search</h5>
                </div>
            }
            </>
        }
        </>
    );

}

export default MiniViewBtn;