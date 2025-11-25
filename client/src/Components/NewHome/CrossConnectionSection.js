import React, { useState, useEffect } from "react";
import LeafNavigation from "./LeafNavigation";
import ecp from '../../assets/ecp-ban.webp'
import ecp2 from '../../assets/ecroptoday-banner1.webp'
import './CrossConnectionSection.css'
import GlowingButton from "./GlowingButton";
import TwoColumnSection from "./TwoColumnSection";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CrossConnectionSection = () => {
  const [showLeaf, setShowLeaf] = useState(false);

  useEffect(() => {
    const section = document.getElementById("timeline-container");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLeaf(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="timeline-container">

        {/* 🔵 ECROP SECTION — LEFT IMAGE + RIGHT CONTENT */}
     <section id="ecrop" className="ecrop-section position-relative mt-4">
      
      <div className="position-relative">
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="content-box p-4 p-lg-5 bg-white bg-opacity-75">
              <h2 className="boldlook mb-3">eCrop – India’s Smartest Farming Device</h2>
              <p className="fs-5 mb-4">
                eCrop brings real-time soil health, weather intelligence, and crop insights right to your farm, helping you make faster and more accurate decisions every day. From nutrient status to moisture levels and pest activity, everything is tracked and delivered instantly — so you grow with clarity, not guesswork.
              </p>

              <div className="d-flex flex-wrap gap-3">
              
<GlowingButton
  text="Learn More"
  bg="linear-gradient(45deg, #53eadeff, #02746a)"
  glow="#02746a"
  gradient={true}
    link="/ecrop"
    
/>
<GlowingButton
  text="View Website"
  outline={true}
  bg="#02746a"
  color="#02746a"
  glow="#02746a"
    link="https://ecrop.co.in"
      target="_blank"

/>
{/* <GlowingButton
  text="Visit Website"
  bg="#167a53"
  glow="#00ff99"
  link="https://ecrop.co.in"
  target="_blank"
/>
<GlowingButton
  text="Black Button"
  bg="#000"
  color="#fff"
  glow="#00ffcc"
/> */}

  


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background image */}
      <img src={ecp} alt="eCrop Banner" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />

    </section>

      <section id="ecroptoday" className="position-relative p-0">
    <div className="position-relative text-center">
      {/* BACKGROUND IMAGE */}
      <img
        src={ecp2}
        className="img-fluid w-100"
        alt="eCropToday Banner"
      />

      {/* CENTERED BUTTON */}
      <div
        className="position-absolute mt-3 start-50 translate-middle"
      >
        <GlowingButton
          text="Explore Publications"
          bg="linear-gradient(45deg, #b8d54f, #1f7308ff)"
          glow="#fef602ff"
          gradient={true}
          link="/ecroptoday.co.in"
        />
      </div>
    </div>
</section>


     <section id="esg" className="esg-section py-3">
      <div className="container pt-5">
         <TwoColumnSection
      reverse={false}
      titleColor="#357f82"
      toptitleColor="#FFF"
        smallTitle="ESG Consulting"
  showButton={true}
  buttonText="Explore ESG Services"
  buttonLink="https://esgconsultants.co.in/"
  buttonGradient={true} 
  buttonBg="linear-gradient(45deg, #0f9d58, #357f82, #43a047)"  
  buttonColor="#fff"
  buttonSize="lg"
  title="Explore Our ESG Solutions"
  paragraphs={[
    "Building a sustainable, responsible, and future-ready business begins with ESG. Discover how our environmental, social, and governance strategies can strengthen your growth and long-term impact.",
    
   
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
  imageSrc="https://esgconsultants.co.in/static/media/WEB%20BANNER%20SEC_2.3c52117bf9368ec65a4b.webp"
/>
      </div>
</section>


        {/* 🔴 ECROPTODAY — NEWS STYLE SECTION */}
        <section
          id="acteast"
          style={{
            background: "#BE123C",
          }}
        >
         <section className="acteast-wrapper py-5">
      <div className="container">
        <div className="glass-card mx-auto p-5">

          {/* Subtitle */}
<span className="badge rounded-pill px-3 py-2 mb-3"
          style={{ background: "rgba(0,255,170,0.15)", color: "#75ffd7" }}>
          Corporate & Regional Offices
        </span>
          {/* Title */}
          <h2 className="boldlook text-white mb-3">
            ActEast – Connecting Northeast India to the World
          </h2>

          {/* Paragraph */}
          <p className="lead text-light mb-4">
            ActEast operates from Navi Mumbai and Guwahati, bridging regional 
            farmers with global consumers through sustainable sourcing and 
            transparent distribution.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
          
            <GlowingButton
          text="Visit ActEast Website"
          bg="linear-gradient(45deg, #be123c, #357f82, #43a047)"
          glow="#fef602ff"
          gradient={true}
          link="https://acteast.co.in/"
        />
          </div>

        </div>
      </div>
    </section>
        </section>


      </div>

      {showLeaf && <LeafNavigation />}
    </>
  );
};

export default CrossConnectionSection;
