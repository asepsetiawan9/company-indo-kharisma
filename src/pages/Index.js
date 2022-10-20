import React from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import { FiMenu, FiInfo, FiList, FiPackage, FiUsers, FiPhone } from "react-icons/fi";
import logo from '../assets/images/logo.png'
function Index() {
  return (
    <Container fluid>
      <Row style={{paddingLeft: '100px', paddingRight: '100px'}}>
        <Col className='header' md={4} >
          <div>
            <img style={{width: '80px'}} src={logo} alt='Logo'></img>
          </div>
          <div>
            <Dropdown className="d-sm-flex flex-row d-md-none" >
              <Dropdown.Toggle style={{color: 'black'}} id="dropdown-basic" className='dropdownTogle'>
                <FiMenu/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className='d-flex gap-5' style={{padding:'20px'}}>
                  <FiInfo size={30}/>
                  <FiList size={30}/>
                  <FiPackage size={30}/>
                  <FiUsers size={30}/>
                  <FiPhone size={30}/>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col className="d-md-flex flex-row d-none gap-4 mainMenu" sm={12} md={8}>
          <div>About</div>
          <div>Feature</div>
          <div>Product</div>
          <div>Team</div>
          <div>Contact</div>
        </Col>
      </Row>
      <section>
        <Row>
          <div className="bg d-flex" style={{justifyContent: 'center', alignItems: 'center', paddingLeft: '100px', paddingRight: '100px'}}>
            <Col md={6} >
              <div style={{fontSize: '30px', fontWeight: '500'}}>
                Supplying across the globe
              </div>
              <div style={{fontSize: '40px', fontWeight: '500'}}>
                The Leading Supplier of Coconut Product
              </div>
            </Col>
            <Col md={6} >
            </Col>
          </div>
        </Row>
      </section>

      <section>
        <Row>
          <Col md={6} sm={12}>
            lorem
          </Col>
          <Col md={6} sm={12}>
            lorem
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Index;
