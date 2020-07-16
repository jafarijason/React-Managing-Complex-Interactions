import React from 'react';

import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <img src="juice.jpg" alt="vitamin Juce" className="card-image" />
      <div className="container">
        <h3>Vitamin Juice  <span className="price"> $24.6</span></h3>
        <p> some explainigng some explainigng some explainigng some explainigng</p>
      </div>
    </div>
  );
}

export default Card;