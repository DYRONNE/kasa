import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import biens from '../../assets/data/kasa'; 
import Carrousel from '../../components/Carrousel/Carrousel';
import '../../style/logement.scss';
import LogementHeader from '../../components/Info_logements/info_logements';
import Accordion from '../../components/Accordion/accordion';

const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Appel de useNavigate en dehors de useEffect
    const logement = biens.find(item => item.id === id);

    useEffect(() => {
        // Si le logement n'existe pas, on redirige vers la page 404
        if (!logement) {
            navigate('/404');
        }
    }, [logement, navigate]); // Ajoute logement et navigate comme dépendances

    // Si le logement n'existe pas, on ne retourne rien (la redirection est en cours)
    if (!logement) {
        return null;
    }

    return (
        <div>
            <div className="carrousel-container">
                <Carrousel pictures={logement.pictures} />
            </div>
            <div className='logementHeader'>
                <LogementHeader
                    title={logement.title}
                    location={logement.location}
                    tags={logement.tags}
                    host={logement.host}
                    rating={logement.rating}
                />
            </div>
            <div className='Accordion'>
                <Accordion title="Description" content={logement.description} />
                <Accordion 
                    title="Équipements" 
                    content={
                        <ul className="equipments-list">
                            {logement.equipments.map((item, index) => (
                                <li key={index} className="equipment-item">{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default Logement;
