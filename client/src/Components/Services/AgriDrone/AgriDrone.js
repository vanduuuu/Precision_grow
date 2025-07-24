import React from "react";
import { FaCheck ,FaSeedling, FaLeaf, FaClock, FaCog, FaCloudSun } from "react-icons/fa";
import './AgriDrone.css'
import Banner from "../../Reusablecomp/Banner/Banner";

const cardData = [
  {
    id: 1,
    title: "Future seeding activity",
    icon: <FaSeedling />,
    description: "By using cutting-edge sensors and imaging technology, we can accurately get crop health, monitor nutrient levels, and detect pest issues. This real-time data empowers farmers to make smarter decisions, helping them manage their fields and resources efficiently."
  },
  {
    id: 2,
    title: "Field Monitoring",
    icon: <FaLeaf />,
    description: "We provide monitoring across large farm areas, keeping an eye on irrigation levels and catching weed growth before it spreads. Our goal is to help you stay on top of everything, so your farmland stays balanced and under control."
  },
  {
    id: 3,
    title: "Spraying success",
    icon: <FaClock />,
    description: "Our drones monitor the crops before applying fertilizers, pesticides, and herbicides, ensuring they’re only sprayed where needed. This approach not only minimizes environmental impact and cuts costs but also boosts the effects of crop production."
  },
  {
    id: 4,
    title: "Optimizing Farm Growth",
    icon: <FaCog />,
    description: "Our drones keep a close eye on crop health, delivering up-to-date information to farmers. This allows them to focus their efforts where they're needed most, ultimately boosting productivity and saving time."
  },
  {
    id: 5,
    title: "Overcoming Obstacles",
    icon: <FaCloudSun />,
    description: "We gather weather and climate data to help farmers stay ahead of shifting conditions. This approach supports better risk management, ensuring crops remain strong and resilient, even when facing unpredictable weather"
  },
];

const WhyChoose = () => (
  <>
    <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Drone farming.webp"
        heading="Agri Drone"
        subheading="Elevating Agriculture To New Heights"
      />

  <div className="container why-choose-wrapper">
    <h1 className="lg-fs-6 fs-4 fw-bolder text-center">
      We revolutionize agriculture with our Drone Farming services, bringing unmatched efficiency, precision, and sustainability to the field.
Our customized drone technology gives farmers accurate, valuable insights about their fields, helping them make informed decisions.
    </h1>
    <div className="cards-side left-side">
      {cardData.slice(0, 2).map(({ id, title, icon, description }) => (
        <div key={id} className="side-card left">
          <span className="icon">{icon}</span>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>

<div className="center-circle">
  <h3 className="fw-bold">Why Choose Precision Grow?</h3>
  <ul className="center-list">
    <li><FaCheck className="check-icon" /> Advanced Tech for precise info</li>
    <li><FaCheck className="check-icon" /> Sustainable practices</li>
    <li><FaCheck className="check-icon" /> Real-time data</li>
    <li><FaCheck className="check-icon" /> Enhanced efficiency</li>
  </ul>
</div>


    <div className="cards-side right-side">
      {cardData.slice(2, 4).map(({ id, title, icon, description }) => (
        <div key={id} className="side-card right">
          <span className="icon">{icon}</span>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bottom-card">
      <div className="side-card bottom">
        <span className="icon">{cardData[4].icon}</span>
        <div>
          <h4>{cardData[4].title}</h4>
          <p>{cardData[4].description}</p>
        </div>
      </div>
    </div>
  </div>
    </>
);

export default WhyChoose;
