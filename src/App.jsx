import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home.jsx';
import EnsaioCasual from './pages/EnsaioCasual.jsx';
import EnsaioSensual from './pages/EnsaioSensual.jsx';
import Vitoria from './pages/Modelos/Vitoria.jsx';
import Sheila from './pages/Modelos/Sheila.jsx';
import Eduarda from './pages/Modelos/Eduarda.jsx';
import Julia from './pages/Modelos/Julia.jsx';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ensaio-casual' element={<EnsaioCasual />} />
        <Route path='/ensaio-sensual' element={<EnsaioSensual />} />
        <Route path='/vitoria' element={<Vitoria />} />
        <Route path='/sheila' element={<Sheila />} />
        <Route path='/eduarda' element={<Eduarda />} />
        <Route path='/julia' element={<Julia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
