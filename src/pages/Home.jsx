import React from 'react';

import Sobre from '../components/Sobre/Sobre.jsx';
import Contato from '../components/Contato/index.jsx';

import '../components/StylePages/home.css';

function Home() {
    return (
        <div className='container-home'>
            <Sobre />
            <Contato />
        </div>
    )
}

export default Home