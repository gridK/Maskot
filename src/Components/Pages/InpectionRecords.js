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
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    const [items, setItems] = useState([]);
    const [Paginators, setPaginators] = useState({
        currentPage : 1,
        totalPage: 1,
        totalItem: 1,
    });
    const [ selectedYear , setSelectedYear] = useState(2021)
    const [ selectedMonth , setSelectedMonth] = useState("")
    const [ yearSelectList, setYearSelectList] = useState([])
    const [ monthSelectList, setMonthSelectList] = useState([])
    // var MonthSelectList = ['May','April','March','February']

    const fetchYearFilter = () => {
        let params = {
            type: "get-filter"
        }
        return GetInspectionRecordInfo(params)
        .then(
            async response => {
                var years = []
                response.data.data.map( record => 
                    years.push(record.year)
                )
                await setYearSelectList(years)
                
            }
        )
    }

    const fetchMonthFilter = (year) => {
        let params = {
            type: "get-filter"
        }
        return GetInspectionRecordInfo(params)
        .then(
            async response => {
                var selectedyear = response.data.data.filter( record => 
                    record.year === year
                )
                const result = []
                selectedyear[0].month.map(m => {
                    result.push(m.name)
                })
                console.log(result)
                
                await setMonthSelectList(result)
            }
        )
    }
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
                console.log(isLoaded)
                setPaginators(prev => {
                    return ({ ...prev,
                    totalPage: totalPage,
                    totalItem: totalItem});
                })
                setItems(mainData);
                
            })
            
        )

    }

    const fetchAPI = () =>{
        var filter = fetchYearFilter()
        var M_filter = fetchMonthFilter(2021)
        axios.all([filter,M_filter])
        .then(
            () =>{
                fetchmainAPI(1)
                setIsLoaded(true)
            }
        )
        
        
        
    }

    function  setCurrentPage(pagenum) {
        setPaginators({currentPage : pagenum });
        console.log(pagenum)
        console.log(Paginators)
        fetchmainAPI(pagenum)
        
    }
    function setYearFilter(value) {
        setSelectedYear(value)
        fetchMonthFilter(value)
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
                    <FilterDropDown setFilter={value => setYearFilter(value)} selectList={yearSelectList} type="filter" filterName="Year"/>
                    <FilterDropDown setFilter={value => setMonthFilter(value)} selectList={monthSelectList} type="filter" filterName="Month"/>
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