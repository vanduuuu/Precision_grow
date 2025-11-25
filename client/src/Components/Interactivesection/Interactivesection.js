import React, { useState } from "react";
import { FaCloud, FaSeedling, FaSatellite } from "react-icons/fa";
import "./Interactive.css";

const services = [
  {
    id: "spa",
    title: "Smart Soil to Sensor",
    desc: "Our eCrop Smart Device delivers real-time data on soil nutrients, pest activity, and weather - giving farmers instantly actionable insights.",
    icon: <FaSeedling size={40} />,
    image: "https://vandanaaprajapati.github.io/hotel_web_design/images/services/service2.webp"
  },
  {
    id: "restaurant",
    title: "Healthy Air, Healthy Fields",
    desc: "Monitor air quality and crop conditions with precision technology to ensure healthier yields and sustainable farming practices.",
    icon: <FaCloud size={40} />,
    image: "https://vandanaaprajapati.github.io/hotel_web_design/images/services/service6.webp"
  },
  {
    id: "swimming",
    title: "Precision from Space",
    desc: "Satellite-based monitoring allows farmers to track crop health, water stress, and growth patterns from above, ensuring precise interventions.",
    icon: <FaSatellite size={40} />,
    image: "https://vandanaaprajapati.github.io/hotel_web_design/images/services/service2.webp"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="container py-5 service-menu-area">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-7 col-md-5 mb-4 mb-md-0 position-relative image-section">
          <img
            src={services[hoveredIndex].image}
            className="img-fluid rounded fade-inn"
            alt={services[hoveredIndex].title}
          />
        </div>

        {/* Right Menu */}
        <div className="col-lg-5 col-md-7 position-relative">
          <ul className="nav flex-column gap-4" role="tablist">
            {services.map((service, index) => (
              <li
                key={service.id}
                className={`nav-item slant-item slant-${index + 1}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div
                  className={`nav-link1 text-decoration-none d-flex align-items-start ${
                    hoveredIndex === index ? "active" : ""
                  }`}
                  role="tab"
                >
                  <span className="service-icon text-white me-3 overlap-icon">
                    {service.icon}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p className="fs-5 service-desc">{service.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
