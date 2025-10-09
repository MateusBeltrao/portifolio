// src/components/Portfolio.js
import React, { useState } from 'react';
import './portfolio.css';

import salão from '../../assets/salão.png';
import api from "../../assets/api.png"
import imove from "../../assets/redux.png"
import alfa from "../../assets/alfa.png"
import deposito from '../../assets/deposito.png'
import mary from '../../assets/studio.png'

// Componente Card
const Card = ({ type, image, text, link }) => {
  return (
    <div className={`card ${type}`}>
      <img src={image} alt={text} className="card-image" />
      <div className="card-text">
        <p>{text}</p>
        <a href={link} className="card-demo" target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('all');

  const cards = [
    { id: 3, type: "back",  image: alfa, text: "business landing page", link: "https://business-seven-drab.vercel.app" },
    { id: 2, type: 'front', image: api, text: 'API landing page', link: 'https://ap-fipe-my.vercel.app' },
    { id: 1, type: 'back', image: imove, text: 'aluguel de carros', link: 'https://ridelux.vercel.app' },
    { id: 4, type: 'front', image: salão, text: 'salão e barbearia', link: 'https://salao01.vercel.app'},
    { id: 5, type: 'back', image: deposito, text: 'Depósito pedido integrado', link: 'https://depositomerceariadalagoa.vercel.app/'},
    { id: 6, type: 'front', image: mary, text: 'salão de beleza', link: 'https://mary-2424.vercel.app'}
  ];

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredCards = selectedType === 'all'
    ? cards
    : cards.filter(card => card.type === selectedType);

  return (
    <section>
      <nav className="nav1 container" id="portfolio">
        <h1>Portfolio</h1>
        <div className="filter-buttons">
          <button
            className={selectedType === 'all' ? 'active' : ''}
            onClick={() => handleTypeChange('all')}
          >
            Todos
          </button>
          <button
            className={selectedType === 'front' ? 'active' : ''}
            onClick={() => handleTypeChange('front')}
          >
            Landing pages   
          </button>
          <button
            className={selectedType === 'back' ? 'active' : ''}
            onClick={() => handleTypeChange('back')}
          >
            Institucionais
          </button>
        </div>
      </nav>
      <div className="card-container">
        {filteredCards.map(card => (
          <Card 
            key={card.id} 
            type={card.type} 
            image={card.image}
            text={card.text}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
