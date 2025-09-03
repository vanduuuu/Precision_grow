import React from "react";
import WildCard from '../../Services/WildfireSolution/WildCard.js'
import { Helmet } from 'react-helmet-async';
import Banner from "../../Reusablecomp/Banner/Banner.js";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import Featurecard from "../../Reusablecomp/Featurecard/Featurecard.js";

const WildfireSolution = () => {
const wildfiedata=[
    {
      title: "20+ Satellites",
      description:
        "With the power of over 20+ satellites, our system ensures precise, continuous monitoring of fire-prone areas. Updates are made multiple times per hour, providing real-time insights and helping to detect wildfires early, no matter the time or location.",
      duration: "1000",
    },
    {
      title: "Instant Alert Throught e-Crop App",
      description:
        "Receive instant alerts through e-Crop with automatic notifications. Whether it's a sudden wildfire threat or a change in weather conditions, stay informed and act fast with updates directly to your device.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Customer Data Integration",
      description:
        "Integrate your existing weather stations, cameras, and sensors seamlessly with our platform. This centralized system allows for a comprehensive view of your local fire risk factors, giving you more accurate and actionable information for wildfire management.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Location & Fire Size",
      description:
        "Get precise coordinates and estimated fire size, allowing for more efficient resource allocation and response planning. Knowing the exact location and size of a fire can make a huge difference in how quickly and effectively it’s controlled.",
      aos: "fade-up",
      duration: "1000",
    }
  ]
  const realMont = [
    {
      title: "Live Fire Tracking",
      description:
        "Monitor the wildfire's progression with near-real-time tracking data, allowing for swift action and resource deployment. Our live fire tracking system helps you stay on top of the situation, ensuring that fire measures are implemented without delay.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Activity Feed",
      description:
        "Stay updated with a continuous activity feed that includes key data like wind speed, temperature, humidity, and more. This real-time feed is vital for understanding the evolving conditions of a fire and adjusting strategies accordingly.",
      aos: "fade-down",
      duration: "2000",
    },
    {
      title: "Fire Propagation",
      description:
        "Estimate fire spread with advanced analysis, using multiple data sources to predict how the wildfire will move. This helps anticipate risk zones and allows for more effective evacuation plans and fire containment measures.",
      aos: "fade-up",
      duration: "2000",
    },
     {
      title: "Incident Management",
      description:
        "Efficient incident management is key to successful wildfire response. Our platform allows for coordinated action between teams, streamlining decision-making and ensuring that resources are deployed quickly to combat the wildfire.",
      aos: "fade-down",
      duration: "2000",
    },
  ];
  return (

    <div>
      <Helmet>
        <title>Wildfire Solutions for Smart & Sustainable Farming | Precision Grow</title>
        <meta name="description" content="Protect your crops with Precision Grow’s wildfire solutions. Leverage smart farming tools and IoT devices to ensure sustainable and resilient agriculture." />
        <meta name="keywords" content="wildfire detection agriculture, satellite-based wildfire alert, farm fire prevention" />
       
        <link rel="canonical" href="https://precisiongrow.co.in/wildfire-solution" />
      </Helmet>
{/* banner*/}
<Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/wildfire intelligence solution.webp"
          heading="Wildfire Solution"
          subheading="Prevent wildfires and build fire resistant future."
        />
      {/* --------------------------------------------------------wildfire section------------------------------------------------------------------------------------- */}
      
      

      
      <div className="container" >
    <p className="text-center wildfire mt-4 fs-5 fw-bold" >
        We offer the first global wildfire intelligence solution, including risk assessment, early detection, real-time monitoring, and damage analysis with data from 20+ satellites.
        Precision Grow provides farmers with the first global wildfire intelligence tool, offering early detection, real-time updates, and damage insights using data from 20+ satellites. Stay ahead of the flames and safeguard your land, crops, and future with smart, satellite-driven solutions.
    </p>
    <section data-aos="fade-up" data-aos-duration="3000">
               <Titleunderline title="Early Detection" tag="h1"/>


  <div className="row">
    {wildfiedata.map((item, index) => (
      <div className="col-xl-3 col-lg-6 col-md-6 col-12 mb-4" key={index}>
        <Featurecard
          title={item.title}
          description={item.description}
          aos={item.aos}
          duration={item.duration}
          customClass="card-height2"
          bgColor="#f2f0bb"
          descColor="#7f3407"
          titleColor="#3c1f0e"
        />
      </div>
    ))}


  </div>


    </section>
</div>
<WildCard />
<div className="container">
  <Titleunderline title="Real-Time Monitoring" tag="h3"/>
  <div className="row justify-content-center">
              {realMont.map((item, index) => (
                <div className="col-xl-3 col-lg-6 col-md-6 mb-4" key={index}>
                  <Featurecard
                  key={item.title}
                    title={item.title}
                    description={item.description}
                    aos={item.aos}
                    duration={item.duration}
                    customClass="card-height2"
                    bgColor="#357f82"
                    descColor="white"
                    titleColor="white"
                  />
                </div>
              ))}
            </div>
            </div>
    {/* --------------------------------------------------------wildfire section------------------------------------------------------------------------------------- */}
    <section className="d-flex justify-content-center align-items-center " data-aos="fade-up" data-aos-duration="3000">
  <div className="container row damage">
    {/* Left Content */}
    <div className="col-lg-6 col-md-12 ">
      <h2 className="gradient-text fw-bold mb-3">Damage Analysis</h2>
      
      {[
        { title: "Fire Origin & Evolution", text: "Detailed analysis from fire start to end, ensuring overall accurate assessment." },
        { title: "Burnt Area", text: "Calculating fire severity and mapping burned regions in high resolution." },
        { title: "Long-Term Fire Statistics", text: "You can track the behavior and effects of fires over time by accessing and exporting historical fire data." },
        { title: "Fire Filtering", text: "Analyze incidents based on automated and manual classification of type and cause." } 
      ].map((item, index) => (
        <div key={index} className="d-flex align-items-start mb-3">
          {/* Icon on Left */} 
          <img
            src="https://img.icons8.com/emoji/48/000000/fire.png"
            alt="Fire Icon"
            className="me-3 icon-img"
            width={32}
            loading="lazy"
          />
          {/* Text on Right */}
          <div>
            <strong>{item.title}</strong>&nbsp; {item.text}
          </div>
        </div>
      ))}
    </div>

    {/* Right Image */}
    <div className="col-lg-6 col-md-12 p-3 img-container damages ">
      <img 
        src="https://api.ecrop.co/assets/precisiongrow/wildfire3.webp" 
        alt="wild3" 
        className="img-fluid" 
        loading="lazy" 
     
      />
    </div>

  </div>
</section>
</div>

  );
};

export default WildfireSolution;
