import React from "react";
import "./Skywatch.css";
import RollingGallery from "../Skywatch/RollingGallary.js";
import { Container, Row, Col } from "react-bootstrap";

import { Helmet } from "react-helmet-async";
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";
import Arrowcard from "../../Reusablecomp/Arrowcard/Arrowcard.js";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import ListItem from "../../Reusablecomp/ListItem.js";

const Skywatch = () => {
  const skywatchData = [
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch8.webp",
      title: "Real-Time Data Access",
      label:
        "Updated with continuous, real-time measurements of the facility’s environmental conditions.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch12.webp",
      title: "Historical Data for Strategic Planning",
      label:
        "Provides real-time data along with data from previous 7 days data to analyze past conditions for better decision making.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch9.webp",
      title: "Air Quality Assurance",
      label:
        " Real-time quality data, helping ensure safe working environment, promoting employee health .",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch13.webp",
      title: "User-Friendly Interface",
      label:
        "Allows easy navigation for admin and users through data, swift access and seamless operation.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch10.webp",
      title: "Comprehensive Pollution Monitoring",
      label: " Track pollutants like PM 2.5, PM 10, CO2, SO2, NOx .",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch14.webp",
      title: "Policy Compliant Operations",
      label:
        "Helping companies identify pollution-causing processes for correction or elimination",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/skywatch11.webp",
      title: "Weather and Pollution Forecasting",
      label:
        "Receive regular predictive weather data helping prevent measures and protect from losses .",
    },
  ];
  const cardsPerRow = 4;
  const cardsData6 = [
    {
      id: 1,
      title: "WIND PARAMETERS",
      description: "Wind direction, Wind speed, Wind degree, and Wind force",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch1.webp",
      isFirst: true,
      isLast: false,
    },
    {
      id: 2,
      title: "ENVIRONMENTAL DATA",
      description:
        "Air Temperature, Humidity, Rainfall, Pressure, Compass Angle, and Noise levels",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch2.webp",
      isFirst: true,
      isLast: false,
    },
    {
      id: 3,
      title: "LIGHTING CONDITIONS",
      description: "Lux High/ Lux Low (Light Value)",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch3.webp",
      isFirst: false,
      isLast: true,
    },
    {
      id: 4,
      title: "SOLAR RADIATION",
      description: "High & Low Solar Radiation",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch4.webp",
      isFirst: true,
      isLast: false,
    },
    {
      id: 5,
      title: "HISTORICAL DATA",
      description: "Previous 7 days Weather Data",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch5.webp",
      isFirst: true,
      isLast: true,
    },
    {
      id: 6,
      title: "WEATHER FORECASTING",
      description: "Next 5 days Hourly Weather Forecast",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch6.webp",
      isFirst: true,
      isLast: false,
    },
    {
      id: 7,
      title: "AIR QUALITY MONITORING",
      description:
        "PM 2.5 & PM 10 (Particulate Matter), CO2 (Carbon Dioxide), Ozone (O3), SO2 (Sulphur Dioxide), NO2 & NO (Nitrogen Compounds), NH3 (Ammonia)",
      image: "https://api.ecrop.co/assets/precisiongrow/skywatch7.webp",
      isFirst: true,
      isLast: false,
    },
  ];
  const skyWFaq = [
    {
      title: "What is SkyWatch? ",
      content:
        "SkyWatch is a cutting-edge industrial pollution monitoring device developed by Precision Grow (A Unit of Tech Visit IT Pvt. Ltd.). It provides real-time environmental data, including air quality, weather conditions, and pollution levels, to help industries stay compliant with regulations and reduce their environmental footprint.",
      isOpenInitially: false,
    },

    {
      title: "How does SkyWatch work? ",
      content:
        "SkyWatch uses advanced sensors to monitor environmental conditions like air quality, weather, and pollution levels in real time. It sends this data directly to a mobile app, allowing users to track and analyze pollution metrics and make informed decisions to optimize their industrial processes.",
      isOpenInitially: false,
    },

    {
      title: "Is SkyWatch easy to install and use? ",
      content:
        "Yes, SkyWatch is designed to be user-friendly, both in terms of installation and operation. The device is easy to set up and can be controlled through an intuitive Android mobile app.",
      isOpenInitially: false,
    },

    {
      title: "Does SkyWatch comply with environmental regulations? ",
      content:
        "Yes, SkyWatch helps businesses comply with environmental regulations by tracking pollution levels and providing actionable insights to reduce emissions and improve operations.",
      isOpenInitially: false,
    },

    {
      title: "What kind of alerts does SkyWatch provide? ",
      content:
        "SkyWatch provides real-time alerts when pollution levels or environmental conditions exceed predetermined thresholds. These alerts help businesses take immediate action to avoid violations or risks.",
      isOpenInitially: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SkyWatch: Real-Time Pollution Monitoring IoT Device
        </title>
        <meta
          name="description"
          content="Monitor industrial pollution and air quality in real time with SkyWatch. This advanced IoT device delivers accurate environmental data via a mobile app."
        />
        <meta
          name="keywords"
          content="satellite crop monitoring, Skywatch farming, real-time agri data from space"
        />
        <link rel="canonical" href="https://precisiongrow.co.in/skywatch" />
      </Helmet>
      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/SkyWatch_Product.webp"
        heading="Skywatch"
        subheading="Monitor your air, breathe easy with SkyWatch"
      />
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="container mt-3">
        <p className="fs-5 text-center fw-bold">
          Designed to measure and monitor industrial pollution in real time,
          capturing critical environmental data from the location to your
          smartphones via a dedicated Android app, providing instant overview of
          atmospheric conditions and air quality. Advanced sensors measure a
          wide range of parameters, including air quality, weather conditions,
          particulate matter and much more.
        </p>

        <div className="overview-outers">
          <Titleunderline title="Key Features" tag="h1"/>
          <div className="tour row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
            {cardsData6.map((item, index) => {
              const isFirst = index % cardsPerRow === 0;
              const isLast = (index + 1) % cardsPerRow === 0;

              return (
                <div className="col1" key={item.id}>
                  <Arrowcard
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    isFirst={isFirst}
                    isLast={isLast}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 my-3 bg-grennish">
        <Titleunderline title="Benefits" tag="h3"/>

        <Container className="sky-benefits">
          <Row className="align-items-center">
            {/* Left Image */}
            <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
              <div className="rotating-gradient-bg rounded-circle d-inline-block">
                <img
                  src="https://api.ecrop.co/assets/precisiongrow/skywatchmodel.webp"
                  alt="Skywatch"
                  className="img-fluid rounded-circle object-fit-contain"
                  loading="lazy"
                />
              </div>
            </Col>

            {/* Right List Items */}
            <Col lg={6}>
              {skywatchData.map((item, index) => (
                <ListItem
                  icon={item.icon}
                  label={item.label}
                  title={item.title}
                  index={index}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <section>
        <Container className="mb-2">
          <Row>
            {/* Left Side - Content */}
            <Col md={7} className="leftecrop">
              <br />
              <br />
              <h2 className="boldlook">About The Interface</h2>
              <p>
                Operates seamlessly on a mobile app, easy to monitor, manage
                pollution from anywhere.
              </p>
              
                <h5 className="fw-bold">Dashboard</h5>
              
              <p>
                Displaying real-time data and insights, facilitating for
                decision making.
              </p>
 <h5 className="fw-bold">Analytical</h5>
              <p>
                Providing detailed graphs, charts and trends for each monitored
                parameter, ensuring that data is easy to understand and
                actionable.
              </p>

              <h5 className="fw-bold">Air-Prediction</h5>
            
              <p>
                Displays the next 5 days hourly weather forecast which includes
                CO, NO, NO2, O3, SO2, PM 2.5, PM 10, NH3.
              </p>

              <h5 className="fw-bold">Profile</h5>
              <p>
                Admin has complete control over system and can add up 5
                additional users. User grants access by admin can also view
                real-time data on their dashboard, making it convenient for
                multiple members to stay informed.{" "}
              </p>

             <h5 className="fw-bold">Real-Time Alerts</h5>
              <p>
                Notifications set up for specific, always alerted when pollution
                levels or environmental conditions exceed safe limits.
              </p>
            </Col>

            {/* Right Side - Carousel */}
            <Col md={5} className="right-ecrop">
              <RollingGallery autoplay={true} pauseOnHover={true} />
            </Col>
          </Row>
        </Container>
      </section>
      <FaqSection data={skyWFaq} variant="lightblue" />;
    </>
  );
};

export default Skywatch;
