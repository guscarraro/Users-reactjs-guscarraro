import React, { useEffect, useState } from "react";
import { PedidoService } from "../../services/PedidosService";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const PedidosPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);
  const [newPedido, setNewPedido] = useState({
    clienteNome: "",
    dataPedido: "",
    valorTotal: 0,
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = () => {
    PedidoService.getAllPedidos()
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdatePedido = (id) => {
    // Encontre o pedido pelo ID
    const pedidoToUpdate = pedidos.find((pedido) => pedido.id === id);

    // Verifique se o pedido foi encontrado
    if (!pedidoToUpdate) {
      console.error(`Pedido com o ID ${id} não encontrado.`);
      return;
    }

    // Atualize o estado do novo pedido com os detalhes do pedido a ser atualizado
    setNewPedido({
      clienteNome: pedidoToUpdate.clienteNome,
      dataPedido: pedidoToUpdate.dataPedido,
      valorTotal: pedidoToUpdate.valorTotal,
    });

    // Abra a modal para edição
    toggleModal();
  };

  const handleDeletePedido = (id) => {
    PedidoService.deletePedido(id)
      .then(() => {
        setPedidos(pedidos.filter((pedido) => pedido.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPedido({
      ...newPedido,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    PedidoService.createPedido(newPedido)
      .then((response) => {
        setPedidos([...pedidos, response.data]);
        toggleModal();
        setNewPedido({
          clienteNome: "",
          dataPedido: "",
          valorTotal: 0,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Pedidos</h1>
      <Button color="primary" onClick={toggleModal}>
        Adicionar Pedido
      </Button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Data do Pedido</th>
            <th>Valor Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.clienteNome}</td>
              <td>
                {pedido.dataPedido && !isNaN(new Date(pedido.dataPedido))
                  ? new Date(pedido.dataPedido).toLocaleDateString()
                  : "Data Inválida"}
              </td>
              <td>
                {pedido.valorTotal ? pedido.valorTotal.toFixed(2) : "0.00"}
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdatePedido(pedido.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDeletePedido(pedido.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <h2>Adicionar Pedido</h2>
          <Form>
            <FormGroup>
              <Label for="clienteNome">Nome do Cliente</Label>
              <Input
                type="text"
                name="clienteNome"
                id="clienteNome"
                value={newPedido.clienteNome}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dataPedido">Data do Pedido</Label>
              <Input
                type="date"
                name="dataPedido"
                id="dataPedido"
                value={newPedido.dataPedido}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="valorTotal">Valor Total</Label>
              <Input
                type="number"
                name="valorTotal"
                id="valorTotal"
                step="0.01"
                value={newPedido.valorTotal}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Adicionar
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PedidosPage;
