import React from "react";
import LoginForm from "../../components/LoginForm";

function LoginPage() {
  const handleLogin = (credentials) => {
    console.log("Login", credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
