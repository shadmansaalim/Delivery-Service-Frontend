import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
const Header = () => {
    const history = useHistory();
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
                    <Nav className="me-auto">
                        <NavLink className="text-white nav-link " to="/home">Home</NavLink>
                        <NavLink className="text-white nav-link " to="/services">Services</NavLink>
                        <NavLink className="text-white nav-link " to="/about">About</NavLink>
                        <NavLink className="text-white nav-link " to="/contact">Contact</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <Button onClick={() => history.push('/register-login')} variant="outline-warning rounded-pill me-lg-3">Register / Login</Button>
                        <NavLink to="/admin">
                            <Button className="app-blue-btn" variant="primary">Admin</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;