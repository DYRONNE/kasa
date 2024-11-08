import React from 'react';
import '../../style/LogementHeader.scss';

const LogementHeader = ({ title, location, tags, host, rating }) => {
    return (
        <div className="logement-header">
            <div className="logement-info">
                <h1 className="logement-title">{title}</h1>
                <p className="logement-location">{location}</p>
                <div className="logement-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="logement-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className='logement-info-rating'>
                <div className="host-info">
                    <div className="host-name">{host.name}</div>
                    <img className="host-picture" src={host.picture} alt={host.name} />
                </div>
                <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default LogementHeader;