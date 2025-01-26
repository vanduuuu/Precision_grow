import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Subnavbar.css'; // Import the CSS file
import Topbar from '../Topbar/Topbar';
import place from '../../../../assets/images/great-place-to-work.webp';
import { ReactComponent as Footlogo } from "../../../../assets/images/pglogo.svg"; // Import SVG logo as a React component
import SDG from '../../../../assets/images/sdg-india.webp'
import { IoMdArrowDropdown } from "react-icons/io";

const Subnavbar = () => {
  const location = useLocation();
 
  const closeMenu = () => {
    const navMenu = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navMenu && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      if (navbarToggler) {
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    }
  };

  return (
    <>
      <Topbar />
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div id="topIcon" className="icon-fixed">
          <img src={place} loading="lazy" alt="Great Place to Work" />
        </div>
        <div className="container-fluid">
          <div className="brand-logo">
            <Link to="/" aria-current="page">
              <Footlogo className="logo" alt="Precision Grow Logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/services') ? 'active' : ''
                  }`}
                  to="/services"
                  onClick={closeMenu}
                >
                  Services <IoMdArrowDropdown />
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropdown-submenu'>
                    <Link
                      to="#"
                      className={`dropdown-item ${
                        location.pathname === '/SateliteMonitoring' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Satelite Monitoring <IoMdArrowDropdown />
                    </Link>
                    <ul className='submenu'>
                      <li>
                        <Link
                          to="/crop-monitoring"  
                          className={`dropdown-item ${
                            location.pathname === '/crop-monitoring' ? 'active' : ''
                          }`}
                          onClick={closeMenu}
                        >
                          Crop Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/fish-monitoring"  
                          className={`dropdown-item ${
                            location.pathname === '/fish-monitoring' ? 'active' : ''
                          }`}
                          onClick={closeMenu}
                        >
                          Fish Monitoring
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="/Farmboundary"
                      className={`dropdown-item ${
                        location.pathname === '/farmboundary' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Farm Boundary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/precision-grow-ai"
                      className={`dropdown-item ${
                        location.pathname === '/precision-grow-ai' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Precision Grow AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/regenerative-agriculture"
                      className={`dropdown-item ${
                        location.pathname === '/regenerative-agriculture' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Regenerative Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product-traceability"
                      className={`dropdown-item ${
                        location.pathname === '/product-traceability' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Product Traceability
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/crop-advisory"
                      className={`dropdown-item ${
                        location.pathname === '/crop-advisory' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Crop Advisory
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wildfire-solution"
                      className={`dropdown-item ${
                        location.pathname === '/wildfire-solution' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Wildfire Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agri-insurance"
                      className={`dropdown-item ${
                        location.pathname === '/agri-insurance' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Agri Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agri-loan"
                      className={`dropdown-item ${
                        location.pathname === '/agri-loan' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Agri Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agri-drone"
                      className={`dropdown-item ${
                        location.pathname === '/agri-drone' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Agri Drone
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/ecrop') ? 'active' : ''
                  }`}
                  to="/product"
                  onClick={closeMenu}
                >
                  Product <IoMdArrowDropdown />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/ecrop"
                      className={`dropdown-item ${
                        location.pathname === '/ecrop' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      e-CROP(Smart Farming With electronic Crop)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/biosence"
                      className={`dropdown-item ${
                        location.pathname === '/biosence' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Biosence
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ecoloo"
                      className={`dropdown-item ${
                        location.pathname === '/ecoloo' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      ECOLOO
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/sustainability') ? 'active' : ''
                  }`}
                  to="/sustainability"
                  onClick={closeMenu}
                >
                  Sustainability <IoMdArrowDropdown />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/sustainability-overview"
                      className={`dropdown-item ${
                        location.pathname === '/sustainability-overview' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sustainability-glossary"
                      className={`dropdown-item ${
                        location.pathname === '/sustainability-glossary' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://greengdp.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Green GDP
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://precisiongrowindia.blogspot.com/"
                  rel="noopener noreferrer"
                  target='_blank'
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
                  to="/faq"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname.startsWith('/policy') ? 'active' : ''
                  }`}
                  to="#"
                >
                  Policy <IoMdArrowDropdown />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/refund-policy"
                      className={`dropdown-item ${
                        location.pathname === '/refund-policy' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className={`dropdown-item ${
                        location.pathname === '/terms-conditions' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className={`dropdown-item ${
                        location.pathname === '/privacy-policy' ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="nav-link esg e1 rounded"
                  href="https://esgconsultants.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="esg1">ESG CONSULTANT</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link esg e1 rounded"
                  href="https://ecroptoday.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ecroptodaylogo">E-CROPTODAY</span>
                </a>
              </li>
              <li>
                <a
                  className="nav-link esg rounded p-0"
                  href="https://sdgindiaindex.niti.gov.in/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sdg-india">
                    <img src={SDG} loading="lazy" alt="sdg index" className="sdg-img" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnavbar;
