import React from "react";
import "./AddecropNew.css";
import pglogo from "../../assets/icons_About/Precision-Grow.webp";
import azadilogo from "../../assets/icons_About/Aazadi.webp";
import devicelogo from "../../assets/icons_About/ecrop_3_0_1.webp";

import { FaSeedling, FaCloudSun, FaTint, FaBug, FaLightbulb } from "react-icons/fa";

const AddecropNew = () => {
  const features = [
    { icon: <FaSeedling />, text: "Real-time crop health monitoring" },
    { icon: <FaCloudSun />, text: "Weather forecasts and alerts" },
    { icon: <FaTint />, text: "Soil moisture and nutrient levels" },
    { icon: <FaBug />, text: "Pest and disease detection" },
    { icon: <FaLightbulb />, text: "Personalized farming tips" },
  ];

  return (
    <section className="premium-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="heading-premium">YOUR OWN AGRICULTURE ASSISTANT</h2>

            <p className="sub-premium">
              Get real-time data on your crops and make informed decisions.
            </p>

            <div className="glass-box mt-4">
              <p className="label">Manufactured & Marketed by</p>

              <h3 className="brand-title">
                Precision <span>Grow</span>
              </h3>
              <p className="small">(A Unit of Tech Visit IT Pvt Ltd)</p>

              <p className="label mt-3">Developed & Patented by</p>

              <h3 className="ctcri">ICAR - Central Tuber Crops Research Institute</h3>

              <div className="badges mt-3">
                <span>Patent No. 523325</span>
                <span>Toll Free No. 1800 268 8989</span>
              </div>

              {/* LOGOs */}
              <div className="logo-flex mt-4">
                <img src="https://api.ecrop.co/assets/precisiongrow/logo-3.webp" alt="" />
                <img src="https://api.ecrop.co/assets/precisiongrow/logo-4.webp" alt="" />
                <img src={pglogo} alt="" />
                <img src={azadilogo} alt="" />
                <img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-1.webp" alt="" />
                <img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-2.webp" alt="" />
                <img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-3.webp" alt="" />
                <img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-4.webp" alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 premium-right">

            <div className="feature-grid-premium">
              {features.map((f, i) => (
                <div className="feature-premium" key={i}>
                  <div className="icon-circle">{f.icon}</div>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>

           

          </div>
        
        </div>
      </div>
         {/* DEVICE IMAGE */}
            <div className="device-holder">
              <img src={devicelogo} className="device-float" />
            </div>
    </section>
  );
};

export default AddecropNew;
