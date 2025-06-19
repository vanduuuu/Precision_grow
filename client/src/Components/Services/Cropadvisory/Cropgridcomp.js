import React from 'react';
import './Cropgridcomp.css';

const Cropgridcomp = ({ image, title, description, reverse }) => {
  return (
    <div className="cropgrid-container">
    <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
  <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mb-3 mb-md-0">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="cropgrid-image rounded shadow-sm"
    />
  </div>
  <div className="col-md-6 col-12">
    <h3 className="cropgrid-title">{title}</h3>
    <p className="cropgrid-description">{description}</p>
  </div>
</div>

    </div>
  );
};

export default Cropgridcomp;
