// CardIcon.js
import React from "react";
import '../../Services/CropConsultancy/CropConsultancy.css'
const CardIcon = ({ id, image, title, description, icon: Icon }) => {
  return (
    <div className="card border-0 h-100 bg-transparent">
      {/* Image + Icon wrapper */}
      {(image || Icon) && (
        <div className="position-relative">
          {image && (
            <img
              src={image}
              className="card-img-top"
              alt={title || "card"}
              loading="lazy"
            />
          )}
          {Icon && (
            <div className="bottom-left-icon text-white d-flex align-items-center justify-content-center">
              <Icon className="icon" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {(title || description) && (
        <div className="my-4">
          {title && <h4 className="fw-semibold">{title}</h4>}
          {description && <p className="text-secondary mb-0">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default CardIcon;
