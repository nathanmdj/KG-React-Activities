import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="md" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">KodeGo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header