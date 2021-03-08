import React from 'react';
import '../../Styles/maskot-styling.scss';

function MiniViewBtn(props) {
    return(
        <>
        { props.type == "view" ?
            <div className="mini-btn view-btn">
                <h5>View</h5>
                <img src="/img/chevron-pointing.svg"></img>
            </div>
          :
            <div className="mini-btn search-btn ">
                <h5>Search</h5>
            </div>
        }
        </>
    );

}

export default MiniViewBtn;