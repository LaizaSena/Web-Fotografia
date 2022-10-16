import React from 'react';

import Me from '../assets/Larissa.jpg';

import '../components/StylePages/sobre.css';

function Sobre() {
  return (
    <div className='conteiner-sobre'>
      <img src={Me} alt='Foto Larissa Matos' className='img-page-sobre' />
      <span className='text-sobre'>
        <h2 className='title-text-sobre'>Sobre mim</h2>
        <h4 className='title-text-sobre'>Quem eu sou por trás da lente?!</h4>
        <p>
          Sou Larissa Matos, fotógrafa, atualmente trabalhando com ensaios intímos e de casais. <br />
          <br/>
          Em 2022, iniciei meus trabalhos voltados à nu artístico. A ideia é mostrar às pessoas
          a arte que habita em cada corpo e como ela se torna única, com novos traços, cores, curvas...
          Trazendo novas histórias, momentos, sorrisos, olhares, que ficarão para sempre na memória de cada um!
        </p>
      </span>
    </div>
  )
}

export default Sobre