import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../services/UserService";

function LoginForm() {
  const [credencial, setCredencial] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredencial((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(credencial);
      localStorage.setItem("token", user.token);
      console.log("Usuario logado com sucesso:", user);
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="ex: Jorge@mail.com"
            value={credencial.email}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="ex: 12345"
            value={credencial.password}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        <Button type="submit" color="primary">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
