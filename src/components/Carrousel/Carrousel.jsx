import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


// Composant pour la flèche précédente
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-prev" onClick={onClick} style={{ position: 'absolute', left: '20px', zIndex: 1 }}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
};

// Composant pour la flèche suivante
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-next" onClick={onClick} style={{ position: 'absolute', right: '20px', zIndex: 1 }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
};

const Carrousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Masquer les flèches si une seule image
    const settings = {
        infinite: pictures.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: pictures.length > 1 ? <NextArrow /> : null,
        prevArrow: pictures.length > 1 ? <PrevArrow /> : null,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentIndex(newIndex);
        }
    };
    return (
        <div style={{ position: 'relative' }}>
            <Slider {...settings}>
                {pictures.map((picture, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <img className='img-carousel' src={picture} alt={`Photo ${index + 1}`} style={{ width: '100%', maxHeight: '500px' }} />
                        {/* Compteur sur l'image */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            fontSize: '14px'
                        }}>
                            {`${currentIndex + 1} / ${pictures.length}`}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrousel;
