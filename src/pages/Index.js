import React from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import logo from '../assets/images/logo.png'
function Index() {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex' style={{background: 'yellow', justifyContent: 'space-between'}}  lg={4} >
          <div >
            <img style={{width: '50px'}} src={logo} alt='Logo'></img>
          </div>
          <div>
            <Dropdown className="d-sm-flex flex-row d-lg-none" >
              <Dropdown.Toggle  id="dropdown-basic" style={{background: 'green', justifyContent: 'center', alignItems: 'center'}}>
                <FiMenu/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
        </Col>

        <Col className="d-lg-flex flex-row d-none" style={{background: 'red'}} sm={12} lg={8}>
          <div>menu 1</div>
          <div>menu 2</div>
          <div>menu 3</div>
          <div>menu 4</div>
        </Col>

        
      </Row>
    </Container>
  );
}

export default Index;
