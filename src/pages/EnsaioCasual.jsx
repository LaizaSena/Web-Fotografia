import React from 'react'

import Card from '../components/Card';
import Foto2 from '../assets/foto2.jpeg';
import Eduarda from '../assets/Eduarda/IMG_1994.jpg';

function EnsaioSensual() {
    return (
        <div>
            <Card way='/sheila' photo={Foto2} name='Sheila'
                way1='/eduarda' photo1={Eduarda} name1='Eduarda'
                way2='/sheila' photo2={Foto2} name2='Fulana'
                way3='/eduarda' photo3={Eduarda} name3='Fulana' />
        </div>
    )
}

export default EnsaioSensual