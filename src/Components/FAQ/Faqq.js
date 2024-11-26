// Accordion.js
import React, { useState } from 'react';
import './Faqq.css'; // Import custom CSS for styling
import Faqig from '../../assets/abt.webp'


const AccordionItemm = ({ title, content, isOpenInitially }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleOpen}>
        <h2>{title}</h2>
        <i className={`icon ${isOpen ? 'fas fa-minus' : 'fas fa-plus'}`} aria-hidden="true"></i>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Faqq = () => {
  const items = [
    { title: 'What is a satellite-based crop health monitoring platform?',
       content: 'A satellite-based crop health monitoring platform utilizes satellite imagery and advanced analytics to assess and monitor the health of crops over large agricultural areas. It provides valuable insights to farmers/businesses/clients, etc. for better decision-making.', isOpenInitially: true },
    { title: 'How does the satellite-based crop monitoring web app work?',
       content: 'Our web app utilizes satellite imagery to provide real-time insights into crop health, irrigation and more. It captures data at regular intervals, enabling farmers to make informed decisions for optimal crop management.', isOpenInitially: false },
    { title: 'What benefits does the crop monitoring web app offer to farmers?',
       content: 'The web app empowers farmers with timely information about crop conditions, facilitating early detection of issues, optimizing irrigation and promoting sustainable farming practices, ultimately leading to increased yields.', isOpenInitially: false },
  ];

  return (
 <div className='faqouter'>
       <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='faq-imgg'>
              <img src={Faqig} alt="faqimg" className='w-100'/>
            </div>
          </div>
          <div className='col-lg-6'>
            <h1 className='faqh1'>Frequently
            Asked Questions</h1>
            <div className="accordion">
              {items.map((item, index) => (
                <AccordionItemm
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpenInitially={item.isOpenInitially}
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

export default Faqq;
