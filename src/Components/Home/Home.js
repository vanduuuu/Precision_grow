import React, { useState } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider';
import MissionPg from './MissionPg/MissionPg';
import Chooseus from './Chooseus/Chooseus';
import VdoText from './VdoText/VdoText';
import Weoffer from './Weoffer/Weoffer';
import FishMonitoring from './FishMonitoring/FishMonitoring';
import Faqq from '../FAQ/Faqq';
import Addecrop from './Addecrop/Addecrop';
import ecropad from '../../assets/ecrop-ad.jpg'

import State from '../../assets/Vdotxt.mp4'
import { Link } from 'react-router-dom';





const Home = () => {
  // State to manage the modal visibility
  const [showAd, setShowAd] = useState(true);

  // Close modal handler
  const closeAd = () => {
    setShowAd(false);
  };

  return (
    <div>
      {/* Advertisement Modal */}
      {showAd && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <button style={closeButtonStyle} onClick={closeAd}>X</button>
            <Link to="https://ecrop.co.in/" target='_blank'>
            <img 
              src={ecropad}
              alt="Advertisement" 
              style={adImageStyle}
            />
            </Link>
            
          </div>
        </div>
      )}

      {/* Rest of your components */}
      <VideoSlider />
      <MissionPg />
      <Chooseus />
      <VdoText
        mediaSrc={State}
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

// Inline CSS to reduce CSS overhead
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black overlay
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999999999,
};

const modalStyle = {
  position: 'relative',
  width: '85%',
  maxWidth: '543px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const adImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '-30px',
  right: '-16px',
  background: '#ffffff',
  color: 'black',
  border: 'none',
  borderRadius: '50%',
  padding: '2px 10px',
  cursor: 'pointer',
};

export default Home;
