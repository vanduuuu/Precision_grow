import React from 'react';
import './Listitem.css'
const ListItem = ({ icon, label, index, title }) => {
  return (
    <div key={index} className="d-flex align-items-center mt-3">
      <img src={icon} alt={`ecropicon${index + 1}`} className="me-3 list-ecrop-icon" loading="lazy"/>
      <div>
{title && (
  <h6
    className="liststyleee">
    {title}
  </h6>
)}        <p className="mb-0">{label}</p>
      </div>
    </div>
  );
};

export default ListItem;
