import React  from 'react';
import {Navbar, Container, Nav, NavbarBrand, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
<Navbar bg="light" expand="lg">
  <Container>
    <NavbarBrand href="/" className="Logo">Nirvana Massage</NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto me-2">
        <NavLink className="nav-link NavbarMenu" to="/home">Home</NavLink>
        <NavLink className="nav-link NavbarMenu" to="/about">About</NavLink>
        <NavLink className="nav-link NavbarMenu" to="/services">Services</NavLink>
      </Nav>
      <a href="sms:+3204923892?body=I would like to book an appointment with you..."><Button className="NavbarMenu">Text to Book!</Button></a>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}

export default Navigation;