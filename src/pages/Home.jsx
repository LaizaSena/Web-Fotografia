import React from 'react'

import Card from '../components/Card';
import Foto3 from '../assets/Larissa.jpg';
import Foto2 from '../assets/foto2.jpeg';
import Foto1 from '../assets/foto1.jpeg';

import '../components/StylePages/home.css';

function Home() {
    return (
        <div className='container-home'>
            <img className='background-home' src={Foto3} alt='Foto da Larissa' />
        </div>
    )
}

export default Home