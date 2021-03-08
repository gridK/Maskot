import React, { useState} from 'react';
import './Styles/maskot-styling.scss';
import SideNav from './Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainDashBoard from './Components/Pages/MainDashboard';
import InspectionRecords from './Components/Pages/InpectionRecords';





function App(){
    const [page, navigate] = useState(2)


    return (
        <div class="page-layout">
            <SideNav />
            { page === 1 ? <MainDashBoard /> 
            : page === 2 ? <InspectionRecords /> :
            null}
        </div>
    );
}

export default App;
