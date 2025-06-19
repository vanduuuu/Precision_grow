import React from 'react';
import './Arrowcard.css';

const Arrowcard = ({ title, description, image, isFirst, isLast }) => {
  const cardClasses = `arrow-card ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}`;

  return (
    <div className={cardClasses}>
      {/* Image tabhi show karo jab image prop available ho */}
      {image && (
        <div className="image-wrapper">
          <img src={image} alt={title} className="arrow-image" loading="lazy"/>
        </div>
      )}

      <div className="card-content text-left">
        <h6 className="fw-bold">{title}</h6>
        <p className="arrow-description mt-2">{description}</p>
      </div>

      <div className="circle"></div>
    </div>
  );
};

export default Arrowcard;
