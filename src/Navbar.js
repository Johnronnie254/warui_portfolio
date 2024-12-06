import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation
import './Navbar.css'; // Make sure this CSS file is imported

const CustomNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="navbar-container">
      <Navbar.Brand as={Link} to="/" className="logo">
        <span>&#169;</span> <span className="logo-text">fred Warui</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link as={Link} to="/work">Work</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
