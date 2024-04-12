import React  from "react"
import { NavLink } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { PageOne } from "../pageone"
import { PageTwo } from "../pagetwo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppContainer() {

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home">Saddle Scanning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav>
                    <NavLink className="nav-link" to="/pageOne">show page one</NavLink>
                    <NavLink className="nav-link" to="/pageTwo">show page two</NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

                    
            <main>
              <Routes>
                <Route path="/pageOne" element={ <PageOne /> } />
                <Route path="/pageTwo" element={ <PageTwo /> } />
              </Routes>
            </main>
        </div>
    )
}