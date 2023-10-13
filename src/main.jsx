import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/pages/Home'
import Andamento from './components/pages/Andamento'
import Capitulos from './components/pages/Capitulos'
import Capitulo from './components/pages/Capitulo'
import Tutorial from './components/pages/Tutorial'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/chaldea-br/' element={<Home />} />
        <Route path='/chaldea-br/andamento' element={<Andamento />} />
        <Route path='/chaldea-br/capitulo/1' element={<Capitulos arc={"1"} />} />
        <Route path='/chaldea-br/capitulo/eor' element={<Capitulos arc={"1.5"} />} />
        <Route path='/chaldea-br/capitulo/2' element={<Capitulos arc={"2"} />} />
        <Route path='/chaldea-br/capitulo/ordealcall' element={<Capitulos arc={"2.5"} />} />
        <Route path='/chaldea-br/capitulo/eventos' element={<Capitulos arc={"eventos"} />} />
        <Route path='/chaldea-br/capitulo/:arc/:title' element={<Capitulo />} />
        <Route path='/chaldea-br/tutorial' element={<Tutorial />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
