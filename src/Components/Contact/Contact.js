import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Contact.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import HeadBanner from '../../assets/images/hero_4.webp';
import Indiaflag from '../../assets/images/india-flag.webp';
import Usflag from '../../assets/images/us.webp';
import { Helmet } from 'react-helmet';

Modal.setAppElement("#root"); // Required for screen readers to work correctly

const breadcrumbItems = [
  { label: "Home", path: "/" },
  { label: "Contact Us", path: "/contact" },
];

const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState("hidden");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  // ============================================================================================
  const [formData, setFormData] = useState({  //1 - ye line nhi he ecrop me
    name: "",
    email: "",
    phone: "",
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

  return (
    <div>
       <Helmet>
                             <title>Contact Precision Grow - Your Agri-Tech Partner</title>
                             <meta name="description" content="Get in touch with Precision Grow for innovative agri-tech solutions. We're here to help you enhance farming practices and boost sustainability." />
                             {/* <meta name="keywords" content="Precision Grow: Advanced Agri-Tech Solutions for Sustainable Farming" /> */}
                           </Helmet>
      <Banner
        title="Contact Us"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems}
      />
      <div className="con-in">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-left">
                <form onSubmit={handleSubmit} className="cont-frm">
                  <h5>Have Questions</h5>
                  <h2 className="mb-4">Send Us A Message</h2>
                  <div className="dbl-field">
                    <div className="field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
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
                      placeholder="Enter your phone"
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
              <div className="col-lg-6" data-aos="fade-right">
                <div className="contact-style-one-info cont">
                  <h2>Contact Information</h2>
                  <ul>
                    <li>
                      <div class="content">
                        <h5 class="title">
                          <i class="fas fa-building"></i> Corporate Office:
                        </h5>
                        <p class="coleft">
                          <Link to ='/contact'>
                            Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="content">
                        <h5 class="title">
                          <i class="fas fa-building"></i> Regd Office:
                        </h5>
                        <p class="coleft">
                          <Link to='/contact'>
                          Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703
                          </Link>
                        </p>
                      </div>
                      
                    </li>
                    <li>
                      <div class="content">
                        <h5 class="title">
                          <i class="fas fa-building"></i> City Office:
                        </h5>
                        <p class="coleft">
                          <Link to='/contact'>
                          61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012
                          </Link>
                        </p>
                      </div>
                      
                    </li>
                    <li>
                      <div className="content">
                        {/* <h5 className="title">
                          <i className="fas fa-phone"></i> Phone
                        </h5> */}
                        <ul className="country-flag">
                          <li>
                            <div className="icon-flag2">
                              <img src={Indiaflag} loading="lazy" width="38px" alt="India" />
                            </div>
                            <div className="content">
                              <p className="pb-2">
                                <strong className="bg2">INDIA</strong>
                              </p>
                              <strong>Phone:</strong>
                              <Link to='tel:912248888888'> +91 22 48888888</Link> <br />
                              <Link to='tel:912246165798' className="space">
                                {" "}
                                +91 22 46165798
                              </Link>
                            </div>
                          </li>
                          
                          <li>
                            
                            <div className="icon-flag2">
                              <img src={Usflag} loading="lazy" width="38px" alt="us" />
                            </div>
                            <div className="content">
                              <p className="pb-2">
                                <strong className="bg2">USA</strong>
                              </p>
                              <strong>Phone:</strong>
                              <Link to='tel:0014242390105'> +1 424-239-0105</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="space">
                          <div className="content">
                              <strong>Mobile:</strong>
                              <Link to='tel:918097283444'>+91 8097283444</Link>
                            </div>
                  </li>
                    <li>
                      <div class="info">
                        <h5 class="title">
                          <i class="fas fa-envelope"></i> Email
                        </h5>
                        <p class="coleft">
                          <Link to='mailto:mail@precisiongrow.co.in'>
                            mail@precisiongrow.co.in
                          </Link>
                          <br />
                          <Link to='mailto:mail@precisiongrow.eu'>
                            mail@precisiongrow.eu
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
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
