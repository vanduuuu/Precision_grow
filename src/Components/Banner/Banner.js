import React from 'react';
import './Banner.css'; // Import custom CSS for additional styling
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Banner = ({ title, backgroundImage, breadcrumbItems }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <div 
      className="banner-outer d-flex align-items-center justify-content-center text-center"
      style={bannerStyle}
    >
      <div className="banner-overlay d-flex align-items-center justify-content-center">
        <div className="banner-text">
          <h1>{title}</h1>
          <Breadcrumbs items={breadcrumbItems} current={title} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
