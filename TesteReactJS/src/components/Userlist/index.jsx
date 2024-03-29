import React, { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";
import Loading from "../Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inicia o loading
    setIsLoading(true);

    // Substitua o setTimeout por UserService.getAllUsers() na prática real
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
    }, 2000); // Espera 2 segundos antes de fazer a requisição
  }, []);

  if (isLoading) {
    return <Loading />; // Exibe a animação de loading enquanto isLoading for true
  }

  return (
    <>
      <div>
        <h2>Lista de Usuários</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.nome} - {user.email} - {user.dataCadastro}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
