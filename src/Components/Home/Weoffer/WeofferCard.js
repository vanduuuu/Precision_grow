import React from 'react';
import './WeofferCard.css';

const WeofferCard = ({ image, title, description, number }) => {
  return (
    <div className='col-xl-4 col-lg-6 col-md-6 product-type-single'>
      <div className='product-type-item'>
        <div className='thumb'>
          <img src={image} alt={title} />
          <span data-aos="flip-down" data-aos-duration="2000">{number}</span>
        </div>
        <div className='info'>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeofferCard;
