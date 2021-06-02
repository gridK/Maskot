import React, { useState} from 'react';
import './Styles/maskot-styling.scss';
import SideNav from './Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainDashBoard from './Components/Pages/MainDashboard';
import DayReport from './Components/Pages/DayReport';
import TimeReport from './Components/Pages/TimeReport';
import InspectionRecords from './Components/Pages/InpectionRecords';
import TimeLine from './Components/Pages/TimeLine';
import MainTimeLine from './Components/Pages/MainTimeLine';




function App({routes}){
    const [page, navigate] = useState(2)
    

    return (
        <Router>
            <div class="page-layout">
                <SideNav />
                <Switch>
                    {/* <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch> */}
                    <Route path="/main/Dashboard">
                        <MainDashBoard /> 
                    </Route>
                    <Route path="/main/inspection/:date">
                        <InspectionRecords /> 
                    </Route>
                    <Route path="/main/dayreport/:date">
                        <DayReport /> 
                    </Route>
                    <Route path="/main/timereport/:locationId/:locationNamEn/:date/:slot">
                        <TimeReport /> 
                    </Route>
                    <Route path="/timeline/main">
                        <MainTimeLine />
                    </Route>
                    <Route path="/timeline/report/:date">
                        <TimeLine />
                    </Route>
                    <Route path="/main/timeline/report/:date/:page">
                        <TimeLine />
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
