import React from 'react';

import Logo from '../../assets/larissa-matos-logo.png';
import Github from '../../assets/icon-github.png';
import Linkedin from '../../assets/icon-linkedin.png';

import './style.css';

function index() {
    return (
        <footer className='container-footer'>
            <img src={Logo} alt='Logo da Larissa' />
            <div className='text-footer'>
                <p>Desenvolvido por <b>Laiza Sena</b></p>
                <a href='https://github.com/laizasena' target='blank'><img src={Github} /></a>
                <a href='https://www.linkedin.com/in/laiza-sena-ds/' target='blank'><img src={Linkedin} /></a>
            </div>
        </footer>
    )
}

export default index