import React from 'react';
import Col from 'react-bootstrap/Col';
import MiniViewBtn from '../Utilities/MiniViewBtn';

function FilterDropDown(props) {
    return(
        <>
        { props.type == "filter"?
            <Col xl="auto">
                <h5 className="dropdown-label">Month</h5>
                <span className="custom-dropdown ">
                    <select >
                        <option>All</option>
                        <option>The Great Gatsby</option>  
                        <option>V for Vendetta</option>
                        <option>The Wolf of Wallstreet</option>
                        <option>Quantum of Solace</option>
                    </select>
                </span>
            </Col>
            :
            <Col className="d-flex align-items-end" xl="auto">
                <MiniViewBtn type="search"/>
            </Col>
        }
        </>
    );
}

export default FilterDropDown;