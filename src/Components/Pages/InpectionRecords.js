import React, { useState , useEffect, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../../Styles/maskot-styling.scss';
import MiniCard from '../Utilities/MiniCard';
import MiniViewBtn from '../Utilities/MiniViewBtn';
import FullWidthCard from '../Utilities/FullWidthCard';
import FilterDropDown from '../Utilities/FilterDropDown';
import Paginator from '../Utilities/Pagination';
import HeaderView from '../Utilities/HeaderView';
import {DateTimeToFullString, DateTimeToLocaleDateStringLeadZero} from '../../Provider';
import axios from 'axios';
import {GetInspectionRecordInfo} from '../../UrlDict';

import {
    useParams
  } from "react-router-dom";

function InspectionRecords(){
    const  params  = useParams();
    var currentday = params.date.replaceAll("-","/");

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchAPI = () => {
        let params = {
            type: "main",
            data: {
                date: currentday,
                page: 1,
                pageSize: 10,
            }
        }
        const main = GetInspectionRecordInfo(params)

        axios.all([main]).then(
            axios.spread((...allData) => {
                console.log(allData);
                const mainData = allData[0].data.data.items
                console.log(mainData);
                setItems(mainData)
                setIsLoaded(true)
            })
        )

    }
    useEffect( () => {
        fetchAPI()
    }, [])

    return(
        <>
        { isLoaded &&
        <Container fluid >
            <HeaderView pageNum={2}/>
            <div className="inpection-record-view-filter-group">
                <Row>
                    <FilterDropDown type="filter" filterName="Month"/>
                    <FilterDropDown type="filter" filterName="Year"/>
                    <FilterDropDown />
                </Row>
            </div>
            <div >
                { items.map( record =>
                        <FullWidthCard 
                        label_A="Date" 
                        value_A={record.dateTime} 
                        icon="/img/icons8-protection-mask-128.svg" 
                        iconUnit="/img/icons8-person-64.svg"
                        label_B="Total With Mask" 
                        value_B={record.withMask} 
                        label_C="Total Without Mask" 
                        value_C={record.withoutMask}  
                        label_D="Without Mask Ratio" 
                        value_D={(record.withoutMaskRate*100).toFixed(2) +" %"}  
                        path={"/main/dayreport"}
                        />
                    )
                }
                
            </div>
            <div className="pagination-view">
                <Paginator />
            </div>

        </Container>
        }
        </>
    );
}


export default InspectionRecords;