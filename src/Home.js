import React from "react";
import { Container, Row, Col} from "react-bootstrap";

import "./Home.css";

import AboutUs from "./Aboutus";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  

  return (
    <div className="home-page">
      <Container>
        
          

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

        {/* Name and Tagline */}
        <Row className="name-section mt-5">
          <Col className="d-flex flex-column align-items-center text-center">
            <h1 className="main-title">FRED WARUI</h1>
            <h3 className="tagline">PASSIONATE STORYTELLER</h3>
          </Col>
        </Row>

        {/* Other Sections */}
        <div id="about">
          <AboutUs />
        </div>

        <div id="work">
          <Work />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default Home;
