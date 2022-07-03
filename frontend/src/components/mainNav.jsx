import React from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


export default function MainNav() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Lunch system</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/receipt-upload">Receipt upload</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}