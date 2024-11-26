import React from 'react';
import './Choosecard.css';

const Choosecard = ({ imageSrc, title, text, cardStyle = {} }) => {
  return (
    <div 
      className={`card choosecard bg-transparent text-white ${cardStyle.textAlign === 'end' ? 'text-end' : 'text-start'}`} 
      style={{ 
        borderTop: `1px solid ${cardStyle.border || 'transparent'}`, 
        color: cardStyle.color || 'inherit',
        textAlign: cardStyle.textAlign || 'start' // Apply the textAlign to the whole card
      }}>
      <div className={`d-flex ${cardStyle.textAlign === 'end' ? 'flex-column align-items-end' : 'flex-column align-items-start'}`}>
        <img 
          src={imageSrc} 
          className="card-img-top" 
          alt="Card cap" 
           // Ensure the image fits within the card
        />
        <div className="card-body">
          <h5 className="card-title mb-2">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Choosecard;
