import React from 'react';

import './Weoffer.css';
import Titleunderline from '../../Reusablecomp/Titleunderline/Titleunderline.js';

const CardGroup = () => {
  const cardData = [
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-1.webp",
      title: "Crop Health Monitoring",
      description: "Smart Insights for Healthy Crops and Informed Farming Decisions.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-2.webp",
      title: "Crop Irrigation Monitoring",
      description: "Precision crop irrigation monitoring enhances water efficiency.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-3.webp",
      title: "Smart Farm Radar",
      description: "Radar data ensures continuous monitoring during adverse weather.",
    },
    {
      img:"https://api.ecrop.co/assets/precisiongrow/offer-4.webp",
      title: "Soil Organic Carbon",
      description: "Soil organic carbon tracking for sustainable and fertile agriculture.",
    },
    {
      img:"https://api.ecrop.co/assets/precisiongrow/offer-5.webp",
      title: "Digital Elevation Model",
      description: "Digital elevation models optimize land use and drainage planning.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-6.webp",
      title: "Agri Yield Estimator",
      description: "Accurate crop area and yield estimation for informed decisions.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-7.webp",
      title: "Live Weather Forecast",
      description: "Real-time and forecast weather updates guide agricultural planning.",
    },
    {
      img: "https://api.ecrop.co/assets/precisiongrow/offer-9.webp",
      title: "Product Traceability",
      description:"Seamless product traceability, unveiling the journey from farm to table",
    },
  ];

  return (
    <>
      <Titleunderline title="What We Offer" tag="h3"/>

      <div className="container crds">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card1 border p-2 h-100">
                <img src={card.img} className="card-img-tops2 mx-auto" width="800" height="800" loading="lazy" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text text-center">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardGroup;
