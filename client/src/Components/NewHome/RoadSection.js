import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RoadSection.css";

import Road from "../../assets/Road.webp";
import l1 from "../../assets/esg-location.webp";
import l2 from "../../assets/ecrop-location.webp";
import l3 from "../../assets/ecroptoday-location.webp";
import l4 from "../../assets/acteast-location.webp";
import l5 from "../../assets/aquatic_crop.webp";

const logos = [
  { id: 1, src: l5, label: "Aquatic Crops", link: "https://aquaticcrops.co.in/", top: "5%", left: "36%" },
  { id: 2, src: l4, label: "ActEast", link: "https://acteast.co.in/", top: "22%", left: "33%" },
  { id: 3, src: l1, label: "ESG Consultants", link: "https://esgconsultants.co.in", top: "42%", left: "25%" },
  { id: 4, src: l3, label: "ecroptoday", link: "https://ecroptoday.co.in/", top: "60%", left: "16%" },
  { id: 5, src: l2, label: "eCrop", link: "https://ecrop.co.in", top: "77%", left: "37%" }
];

function RoadSection() {
  const logoRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      logoRef.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
  el.style.opacity = 1;
  el.style.transform = "scale(1)";
  el.classList.add("logo-visible");   // pulse starts once visible

  el.nextSibling.style.opacity = 1;
} else {
  el.style.opacity = 0;
  el.style.transform = "scale(0.3)";
  // DON'T REMOVE CLASS — continuous pulse should remain only when visible
  el.nextSibling.style.opacity = 0;
}

      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center">

        {/* LEFT GRID */}
        <div className="col-lg-5 mb-4 left-content">
          <h2 className="display-6 fw-bold text-white">
            <span className="boldlook fw-bold display-2">
              Milestones of Growth - One Vision, Many Verticals
            </span>
          </h2>
          <p className="mt-3 fw-medium">
            Our ecosystem of platforms grows together under one unified direction.  
            Scroll to explore the journey.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="col-lg-7 position-relative">
          <img src={Road} alt="Road" className="img-fluid road-img" />

          {logos.map((item, idx) => (
            <div
              key={item.id}
              className="position-absolute text-center logo-wrap"
              style={{ top: item.top, left: item.left }}
            >
              <img
                ref={(el) => (logoRef.current[idx] = el)}
                src={item.src}
                className="logo-icon"
                alt={item.label}
                onClick={() => window.open(item.link, "_blank")}
              />
              <div className="logo-label">{item.label}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default RoadSection;
