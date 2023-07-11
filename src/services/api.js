// base url - https://api.themoviedb.org/3/
// api url - /movie/550?api_key=b1ef80fac8126a00c566572826469426&language=pt-PT

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api