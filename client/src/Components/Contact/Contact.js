import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
import Modal from "react-modal";

import { Helmet } from 'react-helmet-async';

Modal.setAppElement("#root"); // Required for screen readers to work correctly


const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState("hidden");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState("");
    const [showAd, setShowAd] = useState(true);
  // ============================================================================================
  const [formData, setFormData] = useState({  //1 - ye line nhi he ecrop me
    name: "",
    email: "",
    phone: "",
    city: " ",
    message: "",
    domain: "Precisiongrow",  // Add the domain here with its value
  });
  const [status, setStatus] = useState({ success: false, error: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);//1 - yaha tak nhi he 
// =====================================================================================
  useEffect(() => {
    const script = document.getElementById("otpless-sdk");
    
    if (script) {
      const callback = (userinfo) => {
        const mobileMap = userinfo.identities.find(
          (item) => item.identityType === "MOBILE"
        )?.identityValue;
        console.log("User Info:", { mobile: mobileMap });
      };
      window.OTPlessSignin = new window.OTPless(callback);
    }
  }, []);

  const phoneAuth = () => {
    const phone = formData.phone;
    if (!phone) {
      alert("Please enter your number");
      return;
    }
    setOtpDisplay("visible");
    setIsOtpRequested(true);
    window.OTPlessSignin.initiate({
      channel: "PHONE",
      phone: phone,
      countryCode: "+91",
    });
  };

  const verifyOTP = () => {
    window.OTPlessSignin.verify({
      channel: "PHONE",
      phone: formData.phone,
      otp: otpValue,
      countryCode: "+91",
    })
      .then((response) => {
        if (response.success) {
          setIsOtpVerified(true);
          console.log("OTP Verified Successfully");
        } else {
          alert("Incorrect OTP");
          setIsOtpVerified(false);
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setIsOtpVerified(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: null });

    if (!isOtpVerified) {
      alert("Please verify the OTP before submitting the form.");
      return;
    }
    console.log("Form Data Before Submit:", formData); // Ye line add karo to log form data vandana added this line

    try {
      const response = await axios.post(
        "https://contact-backend-876634281438.asia-south1.run.app/api/contact/send",
        formData // Form data with domain included
      );
      console.log("Response from Backend:", response); // Response ko log karo to dekh sakein kya response aa raha hai vandana ne lika he

      if (response.status === 200) {
        setStatus({ success: true, error: null });
        setFormData({ name: "", email: "", phone: "", message: "", domain: "Precisiongrow" }); // Reset domain value
        setOtpValue("");
        setIsOtpVerified(false);
        setIsOtpRequested(false);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setStatus({
        error: "Something went wrong. Please try again later.",
        success: false,
      });
    }
  };

  const closeAd = () => {
    setShowAd(false);
  };
  return (
    <div>
       <Helmet>
       <title>Contact Precision Grow - Your Agri-Tech Partner</title>
        <meta name="description" content="Get in touch with Precision Grow for innovative agri-tech solutions. We're here to help you enhance farming practices and boost sustainability." />
        <meta name="keywords" content="contact precision grow, farming tech support, smart agriculture inquiry" />
        <link rel="canonical" href="https://precisiongrow.co.in/contact" />     
       </Helmet>
    
      <div className="con-in">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12" data-aos="fade-up">
                <form onSubmit={handleSubmit} className="cont-frm">
                    <button className="close-button" onClick={closeAd}>
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                  <p className="h2">Please Fill in Your Details and We'll Call You Back!</p>
                  {/* <h2 className="mb-4">Send Us A Message</h2> */}
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter  email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <button
                      className="requestOtp"
                      type="button"
                      onClick={phoneAuth}
                    >
                      Request OTP
                    </button>
                    {isOtpRequested && (
                      <div className={`otp-${otpDisplay}`}>
                        <input
                          id="otp-input"
                          placeholder="Enter OTP"
                          value={otpValue}
                          onChange={(e) => setOtpValue(e.target.value)}
                        />
                        <button type="button" onClick={verifyOTP}>
                          Verify OTP
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="message">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="button-area">
                    {isOtpVerified ? (
                      <button className="text-white rounded" type="submit">
                        Send Message
                      </button>
                    ) : (
                      <p>Please verify OTP to submit the form.</p>
                    )}
                  </div>

                  {status.error && (
                    <div className="error-message">{status.error}</div>
                  )}
                  {status.success && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                </form>
              </div>
             
            </div>
          </div>
        </section>
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

export default Contact;
