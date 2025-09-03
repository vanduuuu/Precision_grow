import React from "react";
import "./KrishakBazar.css";
import { FaTractor } from "react-icons/fa";

// First Section Images
import img1 from "../../../assets/Quality-Products.webp";
import img2 from "../../../assets/Fair-Pricing.webp";
import img3 from "../../../assets/Cold-Storage.webp";
import img4 from "../../../assets/Faster-Delivery.webp";
import sampleImage from "../../../assets/w-c-krishak-b.webp"; // Replace with actual image path

import {
  FaHandshake,
  FaBalanceScale,
  FaTruck,
  FaMoneyCheckAlt,
  FaSeedling,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const KrishakBazar = () => {
  // First Section Cards
  const features = [
    { img: img1, title: "Quality Products", alt: "Quality Products" },
    { img: img2, title: "Fair Pricing", alt: "Fair Pricing" },
    { img: img3, title: "Cold Storage", alt: "Cold Storage" },
    { img: img4, title: "Faster Delivery", alt: "Faster Delivery" },
  ];

  const FeatureCard = ({ img, title, alt }) => (
    <div className="col-6">
      <div className="card kri-card border-0 h-100">
        <div className="card-img-wrapper d-flex justify-content-center align-items-center">
          <img src={img} className="card-img-top feature-img" alt={alt} />
        </div>
        <div className="card-body text-center">
          <h6 className="fw-bold mb-0">{title}</h6>
        </div>
      </div>
    </div>
  );

  const infoCards = [
    {
      icon: <FaHandshake size={40} />,
      title: "Farmer & Buyer Engagement",
      desc: "Farmers, FPOs & FPCs list their fresh produce for sale, while buyers, vendors, exporters, and food businesses connect directly to source high-quality agricultural products.",
    },
    {
      icon: <FaBalanceScale size={40} />,
      title: "Fair Pricing & Quality Sorting",
      desc: "Farmers receive real-time market price updates, ensuring fair trade, while buyers can sort and grade produce based on quality standards for better selection.",
    },
    {
      icon: <FaTruck size={40} />,
      title: "Logistics & Cold Storage",
      desc: "Farmers can store surplus produce in temperature-controlled cold storage, preserving freshness, while buyers can arrange efficient transport solutions for smooth delivery.",
    },
    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Hassle-Free Transactions",
      desc: "A secure and transparent payment system ensures farmers receive timely payouts, and buyers benefit from fast, digital transactions for seamless purchases.",
    },
    {
      icon: <FaSeedling size={40} />,
      title: "Farm-to-Market Delivery",
      desc: "High-quality, farm-fresh produce reaches buyers with minimal wastage, ensuring better profits for farmers and premium-quality products for buyers.",
    },
  ];

  return (
    <>
  
               <Helmet>
                      <title>
                        Krishak Bazar: Farm-to-Market Platform by Smart Farming
                      </title>
                      <meta
                        name="description"
                        content="Empowering farmers through smart farming, IoT devices, and tech-enabled platforms. Krishak Bazar ensures fair trade, quality produce, and better profitability."
                      />
                      <link rel="canonical" href="https://precisiongrow.co.in/krishak-bazar" />
                    </Helmet>
    
      {/* SECTION 1: Krishak Bazar Intro */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0 krishi-outer">
              <h6 className="fs-5 fw-bold">
                Bridging Farmers & Buyers for a Smarter Market
              </h6>
              <h1 className="boldlook">
                Krishak Bazar – A Smarter Marketplace for Farmers & Buyers
              </h1>
              <p className="mt-3 text-muted fs-5">
                Agriculture is the backbone of our economy, yet farmers often
                struggle to get fair pricing, direct market access, and
                efficient supply chains. Krishak Bazar, an initiative by ECROP,
                is designed to bridge this gap, creating a seamless
                farm-to-market platform where farmers can sell their produce
                directly to buyers, ensuring transparency, quality, and
                profitability.
              </p>
            </div>

            {/* Right Grid Cards */}
            <div className="col-lg-6">
              <div className="row g-3">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: How Krishak Bazar Works */}
      <section className="py-5 feature-section text-white">
        <div className="bg-overlay"></div>
        <div className="container position-relative z-2 py-5">
          <div className="row g-4 flex-wrap">
            {/* First Box - Text Only (not a card) */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 p-4 bg-transparent border-0">
                <h5 className="fw-bold text-white boldlook">
                  How Krishak Bazar Works?
                </h5>
                <p className="text-light  mb-0 position-relative">
                  <FaTractor className="text-warning float-start me-2 fs-2" />
                  Krishak Bazar is a farmer-first marketplace that connects
                  farmers, producer groups, and buyers, ensuring fair pricing,
                  transparent trade, and efficient distribution. Here’s how it
                  works in 5 easy steps:
                </p>
              </div>
            </div>

            {infoCards.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card feature-card h-100 text-center shadow-sm bg-white rounded-lg p-3">
                  <div className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-success kri-icon p-3 mb-3 mx-auto">
                    {item.icon}
                  </div>
                  <h6 className="fw-bold fs-4 text-dark">{item.title}</h6>
                  <p className="text-muted  mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white position-relative overflow-hidden">
        <div className="container-fluid px-0">
          <div className="row g-0">
            {/* Left Content with background */}
            <div className="col-lg-6 kri-bg text-white d-flex align-items-center p-3 md:p-5">
              <div className="px-2 px-xl-5">
                <h2 className="fw-bold mb-3 boldlook text-white">
                  Why Choose Krishak Bazar
                </h2>
                <p className="fs-5">
                  Krishak Bazar is a physical and digital marketplace that
                  connects farmers, producer groups, and buyers, eliminating
                  middlemen and creating a fair trade ecosystem. This initiative
                  enables:
                </p>
                <ul className="list-unstyled mt-4 fs-5">
                  <li className="mb-2">
                    🌾 <b>Bridging Farmers & Buyers</b> – No intermediaries, no
                    price exploitation.
                  </li>
                  <li className="mb-2">
                    📈 <b>Market-Driven Pricing</b> – Real-time price updates
                    for fair trade.
                  </li>
                  <li className="mb-2">
                    💳 <b>Easy Digital Payments</b> – Ensuring secure & fast
                    transactions.
                  </li>
                  <li className="mb-2">
                    ❄️ <b>Cold Storage & Logistics</b> – Preserving freshness,
                    reducing waste.
                  </li>
                  <li className="mb-2">
                    🌱 <b>Sustainable & Scalable</b> – A modern,
                    technology-driven agricultural marketplace.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6">
              <div className="h-100">
                <img
                  src={sampleImage}
                  alt="Agriculture Illustration"
                  className="img-fluid h-100 w-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 boldlook">
            Benefits of Krishak Bazar
          </h2>

          <div className="row g-4">
            {/* Card with Background Image and Fixed Attachment */}
            <div className="col-md-6">
              <div className="card h-100 text-white p-4 d-flex flex-column bg-img-fixed">
                <div>
                  <h5 className="fw-bold fs-3 mb-4">🌾 For Farmers & FPOs</h5>
                  <ul className="list-unstyled fs-5 mb-0">
                    <li className="mb-3">
                      ✔️ <b>Fair & Transparent Pricing</b> – Earn better profits
                      by selling directly to bulk buyers.
                    </li>
                    <li className="mb-3">
                      🧪 <b>Quality Assurance & Standardized Grading</b> – No
                      more unfair rejections or price cuts.
                    </li>
                    <li className="mb-3">
                      🌐 <b>Access to Large Buyers & Exporters</b> – Expand
                      market reach beyond local trading.
                    </li>
                    <li className="mb-3">
                      ❄️ <b>Cold Storage & Logistics Support</b> – Reduce
                      post-harvest losses and preserve freshness.
                    </li>
                    <li className="mb-3">
                      💰 <b>Instant Payouts & Secure Payments</b> – Hassle-free
                      transactions with faster payments.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card with Background Color */}
            <div className="col-md-6">
              <div className="card h-100 p-4 d-flex flex-column border-0 kri-bg1">
                <div>
                  <h5 className="fw-bold fs-3 mb-4">
                    🏬 For Buyers & Corporates
                  </h5>
                  <ul className="list-unstyled fs-5 mb-0">
                    <li className="mb-3">
                      🌾 <b>High-Quality, Farm-Fresh Produce</b> – Direct access
                      to freshly harvested crops.
                    </li>
                    <li className="mb-3">
                      📦 <b>Bulk Sourcing at Competitive Prices</b> – Buy in
                      larger quantities without supply chain inefficiencies.
                    </li>
                    <li className="mb-3">
                      📈 <b>Real-Time Pricing & Quality Assurance</b> –
                      Transparent and fair market trade.
                    </li>
                    <li className="mb-3">
                      🚚 <b>Efficient Supply Chain & Distribution</b> – Seamless
                      procurement with logistics & storage support.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative text-white text-center py-5 bg-cover-overlay">
        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark-low"></div>

        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2 className="fw-bold display-3 mb-4 boldlook text-white green-txtt">
                Krishak Bazar – Where <span>Farmers</span> & <span>Buyers</span>{" "}
                Connect!
              </h2>

              <p className="fs-4 mb-4">
                Become a part of ECROP’s Krishak Bazar, a revolutionary
                marketplace where farmers, buyers, and businesses connect for
                fair pricing, quality produce, secure payments, and seamless
                farm-to-market logistics.
              </p>

            <a
  href="https://ecrops.in/contact/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-light btn-lg px-5 shadow-lg fw-semibold"
>
  Join ECROP Krishak Bazar
</a>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KrishakBazar;
