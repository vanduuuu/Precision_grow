import React from "react";
import './CardBorderGrid.css';

const CardBorderGrid = ({
  cardinfo,
  colsLg = 4,
  titleClass = "custom-title",
  textClass = "custom-text"
}) => {
  const lgClass = `row-cols-xl-${colsLg}`;

  return (
    <div className="container" data-aos="fade-up" data-aos-duration="3000">
      <div className={`row row-cols-1 justify-content-center row-cols-md-2 ${lgClass} g-0`}>
        {cardinfo.map((card, index) => {
          const isLastInRow = (index + 1) % colsLg === 0;
          const borderEndClass = isLastInRow ? "" : "border-end mobile-border-transparent";

          return (
            <div key={index} className="d-flex">
              <div className={`card agricards flex-fill text-center py-2 p-lg-3 ${borderEndClass} border-0`}>
                
                {/* Render Icon or Image */}
                {card.icon ? (
                  <div className="mb-3 icon-wrapper">
                    {React.createElement(card.icon, { size: 50 })}
                  </div>
                ) : card.image ? (
                  <img
                    src={card.image}
                    className="card-img-top mx-auto mb-3"
                    alt={card.title}
                    loading="lazy"
                  />
                ) : null}

                <div className="card-title p-0 card-body d-flex flex-column align-items-center">
                  <h5 className={`fs-4 fw-bold ${titleClass}`}>{card.title}</h5>
                  <p className={`${textClass}`}>{card.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBorderGrid;
