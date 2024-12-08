import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";
import "./Home.css";
import CustomNavbar from "./Navbar";
import AboutUs from "./Aboutus";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleLinkClick = (section) => {
    setLoading(true);
    setLoadingText(section);
    setTimeout(() => {
      setLoading(false);
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }, 2000);
  };

  return (
    <div className="home-page">
      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <div className="loading-text">{loadingText}</div>
        </div>
      )}

      {/* Content */}
      <div className={`home ${loading ? "hidden" : ""}`}>
        <Container fluid>
          {/* Navbar */}
          <CustomNavbar onLinkClick={handleLinkClick} />

          {/* Location Button */}
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

          {/* Name and Tagline */}
          <Row className="name-section mt-5">
            <Col className="d-flex flex-column align-items-center text-center">
              <h1 className="main-title">FRED WARUI</h1>
              <h3 className="tagline">PASSIONATE STORYTELLER</h3>
            </Col>
          </Row>
        </Container>

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
      </div>
    </div>
  );
};

export default Home;
