import axios from "axios";

const API_URL = "http://localhost:5003/api/pedidos"; // Ajuste a URL conforme necessário

const getAllPedidos = async () => {
  return await axios.get(API_URL);
};

const createPedido = async (pedido) => {
  return await axios.post(API_URL, pedido);
};

const updatePedido = async (id, pedido) => {
  return await axios.put(`${API_URL}/${id}`, pedido);
};

const deletePedido = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const PedidoService = {
  getAllPedidos,
  createPedido,
  updatePedido,
  deletePedido,
};
