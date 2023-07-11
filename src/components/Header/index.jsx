import {Link} from 'react-router-dom'

function index() {
  return (
    <header className='flex items-center justify-around w-full h-[3.75rem] bg-black'>
        <Link to='/' className='text-3xl cursor-pointer text-white font-bold'>Prime Flix</Link>
        <Link to='/favoritos' className='cursor-pointer bg-white py-[0.3125rem] px-[0.875rem] text-black rounded-[0.25rem]'>Meus Filmes</Link>
    </header>
  )
}

export default index