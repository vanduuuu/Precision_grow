import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Titletag.css'; // Import any additional custom CSS if needed

const Titletag = ({ title, bgImage }) => {
  // Inline style for dynamic background image
  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className='titletag-container'>
      <div className='titletag'>
        <h1 className='fw-bold mask-text'  style={backgroundImageStyle}><strong>{title}</strong></h1>
      </div>
    </div>
  );
}

export default Titletag;
