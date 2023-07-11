import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      // requisição
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b1ef80fac8126a00c566572826469426",
          language: "pt-PT",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10));
      setLoading(false)
    }

    loadFilmes();
  }, []);

  if(loading) {
    return (
      <div className='flex justify-center items-center mt-[14px]'>
        <h2>Carregando Filmes...</h2>
      </div>
    )
  } 

  return (
    <div className="">
      <div className="max-w-[50rem] my-[0.875rem] mx-auto">
        {filmes.map((filme) => {
          return (
            <article key={filme.id} className='w-full bg-white p-[0.9375rem] rounded-[0.25rem]'>
              <strong className='mb-[0.875rem] text-center text-[1.375rem] block'>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt="{filme.title}"
                className='w-[56.25rem] max-w-full max-h-[21.25rem] object-cover block rounded-t-[8px]'
              />
              <Link className='flex items-center justify-center py-[0.625rem] px-0 text-[1.5rem] bg-[#116feb] text-white rounded-b-[8px]' to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
