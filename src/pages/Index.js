import React from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import { FiMenu, FiInfo, FiList, FiPackage, FiUsers, FiPhone } from "react-icons/fi";
import { FaAward, FaRegHandPeace, FaHandshake, FaLightbulb } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import EmblaCarousel from "./EmblaCarousel";
import "../assets/css/Base.css";
import "../assets/css/Reset.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../assets/images/logo.png';
import imgabout from '../assets/images/imgabout.png';
import bricket from '../assets/images/bricket.png';
import oil from '../assets/images/oil.png';
import sugar from '../assets/images/sugar.png';
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
          <Col md={6} sm={12} style={{padding: '100px 100px'}}>
            <div style={{fontSize: '35px', fontWeight: '500'}}>About Us</div>
            <div style={{fontSize: '22px', padding: '20px 0px'}}>Universal Coco Indonesia is the leading supplier of coconut products from Indonesia. We are a company engaged in manufacturing various coconut products with high-quality materials. We process more than 1,500 hectares of coconut plantations, spread across several islands in Eastern Indonesia.</div>
            <div style={{padding: '20px 0px'}}>In the beginning, our company was engaged in manufacturing where we processed coconut derivative products, namely coconut shells into coconut shell charcoal. And after that our company expanded and expanded into coconut plantations, to process more derivative products.</div>
            <div>Universal Coco Indonesia has served customers from all over the world and it has become our top priority to meet our customers’ satisfaction and expectations.</div>
          </Col>
          <Col md={6} sm={12} style={{paddingTop: '100px', alignItems: 'center'}}>
          <img  src={imgabout} alt='Logo'></img>
          </Col>
        </Row>
      </section>

      <section>
        <Row style={{padding: '0px 100px'}}>
          <Col md={12} style={{fontSize: '35px', fontWeight: '500', textAlign: 'center', paddingBottom: '50px'}}>
            Our Key Features
          </Col>
          <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{padding: '24px'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
              <FaRegHandPeace size={50}/>
            </div>
            
            <div>
              Integrity
            </div>
            <div>
              Integrity means telling the truth, keeping our word, and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.
            </div>
          </Col>
          <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{padding: '24px'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
              <FaAward size={50}/>
            </div>

            <div>Quality</div>
            <div>
              Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment, and delivering financial results that meet investor expectations.
            </div>
          </Col>
          <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{padding: '24px'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
              <FaLightbulb size={50}/>
            </div>
            
            <div>
              Innovation
            </div>
            <div>
              Innovation means inventing, designing, and developing products and services that have high appeal in the marketplace and strengthen customer preference for the Universal Coco Indonesia project.
            </div>
          </Col>
          <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{padding: '24px'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
              <FaHandshake size={50}/>
            </div>
            
            <div>Commitment</div>
            <div>
              Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <EmblaCarousel autoplay delayLength={2000}>
          <Row style={{padding: '50px 100px'}}>
            <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{textAlign:'left'}}>
              <div>
                Our Product
              </div>
              <div>
                Charcoal Briquette
              </div>
              <div>
                <p>
                Coconut Charcoal Briquette is compact block charcoal that is made from coconut shell charcoal. Our charcoal briquette is made of granular coconut shell charcoal that is crushed charcoal and molded using a natural binder. As a fuel, it is hotter and lasts longer than ordinary charcoal.
                </p>
                <p>
                Universal Coco charcoal briquette manufacturer is located in East Java, Indonesia. We only produce charcoal briquette from the best quality local coconut shells and wood without adding any harmful chemicals. It is suitable for household use both indoors and outdoors. Also, it can be used in food industries, for barbecue, stove fuel, metallurgy, etc.
                </p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <img src={bricket} style={{width: '80%', borderRadius: '10px'}} alt='img1'></img>
            </Col>
          </Row>

          <Row style={{padding: '50px 100px'}}>
            <Col md={6} sm={12} className='d-flex flex-column gap-3' style={{textAlign:'left'}}>
              <div>
                Our Product
              </div>
              <div>
                Charcoal Briquette
              </div>
              <div>
                <p>
                Coconut Charcoal Briquette is compact block charcoal that is made from coconut shell charcoal. Our charcoal briquette is made of granular coconut shell charcoal that is crushed charcoal and molded using a natural binder. As a fuel, it is hotter and lasts longer than ordinary charcoal.
                </p>
                <p>
                Universal Coco charcoal briquette manufacturer is located in East Java, Indonesia. We only produce charcoal briquette from the best quality local coconut shells and wood without adding any harmful chemicals. It is suitable for household use both indoors and outdoors. Also, it can be used in food industries, for barbecue, stove fuel, metallurgy, etc.
                </p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <img src={bricket} style={{width: '80%', borderRadius: '10px'}} alt='img1'></img>
            </Col>
          </Row>
        </EmblaCarousel>
      </section>
    </Container>
  );
}

export default Index;
