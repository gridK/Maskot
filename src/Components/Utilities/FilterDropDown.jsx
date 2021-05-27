import React from 'react';
import Col from 'react-bootstrap/Col';
import MiniViewBtn from '../Utilities/MiniViewBtn';

function FilterDropDown(props) {

    function selectFilter(event) {
        const value = event.target.value
        props.setFilter(value);
        console.log(value)
    }
    
    return(
        <>
        { props.type == "filter"?
            <Col xl="auto">
                <h5 className="dropdown-label">{props.filterName}</h5>
                <span className="custom-dropdown ">
                    <select onChange={selectFilter} >
                        { props.selectList.map( option => 
                                <option value={option}>{option}</option>
                            )
                        }
                    </select>
                </span>
            </Col>
            :
            <Col className="d-flex align-items-end" xl="auto">
                    <MiniViewBtn type="search" onClickEvent={props.onClickEvent}/>
            </Col>
        }
        </>
    );
}

export default FilterDropDown;