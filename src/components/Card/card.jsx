import React from 'react';
import '../../style/card.scss';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, id }) => {
    return (
        <Link to={`/logement/${id}`}>
            <div className="card">
                <img className="card-cover" src={cover} alt="photo-du-bien" />
                <div className="card-title-overlay">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;