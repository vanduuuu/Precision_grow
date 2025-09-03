import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoSlider.css';

const VideoSlider = () => {
  const carouselItems = [
    { 
      id: 1, 
      imgSrc:'https://api.ecrop.co/assets/precisiongrow/precision1.webp', 
      alt: 'Grow with precision Grow', 
      title: 'Grow with precision Grow', 
      title1: 'Advanced Agri-Tech for Sustainable Farming',
      button: 'Know about us!',
      link: '/about'
    },
    { 
      id: 2, 
      imgSrc: 'https://api.ecrop.co/assets/precisiongrow/ecrop.webp', 
      alt: 'Know Your Farm with eCrop', 
      title: 'Know Your Farm with eCrop', 
      title1: 'Smart solution for enhanced crop management',
      button: 'Learn More!', 
      link: 'https://ecrop.co.in/'
    },
    { 
      id: 3, 
      imgSrc: 'https://api.ecrop.co/assets/precisiongrow/Skywatch_Lead.webp', 
      alt: 'Smarter Decisions with SkyWatch', 
      title: 'Smarter Decisions with SkyWatch', 
      title1: 'Protecting Every Breath you take with SkyWatch',
      button: 'Curious to Know More',
      link: 'https://skywatch.co.in/'
    },
    { 
      id: 4, 
      imgSrc: 'https://api.ecrop.co/assets/precisiongrow/Biosense.webp', 
      alt: 'Forget Labs, Get Biosense', 
      title: 'Forget Labs, Get Biosense', 
      title1: 'Soil Testing now made Easy with Biosense',
      button: 'Upgrade your testing!',
      link: '/'
    },
  ];

  // Helper function to detect external links
  const isExternal = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Function to colorize title text
  const colorizeTitle = (title) => {
    const words = title.split(' ');

    return words.map((word, index) => {
      let color = '';

      if (index < 2) {
        color = '#23bfc5'; // First two words
      } else if (index === words.length - 1) {
        color = '#23bfc5'; // Last word
      } else {
        color = '#fffffc'; // Middle words
      }

      return (
        <span key={index} style={{ color }}>
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <Carousel
      fade
      interval={3000}
      indicators
      controls
      className="carousels"
    >
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id} className="carousel-item1">
          <img
            className="d-block w-100 img-fluid"
            src={item.imgSrc}
            alt={item.alt}
            width="1920"
            height="800"
            loading={item.id === 1 ? "eager" : "lazy"}
          />
          <Carousel.Caption className="carousel-caption">
            <h3 className="display-5 fw-bold">{colorizeTitle(item.title)}</h3>
            <p>{item.title1}</p>
            {isExternal(item.link) ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {item.button}
              </a>
            ) : (
              <Link to={item.link} className="btn">
                {item.button}
              </Link>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoSlider;
