import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import biens from '../../assets/data/kasa'; 
import Carrousel from '../../components/Carrousel/Carrousel';
import '../../style/logement.scss';
import LogementHeader from '../../components/Info_logements/info_logements';
import Accordion from '../../components/Accordion/accordion';


const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialisation de navigate
    const logement = biens.find(item => item.id === id);

    if (!logement) {
        navigate('/404'); // Redirige vers une page d'erreur 404 si le logement n'est pas trouvé
        return null; // Permet de ne pas rendre le reste du composant
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
                rating={logement.rating}/>
            </div>
            <div className='Accordion'>
                <Accordion  title="Description" content={logement.description} />
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

