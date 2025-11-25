import React, { useState } from "react";
import "../Faqcomp/FaqSection.css";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline";

const FaqSection = ({ data = [], image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <Titleunderline title="Frequently Asked Questions" tag="h2" />

        <div className="row mt-3 align-items-start">
          {/* Left Small Image — only show on large screens */}
          {image && (
            <div className="col-lg-4 d-none d-lg-block text-center mb-4 mb-md-0">
              <img
                src={image}
                alt="FAQ illustration"
                className="faq-left-img img-fluid"
              />
            </div>
          )}

          {/* Right FAQ Accordion */}
          <div className={image ? "col-lg-8 col-12" : "col-12"}>
            <div className="row g-3">
              {data.map((faq, index) => (
                <div key={index} className="col-12">
                  <div className="faq-item shadow-sm p-3 bg-white rounded">
                    <button
                      className={`faq-question ${
                        openIndex === index ? "active" : ""
                      }`}
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span>Q. {faq.question}</span>
                      <span className="faq-symbol">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`faq-answer ${
                        openIndex === index ? "open" : ""
                      }`}
                    >
                      <p>
                        <span>A.</span> {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
