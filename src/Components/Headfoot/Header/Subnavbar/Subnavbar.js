import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Subnavbar.css'; // Import the CSS file
import Topbar from '../Topbar/Topbar';
import place from '../../../../assets/great-place-to-work.png';
import Logo from '../../../../assets/foot-logo.webp'
import SDG from '../../../../assets/sdg-india.png'


const Subnavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>

      <Topbar />
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div id="topIcon" className="icon-fixed">
          <img src={place} alt="Great Place to Work"/>
        </div>
        <div className="container-fluid">
        <div className="brand-logo">
        <Link className="nav-link active" aria-current="page" to="/" onClick={() => setIsNavbarOpen(false)}><img className="logo" loading="lazy" src={Logo} alt="logo" /></Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" ref={dropdownRef}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => setIsNavbarOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => setIsNavbarOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/services"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'services'}
                  onClick={() => handleDropdownToggle('services')}
                >
                  Services
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'services' ? 'show' : ''
                  }`}
                  aria-labelledby="servicesDropdown"
                >
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-item dropdown-toggle"
                      to="#" >
                      Satellite Monitoring
                    </Link>
                    <ul
                      className={`shadow dropdown-menu ${
                        openDropdown === 'satellite' ? 'show' : ''
                      }`}
                    >
                      <li>
                        <Link className="dropdown-item" to="/crop_monitoring"  onClick={() => setIsNavbarOpen(false)}>
                          Crop Monitoring
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/fish_monitoring" onClick={() => setIsNavbarOpen(false)}>
                          Fish Monitoring
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/farmboundary" onClick={() => setIsNavbarOpen(false)}>
                      Farm Boundary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/precision_grow_ai" onClick={() => setIsNavbarOpen(false)}>
                      Precision Grow AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/regenerative_agriculture"
                    >
                      Regenerative Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product_traceability" onClick={() => setIsNavbarOpen(false)}>
                      Product Traceability
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cropadvisory" onClick={() => setIsNavbarOpen(false)}>
                      Crop Advisory
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/wildfire_solution" onClick={() => setIsNavbarOpen(false)}>
                      Wildfire Solution
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_insurance" onClick={() => setIsNavbarOpen(false)}>
                      Agri Insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_loan" onClick={() => setIsNavbarOpen(false)}>
                      Agri Loan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agri_drone" onClick={() => setIsNavbarOpen(false)}>
                      Agri Drone
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="productsDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'products'}
                  onClick={() => handleDropdownToggle('products')}
                >
                  Products
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'products' ? 'show' : ''
                  }`}
                  aria-labelledby="productsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/ecrop" onClick={() => setIsNavbarOpen(false)}>
                      e-Crop (Smart Farming With Electronic Crop)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/biosence" onClick={() => setIsNavbarOpen(false)}>
                      BioSense
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ecoloo" onClick={() => setIsNavbarOpen(false)}>
                      ECOLOO
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  
                  id="sustainabilityDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'sustainability'}
                  onClick={() => handleDropdownToggle('sustainability')}
                >
                  Sustainability
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'sustainability' ? 'show' : ''
                  }`}
                  aria-labelledby="sustainabilityDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/overview" onClick={() => setIsNavbarOpen(false)}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/glossary" onClick={() => setIsNavbarOpen(false)}>
                      Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="https://greengdp.in/"
                      target="_blank"
                    >
                      Green GDP
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://precisiongrowindia.blogspot.com/"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqpage"  onClick={() => setIsNavbarOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/refund_policy"
                  id="policyDropdown"
                  role="button"
                  aria-expanded={openDropdown === 'policy'}
                  onClick={() => handleDropdownToggle('policy')}
                >
                  Policy
                </Link>
                <ul
                  className={`shadow dropdown-menu ${
                    openDropdown === 'policy' ? 'show' : ''
                  }`}
                  aria-labelledby="policyDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/refund_policy" onClick={() => setIsNavbarOpen(false)}>
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/terms_conditions" onClick={() => setIsNavbarOpen(false)}>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privacy_policy" onClick={() => setIsNavbarOpen(false)}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => setIsNavbarOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
             <Link
                  className="nav-link ecroptodaylogo ex-link1 rounded"
                  to="https://ecroptoday.co.in/"  onClick={() => setIsNavbarOpen(false)}
                  target="_blank"
                >
                  <span className="ecroptodaylogo">ESG Consultant</span>
                </Link>
             </li>
             <li>
             <Link
                  className="nav-link ecroptodaylogo ex-link1 rounded"
                  to="https://ecroptoday.co.in/"  onClick={() => setIsNavbarOpen(false)}
                  target="_blank"
                >
                  <span className="ecroptodaylogo">E-CROPTODAY</span>
                </Link>
             </li>
             <li>
             <Link
                  className="nav-link rounded p-0"
                  to="https://sdgindiaindex.niti.gov.in/#/"  onClick={() => setIsNavbarOpen(false)}  target="_blank"
                >
                  <img
                    src={SDG}
                    alt="sdg index"
                    className="sdg-img"
                  />
                </Link>
             </li>
            </ul>
           
                
               
               
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnavbar;
