import React from 'react';
import { Link } from 'react-router-dom';
import './FishMonitoring.css';
import Fishbg from '../../../assets/fish.webp'
import FishIn from '../../../assets/fish-in.png'



const FishMonitoring = () => {
  return (
    <div className='fmont-outer'>
      <div className='container-fixed'>
        <div className='fishmont d-flex'>
          <div className='col-lg-6 col-md-12  col-sm-12'>
            <img src={Fishbg} alt="fish monitoring" className='boat-fish' />
          </div>
          <div className='col-lg-6 col-md-12  col-sm-12 box1'>
            <div className='content-center'>
              <h1>What is Fish Satellite Monitoring?</h1>
              <p>
                Precision Grow’s Offshore fishing charts integrate up-to-date high-definition Satellite Sea Surface Temperature (SST) and chlorophyll maps, along with advanced planning features, to simplify the discovery of optimal offshore fishing spots for species like tuna, marlin, mahi, wahoo, and others. Skip the aimless search through barren waters and head directly to where the action is, saving both time and fuel.
              </p>
              <Link to="fish_monitoring" className='btn btn1'>Read More</Link>
              <div className='fish-in'>
                <img src={FishIn} alt="fish"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishMonitoring;
