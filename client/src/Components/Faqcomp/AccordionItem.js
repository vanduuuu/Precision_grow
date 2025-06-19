import React from 'react';
import './FaqSection.css';
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <p className='fw-bold'>{title}</p>
        <i className={`icon ${isOpen ? 'fas fa-minus' : 'fas fa-plus'}`} aria-hidden="true"></i>
      </div>
      {isOpen && (
        <div className="accordion-content open">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(AccordionItem);
