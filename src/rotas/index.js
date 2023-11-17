import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './../paginas/Home';
import Cortes from './../paginas/Cortes';
import Informacoes from './../paginas/Informacoes';

export default function Rotas() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cortes' element={<Cortes />}/>
        <Route path='/Informacoes' element={<Informacoes />}/>
      </Routes>
    </BrowserRouter>
  )
}