import React, { useState, useEffect } from 'react';
import "./Footer.css"; // Make sure your CSS is properly set up
import { Link } from "react-router-dom";

// Importing the SVGZ logo as a React component
import { ReactComponent as Footlogo } from "../../../assets/images/pglogo.svg"; // Updated to import as React component
import Saplogo from "../../../assets/images/sap-b1.webp";
import Indiaflag from '../../../assets/images/india-flag.webp';
import Usflag from '../../../assets/images/us.webp';
import client1 from '../../../assets/images/nasscom.webp';
import client2 from '../../../assets/images/Assocham_India.webp';
import client3 from '../../../assets/images/cii.webp';
import client4 from '../../../assets/images/ficci.webp';
import client5 from '../../../assets/images/ifoam.webp';
import trackter from '../../../assets/shapes/7.webp';
import dun from '../../../assets/images/dun-logo.webp';
import { FaAngleDoubleUp,FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
   // State to track visibility of the "Back to Top" button
   const [showBackToTop, setShowBackToTop] = useState(false);

   useEffect(() => {
     // Function to handle scroll event
     const handleScroll = () => {
       if (window.scrollY > 200) {
         setShowBackToTop(true); // Show button if scrolled down more than 200px
       } else {
         setShowBackToTop(false); // Hide button if scrolled up
       }
     };
 
     // Adding scroll event listener
     window.addEventListener('scroll', handleScroll);
 
     // Cleanup event listener on component unmount
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  return (
    <>
      {/* WhatsApp Button */}
      <Link to="https://wa.me/+918097283444?text=Welcome To Precision Grow" className="whatsapp_btn circle-50" data-title="whatsapp" target="_blank">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>

      <div className="support">
        <p className="text-center">
          We Make Farming Better With Remote Sensing Data For Partnership Contact Us At
          <Link to="mailto:mail@precisiongrow.co.in"><span className="hglt"> mail@precisiongrow.co.in</span></Link>
        </p>
        <p className="p-0 m-0 text-center">
          For Support Contact Us For
          <Link to="mailto:support@precisiongrow.co.in"><span className="hglt"> support@precisiongrow.co.in</span></Link>
        </p>
      </div>

      <footer className="footer">
        <div className="container">
          <h2 className="text-whitee text-center">
            Agriculture Meets Technology with<br />
            Precision Grow
          </h2>
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <div className="widget1">
                <div className="footerlogo">
                  {/* Using the SVG as a React component */}
                  <Footlogo className="img-fluid mb-4 rounded" alt="Precision Grow Logo" />
                </div>
                <Link to="#">
                  <img loading="lazy" src={dun} alt="DUN logo" className="rounded dunlogo" />
                </Link>

                <h5 className="power ml-5">Powered By</h5>
                <img src={Saplogo} loading="lazy" alt="SAP logo" className="sap footerlogo rounded mb-4" /><br />

                <div className="socialLinks">
                  <ul>
                    <li><Link to="https://www.facebook.com/PrecisionGrow/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="https://x.com/i/flow/login?redirect_after_login=%2Fprecision_grow"><i className="fa-brands fa-square-x-twitter"></i></Link></li>
                    <li><Link to="https://www.linkedin.com/company/precision-grow/"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link to="https://www.instagram.com/precisiongrow_/"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g"><i className="fa-brands fa-youtube"></i></Link></li>
                    <li><Link to="https://precisiongrowindia.blogspot.com/"><i className="fa-brands fa-blogger-b"></i></Link></li>
                    {/* <li><Link to="https://precisiongrow.co.in/"><i className="fa-brands fa-flickr"></i></Link></li> */}
                    <li><Link to="https://soundcloud.com/precision-grow?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"><i className="fa-brands fa-soundcloud"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 offset-lg-1 footer-here-is">
              <h5>Get in Touch and Start Your Journey to Success</h5>

              {/* Contact Information */}
              <div className="row">
                <div className="col-md-1"><FaMapMarkerAlt className="i fs-6"/></div>
                <div className="col-md-11 text-white">
                  <ul>
                    <li><h6>Corporate Office :</h6></li>
                    <li>Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710</li>
                  </ul>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-1"><FaMapMarkerAlt className="i fs-6"/></div>
                <div className="col-md-11 text-white">
                  <ul>
                    <li><h6>Regd. Office :</h6></li>
                    <li>Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, 400703</li>
                  </ul>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-1"><FaMapMarkerAlt className="i fs-6"/></div>
                <div className="col-md-11 text-white">
                  <ul>
                    <li><h6>City Office :</h6></li>
                    <li>61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</li>
                  </ul>
                </div>
              </div>

              {/* Contact by Country */}
              <div className="row mt-5 text-white">
                <ul className="country-flag inline-block">
                  <li>
                    <div className="icon-flag">
                      <img className="imgh" loading="lazy" src={Indiaflag} alt="India" />
                    </div>
                    <div className="content">
                      <p><strong>INDIA</strong></p>
                      <strong>Phone :</strong>
                      <Link to="tel:912248888888">+91 22 48888888</Link> / <Link to="tel:912246165798">46165798</Link>
                      <div className="content mt-3">
                        <strong>Mobile :</strong>
                        <Link to="tel:918097283444">+91 8097283444</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="icon-flag">
                      <img className="imgh" loading="lazy" src={Usflag} width="45px" alt="USA" />
                    </div>
                    <div className="content">
                      <p><strong>USA</strong></p>
                      <strong>Phone :</strong>
                      <Link to="tel:0014242390105">+1 424-239-0105</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Navigation Links */}
            <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-1">
              <div className="widget4">
                <h5>Explore</h5>
                <ul>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/ecrop">Products</Link></li>
                  <li><Link to="/sustainability">Sustainability</Link></li>
                  <li><Link to="https://precisiongrowindia.blogspot.com/">Blog</Link></li>
                  <li><Link to="/FaqPage">FAQ</Link></li>
                  <li><Link to="/refund_policy">Policy</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Certification Logos */}
          <div className="footer-certified text-center">
            <div className="row">
              <ul>
                <li><img className="logo-certi" loading="lazy" src={client1} alt="nasscom" /></li>
                <li><img className="logo-certi" loading="lazy" src={client2} alt="Assocham_India" /></li>
                <li><img className="logo-certi" loading="lazy" src={client3} alt="cii" /></li>
                <li><img className="logo-certi" loading="lazy" src={client4} alt="ficci" /></li>
                <li><img className="logo-certi" loading="lazy" src={client5} alt="ifoam" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-md-left mb-3 mb-md-0 zindex">
                <p>
                  &copy; 2024. All Rights Reserved by <Link to="https://precisiongrow.co.in/"><span>Precision Grow (A Unit of Tech Visit IT Pvt Ltd)</span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tractor Shape Image */}
        <div className="shape-right-bottom">
          <img src={trackter} alt="shape" loading="lazy" />
        </div>
      </footer>

     {/* Back to Top Button */}
     {showBackToTop && (
        <Link id="back-to-top" to="#" className="show">
          <FaAngleDoubleUp />
        </Link>
      )}
    </>
  );
}

export default Footer;
