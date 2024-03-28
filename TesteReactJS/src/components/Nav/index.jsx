// src/components/Nav/Sidebar.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Nav className="flex-column bg-light" style={{ height: "100vh" }}>
      <Nav.Link as={Link} to="/home">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/dashboard">
        Dashboard
      </Nav.Link>
      <Nav.Link as={Link} to="/perfil">
        Perfil
      </Nav.Link>
      <Nav.Link as={Link} to="/novoPaciente">
        Novo Paciente
      </Nav.Link>
      <Nav.Link as={Link} to="/consultaValores">
        Consulta Valores
      </Nav.Link>
      <Nav.Link as={Link} to="/prontuarios">
        Prontuarios
      </Nav.Link>
      <Nav.Link as={Link} to="/meuFinanceiro">
        Meu Financeiro
      </Nav.Link>
    </Nav>
  );
};

export default Sidebar;
