import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props)=>{
  return <div>
    <Navbar bg="dark" expand="md" variant='dark' fixed={'top'} collapseOnSelect>
      <Navbar.Brand href="#home">Tastaur</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About me</Nav.Link>
          <Nav.Link href="#work">My Work</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
}

export default Header
