import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {toast} from 'react-toastify'

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");

    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => {
        return (filme.id !== id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
    toast.success('Filme removido com sucesso!')
  }

  return (
    <div className="mt-[24px] flex flex-col items-center">
      <h1 className="mb-[14px]">MEUS FILMES</h1>

      {filmes.length === 0 && <p>Você não possui nenhum filme salvo :(</p>}

      <ul className="w-[720px]">
        {filmes.map((filme) => {
          return (
            <div>
              <li
                key={filme.id}
                className="list-none flex justify-between items-center mb-[14px]"
              >
                <h1 className="text-[24px]">{filme.title}</h1>

                <div className="flex justify-center items-center">
                  <Link
                    className="text-[#116feb] mr-[14px]"
                    to={`/filme/${filme.id}`}
                  >
                    Ver Detalhes
                  </Link>
                  <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
