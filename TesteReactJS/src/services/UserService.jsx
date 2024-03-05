// src/services/UserService.js

import axios from "axios";

const API_URL = "http://localhost:5002/api/Users"; // Ajuste conforme a porta do seu back-end

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
