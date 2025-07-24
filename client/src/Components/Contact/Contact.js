import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
import Modal from "react-modal";
import { Helmet } from 'react-helmet-async';
import { FaBuilding, FaRegistered, FaCity, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

Modal.setAppElement("#root");

const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState("hidden");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [showAd, setShowAd] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    domain: "Precisiongrow",
  });
  const [status, setStatus] = useState({ success: false, error: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    if (!formData.phone) {
      alert("Please enter your number");
      return;
    }
    setOtpDisplay("visible");
    setIsOtpRequested(true);
    window.OTPlessSignin.initiate({
      channel: "PHONE",
      phone: formData.phone,
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
      .then((res) => {
        if (res.success) {
          setIsOtpVerified(true);
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpVerified) {
      alert("Please verify the OTP before submitting the form.");
      return;
    }
    try {
      const response = await axios.post(
        "https://contact-backend-876634281438.asia-south1.run.app/api/contact/send",
        formData
      );
      if (response.status === 200) {
        setStatus({ success: true, error: null });
        setFormData({ name: "", email: "", phone: "", message: "", domain: "Precisiongrow" });
        setOtpValue("");
        setIsOtpVerified(false);
        setIsOtpRequested(false);
        setModalIsOpen(true);
      }
    } catch (error) {
      setStatus({ error: "Something went wrong. Please try again later.", success: false });
    }
  };

  const closeAd = () => {
    setShowAd(false);
  };

  return (
    <div className="contact-wrapper">
      <Helmet>
        <title>Contact Precision Grow - Your Agri-Tech Partner</title>
        <meta name="description" content="Get in touch with Precision Grow for innovative agri-tech solutions." />
        <meta name="keywords" content="contact precision grow, farming tech support, smart agriculture inquiry" />
        <link rel="canonical" href="https://precisiongrow.co.in/contact" />
      </Helmet>

      <section className="container contact-section">
        <div className="row contact-grid">
          <div className="col-lg-6 rounded">
            <form onSubmit={handleSubmit} className="cont-frm border">
              {/* <button className="close-button" onClick={closeAd}>
                <i className="fa-solid fa-xmark"></i>
              </button> */}
              <h3 className="blueetxt">Get in Touch</h3>
              <p>Please fill in your details and we’ll get back to you shortly.</p>

              <div className="dbl-field">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field phone-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <button type="button" onClick={phoneAuth} className="requestOtp">Request OTP</button>
              </div>

              {isOtpRequested && (
                <div className={`otp-${otpDisplay} phone-field mb-3`}>
                  <input
                    id="otp-input"
                    placeholder="Enter OTP"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  <button type="button" onClick={verifyOTP} className="requestOtp">Verify OTP</button>
                </div>
              )}

              <div className="message">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

            <div className="button-area">
  {isOtpVerified ? (
    <button type="submit" className="submit-btn">Send Message</button>
  ) : (
    !status.success && (
      <p className="otp-warning">Please verify OTP to submit the form.</p>
    )
  )}
</div>


              {status.error && <div className="error-message">{status.error}</div>}
              {status.success && <div className="sent-message">Your message has been sent. Thank you!</div>}
            </form>
          </div>

  <div className="col-lg-6 contact-info-box">
      <h3 className="my-3 blueetxt">Our Offices</h3>

      <div className="office-block mb-3">
        <p className="d-flex align-items-center gap-2">
          <FaBuilding className="icon" />
          <strong>Corporate Office:</strong>
        </p>
        <p>
          Unit No 22, Building No. 2(A3), Sector 1, 
          Millennium Business Park, Mahape,
          Navi Mumbai, 400710
        </p>
      </div>

      <div className="office-block mb-3">
        <p className="d-flex align-items-center gap-2">
          <FaRegistered className="icon" />
          <strong>Registered Office:</strong>
        </p>
        <p>
          Plot No 80/81, Shop No 155, Vashi Plaza, 
          Sector 17 Vashi, Mumbai, 400703
        </p>
      </div>

      <div className="office-block mb-3">
        <p className="d-flex align-items-center gap-2">
          <FaCity className="icon" />
          <strong>City Office:</strong>
        </p>
        <p>
          61, City Tower, Unit No 2, Dr. S.S. Rao Road, 
          Parel, Mumbai, 400012
        </p>
      </div>

      <p className="d-flex align-items-center gap-2">
        <FaEnvelope className="icon" />
        <strong>Email:</strong> mail@precisiongrow.co.in
      </p>

      <p className="d-flex align-items-center gap-2">
        <FaPhoneAlt className="icon" />
        <strong>Phone:</strong> +91 80972 83444
      </p>

   
    </div>
    
        </div>
           <div className="container map-container mt-4">
            <div className="col-12 col-lg-10">
     
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120667.7537311504!2d72.99819!3d19.069571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1749718762560!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="w-100 rounded"
          referrerPolicy="no-referrer-when-downgrade"
           title="Precision Grow Location"
        ></iframe>
      </div>
      </div>
      </section>

    
    </div>
  );
};

export default Contact;
