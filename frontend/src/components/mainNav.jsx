import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/tasks">
          Onboarding platform
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            variant="tabs"
            defaultActiveKey="/"
          >
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/tasks">
                Tasks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/receipt-upload">
                Receipt upload
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Button>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
