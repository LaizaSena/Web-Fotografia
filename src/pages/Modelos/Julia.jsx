import React from 'react'

import Card from '../../components/Card';

import Foto from '../../assets/Julia/IMG_3394.jpg';
import Foto1 from '../../assets/Julia/IMG_3404.jpg';
import Foto2 from '../../assets/Julia/IMG_3411.jpg';
import Foto3 from '../../assets/Julia/IMG_3413.jpg';
import Foto4 from '../../assets/Julia/IMG_3422.jpg';
import Foto5 from '../../assets/Julia/IMG_3428.jpg';
import Foto6 from '../../assets/Julia/IMG_3429.jpg';
import Foto7 from '../../assets/Julia/IMG_3456.jpg';
import Foto8 from '../../assets/Julia/IMG_3475.jpg';
import Foto9 from '../../assets/Julia/IMG_3480.jpg';
import Foto10 from '../../assets/Julia/IMG_3483.jpg';
import Foto11 from '../../assets/Julia/IMG_3497.jpg';
import Foto12 from '../../assets/Julia/IMG_3509.jpg';
import Foto13 from '../../assets/Julia/IMG_3517.jpg';

function Julia() {
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

            <Card way='' photo={Foto8}
                way1='' photo1={Foto9}
                way2='' photo2={Foto10}
                way3='' photo3={Foto11} />
        </div>
    )
}

export default Julia