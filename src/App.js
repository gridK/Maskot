import './Styles/maskot-styling.scss';
import SideNav from './Components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App(){
    return (
        <Container>
            <Row>
                <Col lg="4">
                    <SideNav />
                </Col>
                <Col lg="8">
                    <SideNav />
                </Col>
            </Row>
        </Container>
    );
}

export default App;