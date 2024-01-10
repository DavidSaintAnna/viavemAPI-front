import { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";

const Passagens = () => {
  const [passagens, setPassagens] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7203/api/Passagens/")
      .then((response) => {
        setPassagens(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Passagens:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Passagens</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Id do Aeroporto da passagem</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>DataDeSaída</th>
            <th>DataDeChegada</th>
            <th>DataDeRetorno</th>
          </tr>
        </thead>
        {passagens.map((element) => (
          <tbody key={element.id}>
            <tr className={style.tabela}>
              <td>{element.id}</td>
            <td>{element.idAeroporto}</td>
              <td>{element.nome}</td>
              <td>{element.preco}</td>
              <td>{element.dataSaida}</td>
              <td>{element.dataChegada}</td>
              <td>{element.dataRetorno}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Passagens;
