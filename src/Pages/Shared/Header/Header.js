import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        src="https://www.packsend.com.au/assets/img/pas-logo.svg"
                        width="200"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="text-white nav-link " to="/home">Home</NavLink>
                        <NavLink className="text-white nav-link " to="/home">Home</NavLink>
                        <NavLink className="text-white nav-link " to="/home">Home</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;