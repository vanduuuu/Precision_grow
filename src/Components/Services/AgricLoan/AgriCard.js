import React from "react";
import '../AgricLoan/AgricLoan.css'
const AgriCard = ({ title, description }) => {
  return (
    <>
    <div className="agricard1">
    <div className="agri-card">
      <p className="agri-card-title p-4">{title}</p>
      <p className="agri-card-description p-4" >{description}</p>
    </div>
    </div>
    </>
 
  );
};
  
  export default AgriCard;
  