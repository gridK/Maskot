import React, { useState} from 'react';
import './Styles/maskot-styling.scss';
import SideNav from './Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainDashBoard from './Components/Pages/MainDashboard';
import DayReport from './Components/Pages/DayReport';
import TimeReport from './Components/Pages/TimeReport';
import InspectionRecords from './Components/Pages/InpectionRecords';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




function App(){
    const [page, navigate] = useState(2)


    return (
        <Router>
            <div class="page-layout">
                <SideNav />
                <Switch>
                <Route path="/main">
                    <MainDashBoard /> 
                </Route>
                <Route path="/inspection">
                    <InspectionRecords /> 
                </Route>
                <Route path="/dayreport">
                    <DayReport /> 
                </Route>
                <Route path="/timereport">
                    <TimeReport /> 
                </Route>
                <Route path="/timeline">

                </Route>
                <Route path="/setting">

                </Route>
                <Route path="/temi">

                </Route>
                <Route path="/">
                    <MainDashBoard /> 
                </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
