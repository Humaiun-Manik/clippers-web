import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/Clippers-Web-Logo-1.png";

const Menubar = () => {
  return (
    <Navbar className="border-bottom" fixed="top" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" bg="druk">
          <Nav className="ms-auto text-uppercase menu-items">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item className="border-bottom text-capitalize" href="#our-story">
                Our story
              </NavDropdown.Item>
              <NavDropdown.Item className="border-bottom text-capitalize" href="#resources">
                Resources
              </NavDropdown.Item>
              <NavDropdown.Item className="border-bottom" href="#csr">
                CSR
              </NavDropdown.Item>
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#trial">Trial</Nav.Link>
            <Nav.Link href="#payment">Payment</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
