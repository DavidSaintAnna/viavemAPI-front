import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";

const Comment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7203/api/Comentarios/")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Categorias:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Comentários</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Id do Usuario</th>
            <th>comentário</th>
            <th>DatadePublicação</th>
          </tr>
        </thead>
        {comments.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.id}</td>
              <td>{element.usuariosId}</td>
              <td>{element.comentario}</td>
              <td>{element.dataPublicacao}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Comment;
