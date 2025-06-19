import React from "react";
import "./WildCard.css";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline";

const WildCard = () => {
  const cards = [
    {
      title: "Fire Danger Index",
      imageUrl: "https://unsplash.it/500/500/",
      description: "The Fire Danger Index provides essential local fire risk mapping with a detailed nine-day forecast for better decision-making."
    },
    {
      title: "Weather Information",
      imageUrl: "https://unsplash.it/511/511/",
      description: "Stay ahead with real-time weather updates including wind, temperature, and humidity to predict fire behavior."
    },
    {
      title: "Lightning Strike",
      imageUrl: "https://unsplash.it/502/502/",
      description: "Get real-time lightning strike data to identify ignition points and take preventive wildfire actions quickly."
    },
    {
      title: "Vegetation & Terrain",
      imageUrl: "https://unsplash.it/503/503/",
      description: "Analyze fuel maps and terrain to assess fire risk zones and plan effective prevention strategies."
    },
  ];

  return (
    <div className="wrapper">
      <Titleunderline title="Explore Risk Assessment" tag="h3" />
      <div className="cols">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col"
            onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
          >
            <div className="container">
              <div className="Wildcards">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className="inner">
                    <p>{card.title}</p>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{card.description}</p>
                  </div>
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
