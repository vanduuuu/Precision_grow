import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import './Footernew.css';

import {
  BloggerIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets/svgicons/icons.js";
import { Link } from "react-router-dom";

const Footernew = () => {
  const [showSections, setShowSections] = useState(false);

  const handleFooter = () => {
    setShowSections(!showSections);
  };

  const PartnerLogos = () => (
    <Row className="text-center justify-content-center">
      {[
        "https://api.ecrop.co/assets/precisiongrow/Assocham_India.webp",
        "https://api.ecrop.co/assets/precisiongrow/cii.webp",
        "https://api.ecrop.co/assets/precisiongrow/ficci.webp",
        "https://api.ecrop.co/assets/precisiongrow/ifoam.webp",
        "https://api.ecrop.co/assets/precisiongrow/ESC.webp",
        "https://api.ecrop.co/assets/precisiongrow/nasscom.webp",
      ].map((img, idx) => (
        <Col key={idx} xs={6} sm={4} md={2} lg={6} className="mb-3">
          <img
            src={img}
            alt={`Partner ${idx + 1}`}
            className="img-fluid rounded border p-2 bg-white"
            loading="lazy"
          />
        </Col>
      ))}
    </Row>
  );

  const exploreLinks = [
    { label: "About us", path: "/about" },
    { label: "Services", path: "/crop-monitoring" },
    { label: "Products", path: "/ecrop" },
    { label: "Sustainability", path: "/sustainability" },
    { label: "Blog", path: "/blog" },
    { label: "Policy", path: "/policy" },
  ];

  return (
    <footer className="text-white">
      <Container className="py-3">
        <Row>
          <h3 className="heading1 mb-5 text-center fw-bolder">
            Get in Touch and Start Your Journey to Success
          </h3>

          {/* Logo Column */}
          <Col md={3} lg={2} sm={12} xs={12} className="mb-4">
            <div className="xs-flex-row">
              <div className="img1 bg-white p-1 rounded-1 mb-0 mb-md-3 h-sm-50 w-sm-25">
                <img
                  src="https://api.ecrop.co/assets/precisiongrow/Precision-Grow-Logo-new.webp"
                  alt="Precision Grow Logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div className="img2 rounded-1">
                <img
                  src="https://api.ecrop.co/assets/precisiongrow/dun-logo.webp"
                  alt="Dun Logo"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </Col>

          {/* Address Section */}
          <Col md={7} lg={5} sm={6} xs={12}>
            <ul className="list-unstyled text-center px-md-3 px-lg-4 px-0">
              <li className="address-li">
                <h6 className="hover-border-bottom">CORPORATE OFFICE</h6>
                <p>
                  Unit No 22, Building No. 2(A3), Sector 1, Millennium Business
                  Park, Mahape, Navi Mumbai, 400710
                </p>
              </li>
              <li className="address-li">
                <h6 className="hover-border-bottom">REGD. OFFICE</h6>
                <p>
                  Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi,
                  Mumbai, 400703
                </p>
              </li>
              <li className="address-li">
                <h6 className="hover-border-bottom">CITY OFFICE</h6>
                <p>
                  61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai,
                  400012
                </p>
              </li>
            </ul>
          </Col>

          {/* Explore Links (desktop only) */}
          <Col
            md={2}
            lg={1}
            sm={6}
            xs={6}
            className="mb-4 d-none d-md-block explorelist"
          >
            <h6 className="hover-border-bottom m-0">EXPLORE</h6>
            <ul className="list-unstyled">
              {exploreLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white text-decoration-none d-block-inline mb-2 a-hover-border-bottom"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Toggle Button (mobile only) */}
          <Col xs={12} className="d-block d-md-none text-center mb-5">
            <div
              onClick={handleFooter}
              className="d-inline-block px-4 py-2 mobbtn text-white font-weight-bold rounded shadow-sm text-center"
            >
              {showSections ? "Hide Sections" : "View More"}
            </div>
          </Col>

          {/* Collapsible Section (mobile only) */}
          <Collapse in={showSections}>
            <div className="w-100 d-md-none">
              <Row>
                <Col xs={4} className="mb-4">
                  <h6 className="pb-2">EXPLORE</h6>
                  <ul className="list-unstyled mt-3">
                    {exploreLinks.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          className="text-white text-decoration-none d-block mb-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>

                <Col xs={8}>
                  <PartnerLogos />

                  {/* ✅ Great Place to Work logo visible only after toggle in mobile */}
                  <div className="text-center mt-3">
                    <img
                      src="https://api.ecrop.co/assets/precisiongrow/great-place-to-work.webp"
                      alt="Great Place to Work"
                      className="img-fluid w-25"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Collapse>

          {/* Partner Logos and Great Place to Work (desktop only) */}
          <Col
            lg={3}
            className="order-lg-2 order-4 d-none d-lg-block d-md-block"
          >
            <PartnerLogos />
          </Col>
          <Col
            lg={1}
            className="order-lg-2 order-4 d-none d-lg-block d-md-block"
          >
            <img
              src="https://api.ecrop.co/assets/precisiongrow/great-place-to-work.webp"
              alt="great place to work"
              loading="lazy"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div className="copyRightArea py-1">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6} xs={12}>
              <h6 className="mb-0">
                &copy; 2024. All Rights Reserved by&nbsp;
                <a
                  href="https://precisiongrow.co.in/"
                  className="text-primary fw-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Precision Grow (A Unit of Tech Visit IT Pvt Ltd)
                </a>
              </h6>
            </Col>
            <Col lg={6} xs={12}>
              <ul className="list-inline viewmore mb-0 mt-1 mt-lg-0 d-flex justify-content-lg-end justify-content-center-lg gap-2">
                <li className="list-inline-item bg-white">
                  <a
                    href="https://www.facebook.com/PrecisionGrow/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FacebookIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://x.com/precision_grow"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <TwitterIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://www.linkedin.com/company/precision-grow/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <LinkedinIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://www.instagram.com/precisiongrow_/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <InstagramIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <YoutubeIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://precisiongrowindia.blogspot.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <BloggerIcon size={25} bgColor="white" />
                  </a>
                </li>
                <li className="list-inline-item bg-white">
                  <a
                    href="https://www.threads.net/@precisiongrow_"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <ThreadsIcon size={25} bgColor="white" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footernew;
