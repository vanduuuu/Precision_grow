import React, { useState, useEffect, useRef } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider';
import MissionPg from './MissionPg/MissionPg';
import Chooseus from './Chooseus/Chooseus';
import vdotxtif from '../../assets/video/Vdotxt.mp4';
import VdoText from './VdoText/VdoText';
import Weoffer from './Weoffer/Weoffer';
import FishMonitoring from './FishMonitoring/FishMonitoring';
import Faqq from '../FAQ/Faqq';
import Addecrop from './Addecrop/Addecrop';
import ecropadM from '../../assets/images/ecrop-add-1.webp';
import ecropadD from '../../assets/images/99 offer.webp';
import './Home.css';  // Import the CSS file
import { Helmet } from 'react-helmet';

const Home = () => {
  const [showAd, setShowAd] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images with their respective links
  const adImages = [
    {
      src: ecropadM,
      link: "/contact"  // Link for the first image
    },
    {
      src: ecropadD,
      link: "https://ecrop.co.in/contact"  // Link for the second image
    }
  ];

  const intervalRef = useRef(null); // Ref to store the interval ID

  const closeAd = () => {
    setShowAd(false);
  };

  useEffect(() => {
    // Set interval to change images every 3 seconds
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [adImages.length]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current); // Stop autoplay on hover
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 2000); // Restart autoplay when mouse leaves
  };

  return (
    <div>
      <Helmet>
        <title>Precision Grow - Revolutionizing Sustainable Farming with Smart Agriculture Solutions</title>
        <meta name="description" content="Explore Precision Grow's agri-tech solutions to boost crop yields, optimize farming, and promote sustainability. Revolutionize agriculture in India today!" />
        <link rel="canonical" href="https://precisiongrow.co.in/" />
      </Helmet>

      {/* Advertisement Modal with Image Slider */}
      {showAd && (
        <div className="modal-overlay">
          <div className="modal-page">
            <button className="close-button" onClick={closeAd}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Image Slider with Link */}
            <div
              className="image-slider"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Make the image a clickable link */}
              <a href={adImages[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <img
                  src={adImages[currentIndex].src}  // This is the image source
                  alt={`Advertisement ${currentIndex + 1}`}
                  className="slider-image"
                  loading='lazy'
                />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your components */}
      <VideoSlider />
      <MissionPg />
      <Chooseus />
      <VdoText
        mediaSrc={vdotxtif}
        isVideo={true}
        title="State Of The Art Technology"
        Desc="Unleashing the Power of Satellite Analytics Unlock the full potential of your farm with Precision Grow's state-of-the-art satellite analytics platform. Our technology provides real-time, high-resolution data, going beyond conventional precision farming to deliver actionable insights into crop health, moisture levels, pest infestations and more. Elevate your farming practices with Precision Grow!"
      />
      <Addecrop />
      <Weoffer />
      <FishMonitoring />
      <Faqq />
    </div>
  );
};

export default Home;
