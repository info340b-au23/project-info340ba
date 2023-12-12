import React from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Responive Navbar implemented with react bootstrap
//https://react-bootstrap.netlify.app/docs/components/navbar
export function NavBar(props) {
    return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">PATHWISE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="insights">Insights</Nav.Link>
            <Nav.Link href="classes">Classes</Nav.Link>
            <Nav.Link href="crowdsource">Crowd Source</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <a href="https://github.com/info340b-au23/project-info340ba" target="#">
              <img id="growingIcon" className="nav-icon p-1" src="img/github.svg" alt="github company logo"/>
            </a>
            <a href="https://discord.com/" target="#">
              <img id="growingIcon" className="nav-icon p-1" src="img/discord.svg" alt="discord company logo"/>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}   