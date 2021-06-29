import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../../assets/ICAF-3.png';


const Header = () => (
    <div className='header'>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src= {Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            ICAF Conference 2021
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Keynotes</Nav.Link>
                    <NavDropdown title="Authors" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Call for Authors</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Conference Tracks</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Important Dates</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Submission Guidelines</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Workshops" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Workshops</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Call for workshops</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Past Proceedings</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
  );
  
  export default Header;