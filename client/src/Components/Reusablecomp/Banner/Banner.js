import React from 'react';
import './Banner.css';

const Banner = ({ imageSrc, heading, subheading }) => {
  return (
    <div className="image-container1">
      <img src={imageSrc} alt="banner" className="banner-image img-fluid" width="1900" height="500" loading="lazy" />
      <div className="banner-overlay"></div>
      <div className="text-overlay1">
        <h3 className="heading text-white">{heading}</h3>
        <p className="subheading text-white">{subheading}</p>
      </div>
    </div>
  );
};

export default Banner;
