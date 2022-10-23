import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from './../RightSide/RightSide';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Main = () => {
    return (
        <div>


            <Header></Header>
    <Container>

        <Row>

            <Col lg='2'>
           
            <LeftSide></LeftSide>
            </Col>

            
            <Col lg='7'>
            <Outlet></Outlet>
            </Col>

            
            <Col lg='3'>
             <RightSide></RightSide>
            </Col>

        </Row>
    </Container>


         <Footer></Footer>
         

        </div>
    );
};

export default Main;