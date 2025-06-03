import React from "react";
import { Helmet } from "react-helmet-async";
import "./CropMonitoring.css";
import CardBorderGrid from "../../../Reusablecomp/CardBorderGrid/CardBorderGrid.js";
import Titleunderline from "../../../Reusablecomp/Titleunderline/Titleunderline.js";
import FaqSection from "../../../Faqcomp/FaqSection.js";
import { LocationIcon } from "../../../../assets/svgicons/icons.js";
import Banner from "../../../Reusablecomp/Banner/Banner.js";
import Featurecard from "../../../Reusablecomp/Featurecard/Featurecard.js";

const CropMonitoring = () => {
  const cropMFaqs = [
    {
      title: "What is water stress level monitoring, and how does it help?",
      content:
        "Water stress monitoring pinpoints irrigation needs, ensuring optimal water use and healthy crops.",
      isOpenInitially: false,
    },

    {
      title:
        " How does Soil Organic Carbon (SOC) information improve soil health?",
      content:
        "SOC information helps assess soil health by measuring the amount of organic carbon in the soil, which is crucial for soil fertility, structure, and its ability to retain water and nutrients.",
      isOpenInitially: false,
    },

    {
      title: "How much area does one eCrop device cover?",
      content:
        "10 acres of land, and we can expand the area by adding additional soil sensors.",
      isOpenInitially: false,
    },

    {
      title:
        " Is this service suitable for all types of crops and farming practices?",
      content:
        "Yes, the service is designed to be adaptable to various types of crops and farming practices, including row crops, orchards, vineyards, and mixed farming systems.",
      isOpenInitially: false,
    },

    {
      title: "How secure is my data with the crop advisory service?",
      content:
        "Data security is a top priority for most crop advisory services. They typically use advanced encryption and security protocols to ensure that your data is protected and confidential.",
      isOpenInitially: false,
    },
  ];
  const cardData3 = [
    {
      image: "https://api.ecrop.co/assets/precisiongrow/cropicon1.webp",
      title: "Crop Health Monitoring ",
      content:
        "Our satellite technology provides detailed insights of your crops, helping you spot early signs of diseases or pest infestations before they become a big issue.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/cropicon2.webp",
      title: "	Crop Irrigation Management  ",
      content:
        "We track real-time soil moisture, giving farmers the data to adjust irrigation schedules. This helps save water and ensures that crops get the right amount of irrigation.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/cropicon3.webp",
      title: "	Soil Organic Carbon (SOC) Analysis  ",
      content:
        "Our SOC analysis helps you understand the health and fertility of your soil, so you can make informed decisions that support the long-term sustainability of your land.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/cropicon4.webp",
      title: "Digital Elevation Models (DEM)  ",
      content:
        " With our DEM data, we create 3D models that help you plan drainage systems and design field layouts that maximize productivity and efficiency.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/cropicon5.webp",
      title: "Radar Data for Rainclouds",
      content:
        "We use radar data to keep monitoring your crops even in cloudy or rainy seasons, ensuring you have the insights you need when traditional satellites might fall short.",
    },
  ];

  const parameters = [
    {
      title: "Smart Irrigation",
      description:
        "Real-time data from NDMI, NDWI, and Evapotranspiration to optimize watering schedules.",
    },
    {
      title: "Weather Analysis",
      description:
        "Detailed weather patterns using RVI and RSM to plan accordingly.",
    },
    {
      title: "Crop Area Estimation",
      description:
        "Accurate estimation of crop areas for better resource allocation.",
    },
    {
      title: "Updated Weather Forecasts",
      description:
        "Keep up-to-date with real-time weather predictions for better planning.",
    },
    {
      title: "Crop Health Monitoring",
      description:
        "Images and data from NDVI, NDRE, SAVI, EVI, and VAR to assess crop vitality.",
    },
    {
      title: "Soil Health",
      description:
        "Insights into Soil Organic Carbon (SOC) levels for better soil management.",
    },
    {
      title: "Land Mapping",
      description: "Precise field mapping to enhance land use and management.",
    },
    {
      title: "Clear Imaging",
      description:
        "High-quality imaging with TCI and ETCI for accurate crop monitoring.",
    },
  ];
const features = [
  {
    description: 'High-resolution images for detailed visual insights',
    aos: 'fade-up',
    duration: '1000',
  },
  {
    description: 'Water stress levels helps to monitor irrigation needs effective',
    aos: 'fade-down',
    duration: '1200',
  },
  {
    description: 'Tree age estimation for better forest management',
    aos: 'fade-up',
    duration: '1000',
  },
  {
    description: 'Land use and classification data for smarter planning',
    aos: 'fade-down',
    duration: '1200',
  },
  {
    description: 'Soil Organic Carbon (SOC) information to assess soil health',
    aos: 'fade-up',
    duration: '1000',
  },
  {
    description: 'Ongoing crop health monitoring for early detection',
    aos: 'fade-down',
    duration: '1200',
  },
  {
    description: 'Accurate tree count for better resource management',
    aos: 'fade-up',
    duration: '1000',
  },
  {
    description: 'Current weather updates and forecasts for informed decision',
    aos: 'fade-down',
    duration: '1200',
  },
  {
    description: 'Crop yield and area estimation to forecast production',
    aos: 'fade-up',
    duration: '1200',
  },
  {
    description: 'Hight precision digital elevation data to enhance field planning',
    aos: 'fade-down',
    duration: '1200',
  },
  {
    description: 'Soil moisture levels analysis for efficient irrigation',
    aos: 'fade-up',
    duration: '1200',
  },
  {
    description: 'Evapotranspiration insight to optimize sustainable irrigation',
    aos: 'fade-down',
    duration: '1200',
  },
];
  return (
    <>
      <Helmet>
        <title>Crop Monitoring Solutions - Precision Grow Agri-Tech</title>
        <meta
          name="description"
          content="Enhance crop yield with Precision Grow's innovative crop monitoring solutions. Leverage satellite technology for smarter, sustainable farming practices."
        />
        <meta
          name="keywords"
          content="crop health monitoring, real-time crop analytics, smart agriculture data"
        />
      </Helmet>
      <Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/Crop Monitiring.webp"
          heading="Service"
          subheading="Satellite-Based Crop Monitoring"
        />
        <section>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row align-items-center">
              {/* Left side: Image */}
              <div className="col-lg-6 ">
                <img
                  src="https://api.ecrop.co/assets/precisiongrow/99 offer_AD.webp"
                  alt="CropAdd"
                  loading="lazy"
                  className="img-fluid w-100"
                />
              </div>

              {/* Right side: Content */}
              <div className="col-lg-6">
                <h4 className=" display-2 fw-bold boldertext">
                  Monitoring crops,
                  <br />
                  cultivating farms at your convenience.
                </h4>
              </div>
            </div>
          </div>
        </section>
      <div className="container">
              <Titleunderline title="What You Will Get ?" tag="h2"/>
 <div className="row">
  {features.map((item, index) => (
<div className="col-xl-2 col-lg-4 col-md-6 feature-grid-item mb-3" key={index}>
      <Featurecard
        description={item.description}
        aos={item.aos}
        duration={item.duration}
        bgColor="linear-gradient(to top,rgba(225, 234, 245, 0.17),rgba(9, 141, 158, 0.21))"
      />
    </div>
  ))}
</div>

      </div>
      <div
        className="container p-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Titleunderline title="Next-Gen Satellite Crop Management" tag="h1"/>

        <p className="text-center">
          {" "}
          We bring advanced satellite technology to help farmers keep a close
          eye on their crops. Our monitoring services offer insights into crop
          health, irrigation needs, soil organic carbon (SOC), and even with the
          land's elevation. With accurate, real-time information, farmers can
          make smarter decisions whether it's about crop health, resource
          management, or boosting yields. Eventually, we help make farming more
          efficient, sustainable, and productive.
        </p>
      </div>
      <section>
        <Titleunderline title="Key Features of Precision Grow's Satellite-Based Crop Monitiring" tag="h2"/>

        <div className="outercaropMont m-auto">
          <CardBorderGrid cardinfo={cardData3} colsLg={5} />
        </div>
      </section>
      {/* rong he ye pura section */}
      <section>
        <Titleunderline title="Our Key Parameters" tag="h3"/>
        <div className="key-parameters position-relative">
          <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-1">
              {parameters.map((param, index) => (
                <div className="col" key={index}>
                  <div
                    className="card h-100 parameter-card glass-card text-center border-0"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-4">
                      <div className="icon-circle mb-3 shadow-lg">
                        <LocationIcon size={30} />
                      </div>

                      <h5 className="card-title fw-semibold text-dark mb-2">
                        {param.title}
                      </h5>
                      <p className="card-text small text-secondary">
                        {param.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FaqSection data={cropMFaqs} variant="blue" />;
    </>
  );
};

export default CropMonitoring;
