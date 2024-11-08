import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className='not-found-title'>404</h1>
            <p className='not-found-text'>Oups! La page que vous demandez n'existe pas.</p>
            <div className="not-found-link">
                <Link className="not-found-link-a" to="/">Retour à l'Accueil</Link>
            </div>
        </div>
    );
};

export default NotFound;
