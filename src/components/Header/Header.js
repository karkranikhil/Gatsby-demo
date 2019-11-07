import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
export default props => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Gatsby PWA demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <span className="text-dark">Home</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
          <span className="text-dark">About Us</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
          <span className="text-dark">Contact Us</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)