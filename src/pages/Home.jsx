import React from 'react';

import Foto3 from '../assets/Larissa.jpg';
import Sobre from '../components/Sobre/Sobre.jsx';
import Contato from '../components/Contato/index.jsx';

import '../components/StylePages/home.css';

function Home() {
    return (
        <div className='container-home'>
            <img className='background-home' src={Foto3} alt='Foto da Larissa' />
            <Sobre />
            <Contato />
        </div>
    )
}

export default Home