import React from 'react';
import '../../style/info.scss';
import '../../style/banners.scss';
import image2 from '../../assets/img/infoBanner.png';
import Accordion from '../../components/Accordion/accordion';
function Info() {
    return (
        <>
       <img className="info-banner" src={image2} alt="Bannière d'accueil" />
        <div className="accordion-container-info" >
            <Accordion  title="Fiabilité" 
                        content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièremnt vérifiées par nos équipes. '} 
                        className="accordion-info"/>

            <Accordion  title="Respect" 
                        content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} 
                        className="accordion-info"/>
            <Accordion  title="Service" 
                        content={'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'} 
                        className="accordion-info"/>
            <Accordion
                        title="Sécurité" 
                        content={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement ' +
                                'correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte ' +
                                'qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons ' +
                                'également des ateliers sur la sécurité domestique pour nos hôtes.'} 
                        className="accordion-info"/>
        </div>
        </>

                        )}

export default Info
