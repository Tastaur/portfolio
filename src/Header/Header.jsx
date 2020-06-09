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
          <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/Tastaur/">GitHub</NavDropdown.Item>
            <NavDropdown.Item href="https://facebook.com/lth.tastaur.1/">Facebook</NavDropdown.Item>
            <NavDropdown.Item href="https://vk.com/tastaur">VK</NavDropdown.Item>
            <NavDropdown.Item href="https://twitter.com/Tastaur_Rex/">Twitter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
}

export default Header
