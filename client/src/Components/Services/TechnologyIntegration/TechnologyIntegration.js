import React from "react";
import droneimg from "../../../assets/icons_About/drone-farming.webp";
import "./TechnologyIntegration.css";
import SectionTitle from "../../Reusablecomp/SectionTitle/SectionTitle";
import InfoCardGroup from "../../Reusablecomp/InfoCardGroup";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline";
import CardBorderGrid from "../../Reusablecomp/CardBorderGrid/CardBorderGrid";
import { BiChip, BiBell, BiTargetLock, BiNetworkChart } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const TechnologyIntegration = () => {
  const ecoloodata = [
    {
      id: 1,
      title: "Digital Geotagging & Smart Monitoring",
      text: "Geotagging, AI, and IoT sensors track soil health, weather, and crop conditions in real time, allowing precise farm management and data-driven decisions to enhance productivity and resource efficiency. ",
      img: "https://api.ecrop.co/assets/precisiongrow/save-energy.png",
      bgColor: "linear-gradient(to top, #b8d54f, white)",
    },
    {
      id: 2,
      title: "IoT-Based Alerts & Automated Notifications",
      text: "IoT sensors deliver instant alerts on pest outbreaks, water stress, and climate variations, enabling farmers to take early action, reduce losses, and optimize resources for efficient and sustainable farming.",
      img: "https://api.ecrop.co/assets/precisiongrow/sandclock.png",
      bgColor: "linear-gradient(to top, #b8d54f, white)",
    },
  ];
  const cardData3 = [
    {
      icon: BiChip,
      title: "Cutting-Edge Technology",
      content:
        "AI-powered monitoring, IoT sensors, and smart analytics provide real-time insights into soil health, crop conditions, and weather patterns.",
    },
    {
      icon: BiBell,
      title: "Farmer-Centric Alerts",
      content:
        "Our system sends instant mobile notifications about disease outbreaks, pest infestations, water stress, and nutrient deficiencies, allowing farmers to act fast and prevent losses.",
    },
    {
      icon: BiTargetLock,
      title: "Precision Agriculture",
      content:
        "Using geospatial mapping, AI-driven predictions, and automated irrigation, we help farmers reduce input costs while maximizing yields.",
    },
    {
      icon: BiNetworkChart,
      title: "Seamless Integration",
      content:
        "Our AI solutions optimize supply chains, ensuring efficient storage, reduced post-harvest losses, and direct farm-to-market connectivity.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tech-Driven Farming: AI & IoT Boost Yields Fast</title>
        <meta
          name="description"
          content="Discover how Precision Grow’s AI, IoT & satellite tools help farmers make smarter, greener decisions for higher yields. Easy agri-tech made simple!"
        />

        <link
          rel="canonical"
          href="https://precisiongrow.co.in/technology-integration"
        />
      </Helmet>
      {/* AI-Powered Farming Section */}
      <div className="position-relative">
        <section className="container pt-5">
          <div className="row gy-4 ">
            {/* Text Content */}
            <div className="col-lg-8 col-md-12">
              <SectionTitle title="AI & IoT-Based Farming" />
              <h4 className="fw-bold mb-3 boldlook">
                Smart Farming for Better Yields
              </h4>
              <p className="lead text-secondary">
                At ECROP, we integrate AI (Artificial Intelligence) and IoT
                (Internet of Things) technologies to empower farmers with
                real-time insights and smart decision-making. Our digitally
                geotagged farms and IoT-based alerts help in early detection of
                diseases, pest infestations, water stress, and other
                environmental factors, ensuring cost savings and improved crop
                protection.
              </p>

              <div data-aos="fade-up" data-aos-duration="3000">
                <InfoCardGroup
                  cardData={ecoloodata}
                  colClass="col-12 col-md-6"
                />
              </div>
            </div>
            {/* Image with 100% Organic Tag */}
            <div className="col-lg-4 col-md-12 backbgcolor">
              <img
                src={droneimg}
                alt="AI Farming"
                className="img-fluid aifarming h-100 object-fit-cover background-position-start"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="container pt-5">
        <Titleunderline
          title="Why Choose ECROP’s AI & IoT-Based Farming?"
          tag="h2"
        />
        <p className="lead text-secondary text-center pb-4">
          At ECROP, we bring advanced technology to agriculture, ensuring higher
          efficiency, reduced costs, and improved crop protection. Our
          AI-powered monitoring and IoT-driven automation help farmers make
          data-backed decisions that enhance productivity while promoting
          sustainable farming practices.
        </p>
        <div className="outercaropMont m-auto">
          <CardBorderGrid cardinfo={cardData3} colsLg={4} />
        </div>
      </div>
    </>
  );
};

export default TechnologyIntegration;
