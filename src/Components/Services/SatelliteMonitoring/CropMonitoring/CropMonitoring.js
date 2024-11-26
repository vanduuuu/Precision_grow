import React from 'react';
import LeftTextVideo from '../../../LeftTextVideo/LeftTextVideo';
import ListComponent from '../../../ListComponent/ListComponent';
import Titletag from '../../../Titletag/Titletag';
import ListBoxBg from '../../../ListBoxBg/ListBoxBg';
import Headbanner from '../../../../assets/hero_44.webp'
import Parametr from '../../../../assets/parameters.webp'
import satellite from '../../../../assets/satellite.webp'
import cropmonitoringg from '../../../../assets/satellite-crop-monitoring.mp4'




const item8 = [
  { detail: "For Crop health images NDVI, NDRE, SAVI, EVI and VAR" },
  { detail: "For Irrigation, NDMI, NDWI and Evapotranspiration." },
  { detail: "For Soil Organic Carbon, SOC." },
  { detail: "For Cloudy weather RVI & RSM." },
  { detail: "For True Coloured Images, TCI and ETCI." },
  { detail: "Current & Forecast Weather Data" },
  { detail: "Colorblind Visualization" },
  { detail: "Land Use Land Classification" },
  { detail: "Crop Area Estimation" },
];

const CropMonitoring = () => {
  // Define lists for different columns
  const listItems1 = [
    'High-Resolution Imaging',
    'Water Stress',
    'Tree Age Estimation',
    'Land Use and Land Classification',
    'Soil Organic Carbon Data',
  ];

  const listItems2 = [
    'Crop Health Monitoring',
    'Evapotranspiration',
    'Tree Count',
    'Current & Forecast Weather',
    'Digital Elevation Data',
  ];

  const listItems3 = [
    'Soil Moisture',
    'Color Blind Visualisation',
    'Tree Uprooting Analysis',
    'Crop Yield & Crop Area Estimation',
  ];

  return (
    <>
      <LeftTextVideo
        title="Satellite-Based Crop Monitoring"
        description="Get Satellite based crop health monitoring for your farms every 4-5 days"
        buttonText="Sign Up (India)"
        buttonText1="Sign Up (Europe)"
        buttonLink="/contact"
        buttonLink1="/contact"
        videoSrc={cropmonitoringg}
      />
      <div className='ai-outer'>
        <section>
          <div className='container'>
            <Titletag
              title="What you will get"
              bgImage={Headbanner}
              className="pt-5"
            />
            <div className='row'>
              <div className='col-lg-4'>
                <ListComponent items={listItems1} />
              </div>
              <div className='col-lg-4'>
                <ListComponent items={listItems2} />
              </div>
              <div className='col-lg-4'>
                <ListComponent items={listItems3} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='ai-outer2'>
        <section>
          <div className='container'>
            <div className='div_p'>
              <h2 className='listtitle'>Satellite Based Crop Monitoring</h2>
              <p>
                Welcome to Precision Grow, your dedicated partner in modern agriculture. We bring you cutting-edge satellite-based crop monitoring services, delivering crucial insights into crop health, irrigation, soil organic carbon (SOC), digital elevation models (DEM) and more. Our commitment is to empower farmers with the precision tools they need for informed decision-making, ensuring optimal yields and sustainable farming practices.
              </p>
              <p>Satellite-Based Crop Monitoring: Enhancing Agricultural Precision In the fast-evolving landscape of agriculture, knowledge is power. Precision Grow leverages state-of-the-art satellite technology to provide farmers with a comprehensive view of their crops at regular intervals, typically every 4-5 days. This frequency ensures that you receive timely and accurate information crucial for making decisions that impact crop health, resource allocation and overall farm management.</p>
              <h4 className='h11'>Key Features of Precision Grow's Satellite-Based Crop Monitoring:</h4>
              <ul>
                <li>
                  <h5 className='mt-4'>1. Crop Health Monitoring:</h5>
                  <p>Precision Grow goes beyond traditional monitoring by delivering precise insights into crop health. Our satellite data captures detailed information about vegetation indices, allowing farmers to detect potential issues such as diseases, nutrient deficiencies or pest infestations early in the growing cycle. With this information, you can implement targeted interventions, reducing the risk of widespread crop damage.</p>
                </li>
                <li>
                  <h5>2. Crop Irrigation Management:</h5>
                  <p>Water is a precious resource, and efficient irrigation is paramount for sustainable agriculture. Precision Grow's satellite-based monitoring includes real-time data on soil moisture levels, enabling farmers to optimize irrigation schedules. Whether it's avoiding overwatering or ensuring crops receive adequate moisture during dry spells, our technology helps conserve water and enhance irrigation efficiency.</p>
                </li>
                <li>
                  <h5>3. Soil Organic Carbon (SOC) Analysis:</h5>
                  <p>Soil health is the foundation of successful farming. Precision Grow provides insights into Soil Organic Carbon levels, a key indicator of soil fertility and overall soil health. Understanding SOC variations across your fields empowers you to make informed decisions about soil management practices, fostering long-term sustainability.</p>
                </li>
                <li>
                  <h5>4. Digital Elevation Models (DEM):</h5>
                  <p>Topography plays a crucial role in agricultural planning. Precision Grow utilizes DEM data to create accurate 3D models of your terrain, allowing for precise land leveling and drainage planning. This information is invaluable for optimizing field layouts and addressing topographical challenges to maximize productivity.</p>
                </li>
                <li>
                  <h5>5. Radar Data for Cloudy or Rainy Seasons:</h5>
                  <p>Weather conditions can often impede satellite imagery. In response, Precision Grow incorporates radar data during cloudy or rainy seasons. This ensures continuous monitoring even when traditional optical satellite data may be hindered, providing an uninterrupted flow of insights for informed decision-making.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
 <div className='cropsateimg parameter'>
 <ListBoxBg
  mediaSrc={Parametr} // Path to the image or video
  title="18 DIFFERENT PARAMETERS"
  items={item8}
  textcolor="#c6e800"  // Text color for the title
  bgcolor="rgba(43, 62, 62, 0.82)"  // Background color of the content box
  mediaType="Image"  // Use 'image' for image or 'video' for video
/> 
 </div>
    </>
  );
};

export default CropMonitoring;
