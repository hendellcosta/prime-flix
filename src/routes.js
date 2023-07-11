import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/index'
import Filme from './pages/Filme/index'
import Header from './components/Header/index'
import Error from "./pages/error";
import Favoritos from "./pages/Favoritos";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='filme/:id' element={<Filme />} />
            <Route path='/favoritos' element={<Favoritos />} />

            <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp