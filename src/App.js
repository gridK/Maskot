import React, { useState} from 'react';
import './Styles/maskot-styling.scss';
import SideNav from './Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MainDashBoard from './Components/Pages/MainDashboard';






function App(){
    const [page, navigate] = useState(1)

    function Navigation(num) {
        navigate(num)
    }

    return (
        <div class="page-layout">
            <SideNav />
            { page === 1 ? <MainDashBoard /> : null }
        </div>
    );
}

export default App;
