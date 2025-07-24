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



/* .get-call-back-form.open-popup {
    bottom: 0;
}
.get-call-back-form h2 {
    font-size: 25px;
    margin: 0 0 30px;
}
h2 {
    line-height: normal;
    font-family: ubuntu, sans-serif;
    font-weight: 500;
}
.get-call-back-form {
 
    left: 5%;
    right: 5%;
    width: 90%;
    padding: 35px;
    background: #f7f7f7;
    border: 2px solid #fff;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, .25));
    border-radius: 10px 10px 0 0;
    z-index: 999;

}
.get-call-back-form .hide-popup {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    z-index: 99;
}
.get-call-back-form .hide-popup:before {
    transform: rotate(45deg);
}
.get-call-back-form .hide-popup:before {
    background: #000;
    width: 18px;
    height: 2px;
    position: absolute;
    transform: rotate(45deg);
    cursor: pointer;
    z-index: 9;
    top: 10px;
}
.get-call-back-form .hide-popup:after {
    transform: rotate(-45deg);
}
 .get-call-back-form .hide-popup:after {
    content: "";
    background: #000;
    width: 18px;
    height: 2px;
    position: absolute;
    transform: rotate(45deg);
    cursor: pointer;
    z-index: 9;
    top: 10px;
}
input{
    font-family: open sans, sans-serif;
    padding: 0;
    margin: 0;
    color: inherit;
    text-decoration: none;
    outline: 0;
    font-size: inherit;
    line-height: inherit;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-sm-4{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.input_container {
    position: relative;
    margin-bottom: 40px;
    text-align: left;
}
.input_container .floatlabel {
    width: 98%;
    border-bottom: 1px solid #dfdfdf;
    font-size: 15px;
    padding: 14px 15px 13px;
    box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 8%);
    border-radius: 5px;
    border: 1px solid #ededed;
}


.input_container label {
    position: absolute;
    background: #f7f7f7;
    cursor: text;
    /* -webkit-transition: all .2s ease-out; */
    /* font-size: 12px;
    top: -18px;
    left: 0;
    font-weight: 600;
    z-index: 99;
    margin: 0 10px;
    padding: 5px 15px 0 5px;
    border-radius: 3px;
}
label {
    display: inline-block;
}
.error_msg {
    color: red;
    font-size: 12px;
    position: absolute;
    left: 0;
    bottom: -22px;
    display: none;
    z-index: 999;
}
.input_container.number .verify {
    position: absolute;
    right: 0;
    display: flex;
}
.input_container.number .verify {
    top: 60px;
}
.input_container.number .verify a {
    text-decoration: underline;
    padding-right: 15px;
}
.hide {
    display: none;
}

a {
    font-family: open sans, sans-serif;
    padding: 0;
    margin: 0;
    color: inherit;
    word-wrap: break-word;
}
.col-sm-12{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
.link.black a {
    color: #000;
}
.link a {
    font-weight: 600;
    position: relative;
    z-index: 99;
    padding: 10px 18px;
}
col-sm-9{
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
 .clear:before {
    content: "";
    display: table;
}
.input_container .checkbox .checkbox-group {
    position: relative;
}

.input_container .checkbox .checkbox-group input {
    display: none;
    cursor: pointer;
}

input[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
}
.input_container .checkbox .checkbox-group label {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    padding-left: 30px;
    position: relative;
    margin: 0;
    color: #000;
    font-weight: 400;
    top: unset;
    background: unset;
}
.input_container .checkbox .checkbox-group label:before {
    content: '';
    border: 2px solid #dfdfdf;
    padding: 8px;
    vertical-align: middle;
    cursor: pointer;
    top: 1px;
    position: absolute;
    left: 0;
    border-radius: 4px;
}
.input_container .checkbox .checkbox-group label a {
    text-decoration: underline;
}
.clear:after {
    clear: both;
}

.clear:after{
    content: "";
    display: table;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
.thank-you h4 {
    padding: 150px 10px;
}


h4 {
    line-height: normal;
    font-family: ubuntu, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: 0;

}

*/
























 
.sahpe-right-bottom {
    position: absolute;
    right: 0;
    top: 104%;
    max-width: 10%;
}
.con-in {
    background-color: rgb(233, 241, 238);
}
.con-in form {
    padding: 35px 30px;
    background: #f8f9fa;
    box-shadow: 0px 3px 16px 0px #c7c5c5;
}
form .dbl-field {
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
}
.field input[type="tel"] {
    padding: 13px !important;
    text-transform: uppercase;
    background: #ffffff;
}
.dbl-field .field {
    height: 50px;
    display: flex;
    position: relative;
    width: calc(100% / 2 - 13px);
}
form .field input, form .message textarea {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0px 0px 0px 16px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.con-in form i {
    position: absolute;
    top: 50%;
    left: 18px;
    color: #ccc;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
}
form .message {
    position: relative;
}
form .message textarea {
    min-height: 180px;
    max-height: 230px;
    max-width: 100%;
    min-width: 100%;
    padding: 15px 20px 0 48px;
}
form .message i {
    top: 30px;
    font-size: 20px;
}
form .button-area {
    margin: 25px 0;
    display: flex;
    align-items: center;
}
form .button-area button{
    background-color: #2b3e3e;
}
.con-in h5 {
    text-transform: capitalize;
    color: #7f911c;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
}
.contact-style-one-info li {
    display: flex;
    margin-top: 10px;
}
.contact-style-one-info li h5 {
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 22px;
    color: #086363;
}
.content .bg2{
    color: #086363;
}
.icon-flag2 {
    margin-right: 20px;
  }
  .space {padding-left:65px;}
.coleft {
    margin-left: 56px !important;
}
.contact-style-one-info li i {
    display: inline-block;
    width: 40px;
    text-align: center;
    line-height: 40px;
    background: #7e9128;
    border-radius: 50%;
    color: white;
    font-size: 18px;
    margin-right: 10px;
}
.contact-style-one-info li:nth-child(2) i {
    background: #49a760;
}
.contact-style-one-info li:nth-child(3) i {
    background: #068685;
}
.country-flag{
    margin-right: 25px;
    display: inline-flex;
}
.icon-flag {
    margin-right: 15px;
}
.mapp{
    background-color: #2b3e3e;
    padding: 80px 0;
}
@media(max-width:768px){
    .contact-style-one-info.cont {
        margin-top: 6%;
    }
}
@media(max-width:600px){
    .contact-style-one-info li {
        flex-direction: column;
    }
    ul.country-flag {
        padding-left: 50px;
    }
    form .dbl-field {
         margin-bottom: 0px;
        flex-direction: column;
    }
    .dbl-field .field {
        width: 100%;
        margin-bottom: 10px;
    }
    .sahpe-right-bottom{
        display: none;
    }
} 