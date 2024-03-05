import React, { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

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
