import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/icons.png';

import './style.css';

function index() {
    return (
        <Nav className='nav-header'>
            <img src={Logo} />
            <div className='div-header'>
                <Link to='/'>Início</Link>
                <Link to='/sobre'> Sobre </Link>
                <NavDropdown className='dropdown-header-ensaio' title="Ensaio">
                    <NavDropdown.Item><Link to='/ensaio-casual'>Casual</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/ensaio-sensual'>Sensual</Link></NavDropdown.Item>
                </NavDropdown>
                <Link to='/contato'> Contato </Link>
            </div>
        </Nav>
    )
}

export default index