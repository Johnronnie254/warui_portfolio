import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowCircleRight, FaGlobe } from 'react-icons/fa';
import './Home.css';
import CustomNavbar from "./Navbar";
import Work from './Work';

const Home = () => {
  return (
    <div className="home-page">
      {/* Entire Home Page Content */}
      <div className="home">
        <Container fluid>
          {/* Navbar Section */}
          <CustomNavbar />

          {/* Location button under the logo, 250px down */}
          <Row className="location-row">
            <Col className="d-flex justify-content-center">
              <Button className="location-button" variant="lightgrey">
                Located in Nairobi, Kenya
                <FaGlobe className="ml-2" />
              </Button>
            </Col>
          </Row>

          {/* Image */}
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <img
                className="portfolio-image"
                src="https://i.pinimg.com/736x/a6/74/69/a67469684e5c5d2d5b1bd912a196b870.jpg"
                alt="Portfolio"
              />
            </Col>
          </Row>

          {/* Large Fred Warui with Tagline at Bottom */}
<Row className="name-section">
  <Col className="d-flex flex-column align-items-center">
    <h1 className="main-title">FRED WARUI</h1>
    <h3 className="tagline">PASSIONATE STORYTELLER</h3>
  </Col>
</Row>


         
         


          {/* Services and Location Button */}
          <Row className="services">
            {/* Services on the right */}
            <Col className="direction">
              <div className="arrow">
                <FaArrowCircleRight size={30} />
              </div>
              <div className="service-text">Direction</div>
              <div className="service-text">Cinematography</div>
              <div className="service-text">Editing</div>
              <div className="service-text">Focus Pooling</div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Work Component */}
      <div className="work-section" id="work">
        <Work />
      </div>
    </div>
  );
};

export default Home;
