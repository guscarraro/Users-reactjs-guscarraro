// src/pages/index.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutComSidebar from "../components/LayoutComSidebar";
import Home from "./Home";
import DashboardPage from "./Dashboard";
import PerfilPage from "./Perfil";
import NovoPacientePage from "./NovoPaciente";
import ConsultaValoresPage from "./ConsultaValores";
import ProntuariosPage from "./Prontuarios";
import MeuFinanceiroPage from "./MeuFinanceiro";
import LoginPage from "./Login";
import CadastroPage from "./Cadastro";
import PrivateRoute from "../components/PrivateRoute";

const Paginas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        {/* Aplicar LayoutComSidebar diretamente nas rotas que precisam dele */}
        <Route
          path="/home"
          element={
            <LayoutComSidebar>
              <Home />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={DashboardPage} />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/perfil"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={PerfilPage} />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/novoPaciente"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={NovoPacientePage} />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/consultaValores"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={ConsultaValoresPage} />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/prontuarios"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={ProntuariosPage} />
            </LayoutComSidebar>
          }
        />
        <Route
          path="/meuFinanceiro"
          element={
            <LayoutComSidebar>
              <PrivateRoute component={MeuFinanceiroPage} />
            </LayoutComSidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default Paginas;
