import React from "react";
import "./testicard.css";

const WaveCard = ({ Icon, title, text }) => {
  return (
    <div className="wave-card position-relative rounded-4">

      {/* ICON */}
      <div className="wave-icon">
        <Icon />
      </div>

      {/* CONTENT */}
      <div className="card-content1">
        <h4 className="mb-2">{title}</h4>
        <p>{text}</p>
      </div>

      {/* WAVE */}
      <div className="card-wave">
        <svg
          aria-hidden="true"
          className="w-full h-20 opacity-40 animate-[hillShift_40s_linear_infinite]"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path fill="#b8f644ff" fillOpacity="0.15" d="M0,256L80,224C160,192,320,128,480,112C640,96,800,128,960,154.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <path fill="#a4f146ff" fillOpacity="0.25" d="M0,224L48,192C96,160,192,96,288,74.7C384,53,480,75,576,106.7C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#6f9605ff" fillOpacity="0.25" d="M0,192L40,192C80,192,160,192,240,170.7C320,149,400,107,480,106.7C560,107,640,149,720,181.3C800,213,880,235,960,229.3C1040,224,1120,192,1200,165.3C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>

    </div>
  );
};

export default WaveCard;
