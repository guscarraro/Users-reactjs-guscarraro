// src/components/LayoutComSidebar.jsx
import React from "react";
import NavBar from "../Nav"; // Ajuste o caminho conforme necessário

const LayoutComSidebar = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <NavBar /> {/* Inclui o NavBar uma única vez aqui */}
      <div style={{ flex: 1, padding: "10px" }}>
        {children} {/* Isso renderiza o conteúdo da página atual */}
      </div>
    </div>
  );
};

export default LayoutComSidebar;
