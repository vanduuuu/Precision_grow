import React from 'react';
import 'aos/dist/aos.css';
import './Horizontalcard.css';

const Horizontalcard = ({ reverse, title, subtitle, paragraphs, listItems, image }) => {
  return (
    <div className="container">
      <div className={`hor-card card p-3 my-4 ${reverse ? 'reverse' : ''}`} style={{ maxWidth: '100%' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded" alt="Card" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* Title with scrolling background effect */}
              <h4 className="card-title">{title}</h4>
              
              {/* Render paragraphs dynamically */}
              {paragraphs.map((para, index) => (
                <p key={index} className="card-text">{para}</p>
              ))}

              {/* Bulleted list */}
              <h5>{subtitle}</h5>
              <ul className="custom-list">
                {listItems.map((item, index) => (
                  <li key={index}>
                    <span className="icon-bg">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horizontalcard;