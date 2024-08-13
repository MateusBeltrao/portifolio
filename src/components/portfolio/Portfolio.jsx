// src/components/Portfolio.js
import React, { useState } from 'react';
import './portfolio.css';

import salão from '../../assets/salão.png';
import api from "../../assets/api.png"
import imove from "../../assets/moveis.png"

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
    { id: 1, type: "front", image: salão, text: 'Salão landing page', link: 'https://salao01.vercel.app' },
    { id: 2, type: 'front', image: api, text: 'API landing page', link: 'https://ap-fipe-my.vercel.app' },
    { id: 3, type: 'back', image: imove, text: 'imobiliária fullstack', link: 'https://homyz-nu.vercel.app' },
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
            Front-end
          </button>
          <button
            className={selectedType === 'back' ? 'active' : ''}
            onClick={() => handleTypeChange('back')}
          >
            Full-stack
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
