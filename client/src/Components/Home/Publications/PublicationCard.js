import React from "react";
import './Publications.css'
const PublicationCard = ({ magazine }) => {
  const {
    title,
    imageURL,
      pdfURL,
  } = magazine;



  return (
    <div className="card p-3 shadow-sm h-100 publication-card">
      <div className="row g-0">
        {/* Left Image */}
        <div className="col-md-4">
          <img
            src={imageURL}
            alt={title}
            className="img-fluid rounded-start w-100 h-100"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body d-flex flex-column h-100">
            <h4>{title}</h4>
                                <p className="mb-1"><strong>Product Type:</strong> {magazine.productType || "Magazine"}</p>
                                                    <p className="mb-1"><strong>Published By:</strong> {magazine.publishedBy || "Tech Vist IT Pvt Ltd"}</p>

  <p className="mb-1">
                      <strong>Publication Month : </strong> {magazine.timestamp
                        ? new Date(magazine.timestamp.toDate()).toLocaleString("default", { month: "long" })
                        : "N/A"}
                    </p>
                                        <p className="mb-1"><strong>Mode:</strong> Print & Online</p>

            <a
              href={pdfURL}
              className="btn btn-success mt-auto align-self-start"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
