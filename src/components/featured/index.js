import React from 'react';
import Carrousel from "./Carrousel";
import './index.css';

import AppCards from '../appCards';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carrousel/>

            <div className="card">

                <AppCards />

            </div>
            
        </div>
    );
};

export default Featured;