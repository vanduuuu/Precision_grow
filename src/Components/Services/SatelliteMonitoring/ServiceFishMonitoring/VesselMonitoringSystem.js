import React from 'react'
import Banner from '../../../Banner/Banner'
import Titletag from '../../../Titletag/Titletag';
import './VesselMonitoringSystem.css'
import GridSection from './GridSection/GridSection';
import topviewcoast from '../../../../assets/top-view-coast.webp'
import fantasticseascape from '../../../../assets/fantastic-seascape.webp'
import vissel from '../../../../assets/vissel.webp'
const VesselMonitoringSystem = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/vessel_monitoring_system', label: 'VesselMonitoring System (VMS)' }
      ];
  return (
    <>
      <Banner 
        title="Vessel Monitoring System (VMS)"
        backgroundImage={topviewcoast}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
        
    <div className='fishdivouter'>
      <section>
        <div className='container'>
        <Titletag
            title="Vessel Monitoring System (VMS)"
            bgImage={fantasticseascape}
            className="pt-5"
          />
          <p className='txt1'>
          Our Vessel Monitoring System (VMS) operates akin to AIS (Automatic Identification System), with a primary focus on regulatory oversight by government bodies and fisheries authorities. However, there's a growing trend among various countries to make their VMS data publicly accessible via platforms like Precision Grow. VMS entails the transmission of vessel positions at predetermined intervals, with the flexibility for operators to adjust transmission frequency as needed. It's common for vessels to utilize both AIS and VMS simultaneously, enabling the integration of data from both systems for enhanced tracking precision.
          </p>
        </div>
      </section>
    </div>
    <div className='vessel-outer'>
    <div class="shapehere"></div>

  <section>
  <GridSection 
        image={vissel} 
        title="Vessel Registries Compilation" 
        content="Each month, we meticulously gather data from over 30 publicly accessible vessel registries. This meticulous process enables us to construct a robust database containing vital vessel details such as ship name, call sign, IMO number, dimensions (length and tonnage), engine power, authorization status, and ownership information."
      />
  </section>

  </div>
    </>
  )
}

export default VesselMonitoringSystem
