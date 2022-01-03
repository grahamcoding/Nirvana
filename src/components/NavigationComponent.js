import React  from 'react';
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


const Navigation = () => {
    return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Nirvana Massage</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto me-2">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#services">About</Nav.Link>
        <Nav.Link href="#about">Services</Nav.Link>
      </Nav>
      <a href="sms:+3204923892?body=I would like to book an appointment with you..."><Button>Text to Book!</Button></a>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )

}

export default Navigation;