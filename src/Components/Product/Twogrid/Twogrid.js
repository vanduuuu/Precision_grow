import React from 'react';
import './Twogrid.css';

function Twogrid({
  title,
  title1,
  description,
  description1,
  bulletPoints,
  iconClass,
  imageSrc,
  reverse = false,
  imageAlt = 'Image',
  style = {}, // Default empty style object if no styles are passed
}) {
  return (
    <div className="container py-4" style={style}>
      {/* Row with fade-up animation */}
      <div 
        className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`} 
        data-aos="fade-up" // Apply fade-up animation here
      >
        {/* Image Column - Moves to the top on medium screens and below */}
        <div className={`col-lg-6 ${reverse ? 'order-lg-last order-md-first' : 'order-md-first'}`}>
          <img src={imageSrc} loading="lazy" alt={imageAlt} className="img-fluid" />
        </div>

        {/* Text Column */}
        <div className={`col-lg-6 ${reverse ? 'order-lg-first order-md-last' : 'order-md-last'}`}>
          <h2 className="boldtitle">{title}</h2>
          <p>{description}</p>
          <p>{description1}</p>
          <h4 className="subtitle">{title1}</h4>
          <ul className="p-0">
            {bulletPoints?.map((point, index) => (
              <li key={index}>
                <p>
                  <i className={iconClass}></i> {/* Icon */}
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Twogrid;
