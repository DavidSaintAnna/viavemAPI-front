import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7203/api/Usuarios/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Categorias:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Usuarios</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Id da passagem</th>
            <th>nome</th>
            <th>email</th>
            <th>senha</th>
          </tr>
        </thead>
        {users.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.id}</td>
              <td>{element.idPassagens}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>
              <td>{element.senha}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default User;
