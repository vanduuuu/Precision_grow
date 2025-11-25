import React, { useState, useEffect } from "react";
import "./LeafNav.css";
import ecroptoday from '../../assets/ecroptoday-location.webp'
import esg from '../../assets/esg-location.webp'
import ecrop from '../../assets/ecrop-location.webp'
import acteast from '../../assets/acteast-location.webp'
const LeafNavigation = ({ visible = true }) => {
  const sections = [
    { id: "ecrop", label: "E-Crop", logo: ecrop },
    { id: "ecroptoday", label: "Ecroptoday", logo: ecroptoday },
    { id: "esg", label: "ESG Consultants", logo: esg },
    { id: "acteast", label: "ActEast", logo: acteast },
  ];

  const [activeSection, setActiveSection] = useState("");
  const [hovered, setHovered] = useState(null);

  // Detect active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`leaf-navigation ${visible ? "show" : ""}`}>
      {sections.map(({ id, label, logo }) => (
        <div
          key={id}
          className={`leaf ${activeSection === id ? "active" : ""}`}
          onClick={() => handleScroll(id)}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={logo}
            alt={label}
            className="brand-logo"
            loading="lazy"
          />

          {/* Label: show on hover or when active */}
          {(hovered === id || activeSection === id) && (
            <div className="tooltip-label">{label}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeafNavigation;
