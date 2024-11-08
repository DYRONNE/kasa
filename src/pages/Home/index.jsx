import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/card';
import biens from '../../assets/data/kasa';
import image from '../../assets/img/homeBanner.png';
import '../../style/banners.scss';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(biens);
  }, []);

  return (
    <>
      <div className="banner-container">
        <img className="home-banner" src={image} alt="Bannière d'accueil" />
        <div className="banner-overlay"></div>
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="card-container">
        {cards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} cover={card.cover} />
        ))}
      </div>
    </>
  );
};

export default Home;

