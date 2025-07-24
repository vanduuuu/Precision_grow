import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown,FiPhone  } from "react-icons/fi";
import "./Navbar.css";
import Topbar from "../Topbar/Topbar";

const Subnavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Throttled resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020) {
        setIsMobileMenuOpen(false);
        setOpenDropdownIndex(null);
        setOpenSubDropdownIndex(null);
      }
    };

    const throttledResize = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", throttledResize);
    return () => window.removeEventListener("resize", throttledResize);
  }, []);

  // Click outside nav closes dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdownIndex(null);
        setOpenSubDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenDropdownIndex(null);
    setOpenSubDropdownIndex(null);
  }, []);

  const toggleDropdown = useCallback((index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
    setOpenSubDropdownIndex(null);
  }, []);

  const toggleSubDropdown = useCallback((index) => {
    setOpenSubDropdownIndex((prev) => (prev === index ? null : index));
  }, []);

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 1020) {
      setOpenDropdownIndex(null);
      setOpenSubDropdownIndex(null);
    }
  };

  const handleDropdownMouseEnter = (index) => {
    if (window.innerWidth > 1020) {
      setOpenDropdownIndex(index);
      setOpenSubDropdownIndex(null);
    }
  };

  const menu = useMemo(
    () => [
      { title: "About Us", path: "/about" },
      {
        title: "Services",
        links: [
          {
            label: "Satellite Monitoring",
            subLinks: [
              { label: "Crop Monitoring", path: "/crop-monitoring" },
              {label: "Fish Monitoring",path: "/fish-monitoring"}
            ],
          },
          { label: "Farm Boundary", path: "/farm-boundary" },
          { label: "Precision Grow AI", path: "/precision-grow-ai" },
          { label: "Regenerative Agriculture", path: "/regenerative-agriculture" },
          { label: "Product Traceability", path: "/product-traceability" },
          { label: "Crop Advisory", path: "/crop-advisory" },
          { label: "Wildfire Solution", path: "/wildfire-solution" },
          { label: "Agri Insurance", path: "/agri-insurance" },
          { label: "Agri Loan", path: "/agri-loan" },
          { label: "Agri Drone", path: "/agri-drone" },
          { label: "Krishak Bazar", path: "/krishak-bazar" },
          { label: "Agristack", path: "/agristack" },
          { label: "Crop Consultancy", path: "/crop-consultancy" },
          { label: "Sustainable Farming Solutions", path: "/sustainable-farming-solutions" },
          { label: "Technology Integration", path: "/technology-integration" }
        ],
      },
      {
        title: "Products",
        links: [
          { label: "eCrop(Smart Farming With electronic Crop)", path: "/ecrop" },
          { label: "Buy Product", path: "/buy-product" },
          { label: "SkyWatch", path: "/skywatch" },
          { label: "ECOLOO", path: "/ecoloo" },
        ],
      },
      { title: "Sustainability", path: "/sustainability" },
      { title: "Blog", path: "/blog" },
      { title: "Policy", path: "/policy" },
      { title: "More Reads", path: "/more-reads" },

    ],
    []
  );

  return (
    <>
    <Topbar/>
       <nav
      className="navigation"
      role="navigation"
      aria-label="Main Navigation"
      ref={navRef}
    >
      <div className="nav-container">
        {/* Logo */}
        <div className="brand">
          <Link to="/" aria-label="Go to homepage">
            <img
              src="https://api.ecrop.co/assets/precisiongrow/Precision-Grow-Logo-new.webp"
              alt="Precision Grow Logo"
              className="logo-img"
              loading="lazy"
              width="250"
              height="auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="nav-mobile"
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle mobile menu"
          onKeyPress={(e) => e.key === "Enter" && toggleMobileMenu()}
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Nav Items */}
        <ul className={`nav-list ${isMobileMenuOpen ? "active" : ""}`}>
          {menu.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleDropdownMouseEnter(index)}
              onMouseLeave={handleDropdownMouseLeave}
              className={openDropdownIndex === index ? "active" : ""}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className={isActive(item.path) ? "active" : ""}
                  onClick={() => toggleMobileMenu()}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    className="dropdown-title"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={openDropdownIndex === index}
                    aria-controls={`dropdown-${index}`}
                  >
                    {item.title}
                    <FiChevronDown
                      className={`dropdown-icon ${openDropdownIndex === index ? "rotated" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <ul
                    id={`dropdown-${index}`}
                    className="nav-dropdown pt-3"
                    style={{ display: openDropdownIndex === index ? "flex" : "none" }}
                  >
                    {item.links?.map((link, linkIndex) =>
                      link.subLinks ? (
                        <li key={linkIndex} className="sub-dropdown">
                          <button
                            type="button"
                            onClick={() => toggleSubDropdown(linkIndex)}
                            aria-expanded={openSubDropdownIndex === linkIndex}
                            aria-controls={`sub-dropdown-${linkIndex}`}
                          >
                            {link.label}
                            <FiChevronDown
                              className={`dropdown-icon ${openSubDropdownIndex === linkIndex ? "rotated" : ""}`}
                              aria-hidden="true"
                            />
                          </button>
                          <ul
                            id={`sub-dropdown-${linkIndex}`}
                            className="sub-nav-dropdown"
                            style={{
                              display: openSubDropdownIndex === linkIndex ? "flex" : "none",
                            }}
                          >
                            {link.subLinks.map((sublink, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={sublink.path}
                                  onClick={() => toggleMobileMenu()}
                                  className={isActive(sublink.path) ? "active" : ""}
                                  aria-current={isActive(sublink.path) ? "page" : undefined}
                                >
                                  {sublink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            onClick={() => toggleMobileMenu()}
                            className={isActive(link.path) ? "active" : ""}
                            aria-current={isActive(link.path) ? "page" : undefined}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </li>
          ))}

         {/* Extra CTA buttons */}

<li className="nav-extra-button mb-1 mb-lg-0 ">
  <a
    href="https://ecroptoday.co.in/" 
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="extra-btn-text"
    aria-label="Green GDP"
  >
    Ecroptoday
  </a>
</li>
<li className="nav-extra-button mb-2 mb-lg-0">
  <a
    href="https://greengdp.in/" 
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="extra-btn-text"
    aria-label="Green GDP"
  >
    Green GDP
  </a>
</li>
<li className="nav-extra-button">
  <a
    href="https://sdgs.un.org/goals"
    target="_blank"
    rel="noopener noreferrer nofollow"
    className="extra-btn-img p-0 border-0"
    aria-label="Sustainable Development Goals"
  >
    <img
      src="https://api.ecrop.co/assets/precisiongrow/sdg-india.webp"
      alt="SDG India Logo"
      loading="lazy"
      className="logo-btn-img"
      width="100"
      height="auto"
    />
  </a>
</li>
<li className="nav-assistance d-xl-flex d-none align-items-center ms-lg-auto">
  <div className="small text-start">
    <div className="fw-bolder"><span>Need Assistance? Let’s Talk!</span></div>
    <a href="tel:+919830632108" className="text-decoration-none">
      <FiPhone className="text-success" /> +91 8097283444
    </a>
  </div>
</li>


        </ul>
      </div>
    </nav>
    </>
 
  );
};

export default Subnavbar;
