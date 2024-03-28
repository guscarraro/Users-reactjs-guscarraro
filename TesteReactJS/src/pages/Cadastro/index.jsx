import React from "react";
import CadastroForm from "../../components/CadastroForm";

function CadastroPage() {
  const handleRegister = (user) => {
    console.log("Register", user);
  };

  return (
    <div>
      <h2>Register</h2>
      <CadastroForm onRegister={handleRegister} />
    </div>
  );
}

export default CadastroPage;
