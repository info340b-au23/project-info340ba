import React from 'react';
import { NavLink } from 'react-router-dom'
import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(props) {
    return (
        //used react boostrap documentation base templates to help implement this design
        //https://react-bootstrap.netlify.app/docs/components/navbar/
            <>
              <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand href="#home">PATHWISE</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="index">Home</Nav.Link>
                    <Nav.Link href="insights">Insights</Nav.Link>
                    <Nav.Link href="classes">Classes</Nav.Link>
                    <Nav.Link href="#crowdsource">Crowdsource</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
              <br />
            </>
    )
}   