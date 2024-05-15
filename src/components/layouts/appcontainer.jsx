import React  from "react"
import { NavLink } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { Landing } from "../landing"
import { Booking } from "../booking"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppContainer() {

    return(
        <div className="full-page">
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="/reacting/">EQUESTRIAN 3D</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav>
                    <NavLink className="nav-link" to="/booking">Booking</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

                    
            <main>
              <Routes>
                <Route path="/" element={ <Landing /> } />
                <Route path="/booking" element={ <Booking /> } />
              </Routes>
            </main>
        </div>
    )
}