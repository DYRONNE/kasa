import React, { useState } from 'react';
import '../../style/carousel.scss';

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour aller à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((Index) => (Index + 1) % pictures.length);
    };

    // Fonction pour aller à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((Index) => (Index - 1 + pictures.length) % pictures.length
        );
    };

    return (
        <div className="carrousel">
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carrousel-images">
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="carrousel-image"
                />
            </div>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
            <p className='counter'>{currentIndex+1}/{pictures.length}</p>
        </div>
    );
};

export default Carrousel;
