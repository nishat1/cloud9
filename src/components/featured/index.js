import React from 'react';
import Carrousel from "./Carrousel";
import './index.css';

import AppCards from '../appCards';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carrousel/>

            <div className="card">
                <img 
                    src={require("../../resources/images/cslogo.png")}
                    style={{width: "100%"}}/>
            </div>
            
        </div>
    );
};

export default Featured;