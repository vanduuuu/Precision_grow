import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './HoverCardList.css'; // Import the separated CSS

const HoverCardList = ({ data = [] }) => {
  return (
    <section className="cropadvisory-outer py-3">
      <div className="row gy-4">
        {data.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card shadow-sm border-0 rounded-3 crop-card d-flex flex-column">
              <img
                src={card.imageSrc}
                className="card-img-top"
                alt={card.title}
                loading="lazy"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title d-flex justify-content-between align-items-center">
                  {card.title}
                  <MdKeyboardArrowDown className="arrow-icon" />
                </h4>
                <p className="card-text content-text fs-6">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoverCardList;
