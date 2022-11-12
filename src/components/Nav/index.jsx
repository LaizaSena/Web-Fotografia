import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/larissa-matos-logo.png';

import './style.css';

function index() {
    return (
        <Nav className='nav-header'>
            <img src={Logo} width='180px' alt='Logo da Larissa' className='logo-header' />
            <div className='div-header'>
                <Link to='/'>Início</Link>
                <NavDropdown className='dropdown-header-ensaio' title="Ensaio">
                    <NavDropdown.Item><Link to='/ensaio-casual'>Casual</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/ensaio-sensual'>Sensual</Link></NavDropdown.Item>
                </NavDropdown>
            </div>
        </Nav>
    )
}

export default index