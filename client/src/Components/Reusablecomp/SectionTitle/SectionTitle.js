import React from 'react';
import './SectionTitle.css';
import shape2 from '../../../assets/icons_About/rice.png';

const SectionTitle = ({ title, position = 'left' }) => {
  // Determine alignment class
  const alignmentClass = {
    left: 'justify-content-start',
    center: 'justify-content-center',
    right: 'justify-content-end',
  }[position];

  return (
    <div className={`d-flex align-items-center section-title-wrapper ${alignmentClass}`}>
      <img
        src={shape2}
        alt="Rice Icon"
        className="me-2 section-title-icon"
        loading="lazy"
      />
      <h3 className="m-0 fw-bold section-title-text">{title}</h3>
    </div>
  );
};

export default SectionTitle;
