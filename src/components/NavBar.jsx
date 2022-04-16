import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#inicio">E-Commerce</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#precios">Precios</Nav.Link>
                    <Nav.Link href="#carrito"><CartWidget value="4"/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;