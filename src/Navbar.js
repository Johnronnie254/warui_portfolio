import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = ({ onLinkClick }) => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="navbar-container">
      <Navbar.Brand href="#home" className="logo">
        <span>&#169;</span> <span className="logo-text">Fred Warui</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link
            onClick={() => onLinkClick("work")}
            className="nav-link"
          >
            Work
          </Nav.Link>
          <Nav.Link
            onClick={() => onLinkClick("about")}
            className="nav-link"
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => onLinkClick("contact")}
            className="nav-link"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
