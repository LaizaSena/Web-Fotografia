import React from 'react'

import Card from '../components/Card';

import Foto from '../assets/Eduarda/IMG_1965.jpg';
import Foto1 from '../assets/Eduarda/IMG_1994.jpg';
import Foto2 from '../assets/Eduarda/IMG_2021.jpg';
import Foto3 from '../assets/Eduarda/IMG_2023.jpg';
import Foto4 from '../assets/Eduarda/IMG_2025.jpg';
import Foto5 from '../assets/Eduarda/IMG_2032.jpg';
import Foto6 from '../assets/Eduarda/IMG_2035.jpg';
import Foto7 from '../assets/Eduarda/IMG_2037.jpg';

function Eduarda() {
    return (
        <div>
            <Card
                way='' photo={Foto}
                way1='' photo1={Foto1}
                way2='' photo2={Foto2}
                way3='' photo3={Foto3} />

            <Card way='' photo={Foto4}
                way1='' photo1={Foto5}
                way2='' photo2={Foto6}
                way3='' photo3={Foto7} />
        </div>
    )
}

export default Eduarda