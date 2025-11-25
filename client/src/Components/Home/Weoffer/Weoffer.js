import React from "react";
import "./Weoffer.css";

const Weoffer = ({ image, title, subtitle }) => {
  return (
    <div className="offer-card">
      <div className="offer-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="offer-gradient"></div>
        <div className="offer-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Weoffer;
