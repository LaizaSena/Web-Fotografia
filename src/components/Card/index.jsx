import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

function index(props) {
    return (
        <div className='container-card'>
            <Card className='all-card'>
                <Link to={props.way}><Card.Img className='card-img' src={props.photo} /></Link>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card>
            <Card className='all-card'>
            <Link to={props.way1}><Card.Img className='card-img' src={props.photo1} /></Link>
                <Card.Body>
                    <Card.Title>{props.name1}</Card.Title>
                </Card.Body>
            </Card>
            <Card className='all-card'>
            <Link to={props.way2}><Card.Img className='card-img' src={props.photo2} /></Link>
                <Card.Body>
                    <Card.Title>{props.name2}</Card.Title>
                </Card.Body>
            </Card>
            <Card className='all-card'>
            <Link to={props.way3}><Card.Img className='card-img' src={props.photo3} /></Link>
                <Card.Body>
                    <Card.Title>{props.name3}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default index
