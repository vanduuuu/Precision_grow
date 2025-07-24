import React from 'react';
import './Arrowcard.css';

const Arrowcard = ({
  title,
  description,
  image,
  isFirst = false,
  isLast = false,
  bgColor = '#f8f9fa',
  textColor = '#000',
  className = '',
}) => {
  const cardClasses = `arrow-card ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''} ${className}`;

  return (
    <div
      className={cardClasses}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {image && (
        <div className="image-wrapper">
          <img
            src={image}
            alt={title}
            className="arrow-image"
            loading="lazy"
          />
        </div>
      )}

      <div className="card-content text-center px-3 py-4">
        <h6 className="fw-bold fs-4">{title}</h6>
        <p className="arrow-description mt-2">{description}</p>
      </div>

      <div className="circle"></div>
    </div>
  );
};

export default Arrowcard;
