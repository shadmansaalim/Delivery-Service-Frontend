import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import profile from '../../../images/profileImage.934e5b10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const history = useHistory();
    const { user, logOutUser } = useAuth();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    {
                        user?.email
                            ?
                            <Nav className="ms-auto">
                                {
                                    user.photoURL
                                        ?
                                        <img className="mx-auto img-fluid rounded-circle" src={user.photoURL} alt={user.displayName} style={{ width: 40, height: 40 }} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} onClick={handleShow} ></img>
                                        :
                                        <img className="mx-auto img-fluid rounded-circle" src={profile} alt={user.displayName} style={{ width: 40, height: 40 }} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} onClick={handleShow} ></img>
                                }
                            </Nav>
                            :
                            <Nav className="ms-auto">
                                <Button onClick={() => history.push('/login')} variant="outline-warning rounded-pill me-lg-3">Register / Login</Button>
                                <NavLink to="/admin">
                                    <Button className="app-blue-btn" variant="primary">Admin</Button>
                                </NavLink>
                            </Nav>
                    }
                    <Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="text-center">
                                {
                                    user?.photoURL ?
                                        <img className="img-fluid rounded-circle" src={user.photoURL} alt={user?.displayName}></img>
                                        :
                                        <img className="img-fluid rounded-circle" src={profile} alt={user?.displayName}></img>
                                }
                                <p className="mt-2">{user?.displayName}</p>
                                <button onClick={() => {
                                    logOutUser();
                                    handleClose();
                                }} className="btn btn-warning">Log Out</button>
                            </div>

                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;