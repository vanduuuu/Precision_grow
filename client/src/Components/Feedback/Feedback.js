import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import Modal from 'react-modal';
import {
  FaRegAngry,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegLaugh,
  FaStar,
  FaTimes, // 👈 Close icon import
} from 'react-icons/fa';

Modal.setAppElement('#root');

const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState(""); // "Yes" / "No"
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackType: '',
    message: '',
    domain: 'Feedback',
    rating: 0,
  });

  const handleStarClick = (index) => setRating(index + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = { 
      ...formData, 
      recommendation: recommendation === "Yes", // 👈 boolean conversion
      rating 
    };

    try {
      const response = await axios.post(
        'https://api.ecrop.co/api/feedback/submit',
        dataToSubmit
      );
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          feedbackType: '',
          message: '',
          rating: 0,
          domain: 'Feedback',
        });
        setRating(0);
        setRecommendation("");
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="main_container">
      <div id="container" className="container position-relative">
        
        {/* 👇 Form close button (top-right) */}
        <button
          onClick={onClose}
          className="close-popup"
          aria-label="Close Feedback Form"
        >
          <FaTimes size={20} />
        </button>

        <form onSubmit={handleSubmit} role="form" id="contact_form">
          <div id="feed-heading" className="text-center mb-4">
            <h1>&bull; Feedback Form &bull;</h1>
            <h4>
              We would appreciate it if you could take a moment <br />
              to give us your feedback on our services.
            </h4>
          </div>

          {/* Feedback Emoji & Stars */}
          <div className="feedback-container position-relative mb-5">
            <div className="rate text-center">
              <h5>Overall, how satisfied are you with our services?</h5>
              <p className="rateof">Rate the quality of service</p>
            </div>

            <div className="emoji-container d-flex justify-content-center gap-2 mt-3">
              <FaRegAngry size={40} color={rating >= 1 ? 'red' : 'rgb(18, 56, 56)'} />
              <FaRegFrown size={40} color={rating >= 2 ? 'orange' : 'rgb(18, 56, 56)'} />
              <FaRegMeh size={40} color={rating >= 3 ? '#146E6F' : 'rgb(18, 56, 56)'} />
              <FaRegSmile size={40} color={rating >= 4 ? '#06aa84' : 'rgb(18, 56, 56)'} />
              <FaRegLaugh size={40} color={rating >= 5 ? 'green' : 'rgb(18, 56, 56)'} />
            </div>

            <div className="rating-container text-center mt-3">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  size={30}
                  className={rating > index ? 'active text-warning' : 'text-secondary'}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>

            <input type="hidden" name="rating" id="rating" value={rating} />
          </div>

          {/* Inputs */}
          <div className="row g-3 mb-3">
            <div className="col-md-6 col-12">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6 col-12">
              <input
                type="text"
                placeholder="Contact Number"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <select
                name="feedbackType"
                required
                value={formData.feedbackType}
                onChange={handleChange}
                className="form-select"
              >
                <option disabled hidden>Type of Feedback</option>
                <option>General Feedback</option>
                <option>Complaint</option>
                <option>Suggestions</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Please share your experience or Suggestions with us."
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
            ></textarea>
          </div>

          {/* Yes / No Recommendation */}
          <div className="friend text-center mb-4">
            <p>Would you recommend us to your friends?</p>
            <div className="d-flex justify-content-center gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="recommendation"
                  id="yes"
                  checked={recommendation === "Yes"}
                  onChange={() => setRecommendation("Yes")}
                />
                <label className="form-check-label" htmlFor="yes">
                  Yes
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="recommendation"
                  id="no"
                  checked={recommendation === "No"}
                  onChange={() => setRecommendation("No")}
                />
                <label className="form-check-label" htmlFor="no">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit text-center">
            <input
              type="submit"
              value="Submit Review"
              className="px-4 py-2"
            />
          </div>
        </form>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Success Message"
        className="Modal"
        overlayClassName="Overlay"
      >
        {/* 👇 Modal close button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="close-popup"
        >
          <FaTimes size={20} />
        </button>

        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
