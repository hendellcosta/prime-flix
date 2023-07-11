import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-[120px]'>404</h1>
        <h2>Página Não Encontrada</h2>
        <Link className='bg-[#116feb] p-[10px] text-white mt-[14px]' to='/'>Veja todos os filmes!</Link>
    </div>
  )
}

export default Error