import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../../components/CardWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Automotora eCommerce
        </NavLink>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="/category/1">
            Bicicletas
          </NavLink>
          <NavLink className="nav-link" to="/category/2">
            Motos
          </NavLink>
          <NavLink className="nav-link" to="/category/3">
            Autos
          </NavLink>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
