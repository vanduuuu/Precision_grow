import React from 'react';
import './LeftTextVideo.css'; // Import custom CSS for additional styling

const LeftTextVideo = ({ title, title1, description, buttonText, buttonLink, videoSrc, buttonText1, buttonLink1 }) => {
  return (
    <div className="video-background-container">
        <video autoPlay muted loop className="video-background">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="col-lg-4 offset-lg-1">
      <div className="content-box">
        <h1>{title}</h1>
        <h5 style={{ color: '#c4e800' }}>{title1}</h5>
        <p>{description}</p>
       <div className="log">
        <a href={buttonLink} >
          {buttonText}
        </a>
        </div>
        {buttonText1 && buttonLink1 && (
          <div className="reg">
          <a href={buttonLink1} >
            {buttonText1}
          </a>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default LeftTextVideo;
