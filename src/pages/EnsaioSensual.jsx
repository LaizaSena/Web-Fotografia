import React from 'react'

import Card from '../components/Card';
import Julia from '../assets/Julia/IMG_3394.jpg';
import Vitoria from '../assets/Vitoria/IMG_3903.jpg';

function EnsaioSensual() {
    return (
        <div>
            <Card way='/julia' photo={Julia} name='Julia'
                way1='/vitoria' photo1={Vitoria} name1='Vitória'
                way2='/vitoria' photo2={Julia} name2='Fulana'
                way3='/vitoria' photo3={Vitoria} name3='Fulana' />
        </div>
    )
}

export default EnsaioSensual