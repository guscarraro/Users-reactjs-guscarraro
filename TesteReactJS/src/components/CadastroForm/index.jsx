import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { register } from "../../services/UserService";

const CadastroForm = () => {
  const [user, setUser] = useState({
    nome: "", // Ajuste para 'nome', se for o nome do campo esperado pelo backend
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(user); // Use 'user', não 'userData'
      console.log("Usuário registrado com sucesso:", data);
      // Adicione qualquer ação após o sucesso do cadastro, como redirecionamento ou exibição de mensagem
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      // Adicione a lógica de tratamento de erro, como exibir uma mensagem ao usuário
    }
  };

  return (
    <Container className="mt-5">
      <h2>Cadastrar-se</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nome">Nome</Label>{" "}
          {/* Ajuste o 'for' e 'name' para 'nome' se necessário */}
          <Input
            type="text"
            name="nome" // Ajuste para 'nome' se for o nome do campo esperado pelo backend
            id="nome" // Ajuste para 'nome' se necessário
            placeholder="Digite seu nome"
            value={user.nome} // Ajuste para 'user.nome'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={user.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Crie uma senha"
            value={user.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default CadastroForm;
