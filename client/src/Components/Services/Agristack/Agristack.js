import React from "react";
import Banner from "../../Reusablecomp/Banner/Banner";
import { Helmet } from "react-helmet-async";
import "./Agristack.css";
import tag1 from "../../../assets/icons_About/shape-1.webp";
import agristack from "../../../assets/agriStack_banner.webp";
import agristackimg from "../../../assets/AgriStack_image.webp";
import img1 from "../../../assets/icons_About/soil-health.webp";
import img2 from "../../../assets/icons_About/geo-spatial-Mapping.webp";
import img3 from "../../../assets/icons_About/crop-recommendations.webp";
import img4 from "../../../assets/icons_About/best-practices-guidance.webp";
import img5 from "../../../assets/icons_About/ai-powered-analytics.webp";
import img6 from "../../../assets/icons_About/weather-forecasting.webp";
import SectionTitle from "../../Reusablecomp/SectionTitle/SectionTitle";
import InfoCardGroup from "../../Reusablecomp/InfoCardGroup";
import {
  FaBuilding,
  FaUniversity,
  FaUsers,
  FaMicroscope,
} from "react-icons/fa";
import HoverCardList from "../../Reusablecomp/HoverCardList/HoverCardList";

const Agristack = () => {
  const agri_api = [
    {
      id: 1,
      title: "Soil Health Insights",
      description:
        "AgriStack offers detailed information on soil fertility, moisture levels, and nutrient composition, enabling farmers to optimize their soil management practices.",
      imageSrc: img1,
    },
    {
      id: 2,
      title: "Crop Recommendations",
      description:
        "By analyzing local conditions and historical data, AgriStack provides personalized crop suggestions that align with the specific needs of the land and climate.",
      imageSrc: img3,
    },
    {
      id: 3,
      title: "Weather Forecasting",
      description:
        "Real-time weather updates and climate trend analyses help farmers prepare for seasonal changes, allowing them to plan planting and harvesting more effectively.",
      imageSrc: img6,
    },
    {
      id: 4,
      title: "Geo-Spatial Mapping",
      description:
        "Location-based agricultural data supports precision farming, helping farmers make data-driven decisions about resource allocation and field management.",
      imageSrc: img2,
    },
    {
      id: 5,
      title: "AI-Powered Analytics",
      description:
        "Advanced predictive analytics assist in yield forecasting, pest control strategies, and market trend analysis, enabling farmers to anticipate challenges and seize opportunities.",
      imageSrc: img5,
    },
    {
      id: 3,
      title: "Best Practices Guidance",
      description:
        "AgriStack shares insights on sustainable farming practices, helping farmers improve productivity while minimizing environmental impact",
      imageSrc: img4,
    },
  ];
  const cardData = [
    {
      title: "Corporates",
      text: "Corporates in the agricultural sector utilize AgriStack's real-time data on crop yields and market demand to optimize supply chain efficiency, enhance sourcing strategies, and improve overall operational effectiveness, driving profitability and sustainability.",
      icon: FaBuilding,
      iconType: "react-icon",
      bgColor: "linear-gradient(to top,  white, #e8f2f2)",
    },
    {
      title: "Government Bodies",
      text: "Government bodies leverage AgriStack to analyze agricultural data, develop effective policies, and implement targeted subsidy programs, ultimately enhancing rural development initiatives and improving the livelihoods of farmers through informed decision-making.",
      icon: FaUniversity,
      iconType: "react-icon",
      bgColor: "linear-gradient(to top, white, #e8f2f2)",
    },
    {
      title: "Farmer Groups & Cooperatives",
      text: "Farmers benefit from AgriStack by accessing essential data on soil health, weather patterns, and personalized crop recommendations, enabling them to make informed decisions that lead to increased yields and reduced operational costs.",
      icon: FaUsers,
      iconType: "react-icon",
      bgColor: "linear-gradient(to top, white, #e8f2f2)",
    },
    {
      title: "Research & Agri-Tech Firms",
      text: "Research institutions and agri-tech firms harness AgriStack's comprehensive data to drive innovation, conduct in-depth agronomic research, and develop smart farming solutions that enhance productivity, sustainability, and resource efficiency in agriculture.",
      icon: FaMicroscope,
      iconType: "react-icon",
      bgColor: "linear-gradient(to top, white, #e8f2f2)",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AgriStack: Smart Farming Insights Powered by Agri Data</title>
        <meta
          name="description"
          content="Unlock smart farming with AgriStack’s real-time soil, weather, and crop data. Use smart Agri tools and IoT devices for better yields and smarter decisions."
        />
        <link rel="canonical" href="https://precisiongrow.co.in/agristack" />
      </Helmet>

      <Banner
        imageSrc={agristack}
        heading="Agristack"
        subheading="Data-Driven Agriculture with AgriStack"
      />
      {/* AI-Powered Farming Section */}
      <div className="mt-0 mt-lg-5">
        <section className="container py-5">
          <div className="row gy-4">
            {/* Image with 100% Organic Tag */}
            <div className="col-lg-6 col-md-12 position-relative">
              <img
                src={agristackimg}
                alt="AI Farming"
                className="img-fluid rounded shadow aifarming"
                loading="lazy"
              />

              {/* Organic Tag slightly outside top-left */}
              <div className="organic-tag-out position-absolute">
                <img
                  src={tag1} // ✅ Replace with your path
                  alt="100% Organic"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6 col-md-12">
              <SectionTitle title="Data-Driven Agriculture" />
              <h1 className="mb-3 boldlook">
                AgriStack: Data-Driven Agriculture for Smarter Decisions
              </h1>
              <p className="lead text-secondary">
                In today’s evolving agricultural landscape, data is the key to
                efficiency, profitability, and sustainability. AgriStack by
                ECROP is a comprehensive agricultural database that provides
                actionable insights on soil health, crop patterns, weather
                trends, and farm productivity to help farmers, businesses, and
                policymakers make smarter, data-driven decisions.
              </p>
              <ul className="square-bullets ps-3 fs-5 text-secondary">
                <li>
                  <strong>Soil & Crop Data:</strong> Insights on soil fertility,
                  moisture, and crop suitability.
                </li>
                <li>
                  <strong>Geo-Spatial Mapping:</strong> Location-based data for
                  precision farming.
                </li>
                <li>
                  <strong>Weather & Climate Trends:</strong> Real-time updates
                  for seasonal preparation.
                </li>
                <li>
                  <strong>AI-Powered Forecasting:</strong> Predictive analytics
                  for yield, pest control, and market trends.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="agr-help-sec py-5">
        <div className="container">
          <div className="w-100 lg-w-50">
            <h2 className="boldlook">How AgriStack Helps?</h2>
            <p className=" fs-5">
              AgriStack provides a comprehensive suite of tools and data that
              empower farmers and agricultural stakeholders to make informed
              decisions. Here’s how AgriStack helps
            </p>
          </div>
          <HoverCardList data={agri_api} />
        </div>
      </section>
      <section className="agr-benf-sec">
        <div className="text-center container">
          <h2 className="boldlook text-white">
            Key Beneficiaries of AgriStack
          </h2>
          <p className="lead text-white py-4">
            AgriStack is a transformative platform designed to revolutionize the
            agricultural landscape by harnessing the power of data. By providing
            comprehensive insights into various aspects of farming, AgriStack
            serves a diverse range of stakeholders in the agricultural
            ecosystem. Below, we explore how different groups can leverage
            AgriStack to enhance their operations, make informed decisions, and
            drive sustainable agricultural practices.
          </p>
          <div data-aos="fade-up" data-aos-duration="3000" className="mx-auto">
            <InfoCardGroup cardData={cardData} colClass="col-12 col-md-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Agristack;
