import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './VdoText.css';

// Define the component
const VdoText = ({ mediaSrc,Desc1, isVideo, title, Desc, textcolor, bgcolor,textcolorP }) => {
  return (
    <div className="vdotxtt position-relative">
      <div className='shapehere'></div>
      {isVideo ? (
        <video 
          src={mediaSrc} 
          autoPlay 
          loop 
          muted 
          className="position-absolute w-100 h-100" 
          style={{ objectFit: 'cover' }}
        ></video>
      ) : (
        <img 
          src={mediaSrc} 
          alt="Background" 
          className="position-absolute w-100 h-100" 
          style={{ objectFit: 'cover' }}
        />
      )}
      {/* Info Box */}
      <div className="vdotxttinfo position-absolute" style={{ backgroundColor: bgcolor }}>
        <h2  style={{ color: textcolor }} className='work'>{title}</h2>
        <p style={{ color: textcolorP }}>
         {Desc}
        </p>
        <p style={{ color: textcolorP }}>
         {Desc1}
        </p>
      </div>
    </div>
  );
};

// Define default prop values and prop types
VdoText.propTypes = {
  mediaSrc: PropTypes.string.isRequired,
  isVideo: PropTypes.bool
};

VdoText.defaultProps = {
  isVideo: true // Default to video if not specified
};

export default VdoText;
