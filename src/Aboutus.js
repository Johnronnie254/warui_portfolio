import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import "./Aboutus.css";


const AboutUs = () => {
  // Dynamic services array
  const services = [
    {
      title: "Cinematography",
      description: "Capturing breathtaking visuals for films and commercials.",
      detailedDescription: "Specializing in creating visually stunning scenes that elevate storytelling.",
    },
    {
      title: "Directing",
      description: "Guiding creative vision for impactful stories.",
      detailedDescription: "Experienced in leading teams to execute meaningful and memorable narratives.",
    },
    {
      title: "Color Grading",
      description: "Enhancing the mood and tone of visual projects.",
      detailedDescription: "Using advanced techniques to bring depth and emotion to every frame.",
    },
    {
      title: "Lighting Design",
      description: "Creating perfect lighting setups for various scenes.",
      detailedDescription: "Expert in manipulating light to match the story's mood and enhance visuals.",
    },
  ];

  return (
    <Container fluid className="aboutus-container">
    
      {/* Header Section */}
      <Row className="text-center">
        <Col>
          <h1 className="header-title">From Concepts to Cut</h1>
          <div className="rotating-line">
            <div className="rotating-circle">
              <p>About Me</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Image and Text Section */}
      <Row className="image-text-section my-5">
        <Col md={6} className="image-placeholder">
          <img
            src="https://i.pinimg.com/736x/5d/df/27/5ddf272aebfa0b7fdb6d66a0da93f5d5.jpg" // Replace with the actual image path
            alt="About Fredrick Warui"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col md={6} className="text-placeholder">
          <div style={{ maxWidth: "100%", padding: "20px" }}>
             <h2 className="highlight-text">About Fredrick Warui</h2>
            <p>
              Fredrick Warui is a passionate filmmaker, experienced in the art
              of cinematography, directing, and focus pulling. With a deep love
              for storytelling, Fredrick's journey in the film industry has
              seen him excel as a 1st Assistant Camera (1st AC), ensuring
              precision and focus on countless sets. He has had the privilege
              of working alongside directors and Directors of Photography (DPs)
              from around the world, gaining invaluable experience and a global
              perspective on filmmaking.
            </p>
            <p>
              As a skilled Director of Photography (DP), Fredrick continues to
              hone his craft in color grading and lighting, aiming to bring
              stories to life with visual excellence. Beyond the technical
              lens, he thrives as a director, having worked on impactful
              commercials, short films, and creative projects that resonate
              with audiences.
            </p>
            <p>
              Driven by a vision to inspire through film, Fredrick combines
              artistry and precision to create memorable visual narratives.
              Whether it's behind the camera or guiding a story as a director,
              his focus remains on excellence, innovation, and delivering
              stories that matter.
            </p>
          </div>
        </Col>
      </Row>

      {/* Dynamic Text Section */}
      <Row className="text-center dynamic-text">
        <Col>
          <h2 className="highlight-text">
            I am the best to help you with{" "}
            <span className="dots">...</span>
          </h2>
        </Col>
      </Row>

      {/* Services Section */}
      <Row className="services-section my-5">
        {services.map((service, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="service-card">
  <Card.Body>
    <Card.Title>{service.title}</Card.Title>
    <Card.Text>{service.description}</Card.Text>
  </Card.Body>
  <div className="hover-card">
    <h4 className="service-title">{service.title}</h4>
    <p>{service.detailedDescription}</p>
  </div>
</Card>

          </Col>
        ))}
      </Row>

      

      {/* Social Links Section */}
      <Row>
        <Col>
          <div className="social-links">
            <a
              href="https://www.instagram.com/warui_fred/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com/waruifred"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vimeo
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
