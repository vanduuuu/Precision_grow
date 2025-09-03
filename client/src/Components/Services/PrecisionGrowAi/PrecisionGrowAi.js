import React, { useRef, useEffect } from 'react';
import './PrecisionGrowAi.css';
import { Helmet } from 'react-helmet-async';
import FaqSection from '../../Faqcomp/FaqSection.js';
import Banner from '../../Reusablecomp/Banner/Banner.js';
import Titleunderline from '../../Reusablecomp/Titleunderline/Titleunderline.js';
import Featurecard from '../../Reusablecomp/Featurecard/Featurecard.js';  // Ensure this path is correct
import CardBorderGrid from '../../Reusablecomp/CardBorderGrid/CardBorderGrid.js';

const PrecisionGrowAi = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const AiFaqs = [
    { title: 'How does Precision Grow AI work?', content: 'It analyzes satellite data, soil health, and weather patterns to deliver tailored, actionable insights for your farm.', isOpenInitially: false },
    { title: 'Can Precision Grow AI help with weather forecasts?', content: 'Yes, it integrates weather forecasts to provide precise recommendations for your fields.', isOpenInitially: false },
    { title: 'How does Precision Grow AI promote sustainability?', content: 'By providing insights to reduce waste, optimize resources, and improve soil health.', isOpenInitially: false },
    { title: "What data does Precision Grow AI analyze?", content: "Satellite imagery, soil conditions, weather patterns, and crop health data.", isOpenInitially: false },
    { title: "How do I get started with Precision Grow AI?", content: "Sign up on our platform, input your farm details, and start receiving tailored insights instantly.", isOpenInitially: false }
  ];

  const features = [
    {description: 'Enhance Crop Health Monitoring' },
    { description: 'Weather-Driven Decision Making'},
    { description: 'Optimized Irrigation Strategies' },
    { description: 'Sustainability & Efficient Agriculture'},
    { description: 'Reducing Early Pest and Disease Control'}
  ];
  const cardData4 = [
    {
      image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (1).webp",
      title: "Experience The Power Of AI-Driven Farming!",
      content:
        "We offer you a smart farming assistant. It monitors fields, analyzes data, and uses weather forecasts to deliver precise insights. Transform your farm into a data-driven ecosystem and grow smarter, effortlessly.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (2).webp",
      title: "How Does It Work",
      content:
        "Our service puts the power of precision farming in your hands. By analyzing satellite data, soil health, and weather patterns, it provides real-time information tailored to your fields. Make better decisions, increase yields, and practice sustainable farming because every crop deserves the best care.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (3).webp",
      title: "Cultivating Tomorrow With Intelligent Farming",
      content:
        "We provide you with the tools to take control of farming's future. We help you make better decisions, boost yields, and farm sustainably with our cutting-edge technology and real-time information. Precision is the way of the future in agriculture, so be smarter today and grow better tomorrow.",
    },
 
  ];
  return (
    <div>
      <Helmet>
        <title>Revolutionize Smart Farming with Precision Grow AI Tools</title>
        <meta name="description" content="Unlock smarter farming with Precision Grow AI—real-time crop insights, weather data, and satellite monitoring for modern agriculture across India." />
        <meta name="keywords" content="AI in agriculture, machine learning farming solutions, predictive agri-tech" />
        <link rel="canonical" href="https://precisiongrow.co.in/precision-grow-ai" />
      </Helmet>

      {/* Banner */}
      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Precision Grow AI.webp"
        heading="Precision Grow AI"
        subheading="Intelligent future farming"
      />

      {/* Farm Intelligence Section */}
      <div className='container'>
        <p className='text-center mt-5 fs-5'>
          <strong>We are providing Precision Grow AI systems with better insights for your farm.</strong>
        </p>
        <Titleunderline title="Your Farm, Our Intelligence" tag="h1"/>
        <p className='text-center fs-5'>Let's say goodbye to traditional farming methods and join us in introducing smart farming practices with Precision Grow AI, which delivers smart, data-driven farming insights.</p>
        <Titleunderline title="Benefits" tag="h2"/>
        <div className="position-relative w-100 mb-3 mb-lg-5 vdo-outer-green">
  {/* Video */}
  <video
    ref={videoRef}
    autoPlay
    muted
    loop
    className="video-style"
  >
    <source src="https://api.ecrop.co/assets/precisiongrow/sprouts1.mp4" type="video/mp4" />
  </video>

  {/* Overlapping Cards */}
  <div className="mx-auto card-container">
    <div className="row g-4 justify-content-center">
      {features.map((item, index) => (
        <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
          <Featurecard 
            {...item} 
            customClass="rrrrs"
            descColor="#413a3a"
             bgColor="#f0f8ff"
          />
        </div>
      ))}
    </div>
  </div>
</div>

 

        {/* AI-Powered Farming Section */}
        <div className='ai-outer2 mt-0 pt-0 mt-lg-5 pt-lg-5'>
          <section className="d-flex justify-content-center align-items-center">
            <div className="container row Ai-power">
              <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-centerlh-lg">
                <h4 className='mt-2 boldlook'>AI-Powered Farming, Made Simple</h4>
                <p className='lead text-secondary'>
                  Welcome to the game-changer service we provide, you can enter the farming of the future, where real-time insights, satellite data, and artificial intelligence combine to improve crops, increase yields, and transform agriculture.
                </p>
              </div>
              <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center">
                <img src="https://api.ecrop.co/assets/precisiongrow/Precision Grow AI2.webp" alt="aifarming" className="aifarming" loading="lazy" />
              </div>
            </div>
          </section>
        </div>

          <section>
        
                <div className="mx-auto">
                  <CardBorderGrid cardinfo={cardData4} colsLg={3} titleClass="custom-title-green"/>
                </div>
              </section>

        {/* FAQ Section */}
        <FaqSection data={AiFaqs} variant="lightblue" />
      </div>
    </div>
  );
};

export default PrecisionGrowAi;
