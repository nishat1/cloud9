import React, { Component } from 'react';

import Slider from 'react-slick';
import clouds from '../../resources/images/clouds.jpg';

class Carrousel extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500
        }

        return (
            <div
                className="carrousel_wrapper"
                style={{
                    overflow: "hidden",
                    height: `${window.innerHeight}px`
                }}
            >

                <Slider {...settings}>

                    <div>
                        <div 
                            className="carrousel_image"
                            style={{
                                background: `url(${clouds})`,
                                height: `${window.innerHeight}px`
                            }}
                        ></div>
                    </div>

                </Slider>
                
            </div>
        );
    }
}

export default Carrousel;