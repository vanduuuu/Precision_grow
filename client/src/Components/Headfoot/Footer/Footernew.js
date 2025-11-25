import React from "react";
import "./Footernew.css";
import { Link } from "react-router-dom";
import {
  BloggerIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets/svgicons/icons.js";
import india from "../../../assets/PG_Flag/India.webp";
import brazil from "../../../assets/PG_Flag/Brazil.webp";
import france from "../../../assets/PG_Flag/France.webp";
import uae from "../../../assets/PG_Flag/UAE.webp";
import israel from "../../../assets/PG_Flag/Israel.webp";
import russia from "../../../assets/PG_Flag/Russia.webp";
import indonesia from "../../../assets/PG_Flag/Indonesia.webp";
import southafrica from "../../../assets/PG_Flag/SouthAfrica.webp";
import vietman from "../../../assets/PG_Flag/Vietman.webp";

const Footernew = () => {
  const exploreLinks = [
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/crop-monitoring" },
    { label: "Products", path: "/ecrop" },
    { label: "Sustainability", path: "/sustainability" },
    { label: "Blog", path: "/blog" },
    { label: "Policy", path: "/policy" },
  ];

  const partners = [
    "https://api.ecrop.co/assets/precisiongrow/Assocham_India.webp",
    "https://api.ecrop.co/assets/precisiongrow/cii.webp",
    "https://api.ecrop.co/assets/precisiongrow/ficci.webp",
    "https://api.ecrop.co/assets/precisiongrow/ifoam.webp",
    "https://api.ecrop.co/assets/precisiongrow/ESC.webp",
    "https://api.ecrop.co/assets/precisiongrow/nasscom.webp",
  ];

  const flags = [
    india,
    brazil,
    france,
    uae,
    israel,
    russia,
    indonesia,
    southafrica,
    vietman,
  ];

  return (
    <>
     <svg
  className="top-wave1"
  viewBox="0 0 5950 380"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M0 293.923V393.09H330.556H1983.33H3966.67L5950 393.091L5950 203.02C5288.89 244.34 4627.78 194.756 3966.67 128.645C3878.52 119.83 3790.37 110.722 3702.22 101.613C3129.26 42.4069 2556.3 -16.7992 1983.33 4.6869C1322.22 29.4786 661.111 161.701 330.556 227.812L0 293.923Z"
    fill="#02746a"
  />
</svg>

         <footer className="footer-modern text-white">
      <div className="container">
        {/* Header line */}
        <div className="footer-top-strip text-center mb-3">
          <h3 className="journey-title">
            Get in Touch and Start Your Journey to Success
          </h3>
        </div>

        {/* Footer Content */}
        <div className="row gy-4">
          {/* Logo + badges */}
          <div className="col-lg-4 col-md-6 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start">
  <img
    src="https://api.ecrop.co/assets/precisiongrow/Precision-Grow-Logo-new.webp"
    alt="Precision Grow"
    className="footer-logo bg-white p-2 mb-2"
    loading="lazy"
  />

  <p className="footer-tagline mb-3 text-center text-lg-start">
    Empowering agriculture through innovation, technology & sustainability.
  </p>

  <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-2">
    <img
      src="https://api.ecrop.co/assets/precisiongrow/great-place-to-work.webp"
      alt="Great Place to Work"
      className="badge-logo"
    />
    <img
      src="https://api.ecrop.co/assets/precisiongrow/dun-logo.webp"
      alt="DUN Registered"
      className="badge-logo dun-logo-fix"
    />
  </div>
</div>


          {/* Explore Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-links">
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-address">
              <li>
                <strong>Corporate Office:</strong>
                <br />
                Unit No 22, Millennium Business Park, Mahape, Navi Mumbai
              </li>
              <li>
                <strong>Regd. Office:</strong>
                <br />
                Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17, Vashi
              </li>
              <li>
                <strong>City Office:</strong>
                <br />
                61, City Tower, Dr. S.S. Rao Road, Parel, Mumbai
              </li>
            </ul>
          </div>

          {/* Partners + Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Our Partners</h5>
            <div className="partner-logos">
              {partners.map((img, idx) => (
                <img key={idx} src={img} alt={`Partner ${idx}`} loading="lazy" />
              ))}
            </div>

            <h5 className="footer-heading mt-4">Social Media</h5>
           <div className="social-icons">
  <a href="https://www.facebook.com/PrecisionGrow/" target="_blank" rel="noopener noreferrer">
    <FacebookIcon size={22} />
  </a>
  <a href="https://x.com/precision_grow" target="_blank" rel="noopener noreferrer">
    <TwitterIcon size={22} />
  </a>
  <a href="https://www.linkedin.com/company/precision-grow/" target="_blank" rel="noopener noreferrer">
    <LinkedinIcon size={22} />
  </a>
  <a href="https://www.instagram.com/precisiongrow_/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon size={22} />
  </a>
  <a href="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g" target="_blank" rel="noopener noreferrer">
    <YoutubeIcon size={22} />
  </a>
  <a href="https://precisiongrowindia.blogspot.com/" target="_blank" rel="noopener noreferrer">
    <BloggerIcon size={22} />
  </a>
  <a href="https://www.threads.net/@precisiongrow_" target="_blank" rel="noopener noreferrer">
    <ThreadsIcon size={22} />
  </a>
</div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider my-3"></div>

        {/* Global Section */}
        <div className="footer-global text-center">
          <h4>
            Precision <span className="highlight-text">GROW</span> Global
          </h4>
          <div className="flags-scroll">
            {flags.map((flag, idx) => (
              <img key={idx} src={flag} alt="Flag" className="flag-icon" />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center">
          <p className="m-0 small">
            © 2024 Precision Grow (A Unit of Tech Visit IT Pvt Ltd). All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
 
  );
};

export default Footernew;
