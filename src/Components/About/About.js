import React from 'react';
import Banner from '../Banner/Banner';
import './About.css';
import Titletag from '../Titletag/Titletag';
import VdoText from '../Home/VdoText/VdoText';
import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/hero_44.webp'
import Drone from "../../assets/drone-scanning.webp"
import Wheat from '../../assets/9.png'



const About = () => {
  const breadcrumbItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' }
  ];

  return (
    <div>
      <Banner 
        title="About Us"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className='abt-outer'>
     <section>
     <div className='container'>
          <Titletag
            title="About Us"
            bgImage={NameBanner}
            className="pt-5"
          />
          <p className='txt1'>
            At <span>Precision Grow</span>, we are pioneering a new era in agriculture, harnessing the power of cutting-edge satellite analytics to revolutionize the way we farm. Our commitment is to empower farmers with precision insights that drive efficiency, sustainability and unprecedented crop management. Explore the future of agriculture with Precision Grow!
          </p>
        </div>
     </section>
        <VdoText 
          mediaSrc={Drone} 
          isVideo={false} 
          title="PRECISION GROW'S ADVANCED TECHNOLOGY"
          Desc="Unleashing the Power of Satellite Analytics Unlock the full potential of your farm with Precision Grow's state-of-the-art satellite analytics platform. Our technology provides real-time, high-resolution data, going beyond conventional precision farming to deliver actionable insights into crop health, moisture levels, pest infestations and more. Elevate your farming practices with Precision Grow!"
        />
      </div>
      <section className='VissionOuter'>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5 col-lg-5">
              <div className="choose-us-thumb">
                <img src={Wheat} alt="Vision&Mission"/>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="achivement-items">
                <ul className="list-details Vision-miss">
                  <li>
                    <h1>Our Vision</h1>
                    <h5>Smart Farming for a Sustainable Future</h5>
                    <p>At Precision Grow, we envision a future where sustainable farming practices, driven by data-driven insights and artificial intelligence, lead to increased crop yields, minimized environmental impact and improved livelihoods for farmers. Our vision extends to creating a global ecosystem where every stakeholder in agriculture benefits from innovation, transparency and the responsible use of technology in farming.</p>
                  </li>
                  <li>
                    <h1>Our Mission</h1>
                    <h5>Nurturing Agriculture Through Innovation</h5>
                    <p>Precision Grow is dedicated to revolutionizing agriculture through cutting-edge technology. Our mission is to empower farmers with precise satellite data for real-time crop monitoring and deploy advanced AI solutions to provide actionable crop advisory. We are committed to fostering transparency in the agricultural supply chain by ensuring traceability, offering consumers a clear journey of our products from farm to table.</p>
                  </li>
                  <li>
                    <h1>Our Goal</h1>
                    <h5>Leading the Way in Sustainable Agricultural Transformation</h5>
                    <p>We aim to be at the forefront of sustainable agricultural transformation by leveraging cutting-edge technology and data-driven solutions. We strive to enhance productivity and profitability for farmers while reducing environmental impact. By fostering a culture of innovation and transparency, we aim to build a more resilient and equitable agricultural ecosystem that benefits farmers, consumers, and all stakeholders involved. Our ultimate goal is to ensure that agriculture is not only a means of livelihood but a sustainable pathway to a better future for all.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

