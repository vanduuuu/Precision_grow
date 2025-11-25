import React from "react";
import "./Addecrop.css";
import pglogo from "../../../assets/icons_About/Precision-Grow.webp";
import azadilogo from "../../../assets/icons_About/Aazadi.webp";
import { FaSeedling, FaCloudSun, FaTint, FaBug, FaLightbulb } from "react-icons/fa";
import devicelogo from "../../../assets/icons_About/ecrop_3_0_1.webp"; // 👈 Add your device PNG here

const Addecrop = () => {
  const features = [
    { icon: <FaSeedling />, text: "Real-time crop health monitoring" },
    { icon: <FaCloudSun />, text: "Weather forecasts and alerts" },
    { icon: <FaTint />, text: "Soil moisture and nutrient levels" },
    { icon: <FaBug />, text: "Pest and disease detection" },
    { icon: <FaLightbulb />, text: "Personalized farming tips" },
  ];

  return (
    <section className="addecrop-section">
      <div className="overlay-gradient"></div>
      <div className="text-center addecroptxt ">
           <h2 className="display-4 fw-bold text-white mb-3">
       YOUR OWN AGRICULTURE ASSISTANT
      </h2>
      <h5 className="mb-4 fs-3 text-white animate-subtext">
        Get real-time data on your crops and make informed decisions.
      </h5>
      </div>
      <div className="container">
        <div className="row align-items-center">
        {/* Left Content */}
<div className="col-lg-8 col-md-8 position-relative">
  <div className="row align-items-center">
    {/* Text Content */}
    <div className="col-lg-12 text-lg-start">
   

      <div className="info-box p-4 rounded-4 shadow-sm">
        <p className="t1">Manufactured & Marketed by</p>
        <h3 className="fw-bold display-6 m-0 txtt-color1">
          Precision <span className="textt-color">Grow</span>
        </h3>
        <p className="mt-2">(A Unit of Tech Visit IT Pvt Ltd)</p>

        <div className="mt-3">
          <p className="t1">Developed & Patented by</p>
          <h3 className="fw-semibold">
            ICAR - Central Tuber Crops Research Institute
          </h3>
        <div className="d-flex flex-wrap gap-2 mt-3">
  <span className="t2">
    Patent No. 523325
  </span>
  <span className="t2">
    Toll Free No. 1800 268 8989
  </span>
</div>


          {/* All Logos in One Row */}
<div className="logo-list mt-4 text-center text-lg-start">
  <div className="container-fluid px-0">
    <div className="row justify-content-center justify-content-lg-start g-3">
      {/* First row - 4 logos */}
      <div className="col-6 col-md-2">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/logo-3.webp"
          alt="logo3"
          className="img-fluid logo-item"
        />
      </div>
      <div className="col-6 col-md-2">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/logo-4.webp"
          alt="logo4"
          className="img-fluid logo-item"
        />
      </div>
      <div className="col-6 col-md-2">
        <img src={pglogo} alt="pglogo" className="img-fluid logo-item" />
      </div>
      <div className="col-6 col-md-2">
        <img src={azadilogo} alt="azadilogo" className="img-fluid logo-item" />
      </div>

      {/* Second row - 4 certification logos */}
      <div className="col-6 col-md-4">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/cer-logo-1.webp"
          alt="cert1"
          className="img-fluid logo-item"
        />
      </div>
      <div className="col-6 col-md-2">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/cer-logo-2.webp"
          alt="cert2"
          className="img-fluid logo-item"
        />
      </div>
      <div className="col-6 col-md-2">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/cer-logo-3.webp"
          alt="cert3"
          className="img-fluid logo-item"
        />
      </div>
      <div className="col-6 col-md-2">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/cer-logo-4.webp"
          alt="cert4"
          className="img-fluid logo-item"
        />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>

  {/* ✅ Device image absolutely positioned */}
  <img
    src={devicelogo}
    alt="Device Stand"
    className="img-fluid device-img position-absolute"
  />
</div>



          {/* Right Feature Cards */}
          <div className="col-lg-4 col-md-4">
            <div className="feature-grid">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="icon-wrapper">{feature.icon}</div>
                  <p className="fs-5 m-0">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addecrop;
