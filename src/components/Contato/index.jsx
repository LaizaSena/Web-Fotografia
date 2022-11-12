import React from 'react';

import Instagram from '../../assets/icon-instagram.png';

import './style.css';

function Index() {
    return (
        <main className='contato'>
            <h2>Entre em contato para orçamentos</h2>
            <form className='form-contato'>
                <section className='inputs-contato'>
                    <input className='input-contato' type='text' placeholder='Nome' required />
                    <input className='input-contato' type='email' placeholder='E-mail' required />
                </section>
                <textarea className='textarea-contato' type='text' placeholder='Deixe sua mensagem' />
                <button className='animated-button'>Enviar</button>
            </form>
        </main>
    )
}

export default Index