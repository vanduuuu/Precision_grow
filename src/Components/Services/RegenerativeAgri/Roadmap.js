import React from "react";
import './Roadmap.css';

const RoadMap = [
  {
    id: 1,
    title: "Cover Crops",
    description: "Planting cover crops to protect and enrich the soil, prevent erosion, and enhance biodiversity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_1.webp",
  },
  {
    id: 2,
    title: "Reduced Tillage",
    description: "Minimizing soil disturbance to maintain soil structure and preserve soil microorganisms.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_2.webp",
  },
  {
    id: 3,
    title: "Diverse Crop Rotations",
    description: "Implementing diverse crop rotations to break pest and disease cycles, improving soil structure and biodiversity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_3.webp",
  },
  {
    id: 4,
    title: "Agroforestry",
    description: "Integrating trees and shrubs into agricultural landscapes to provide habitat for wildlife and improve soil and water health.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_4.webp",
  },
  {
    id: 5,
    title: "Water Management",
    description: "Implementing practices such as rainwater harvesting, efficient irrigation systems, and contour farming.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_5.webp",
  },
  {
    id: 6,
    title: "Integrated Pest Management (IPM)",
    description: "Using natural predators, diversified planting, and biological controls to manage pests and reduce chemical pesticides.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_6.webp",
  },
  {
    id: 7,
    title: "Long-Term Fire Statistics",
    description: "Exporting historical fire data analytics for long term fire statistics and risk assessment.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_7.webp",
  },
  {
    id: 8,
    title: "Managed Grazing",
    description: "Utilizing planned rotational grazing to improve soil health and reduce carbon sequestration.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_8.webp",
  },
  {
    id: 9,
    title: "Composting and Organic Amendments",
    description: "Adding compost or organic matter to enhance soil fertility and microbial activity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_9.webp",
  },
  {
    id: 10,
    title: "Soil Health",
    description: "Emphasizing increased soil organic matter and improving nutrient cycling, water retention, and carbon sequestration.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_10.webp",
  },
  {
    id: 11,
    title: "Local and Community Focus",
    description: "Supporting local food systems and fostering community involvement to create more resilient agriculture.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_11.webp",
  }
];

const Roadmap = () => {
  return (
    <div className="container roadmaps" >
      {Array.isArray(RoadMap) && RoadMap.length > 0 ? (
        <div className="card-grouppp">
          {RoadMap.map((card) => (
            <div className="roadmap-card" key={card.id} data-aos="fade-up" data-aos-duration="2000" >
              <img className="roadmap-img img-fluid" src={card.image} alt={card.title} loading="lazy" />
              <div className="roadmap-content">
                <h5 className="roadmap-title">{card.title}</h5>
                <p className="roadmap-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No card data available.</div>
      )}
    </div>
  );
};

export default Roadmap;
