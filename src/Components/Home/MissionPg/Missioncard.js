import React from 'react';
import './Missioncard.css';

const Missioncard = ({ imageSrc, title, description, cardStyle,mission }) => {
  return (
    <div className='mission-feature col-xl-4 col-lg-6  col-12' style={cardStyle}>
      <div className='icon'>
        <img src={imageSrc} alt="feature icon" /><span>{mission}</span>
      </div>
      <div className='info'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Missioncard;
