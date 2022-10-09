import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home.jsx';
import Vitoria from './pages/Vitoria.jsx';
import Sheila from './pages/Sheila.jsx';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vitoria' element={<Vitoria />} />
        <Route path='/sheila' element={<Sheila />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
