import React from "react";
import LeftTextVideo from "../../LeftTextVideo/LeftTextVideo";
import ListCompTitle from "../../ListComponent/ListCompTitle";
import "./WildfireSolution.css";
import ListBoxBg from "../../ListBoxBg/ListBoxBg";
import wildfire from '../../../assets/wildfire.mp4'
import Fire from '../../../assets/fire.webp'


const items = [
  {
    title: "FIRE DANGER INDEX",
    detail:
      "9-day forecast and mapping of the fire risk in your area.",
  },
  {
    title: "WEATHER INFORMATION",
    detail:
      "Including wind speed & direction, temperature, humidity and more.",
  },
  {
    title: "LIGHTNING STRIKE",
    detail: "Real-time lightning strike data with exact location and time of occurrence.",
  },
  {
    title: "VEGETATION & TERRAIN",
    detail:
      "Land cover and fuel maps help analyze the terrain’s condition.",
  },

];
const items1 = [
  {
    title: "20+ SATELLITES",
    detail:
      "Ensuring precise 24/7 detection with several updates per hour.",
  },
  {
    title: "AUTOMATIC NOTIFICATIONS:",
    detail:
      "Get instant Email, WhatsApp, SMS or In-App alerts for any new detections in your monitored areas.",
  },
  {
    title: "CUSTOMER DATA INTEGRATION",
    detail:
      "See your own weather stations, cameras, and sensors.",
  },
  {
    title: "LOCATION & FIRE SIZE",
    detail:
      "Receive (directly) the coordinates and affected area estimates.",
  },

];
const items2 = [
    {
      title: "LIVE FIRE TRACKING",
      detail:
        "Near-real time monitoring to track the fire area and development.",
    },
    {
      title: "ACTIVITY FEED",
      detail:
        "One overview for monitoring all active fires in your risk areas.",
    },
    {
      title: "FIRE PROPAGATION",
      detail:
        "Estimate the possible fire spread based on different information sources.",
    },
    {
      title: "INCIDENT MANAGEMENT",
      detail:
        "Coordinate actions for wildfire management and combat.",
    },
  
  ];
  const item6 =[
    {title : "FIRE ORIGIN & EVOLUTION",
      detail : "Detailed analysis from fire start to end.",
    },
    {title : "BURNT AREA",
      detail : "High-resolution mapping of burnt areas and fire severity calculation.",
    },
    {title : "LONG-TERM FIRE STATISTICS",
      detail : "Export historical fire data and analytics.",
    },
    {title : "FIRE FILTERING",
      detail : "Analyse events based on automated and manual classifications of type and cause.",
    },
  ]
const WildfireSolution = () => {

  return (
    <div>
      <LeftTextVideo
        title="WILDFIRE SOLUTION"
        title1="VALUED BY CUSTOMERS AROUND THE WORLD"
        description="Precision Grow offers the first global wildfire intelligence solution, including risk assessment, early detection, real-time monitoring, and damage analysis with data from 20+ satellites."
        buttonText="Contact Us"
        buttonLink="/contact"
        videoSrc={wildfire}
      />
      <div className="Wil-outer-div">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h3 className="greentitle">RISK ASSESSMENT</h3>
                <ListCompTitle items={items}
               />
              </div>
              <div className="col-lg-4">
                <h3 className="greentitle">EARLY DETECTION</h3>
                <ListCompTitle items={items1} />
              </div>
              <div className="col-lg-4">
                <h3 className="greentitle">REAL-TIME MONITORING</h3>
                <ListCompTitle items={items2} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ListBoxBg 
        mediaSrc={Fire}
        title="DAMAGE ANALYSIS"
        items={item6}
        textcolor="#c6e800"
        bgcolor="rgba(43, 62, 62, 0.82)"  // Adjust transparency
        textcolorP="#fff"
      />   
       </div>
  );
};

export default WildfireSolution;
