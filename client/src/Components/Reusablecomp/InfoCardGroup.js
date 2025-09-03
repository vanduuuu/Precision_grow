import React from 'react';
import '../Home/WeChoose/WeChoose.css';

const InfoCardGroup = React.memo(
  ({ cardData, bgClass = '', colClass = 'col-12 col-sm-6 col-md-6 col-lg-4' }) => {
    return (
      <div className={`${bgClass}`}>
        <div className="row justify-content-center align-items-stretch p-0">
          {cardData.map((item, index) => (
            <div key={index} className={`${colClass} pt-4 my-3 d-flex`}>
              <div
                className="info-block w-100 d-flex flex-column text-center p-3 py-5"
                style={{ background: item.bgColor }}
              >
                <div className="info-img-wrap mb-2">
                  {item.iconType === 'react-icon' && item.icon ? (
                    <item.icon
                      size={48}
                      className={`mb-2 ${!item.iconColor ? "text-success" : ""}`}
                      style={item.iconColor ? { color: item.iconColor } : {}}
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.alt || 'info-img'}
                      className="info-img img-fluid"
                      loading="lazy"
                      width="100"
                      height="100"
                    />
                  )}
                </div>

                {item.title && (
                  <h5 className="info-card-title fw-semibold mt-2">{item.title}</h5>
                )}
                <p className="info-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default InfoCardGroup;
