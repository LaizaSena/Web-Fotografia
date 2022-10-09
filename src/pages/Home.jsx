import React from 'react'

import Card from '../components/Card';
import Foto3 from '../assets/foto3.jpeg';
import Foto2 from '../assets/foto2.jpeg';
import Foto1 from '../assets/foto1.jpeg';

import '../components/StylePages/home.css';

function Home() {
    return (
        <div>
            <img className='background-home' src={Foto3} alt='Foto da Larissa' />
            <Card way='/vitoria' photo={Foto1} name='Vitória'
                way1='/sheila' photo1={Foto2} name1='Sheila'
                way2='/vitoria' photo2={Foto1} name2='Fulana'
                way3='/vitoria' photo3={Foto2} name3='Fulana' />
                
            <Card way='/vitoria' photo={Foto1} name='Vitória'
                way1='/sheila' photo1={Foto2} name1='Sheila'
                way2='/vitoria' photo2={Foto1} name2='Fulana'
                way3='/vitoria' photo3={Foto2} name3='Fulana' />
        </div>
    )
}

export default Home