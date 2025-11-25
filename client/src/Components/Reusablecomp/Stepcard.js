import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Stepcard = ({ icon: Icon, title, description, aosType = "fade-up", aosDelay = 0 }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className="position-relative text-center p-4 rounded-4 shadow-sm border-0 mx-auto"
      style={{
        background: "linear-gradient(135deg, #f3f9f0, #e9f7e3)",
        transition: "all 0.4s ease",
        maxWidth: "350px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px) scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
    >
      {/* Decorative ring */}
      <div
        className="position-absolute rounded-circle"
        style={{
          top: "-10px",
          right: "-10px",
          width: "50px",
          height: "50px",
          background: "radial-gradient(circle, rgba(139,187,62,0.4) 0%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      {/* Icon */}
      <div
        className="d-flex justify-content-center align-items-center mb-3 mx-auto"
        style={{
          height: "60px",
          width: "60px",
          borderRadius: "18px",
          backgroundColor: "#8bbb3e",
          boxShadow: "0 4px 10px rgba(139,187,62,0.3)",
        }}
      >
        <Icon className="text-white fs-3" />
      </div>

      {/* Title */}
      <h5 className="fw-bold text-success mb-2" style={{ letterSpacing: "0.5px" }}>
        {title}
      </h5>

      {/* Description */}
      <p className="text-secondary small mb-0">{description}</p>
    </div>
  );
};

export default Stepcard;
