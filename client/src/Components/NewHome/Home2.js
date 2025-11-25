import React from "react";
import Slider from "./Slider";
import txt from '../../assets/text 4.webp'
import TwoColumnSection from "./TwoColumnSection";
import men from '../../assets/leaf1.webp'
import logo from '../../assets/favicon.jpg'
import men2 from '../../assets/earth-tree.webp'
import drone from '../../assets/drone.webp'
import purposeIcon from '../../assets/gear.png'
import aspirationIcon from '../../assets/idea.png'
import faqImg from "../../assets/FAQ2.webp";

import {
  FaSeedling,
  FaWater,
  FaCertificate,
  FaHandsHelping,
  FaGlobeAmericas,
  FaLightbulb
} from "react-icons/fa";
import './Home2.css'
import Wave from "./wave";
import CrossConnectionSection from "./CrossConnectionSection";
import WaveCard from "./Testimonialcard";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";
import Testomonial from '../../Components/Home/Testomonial/Testomonial.js'
import AddecropNew from "./AddecropNew.js";
import Weoffer from "../Home/Weoffer/Weoffer.js";
import AwardCertificateSlider from "../Reusablecomp/AwardCertificateSlider/AwardCertificateSlider.js";
import RoadSection from './RoadSection.js'
import FaqSection from "../Faqcomp/FaqSection.js";
const Timeline = () => {
   const cardData = [
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
  const featureCards = [
  {
    icon: "https://api.ecrop.co/assets/precisiongrow/cropicon2.webp",
    desc: "Put real-time intelligence in the palms of farmers, enabling smarter, faster decisions."
  },
  {
    icon: "https://api.ecrop.co/assets/precisiongrow/cropicon1.webp",
    desc: "Help farms grow more with less - conserving water, reducing fertilizers, and cutting energy use."
  },
  {
    icon: "https://api.ecrop.co/assets/precisiongrow/cropicon1.webp",
    desc: "Foster harmony between farming and nature, ensuring productivity and planet thrive together."
  },
  {
    icon: "https://api.ecrop.co/assets/precisiongrow/cropicon2.webp",
    desc: "Extend vision beyond borders, partnering globally with innovators and communities because sustainable agriculture is a universal need."
  }
];

 const cardData1 = [
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
  return (
 <>
 <Slider/>

  <div className="text-center mb-5">
    <img
      src={txt}
      alt="txt"
      className="img-fluid mx-auto"
    />
  </div>
 <Wave color="#02746a" position="bottom" height={120} />


<div className="bgcolorrr text-white">  
<div className="container">
  <TwoColumnSection
      reverse={false}
      toptitleColor="#fff"
  // title="The Future of Agriculture"
  paragraphs={[
    "Farming is no longer about soil alone - it's about data, insights, and sustainability.Welcome to the future of agriculture.",
    "Precision Grow, A Unit of Tech Visit IT Pvt Ltd venture, revolutionizes agriculture by blending AI, IoT, SaaS, and satellite data - turning raw field insights into smarter, more lucrative harvests that empower farmers and transform futures.",
    "We are more than a service - we are the silent partner in your success, standing with farmers, agribusinesses, and communities to ensure every crop grows smarter, every decision becomes sharper, and every challenge turns into an opportunity. We're turning farms into smart, sustainable businesses - boosting profits, protecting the planet, and powering the future of food.",
    "Today, Precision Grow is not only working across India but also spreading its vision globally, collaborating with partners, innovators, and communities worldwide. Because agriculture knows no borders, and neither should solutions."
  ]}
  // listData={[
  //   {
  //     iconComponent: <FaIndustry />,
  //     title: "Smart Monitoring",
  //     label: "Track crop health using satellite data.",
  //     bgClass: "bg-light-blue"
  //   },
  //   {
  //     iconComponent: <FaIndustry />,
  //     title: "AI Advisory",
  //     label: "Get instant recommendations.",
  //     bgClass: "bg-light-green"
  //   }
  // ]}
  imageSrc={men}
/>
</div>
 <Wave color="white" position="bottom" height={120} />


</div>

<section className="purpose-bg py-5">
  <div className="container">
    <div className="row g-4 align-items-center">

      {/* LEFT GRID */}
      <div className="col-lg-4" data-aos="fade-right">

        {/* PURPOSE */}
        <div className="plain-box mb-4 d-flex align-items-start gap-3">

          {/* ICON LEFT */}
          <img 
            src={purposeIcon}
            alt="purpose icon"
            className="purpose-left-icon"
          />

          {/* TEXT RIGHT */}
          <div>
            <h3 className="boldlook mb-1">Purpose</h3>
            <p className="m-0">
              We are on a mission to make precision farming accessible, actionable, and impactful - turning data into growth, technology into trust, and fields into flourishing futures. Our purpose is to cultivate a future where farming is not a challenge but a confident, eco-friendly future that empowers communities, businesses, and ecosystems alike.
            </p>
          </div>

        </div>

        {/* ASPIRATION */}
        <div className="plain-box d-flex align-items-start gap-3">

          {/* ICON LEFT */}
          <img 
            src={aspirationIcon}
            alt="aspiration icon"
            className="purpose-left-icon"
          />

          {/* TEXT RIGHT */}
          <div>
            <h3 className="boldlook mb-1">Aspiration</h3>
            <p className="m-0">
              We dream of farms where every seed speaks, every cloud guides, and every harvest sustains. Precision Grow aspires to turn technology into trust, ensuring that farming thrives not just today, but for generations to come.
            </p>
          </div>

        </div>

      </div>

      {/* CENTER GRID */}
      <div className="col-lg-4 text-center" data-aos="zoom-in">
        <img src={men2} alt="purpose" className="img-fluid" />
      </div>

      {/* RIGHT GRID */}
      <div className="col-lg-4" data-aos="fade-left">
        <div className="info-card mb-3">
          <h3 className="heading-style">Smart Soil to Sensor</h3>
          <p>Our eCrop Smart Device delivers real-time data on soil nutrients, pest activity, and weather - giving farmers instantly actionable insights.</p>
        </div>

        <div className="info-card mb-3">
          <h3 className="heading-style">Healthy Air, Healthy Fields</h3>
          <p>Monitor air quality and crop conditions with precision technology to ensure healthier yields and sustainable farming practices.</p>
        </div>

        <div className="info-card">
          <h3 className="heading-style">Precision from Space</h3>
          <p>Satellite-based monitoring allows farmers to track crop health, water stress, and growth patterns from above, ensuring precise interventions.</p>
        </div>
      </div>

    </div>
  </div>
</section>
<h1 className="boldlook text-center">OUR OBJECTIVE</h1>


<div className="py-5">
  <div className="row align-items-start align-items-stretch">

 <div className="col-md-6 position-relative">

  <div className="left-box p-4 text-white">
    <h3 className="mb-2 boldlook text-white">"India's Agriculture at Crossroads"</h3>
    <p>
      India’s agriculture faces unprecedented challenges — climate volatility, soil degradation, 
      and soaring input costs threaten the very foundation of farming. That’s why Precision Grow 
      was born — to turn challenges into opportunities and empower farmers for the future.
    </p>
  </div>

  <div className="bg-light p-4">
    <h4 className="boldlook text-dark">Our objectives are clear, bold, and deeply rooted in impact:</h4>
    <p>
      With Precision Grow, the future of farming isn’t far away — it’s already here, growing smarter, greener, 
      and stronger with every sunrise.
    </p>
    <p>From soil health diagnostics to hyper-local weather forecasts, from pest alerts to global market intelligence — 
    we provide a complete ecosystem of solutions designed to maximize yields while minimizing risks and costs.</p>
  

<div className="row mt-4 g-3">
  {featureCards.map((item, index) => (
    <div className="col-12 col-lg-6" key={index} data-aos="fade-up"
      data-aos-delay={index * 150} >
      <div className="p-3 bg-white shadow rounded-5 border-top border-5 border-dark  h-100 text-center">
        <img src={item.icon} width="50" alt="icon" />
        <p className="mb-0">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
</div>


  {/* OVERLAPPING LOGO */}
  <div className="overlap-logo">
    <img src={logo} alt="Brand" />
  </div>

</div>


    {/* RIGHT SECTION — IMAGE */}
    <div className="col-md-6">
      <div className="right-image-wrapper">
        <img
          src={drone}
          alt="Feature"
          className="img-fluid w-100 h-100 object-fit-cover shadow"
        />
      </div>
    </div>

  </div>
</div>
{/* cross connection timeline */}
<CrossConnectionSection/>

   {/* road map  */}
<RoadSection/>
{/* road map  */}
 <section>
      <div className="container">
 <Titleunderline
        title="Why We Exist?"
        tag="h2"
      />
        <div className="row mt-5">
          {cardData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <WaveCard Icon={item.Icon} title={item.title} text={item.text} />
            </div>
          ))}
     </div>
      </div>
    </section>
 <div className='testono1'>
           <Testomonial/>
           </div>




           <AddecropNew/>
    <div className="container mt-4">
              <Titleunderline title="What We Offer" tag="h2" align="center"/>

  <div className="row pt-4">
    {cardData1.map((card, index) => (
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
 </>
  );
};

export default Timeline;
