import React, { useState } from 'react';
import '../../style/carousel.scss';

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour aller à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((index) => (index + 1) % pictures.length);
    };

    // Fonction pour aller à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((index) => (index - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carrousel">
            {pictures.length > 1 && (
                <>
                    <button className="prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next" onClick={nextSlide}>
                        &#10095;
                    </button>
                </>
            )}
            <div className="carrousel-images">
                <img
                    src={pictures[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="carrousel-image"
                />
            </div>
            {pictures.length > 1 && (
                <p className="counter">{currentIndex + 1}/{pictures.length}</p>
            )}
        </div>
    );
};

export default Carrousel;
