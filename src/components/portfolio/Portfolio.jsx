// src/components/Portfolio.js
import React, { useState } from 'react';
import './portfolio.css';

import salão from '../../assets/salão.png';

// Componente Card
const Card = ({ type, image, text }) => {
  return (
    <div className={`card ${type}`}>
      <img src={image} alt={text} className="card-image" />
      <div className="card-text">
        <p>{text}</p>
        <a href="#" className="card-demo">Demo</a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState('all');

  const cards = [
    { id: 1, type: "front", image: salão, text: 'Salão landing page' },
    { id: 2, type: 'front', image: salão, text: 'Another Frontend Card' },
    { id: 3, type: 'back', image: salão, text: 'Backend Card 1' },
    { id: 4, type: 'back', image: salão, text: 'Backend Card 2' }
  ];

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredCards = selectedType === 'all'
    ? cards
    : cards.filter(card => card.type === selectedType);

  return (
    <section>
      <nav className="nav container">
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
            Frontend
          </button>
          <button
            className={selectedType === 'back' ? 'active' : ''}
            onClick={() => handleTypeChange('back')}
          >
            Backend
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
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

