import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css"; 
const Header = () => {
  return (
    <Navbar expand="lg" className="header" role="banner">
      <Container>
        {/* Logotipo */}
        <Navbar.Brand href="/">
          <img src="../assets/logosimple1.png" alt="Kyosei Accesibilidad - Logotipo" className="logo"
          />
        </Navbar.Brand>

        {/* Botón de menú hamburguesa para dispositivos móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menú de navegación */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" aria-label="Ir a Inicio">Inicio</Nav.Link>
            <Nav.Link href="/nosotros" aria-label="Conocer más sobre Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/accesibilidad" aria-label="Información sobre Accesibilidad">Accesibilidad</Nav.Link>
            <Nav.Link href="/servicios" aria-label="Descubre nuestros Servicios">Servicios</Nav.Link>
            <Nav.Link href="/contacto" aria-label="Contáctanos">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;