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
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });
    const [ selectedYear , setSelectedYear] = useState(2021)
    const [ selectedMonth , setSelectedMonth] = useState(2021)
    var YearSelectList = [2021,2020,2019]
    var MonthSelectList = ['May','April','March','February']
    const fetchmainAPI = (pagenum) => {
        let params = {
            type: "main",
            data: {
                date: currentday,
                page: pagenum,
                pageSize: 5,
            }
        }
        const main = GetInspectionRecordInfo(params)

        axios.all([main]).then(
            axios.spread((...allData) => {
                console.log(allData);
                const mainData = allData[0].data.data.items
                const {totalPage, totalItem} = allData[0].data.data
                console.log(mainData);
                setPaginators(prev => {
                    return ({ ...prev,
                    totalPage: totalPage,
                    totalItem: totalItem});
                })
                setItems(mainData)
                setIsLoaded(true)
            })
        )

    }

    const fetchAPI = () =>{
        fetchmainAPI(1)
    }

    function  setCurrentPage(pagenum) {
        setPaginators({currentPage : pagenum });
        console.log(pagenum)
        console.log(Paginators)
        fetchmainAPI(pagenum)
        
    }
    function setYearFilter(value) {
        setSelectedYear(value)
        console.log(value)
    }
    function setMonthFilter(value) {
        setSelectedMonth(value)
        console.log(value)
    }
    useEffect( () => {
        fetchAPI()
    }, [])

    return(
        <>
        { isLoaded &&
        <Container fluid >
            <HeaderView pageNum={2} date=" "/>
            <div className="inpection-record-view-filter-group">
                <Row>
                    <FilterDropDown setFilter={value => setYearFilter(value)} selectList={YearSelectList} type="filter" filterName="Year"/>
                    <FilterDropDown setFilter={value => setMonthFilter(value)} selectList={MonthSelectList} type="filter" filterName="Month"/>
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
                        path={"/main/dayreport/"+ record.dateTime}
                        />
                    )
                }
                
            </div>
            <div className="pagination-view">
                <Paginator setPage={number => setCurrentPage(number)} currentPage={Paginators.currentPage} totalPage={Paginators.totalPage} totalItem={Paginators.totalItem}/>
            </div>

        </Container>
        }
        </>
    );
}


export default InspectionRecords;