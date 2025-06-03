import React, { useState } from 'react';
import './FaqSection.css';
import AccordionItem from './AccordionItem.js';

const FaqSection = ({ data, variant = 'yellow' }) => {
  const [currentOpenIndex, setCurrentOpenIndex] = useState(null); // Track open item

  const handleAccordionClick = (index) => {
    // Toggle the state for the clicked item
    setCurrentOpenIndex(currentOpenIndex === index ? null : index);
  };

  const gradientClass = `faqimg-container ${variant}`;  // Container for gradient

  return (
    <div className="faqouter">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              {/* Apply gradient only behind the image */}
              <div className={`faq-imgg ${gradientClass}`}>
                <img src="https://api.ecrop.co/assets/precisiongrow/FAQ-img.png" loading="lazy" alt="Illustration representing Frequently Asked Questions" className="faqimg" />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="h2 faqh1">Frequently Asked Questions</p>
              <div className="accordion">
                {data.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={currentOpenIndex === index} // Check if this item is open
                    onClick={() => handleAccordionClick(index)} // Pass click handler
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
