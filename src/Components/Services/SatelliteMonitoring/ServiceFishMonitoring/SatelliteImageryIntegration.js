import React from 'react'
import Banner from '../../../Banner/Banner'
import Titletag from '../../../Titletag/Titletag';
import './SatelliteImageryIntegration.css'
import GridSection from './GridSection/GridSection';
import topviewcoast from '../../../../assets/top-view-coast.webp'
import fantasticseascape from '../../../../assets/fantastic-seascape.webp'
import ship1 from '../../../../assets/ship_1.webp'
import sar1 from '../../../../assets/sar_1.webp'
import ocean from '../../../../assets/ocean.webp'
const SatelliteImageryIntegration = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/satellite_imagery_integration', label: 'Satellite Imagery Integration' }
      ];
  return (
    <>
    <Banner 
      title="Satellite Imagery Integration"
      backgroundImage={topviewcoast}
      breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
    />
      
  <div className='fishdivouter'>
    <section>
      <div className='container'>
      <Titletag
          title="Satellite Imagery Integration"
          bgImage={fantasticseascape}
          className="pt-5"
        />
        <p className='txt1'>
        Tracking commercial fishing activity is vital, yet relying solely on AIS and VMS may overlook a substantial portion of global fishing operations. Our solution leverages imaging-based systems capable of detecting vessels without tracking devices or intentionally concealing their location by turning off their tracking devices. By seamlessly integrating various satellite imagery sources, we aim to provide a comprehensive overview of global fishing activity.
        </p>
      </div>
    </section>
  </div>
  <div className='vessel-outer'>
  <div class="shapehere"></div>
  <section>
  <GridSection 
        image={ship1} 
        content="The Visible Infrared Imaging Radiometer Suite (VIIRS) is a satellite system orbiting the poles equipped with highly sensitive optical sensors designed to capture nighttime light emissions. Maintained by the Earth Observation Group (EOG) at the Colorado School of Mines, the VIIRS Boat Detection (VBD) database identifies vessels utilizing light to attract catch, such as industrial squid vessels and certain types of purse seines. In collaboration with the Earth Observation Group, we are integrating this database into our platforms to enhance vessel tracking data, addressing the gap where over 85 percent of fishing vessels in the VIIRS database do not transmit AIS or VMS signals."
      />
      <GridSection 
        image={sar1} 
        content="Synthetic aperture radar (SAR) technology enables mapping of the Earth's surface by penetrating cloud cover, which typically blankets more than two-thirds of the planet at any given time. SAR's capability to function in all weather conditions, day or night, facilitates the swift discovery of potentially significant trends. We are currently devising methodologies for automated vessel detection using SAR imagery."
        reverse={true} // Set reverse to true to swap the order
      />
        <GridSection 
        image={ocean} 
        content="Optical imagery, including visible and sometimes infrared images, is provided by satellites like those featured on Google Earth. On clear days, optical satellite imagery enables observation of vessels at sea, offering compelling visual evidence of vessel activity and types. Coastal regions are regularly surveyed using medium-resolution optical systems like the Sentinel-2 constellation (with approximately 15-meter spatial resolution), and we have developed algorithms for automated vessel detection in these images. Additionally, we have collaborated with providers of higher-resolution optical imagery data, such as Planet Labs, which offer imagery at 3-meter spatial resolution."
      />
  </section>
  </div>
  </>
  )
}

export default SatelliteImageryIntegration
