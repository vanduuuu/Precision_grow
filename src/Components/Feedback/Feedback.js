 

import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import Modal from 'react-modal';


const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  
  // Handle star click for rating
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // Handle recommendation
  const handleRecommendationChange = (value) => {
    setRecommendation(value);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackType: '',
    message: '',
    recommendation: '', // Add recommendation to formData
    rating: 0  
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Include recommendation and rating in formData
    const dataToSubmit = {
      ...formData,
      recommendation,
      rating
    };

    try {
      const response = await axios.post('"http://13.202.43.201:5000/api/feedback/submit', dataToSubmit);

      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          feedbackType: '',
          message: '',
          recommendation: '',
          rating: 0
        });
        setModalIsOpen(true); // Open modal on success
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="main_container">
      <div id="container">
      
        <form onSubmit={handleSubmit} role="form" id="contact_form">
        <div id="feed-heading">
        <h1>&bull; Feedback Form &bull;</h1>
        <h4 style={{ marginBottom: "30px" }}>
          We would appreciate it if you could take a moment <br />
          to give us your feedback on our services.
        </h4>
        </div>
          <div className="feedback-container">
            <div className="rate">
              <h5 style={{ margin: "0px" }}>
                Overall, how satisfied are you with our services?
              </h5>
              <p className='rateof'>
                Rate the quality of service
              </p>  
            </div>
            <div className='clear'></div>
            <div className="emoji-container">
              <i
                className="far fa-regular fa-face-angry fa-3x"
                style={{ transform: `translateX(-${(rating - 1) * 50}px)`, color: rating >= 1 ? 'red' : 'rgb(18, 56, 56)' }}
              ></i>
              <i
                className="far fa-regular fa-face-frown fa-3x"
                style={{ transform: `translateX(-${(rating - 1) * 50}px)`, color: rating >= 2 ? 'orange' : 'rgb(18, 56, 56)' }}
              ></i>
              <i
                className="far fa-regular fa-face-meh fa-3x"
                style={{ transform: `translateX(-${(rating - 1) * 50}px)`, color: rating >= 3 ? '#146E6F' : 'rgb(18, 56, 56)' }}
              ></i>
              <i
                className="far fa-regular fa-face-smile fa-3x"
                style={{ transform: `translateX(-${(rating - 1) * 50}px)`, color: rating >= 4 ? '#06aa84' : 'rgb(18, 56, 56)' }}
              ></i>
              <i
                className="far fa-regular fa-face-laugh fa-3x"
                style={{ transform: `translateX(-${(rating - 1) * 50}px)`, color: rating >= 5 ? 'green' : 'rgb(18, 56, 56)' }}
              ></i>
            </div>
            <div className='clear'></div>
            <div className="rating-container">
              {Array.from({ length: 5 }, (_, index) => (
                <i
                  key={index}
                  className={`fas fa-regular fa-star ${rating > index ? 'active' : ''}`}
                  onClick={() => handleStarClick(index)}
                ></i>
              ))}
            </div>

            <input type="hidden" name="rating" id="rating" value={rating} />
          </div>


          <div className='clear'></div>

          <div>
          <div className="name">
            <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            id="name_input" 
            required 
            value={formData.name}
            onChange={handleChange}
            />
          </div>
          <div className="email">
            <input 
            type="email" 
            placeholder="E-mail" 
            name="email" 
            id="email_input" 
            required
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div className='clear'></div>
          <div className="telephone">
            <input 
            type="text" 
            placeholder="Contact Number" 
            name="phone" 
            id="telephone_input" 
            required
            value={formData.phone}
            onChange={handleChange}
            />
          </div>
          <div className="feedbackType">
            <select 
            name="feedbackType" 
            id="feedbackType" 
            required
            value={formData.feedbackType}
            onChange={handleChange}
            >
              <option disabled hidden>
                Type of Feedback
              </option>
              <option>General Feedback</option>
              <option>Complaint</option>
              <option>Suggestions</option>
              <option>Other</option>
            </select>
          </div>
          <div className='clear'></div>
          <div className="message">
            <textarea 
            name="message" 
            placeholder="Please share your experience or Suggestions with us." 
            id="message_input" 
            cols="30" rows="5" 
            required
            value={formData.message}
            onChange={handleChange}
            ></textarea>
          </div>
          <div className="friend">
            <p style={{ margin: "19px 0px 7px 0px;" }}>Would you recommend us to your friends?</p>
            <div className="switch">
              <input
                type="radio"
                name="recommendation"
                className="button"
                id="yes"
                checked={recommendation === "Yes"}
                onChange={() => handleRecommendationChange("Yes")}
              />
              <label className="label" htmlFor="yes">Yes</label>
              <input
                type="radio"
                name="recommendation"
                className="button"
                id="no"
                checked={recommendation === "No"}
                onChange={() => handleRecommendationChange("No")}
              />
              <label className="label" htmlFor="no">No</label>
              <span className="switchFilter"></span>
            </div>
          </div>
          <div className="submit" style={{ alignSelf: "center", display: "grid" }}>
            <input type="submit" value="Submit Review" id="form_button" />
          </div>
          </div>
        </form>
        <div className='clear'></div>
      </div>
       {/* Modal for success message */}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Success Message"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default FeedbackForm;

 

