import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './VideoSlider.css'; 
import Banner1 from '../../assets/v1.mp4';
import Banner2 from '../../assets/satellite-fishing.mp4'; 

const VideoSlider = () => {
  // Hardcoded data
  const carouselItems = [
    {
      id: 1,
      videoSrc: Banner1, 
      title: 'Revolutionize Your Farming With',
      title1: 'Precision Grow',
      description: '(A Unit Of Tech Visit Pvt Ltd)',
      styles:{
        titleColor: "#ceff00",
      }
    },
    {
      id: 2,
      videoSrc: Banner2, 
      title: 'Revolutionize Your Fishing With',
      title1: 'Precision Grow',
      description: '(A Unit Of Tech Visit Pvt Ltd)',
      styles:{
        titleColor: "#61cef5",
      }
    },
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <video className="d-block w-100 video" autoPlay muted loops>
              <source src={item.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="carousel-caption">
              <div className="text-center text-overlay">
                <h1>
                  <strong>{item.title}<br /></strong>
                  <span style={{ color: item.styles.titleColor }}>
                    {item.title1}
                  </span>
                </h1>
                <h2 className="compname" style={{ color: item.styles.titleColor }}>{item.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default VideoSlider;
