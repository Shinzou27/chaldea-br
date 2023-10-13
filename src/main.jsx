import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import Home from './components/pages/Home'
import Andamento from './components/pages/Andamento'
import Capitulos from './components/pages/Capitulos'
import Capitulo from './components/pages/Capitulo'
import Tutorial from './components/pages/Tutorial'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/andamento' element={<Andamento/>}/>
        <Route path='/capitulo/1' element={<Capitulos arc={"1"}/>}/>
        <Route path='/capitulo/eor' element={<Capitulos arc={"1.5"}/>}/>
        <Route path='/capitulo/2' element={<Capitulos arc={"2"}/>}/>
        <Route path='/capitulo/ordealcall' element={<Capitulos arc={"2.5"}/>}/>
        <Route path='/capitulo/eventos' element={<Capitulos arc={"eventos"}/>}/>
        <Route path='/capitulo/:arc/:title' element={<Capitulo/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
