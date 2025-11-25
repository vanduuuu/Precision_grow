import React from "react";
import "./Listitem.css";

const ListItem = ({ icon, iconComponent, label, index, title, titleColor, bgClass }) => {
  return (
    <div
      key={index}
      className={`p-3 d-flex align-items-center mt-3 list-item ${bgClass || ""}`}
    >
      {/* Agar iconComponent pass hua toh usko dikhayega, warna image */}
      {iconComponent ? (
        <span className="me-3 list-ecrop-icon">{iconComponent}</span>
      ) : (
        icon && (
          <img
            src={icon}
            alt={`ecropicon${index + 1}`}
            className="me-3 list-ecrop-icon"
            loading="lazy"
            width="60"
            height="60"
          />
        )
      )}

      <div>
        {title && (
          <h6
            className="liststyleee"
            style={{ color: titleColor || "var(--list-title-color)" }}
          >
            {title}
          </h6>
        )}
        <p className="mb-0">{label}</p>
      </div>
    </div>
  );
};

export default ListItem;
