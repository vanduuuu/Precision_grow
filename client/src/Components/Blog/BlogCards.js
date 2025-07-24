import React from "react";
import { Link } from "react-router-dom";
import './Blogcard.css';

const Blogcards = ({ image, title, date, author, detailPage }) => {
  return (
    <div className="blog-card">
      <Link to={detailPage} className="text-decoration-none">
        <div className="image-container">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="img-fluid d-flex"
          />
        </div>
        <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2 px-2 py-2 rounded-pill shadow-sm">
          <img
            src="https://api.ecrop.co/assets/precisiongrow/precisiongrow_round_logo.png"
            className="card-img-topss1 rounded-top"
            alt="precisiongrow"
            width="900"
                        height="500"
          />
          &nbsp; Precision Grow
        </span>
        <div className="content-section p-3">
          <p className="meta-info">
            <strong>{author}</strong> | {date}
          </p>
          <h5 className="blog-title text-white">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Blogcards;
