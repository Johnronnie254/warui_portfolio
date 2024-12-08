import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="#2b2b2b" variant="dark" expand="lg" className="navbar-container">
      <Navbar.Brand href="#home" className="logo">
        <span>&#169;</span> <span className="logo-text">Fred Warui</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto nav-links">
          {/* Smooth scrolling links with href IDs */}
          <Nav.Link href="#work" className="nav-link">
            Work
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
