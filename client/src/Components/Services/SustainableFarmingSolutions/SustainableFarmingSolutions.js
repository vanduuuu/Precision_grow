import React from "react";
import Banner from "../../Reusablecomp/Banner/Banner";
import agristack from "../../../assets/icons_About/sustainability-farming-banner.webp";
import soilhealthh from "../../../assets/icons_About/soil-healthh.webp";
import CardBorderGrid from "../../Reusablecomp/CardBorderGrid/CardBorderGrid";
import "./SustainableFarmingSolutions.css";
import SectionTitle from "../../Reusablecomp/SectionTitle/SectionTitle";
import { BsTree, BsGraphUp, BsShieldCheck, BsDiagram3 } from "react-icons/bs";
import Featurecard from "../../Reusablecomp/Featurecard/Featurecard";
import { Helmet } from "react-helmet-async";
const SustainableFarmingSolutions = () => {
  const cardData4 = [
    {
      title: "Nutrient Management",
      content:
        "Efficient nutrient management ensures healthy soil and higher crop yields. By using soil testing, organic fertilizers, and precision application techniques, farmers can optimize nutrient uptake, reduce waste, and improve long-term soil fertility.",
    },
    {
      title: "Pest Management",
      content:
        "A balanced approach to pest control reduces crop damage while preserving beneficial insects. With integrated pest management (IPM), biological controls, and targeted pesticide application, we promote sustainable and eco-friendly pest solutions for healthier farming.",
    },
    {
      title: "Disease Control",
      content:
        "Early disease detection and prevention are essential for reducing crop losses. Using AI-powered monitoring, resistant crop varieties, and eco-friendly treatments, we help farmers safeguard their produce against bacterial, viral, and fungal infections.",
    },
  ];

  const farmData = [
    {
      title: "Improved Soil Fertility",
      description: "Enhance nutrients for long-term productivity.",
      icon: <BsDiagram3 />,
    },
    {
      title: "Enhanced Yield Stability",
      description: "Increase crop performance in all seasons.",
      icon: <BsGraphUp />,
    },
    {
      title: "Pest And Disease Control",
      description: "Minimize losses using smart protection methods.",
      icon: <BsShieldCheck />,
    },
    {
      title: "Increased Biodiversity",
      description: "Support natural ecosystem balance on your farm.",
      icon: <BsTree />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Smart Farming & Soil Health Solutions for Sustainability</title>
        <meta
          name="description"
          content="Improve soil fertility, manage pests, and conserve water with IoT devices and smart farming tools. Precision Grow offers complete sustainable Agri solutions."
        />

        <link
          rel="canonical"
          href="https://precisiongrow.co.in/sustainable-farming-solutions"
        />
      </Helmet>
      <Banner
        imageSrc={agristack}
        heading="Sustainable Farming"
        subheading="Healthy Soil Strong Roots Sustainable Farming"
        alignment="center"
      />
      {/* AI-Powered Farming Section */}
      <div className="ai-outer2 mt-0 pt-0 pt-lg-5">
        <section className="d-flex justify-content-center align-items-center">
          <div className="container row Ai-power">
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src={soilhealthh}
                alt="soilhealthh"
                className="aifarming w-100 h-100"
                loading="lazy"
              />
            </div>
            <div className="col-lg-8 col-md-12 d-flex flex-column justify-content-centerlh-lg">
              <h1 className="mt-2 boldlook greentxt3">
                Importance Of Soil Health
              </h1>
              <p className="fs-5 text-secondary">
                Soil health is essential for maintaining crop yields, fertility,
                and overall plant productivity. It's vital for maintaining the
                quality of the soil, supporting plant growth, and preventing
                soil erosion and disease. Regular soil health checks and
                maintenance are crucial for maintaining the health of your land.
              </p>
              <CardBorderGrid cardinfo={cardData4} colsLg={3} titleClass="" />
            </div>
          </div>
        </section>
      </div>
      <div class="container py-3 lg:py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <SectionTitle title="Sustainable Farming" position="start" />
            <h2 class="mb-3 boldlook greentxt3">
              Water Conservation Techniques
            </h2>
            <p class="mb-3 fs-5 text-secondary">
              Water conservation is crucial for maintaining soil health and
              ensuring the long-term sustainability of your farming operations.
              Here are some techniques you can implement:
            </p>
            <ul class="p-0 fs-5 text-secondary">
              <li class="mb-2">Rainwater harvesting systems</li>
              <li class="mb-2">Drip irrigation methods</li>
              <li class="mb-2">Mulching for moisture retention</li>
              <li>Timely irrigation scheduling</li>
            </ul>
          </div>

          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-12">
                <div class="img-fixed">
                  <img
                    src="https://ecrops.in/wp-content/themes/ecrops/images/sustainability/water-technique1.webp"
                    class="w-100 h-100 object-fit-cover rounded"
                    alt="Technique 1"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="img-fixed">
                  <img
                    src="https://ecrops.in/wp-content/themes/ecrops/images/sustainability/water-technique2.webp"
                    class="w-100 h-100 object-fit-cover rounded"
                    alt="Technique 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-6">
            <img
              src="https://api.ecrop.co/assets/precisiongrow/product traceability.webp"
              alt="trace-product"
              className="img-fluid w-100 rounded pro-imgg "
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h5 className="boldlook greentxt3">Integrated Pest Management</h5>
            <p className="fs-5 text-secondary">
              Integrated pest management (IPM) involves combining traditional
              and modern pest control methods to minimize the impact of pests on
              crops. This approach combines the benefits of traditional methods
              with the advantages of modern technologies, such as electronic
              pest control systems, biological control agents, and advanced
              pesticide formulations.
            </p>
            <ul class="p-0 fs-5 text-secondary">
              <li class="mb-2">Monitor and control pests regularly</li>
              <li class="mb-2">
                Use biological control agents to minimize the impact of
                pests
              </li>
              <li class="mb-2">
                Implement electronic pest control systems
              </li>
              <li class="mb-2">Use advanced pesticide formulations</li>
              <li class="mb-2">
                Train farmers and staff in IPM techniques
              </li>
              <li>
                Monitor and adjust IPM strategies based on pest management
                needs
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {/* LEFT COLUMN: Featurecard grid */}
          <div className="col-lg-6">
            <h5 className="boldlook greentxt3">Crop Diversity and Rotation</h5>
            <p className="fs-5 text-secondary">
              Crop diversity and rotation are essential for maintaining soil
              health, fertility, and overall plant productivity. By growing a
              variety of crops in different seasons, you can reduce the risk of
              pests, diseases, and insect infestations. Additionally, rotation
              can help maintain soil health by reducing the need for fertilizer
              application and maintaining soil moisture levels.
            </p>
          </div>

          {/* RIGHT COLUMN (Optional for image or something else) */}
          <div className="col-lg-6">
            <div className="row">
              {farmData.map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <Featurecard
                    icon={item.icon}
                    title={item.title}
                    aos="fade-up"
                    duration="800"
                    bgColor="#88b939"
                    titleColor="#ffffff"
                    descColor="#fff"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SustainableFarmingSolutions;
