import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

import { toast } from 'react-toastify';

import api from '../../services/api'

function Filme() {

  const {id} = useParams();
  const navigation =  useNavigate()

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: 'b1ef80fac8126a00c566572826469426',
          language: 'pt-PT'
        }
      }).then ((response) => {
          setFilme(response.data)
          setLoading(false)
      }).catch((error) => {
        navigation("/", {replace: true}) // filme não encontrado
      })
    }

    loadFilme();
  }, [navigation, id])

  if(loading) {
    return(
    <div className='mt-[18px] flex flex-col max-w-[50rem] py-0 px-[8px]'>
      <h1>Carregando detalhes...</h1>
    </div>)
  }

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const temFilme = filmesSalvos.some((filmeSalvo) =>  // property some - verificar se há algum filme com este id nos filmesSalvos
      filmeSalvo.id === filme.id
    )

    if (temFilme) {
      toast.warn('Este filme já está na sua lista!')
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso!')
  }

  return (
    <div className='mt-[18px] flex flex-col max-w-[50rem] py-0 px-[8px]'>
      <h1 className='my-[14px] mx-0 text-3xl'>{filme.title}</h1>
      <img  className='w-[900px] rounded-[8px] max-w-full max-h-[340px] object-cover' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
      <h3 className='mt-[14px]'>Descrição</h3>
      <p className='my-[8px] mx-0'>{filme.overview}</p>

      <strong>Avaliação: {filme.vote_average}/10</strong>

      <div className=''>
        <button onClick={salvarFilme} className=' text-black bg-gray-200 mr-[12px] mt-[14px] ml-0 text-[20px] outline-none border-none rounded-[4px] cursor-pointer p-[12px] hover:bg-red-900 hover:text-white transition-all duration-200'>Salvar</button>
        <button className='bg-gray-200 mr-[12px] mt-[14px] ml-0 text-[20px] outline-none border-none rounded-[4px] cursor-pointer p-[12px] hover:bg-red-900 text-black hover:text-white transition-all duration-200'><a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
      </div>
    </div>
  )
}

export default Filme