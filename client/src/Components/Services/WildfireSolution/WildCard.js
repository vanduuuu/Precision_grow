import React from "react";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline";
import "./WildCard.css";

const WildCard = () => {
  const cards = [
    {
      title: "Fire Danger Index",
      imageUrl: "https://unsplash.it/500/500/",
      description:
        "The Fire Danger Index provides essential local fire risk mapping with a detailed nine-day forecast for better decision-making.",
    },
    {
      title: "Weather Information",
      imageUrl: "https://unsplash.it/511/511/",
      description:
        "Stay ahead with real-time weather updates including wind, temperature, and humidity to predict fire behavior.",
    },
    {
      title: "Lightning Strike",
      imageUrl: "https://unsplash.it/502/502/",
      description:
        "Get real-time lightning strike data to identify ignition points and take preventive wildfire actions quickly.",
    },
    {
      title: "Vegetation & Terrain",
      imageUrl: "https://unsplash.it/503/503/",
      description:
        "Analyze fuel maps and terrain to assess fire risk zones and plan effective prevention strategies.",
    },
  ];

  return (
    <div className="container my-5">
      <Titleunderline title="Explore Risk Assessment" tag="h3" />
      <div className="row g-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3"
            onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                >
                  <div className="overlay-title">
                    <h5>{card.title}</h5>
                  </div>
                </div>
                <div className="flip-card-back d-flex align-items-center justify-content-center text-center">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildCard;
