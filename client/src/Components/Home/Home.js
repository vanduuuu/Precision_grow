import React from 'react';
// import React, { useState, useEffect, useRef } from 'react';
import VideoSlider from '../VideoSlider/VideoSlider.js';
import Weoffer from './Weoffer/Weoffer.js';
import Addecrop from './Addecrop/Addecrop.js';
import './Home.css';
import { Helmet } from 'react-helmet-async';
import Testomonial from './Testomonial/Testomonial.js';
import Titleunderline from '../Reusablecomp/Titleunderline/Titleunderline.js';
import FaqSection from '../Faqcomp/FaqSection.js';
import AwardCertificateSlider from '../Reusablecomp/AwardCertificateSlider/AwardCertificateSlider.js';
import { Link } from 'react-router-dom';
import esg from '../../assets/esg-banner.jpg'
import leaf1 from '../../assets/leaf1.webp'
import leaf2 from '../../assets/future-agri1.webp'
import ecroptoday from '../../assets/ecroptoday-banner1.webp';
import faqImg from "../../assets/FAQ2.webp";
import men from "../../assets/men.webp";
import {
  FaSeedling,
  FaWater,
  FaCertificate,
  FaHandsHelping,
  FaGlobeAmericas,
  FaLightbulb,FaQuoteLeft, FaQuoteRight
} from "react-icons/fa";
import CardBorderGrid from '../Reusablecomp/CardBorderGrid/CardBorderGrid.js';
import ListItem from '../Reusablecomp/ListItem.js';
import Stepcard from '../Reusablecomp/Stepcard.js';
import InfoCardGroup from '../Reusablecomp/InfoCardGroup.js';
import CardIcon from '../Reusablecomp/CardIcon/CardIcon.js';
import InteractiveSection from '../Interactivesection/Interactivesection.js';
import RoadSection from '../NewHome/RoadSection.js';
import WaveCard from '../NewHome/Testimonialcard.js';
  const ecropData3 = [
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop1.webp",
      label: "Put real-time intelligence in the palms of farmers, enabling smarter, faster decisions.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop1.webp",
      label: "Help farms grow more with less - conserving water, reducing fertilizers, and cutting energy use.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop1.webp",
      label: "Foster harmony between farming and nature, ensuring productivity and planet thrive together.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop1.webp",
      label: "Extend vision beyond borders, partnering globally with innovators and communities because sustainable agriculture is a universal need.",
    },
  ];
const homeFaqs = 
[
  { question: 'How does eCrop optimize agricultural productivity?',
     answer: 'Boost farm yields sustainably with AI and IoT—monitor soil, crops, and weather to make smarter farming decisions!'},
 
     { question: 'What makes SkyWatch a game-changer in Earth observation?',
     answer: 'It monitors PM2.5, NO₂, and SO₂, identifies hotspots, and forecasts trends, offering actionable insights for governments and researchers.'},
  
     { question: 'How does BioSense enhance healthcare monitoring?',
     answer: 'BioSense uses wearables and AI to monitor vital health metrics in real time, enabling early detection and personalized care.'},
    
     { question: "How does Ecoloo address sanitation challenges sustainably?",
      answer:"Ecoloo offers waterless toilets that convert waste into compost, saving water and supporting sustainable sanitation."},
  
      { question: "What is the primary advantage of satellite-based monitoring systems?",
        answer:"Satellite monitoring collects real-time global data for precise environmental tracking, weather forecasting, and disaster response."}
    ];
  export const steps = [
  {
    iconType: "react-icon",
    icon: FaSeedling,
    iconColor: "#5ca904", // Fresh green for growth & productivity
    title: "Unlocking Greater Productivity",
    text: "Achieve up to 30% higher crop yields through data-driven farming.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
  },
  {
    iconType: "react-icon",
    icon: FaWater,
    iconColor: "#0097b2", // Aqua blue for water conservation
    title: "Cutting Costs, Conserving Resources",
    text: "Reduce water usage by 25% and fertilizer consumption by 15%, making every drop and granule count.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
  },
  {
    iconType: "react-icon",
    icon: FaGlobeAmericas,
    iconColor: "#3f9142", // Earthy green for eco-friendly & sustainability
    title: "Farming with the Planet in Mind",
    text: "Embrace eco-friendly methods that minimize chemical runoff and promote soil health.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    
  },
  {
    iconType: "react-icon",
    icon: FaCertificate,
    iconColor: "#f4a300", // Gold tone for trust & certification
    title: "Trusted & Certified",
    text: "Our technology is officially patented by ICAR CTCRI, ensuring quality and credibility.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
  },
  {
    iconType: "react-icon",
    icon: FaHandsHelping,
    iconColor: "#5c7cfa", // Calm blue-purple for support & partnership
    title: "Support Wherever You Grow",
    text: "Benefit from a nationwide network of Precision Grow experts dedicated to your farm’s success.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
  },
  {
    iconType: "react-icon",
    icon: FaLightbulb,
    iconColor: "#ffb703", // Bright yellow for innovation
    title: "Accessible Innovation for All",
    text: "Smart farming solutions designed to be affordable and scalable, perfect for holdings from 1 to 25 acres.",
      bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
  },
];
   const cardData1 = [
    {
      Icon: FaSeedling,
      title: "Unlocking Greater Productivity",
      text: "Achieve up to 30% higher crop yields through data-driven farming.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    },
    {
      Icon: FaWater,
      title: "Cutting Costs, Conserving Resources",
      text: "Reduce water usage by 25% and fertilizer consumption by 15%, making every drop and granule count.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    },
    {
      Icon: FaGlobeAmericas,
      title: "Farming with the Planet in Mind",
      text: "Embrace eco-friendly methods that minimize chemical runoff and promote soil health.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
      
    },
    {
      Icon: FaCertificate,
      title: "Trusted & Certified",
      text: "Our technology is officially patented by ICAR CTCRI, ensuring quality and credibility.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    },
    {
      Icon: FaHandsHelping,
      title: "Support Wherever You Grow",
      text: "Benefit from a nationwide network of Precision Grow experts dedicated to your farm’s success.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    },
    {
      Icon: FaLightbulb,
      title: "Accessible Innovation for All",
      text: "Smart farming solutions designed to be affordable and scalable, perfect for holdings from 1 to 25 acres.",
        bgColor: "linear-gradient(to top, rgba(172, 236, 159, 0.9), white)",
    },
  ];
const cardData = [
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-1.webp",
      title: "Crop Health Monitoring",
      subtitle: "Smart Insights for Healthy Crops and Informed Farming Decisions.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-2.webp",
      title: "Crop Irrigation Monitoring",
      subtitle: "Precision crop irrigation monitoring enhances water efficiency.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-3.webp",
      title: "Smart Farm Radar",
      subtitle: "Radar data ensures continuous monitoring during adverse weather.",
    },
    {
      img:"https://api.ecrop.co/assets/precisiongrow/offer-4.webp",
      title: "Soil Organic Carbon",
      subtitle: "Soil organic carbon tracking for sustainable and fertile agriculture.",
    },
    {
      img:"https://api.ecrop.co/assets/precisiongrow/offer-5.webp",
      title: "Digital Elevation Model",
      subtitle: "Digital elevation models optimize land use and drainage planning.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-6.webp",
      title: "Agri Yield Estimator",
      subtitle: "Accurate crop area and yield estimation for informed decisions.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-7.webp",
      title: "Live Weather Forecast",
      subtitle: "Real-time and forecast weather updates guide agricultural planning.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-9.webp",
      title: "Product Traceability",
      subtitle:"Seamless product traceability, unveiling the journey from farm to table",
    },
  ];
const Home = () => {
  return (
    <div>
      <Helmet>
              <title>Precision Grow | Smart Farming with Agri-Tech Solutions</title>
              <meta name="description" content="Discover smart farming with Precision Grow's agri-tech tools to enhance yields, streamline farming, and drive sustainable agriculture in India." />
              {/* <link rel="canonical" href="https://precisiongrow.co.in/" /> */}
              <meta
    name="keywords"
    content="smart farming solutions, precision agriculture India, IoT agriculture systems"
  />
      </Helmet>

      {/* Rest of your components */}
      <VideoSlider />
 
 <section className="poem-section">
      <div className="container">
     <div className="row align-items-center justify-content-center">
  {/* Left Column - Image */}
  <div className="col-lg-6 order-md-2 d-flex justify-content-center mb-4 mb-md-0">
    <img
      src={leaf1} // replace with your image path
      alt="Farm"
      className="img-fluid w-100"
      data-aos="fade-right"
      data-aos-duration="2000"
    />
  </div>

  {/* Right Column - Poem */}
  <div
    className="col-lg-6 order-md-1 d-flex align-items-center"
    data-aos="fade-left"
    data-aos-duration="2000"
  >
    <div className="poem-container p-4 position-relative w-100">
      {/* Left Quote */}
      <FaQuoteLeft className="quote-left" />

      {/* Poem text */}
      <div className="fst-italic text-dark fs-5 ">
        <p><span className="first-letter">I</span>n a farm not so big,</p>
        <p>There’s a farmer working hard and his land he digs.</p>
        <p>He plants the seed, they go in the land,</p>
        <p>With his caring nature and his rugged hands.</p>
        <p>With tools, the crops have helped him grow,</p>
        <p>His hard-working nature, all of the kingdom and everyone will know.</p>
      </div>

      {/* Right Quote */}
      <FaQuoteRight className="quote-right" />
    </div>
  </div>
</div>

      </div>
    </section>

  <section className="news-section p-0">

      {/* Top Row */}
<div
  className="row justify-content-center align-items-center text-white p-4 px-4 mb-5 position-relative news-section-inner1"
  data-aos="fade-up"
  data-aos-duration="1200"
  data-aos-once="true"
>
  {/* Overlay */}
  {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-50"></div> */}

  {/* Left Title */}
  <div
    className="col-md-4 d-flex justify-content-center align-items-center position-relative"
    data-aos="fade-right"
    data-aos-delay="200"
    data-aos-duration="1200"
  >
   <h1 className="fw-bold display-5 display-lg-4 text-center heading-style">
  Enter the Era of Precision Grow

  {/* <br className="d-none d-lg-block" /> */}
</h1>


    {/* Vertical border */}
<div className="position-absolute vertical-border d-none d-md-block"></div>
  </div>

  {/* Right Paragraph */}
  <div
    className="col-md-8 d-flex ps-md-5 align-items-center position-relative"
    data-aos="fade-left"
    data-aos-delay="400"
    data-aos-duration="1200"
  >
    <p className="mb-0 fs-5">
      Farming is no longer about soil alone - it's about data, insights, and
      sustainability.<br /> Welcome to the future of agriculture.
    </p>
  </div>
</div>



      <div className="container">

        {/* Bottom Row */}
        <div className="row align-items-start">
          {/* Left Image */}
        
          {/* Right Content */}
          <div className="col-lg-7 fs-5">
              {/* <Titleunderline
          title="The Future of Agriculture is Here"
          tag="h2"
          align="left"
        /> */}
            {/* <div className="row fs-5"> */}
              {/* <div className="col-lg-6"> */}
                <p>
                Precision Grow, A Unit of Tech Visit IT Pvt Ltd venture, revolutionizes agriculture by blending AI, IoT, SaaS, and satellite data - turning raw field insights into smarter, more lucrative harvests that empower farmers and transform futures.


                </p>
              <p>We are more than a service - we are the silent partner in your success, standing with farmers, agribusinesses, and communities to ensure every crop grows smarter, every decision becomes sharper, and every challenge turns into an opportunity. We're turning farms into smart, sustainable businesses - boosting profits, protecting the planet, and powering the future of food. </p>
               <p>Today, Precision Grow is not only working across India but also spreading its vision globally, collaborating with partners, innovators, and communities worldwide. Because agriculture knows no borders, and neither should solutions.</p>
              {/* </div> */}
              {/* <div className="col-lg-6">
                <p><i>“Cultivate Tomorrow”</i> is not just a slogan; it’s our promise to farmers, agribusinesses, and communities everywhere. We’re building a smart farming ecosystem where fields thrive, businesses grow, and the planet breathes easier.</p>
               
              </div> */}
            {/* </div> */}
          </div>
            <div className="col-lg-5 position-relative">
            <img
              src={leaf2} 
              alt="Farm"
              className="img-fluid overlap-img"
            />
          </div>

        </div>

      </div>
    </section>



     <section className="precision-section mb-4 py-5">
  <div className="container">
    <div className="row align-items-center text-lg-start mb-4 gy-5">
      {/* Purpose */}
      <div className="col-lg-4" data-aos="fade-right"
      data-aos-duration="2000">
        <h3 className="fw-bold display-6 mb-3">Purpose</h3>
        
        <p className="fs-5">
          We are on a mission to make precision farming accessible, actionable, and impactful -
          turning data into growth, technology into trust, and fields into flourishing futures.
          Our purpose is to cultivate a future where farming is not a challenge but a confident,
          eco-friendly future that empowers communities, businesses, and ecosystems alike.
        </p>
      </div>

      {/* Circle Image (Center Column) */}
      <div className="col-lg-4 text-center men-img">
        <img
          src={men}   
          alt="Purpose-Aspiration Connection"
          className="img-fluid rounded-circle shadow-lg border border-5 border-white"
        />
      </div>

      {/* Aspiration */}
      <div className="col-lg-4" data-aos="fade-left"
      data-aos-duration="2000">
        <h3 className="fw-bold display-6 mb-3">Aspiration</h3>
        <p className="fs-5 mb-3">
          We dream of farms where every seed speaks, every cloud guides, and every harvest sustains.
          Precision Grow aspires to turn technology into trust, ensuring that farming thrives not just
          today, but for generations to come.
        </p>
      </div>
    </div>
  </div>
</section>
  <InteractiveSection/>
      {/* Goal / Objective */}
<section className="objective-section text-white position-relative m-3 mb-0">
  {/* Gradient Overlay */}
  <div className="overlay6"></div>

  <div className="container position-relative">
    {/* Heading Section */}
    <div className="text-center mb-5">
      <Titleunderline
        title="Our Objectives"
        tag="h2"
        titleColor="#ffffff"
      />
      <h4 className="p-2 mt-3 display-6 fw-semibold fst-italic">
        "India's Agriculture at Crossroads"
      </h4>
      <p className="fs-5 mt-3">
        India’s agriculture faces unprecedented challenges — climate volatility,
        soil degradation, and soaring input costs threaten the very foundation
        of farming. That’s why <strong>Precision Grow</strong> was born — to
        turn challenges into opportunities and empower farmers for the future.
      </p>
      <p className="fs-5">
        Our objectives are clear, bold, and deeply rooted in impact:
      </p>
    </div>

    {/* Objective List Items */}
    <div className="row justify-content-center g-4">
      {ecropData3.map((item, index) => (
        <div
          key={index}
          className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch"
        >
          <ListItem
            icon={item.icon}
            label={item.label}
            index={index}
            title={item.title}
            bgClass="bg-light-green"
            titleColor="#198754"
          />
        </div>
      ))}
    </div>

    {/* Footer Paragraphs */}
    <div className="text-center mt-5">
      <p className="fs-5">
        With <strong>Precision Grow</strong>, the future of farming isn’t far
        away — it’s already here, growing smarter, greener, and stronger with
        every sunrise.
      </p>
      <p className="fs-5">
        From soil health diagnostics to hyper-local weather forecasts, from pest
        alerts to global market intelligence — we provide a complete ecosystem
        of solutions designed to maximize yields while minimizing risks and
        costs.
      </p>
    </div>
  </div>
</section>
   {/* road map  */}
<RoadSection/>
{/* road map  */}
 <div className="ecroptoday mb-5"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={esg} alt="ecroptoday" width="1900" height="350" className='img-fluid' loading="lazy" />
                   
                    <a
    href="https://esgconsultants.co.in/"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
  <button>ESG CONSULTANTS</button>
</a>

           </div>
  <div className="container my-5">
          <Titleunderline title="Why We Exist?" tag="h2"/>

       <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
                <InfoCardGroup cardData={steps} />
              </div>
    </div>
    {/* road map  */}
 <section>
      <div className="container">
 <Titleunderline
        title="Why We Exist?"
        tag="h2"
      />
        <div className="row mt-5">
          {cardData1.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <WaveCard Icon={item.Icon} title={item.title} text={item.text} />
            </div>
          ))}
     </div>
      </div>
    </section>
    
       <div className="ecroptoday"  data-aos="fade-up" data-aos-duration="2000">
                    <img src={ecroptoday} alt="ecroptoday" width="1900" height="350" className='img-fluid' loading="lazy" />
                    <Link to='/publications'>
  <button>EXPLORE PUBLICATIONS</button>
</Link>

           </div>
           <div className='testono'>
           <Testomonial />
           </div>
          
      <Addecrop />
      {/* <Weoffer /> */}




   <div className="container mt-4">
              <Titleunderline title="What We Offer" tag="h2" align="center"/>

  <div className="row pt-4">
    {cardData.map((card, index) => (
      <div className="col-md-6 col-lg-3 mb-4" key={index}>
        <Weoffer
          image={card.img}          // ✅ use card.img not card.image
          title={card.title}
          subtitle={card.subtitle}
          index={index}
        />
      </div>
    ))}
  </div>
</div>




      <AwardCertificateSlider/>
 <FaqSection
      data={homeFaqs}
      image={faqImg}
    />
    </div>
  );
};

export default Home;
