import React from 'react';
// import React, { useState, useEffect, useRef } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider.js';
import MissionPg from './MissionPg/MissionPg.js';
import WeChoose from './WeChoose/WeChoose.js'
import Weoffer from './Weoffer/Weoffer.js';
import Addecrop from './Addecrop/Addecrop.js';
import './Home.css';
import { Helmet } from 'react-helmet-async';
import Testomonial from './Testomonial/Testomonial.js';
import Titleunderline from '../Reusablecomp/Titleunderline/Titleunderline.js';
import FaqSection from '../Faqcomp/FaqSection.js';
import AwardCertificateSlider from '../Reusablecomp/AwardCertificateSlider/AwardCertificateSlider.js';
import { Link } from 'react-router-dom';
import esg from '../../assets/icons_About/esg.webp'
import ecroptoday from '../../assets/icons_About/ecropbanner.webp'
const homeFaqs = 
[
  { title: 'How does eCrop optimize agricultural productivity?',
     content: 'Boost farm yields sustainably with AI and IoT—monitor soil, crops, and weather to make smarter farming decisions!'},
 
     { title: 'What makes SkyWatch a game-changer in Earth observation?',
     content: 'It monitors PM2.5, NO₂, and SO₂, identifies hotspots, and forecasts trends, offering actionable insights for governments and researchers.'},
  
     { title: 'How does BioSense enhance healthcare monitoring?',
     content: 'BioSense uses wearables and AI to monitor vital health metrics in real time, enabling early detection and personalized care.'},
    
     { title: "How does Ecoloo address sanitation challenges sustainably?",
      content:"Ecoloo offers waterless toilets that convert waste into compost, saving water and supporting sustainable sanitation."},
  
      { title: "What is the primary advantage of satellite-based monitoring systems?",
        content:"Satellite monitoring collects real-time global data for precise environmental tracking, weather forecasting, and disaster response."}
    ];
const Home = () => {
  // const [showAd, setShowAd] = useState(true);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Array of images with their respective links
  // const adImages = [
  //   {
  //     src: ecropadM,
  //     link: "/contact"  // Link for the first image
  //   },
  //   {
  //     src: ecropadD,
  //     link: "https://ecrop.co.in/contact"  // Link for the second image
  //   }
  // ];

  // const intervalRef = useRef(null); // Ref to store the interval ID

  // // const closeAd = () => {
  // //   setShowAd(false);
  // // };

  // useEffect(() => {
  //   // Set interval to change images every 3 seconds
  //   intervalRef.current = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
  //   }, 2000);

  //   // Cleanup the interval on component unmount
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [adImages.length]);

  // const handleMouseEnter = () => {
  //   clearInterval(intervalRef.current); // Stop autoplay on hover
  // };

  // const handleMouseLeave = () => {
  //   intervalRef.current = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
  //   }, 2000); // Restart autoplay when mouse leaves
  // };

  return (
    <div>
      <Helmet>
              <title> Precision Grow: Advanced Agri-Tech for Sustainable Farming</title>
              <meta name="description" content="Explore Precision Grow's agri-tech solutions to boost crop yields, optimize farming, and promote sustainability. Revolutionize agriculture in India today!" />
              {/* <link rel="canonical" href="https://precisiongrow.co.in/" /> */}
              <meta
    name="keywords"
    content="smart farming solutions, precision agriculture India, IoT agriculture systems"
  />
      </Helmet>

      {/* Rest of your components */}
      <VideoSlider />
 
      <div className='poem container col-lg-6 my-4 p-2'>
     <ul className='text-center cont'  data-aos="fade-up" data-aos-duration="3000">
                <li><span>I</span>n a farm not so big,</li>
                <li>There’s a farmer working hard and his land he digs.</li>
                <li>He plants the seed, they go in the land,</li>
                <li>With his caring nature and his rugged hands.</li>
                <li>With tools, the crops have helped him grow,</li>
                <li>His hard-working nature, all of the kingdom and everyone will know.</li>
      </ul>

      </div>



            <Titleunderline title="Welcome To Precision Grow" tag="h1" />
            <div className='container'>
                    <p className='fs-4 text-center'>Precision Grow (A Unit of Tech Visit IT Pvt Ltd) is revolutionizing Agriculture and Industries through its precise satellite monitoring, IoT devices, and AI technologies. Our solutions deliver real-time data, actionable insights, and sustainable practices to empower businesses turn challenges into opportunities for a smarter, greener future. Join with us for the future of farming - smarter, efficient, and sustainable!!</p>
      <MissionPg />
</div>

 <div className="ecroptoday"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={esg} alt="ecroptoday" width="1900" height="350" className='img-fluid' loading="lazy" />
                   
                    <a
    href="https://esgconsultants.co.in/"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
  <button>ESG CONSULTANTS</button>
</a>

           </div>
      <Titleunderline title="Why Choose Us" tag="h2"/>

      <WeChoose />
       <div className="ecroptoday"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={ecroptoday} alt="ecroptoday" width="1900" height="350" className='img-fluid' loading="lazy" />
                    <Link to='/publications'>
  <button>EXPLORE PUBLICATIONS</button>
</Link>

           </div>
           <div className='testono'>
          <Titleunderline title="Testimonials" tag="h2"/>

           <Testomonial />
           </div>
          
      <Addecrop />
      <Weoffer />
      


      <AwardCertificateSlider/>
      <FaqSection data={homeFaqs} variant="green" />;

    </div>
  );
};

export default Home;
