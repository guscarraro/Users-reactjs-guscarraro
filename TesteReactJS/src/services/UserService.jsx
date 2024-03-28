// src/services/UserService.js

import axios from "axios";

const API_URL = "http://localhost:5003/api/Users"; // Ajuste conforme a porta do seu back-end

const getAllUsers = () => {
  return axios.get(API_URL);
};

const addUser = (user) => {
  return axios.post(API_URL, user);
};

const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const UserService = {
  getAllUsers,
  addUser,
  deleteUser,
};

// Função para registrar um novo usuário
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error.response.data);
    throw error;
  }
};

// Função para fazer login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    // Aqui você pode salvar o token recebido no localStorage, se sua API retornar um
    // localStorage.setItem('userToken', response.data.token);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error.response.data);
    throw error;
  }
};
