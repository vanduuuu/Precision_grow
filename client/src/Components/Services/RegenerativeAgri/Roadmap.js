import React from "react";
import './Roadmap.css';

const Roadmap = ({
  cards = [],                  // cards data
  animation = "fade-up",       // AOS animation
  duration = 2000,             // AOS duration
  containerClass = "",         // optional extra container classes
  colClass = "col-lg-3 col-md-4 col-sm-6" // default grid column classes
}) => {
  if (!Array.isArray(cards) || cards.length === 0) {
    return <div>No roadmap data available.</div>;
  }

  return (
    <div className={`container ${containerClass}`}>
      <div className="row justify-content-center">
        {cards.map((card) => (
          <div
            className={`${colClass} mb-4`}  // use dynamic column classes
            key={card.id}
            data-aos={animation}
            data-aos-duration={duration}
          >
            <div className="roadmap-card text-center">
              <img
                className="roadmap-img img-fluid"
                src={card.image}
                alt={card.title}
                loading="lazy"
              />
              <div className="roadmap-content">
                <h5 className="roadmap-title">{card.title}</h5>
                <p className="roadmap-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
