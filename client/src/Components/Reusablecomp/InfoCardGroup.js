import React from 'react';
import '../Home/WeChoose/WeChoose.css';

const InfoCardGroup = ({ cardData, bgClass = '' }) => {
    // Helper function to map bgColor to a corresponding class
    const getBgColorStyle = (color) => {
      return { background: color }; // Use the gradient directly as the background style
    };
  
    return (
      <section className={`container info-section ${bgClass}`}>
  <div className="row justify-content-center align-items-stretch">
    {cardData.map((item, index) => (
      <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 py-4 d-flex lg-mb-5 mb-2">
        <div
          className="info-block w-100 d-flex flex-column text-center p-3 py-5"
          style={{ background: item.bgColor }}
        >
          <div className="info-img-wrap mb-2">
            <img
              src={item.img}
              alt={item.alt || 'info-img'}
              className="info-img img-fluid"
              loading="lazy"
            />
          </div>
          {item.title && (
            <h5 className="info-card-title fw-semibold mt-2">{item.title}</h5>
          )}
          <p className="info-text">{item.text}</p>
        </div>
      </div>
    ))}
  </div>

      </section>
    );
  };
  

export default InfoCardGroup;
