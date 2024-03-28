import React, { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";
import Loading from "../../components/Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Inicia o loading

    setTimeout(() => {
      UserService.getAllUsers()
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false); // Encerra o loading após carregar os dados
        })
        .catch((error) => {
          console.error("There was an error!", error);
          setIsLoading(false); // Encerra o loading mesmo se houver erro
        });
    }, 2000); // Simula espera de 2 segundos antes de fazer a requisição
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {isLoading ? (
        <Loading /> // Exibe a animação de loading enquanto os dados estão sendo carregados
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.nome} - {user.email} - {user.dataCadastro}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
