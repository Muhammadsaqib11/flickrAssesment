import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavBar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet,Link } from "react-router-dom";
import pic from "../logoo.jpg"

function Navbar() {
  return (
    <div>
      <NavBar bg="light" expand="lg">
        <Container>
            <NavBar.Brand><img style={{width: '45%' }}src={pic}/></NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <NavLink as={Link} to={"/about"}>About</NavLink>
                <NavLink as={Link} to={"/contact"}>Contact</NavLink>

            </Nav>
            </NavBar.Collapse>
        </Container>
        <Outlet/>
        </NavBar>
    </div>
    
  )
}

export default Navbar