import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png"
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/hxG29nr/unsplash-Eh-Tc-C9s-YXsw-9.png"
                    alt="Second slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/tKsvCyR/unsplash-Eh-Tc-C9s-YXsw-3.png"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;