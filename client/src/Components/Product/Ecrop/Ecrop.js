import React from "react";
import "./Ecrop.css";
import { Helmet } from "react-helmet-async";

import ecropicon2 from '../../../assets/icons_About/ecrop2.webp'
import ecropicon3 from '../../../assets/icons_About/ecrop3.webp'

import { Container, Row, Col, Carousel } from "react-bootstrap";

import Banner from "../../Reusablecomp/Banner/Banner";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline";
import { FaCheck } from "react-icons/fa";
import ListItem from "../../Reusablecomp/ListItem.js";
import BrochureDownload from "../../BrochureDownload/BrochureDownload.js";

const Ecrop = () => {
  const ecropData = [
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop1.webp",
      label: "Soil Moisture",
    },
    {
      icon: ecropicon2,
      label: "Temperature",
    },
    {
      icon: ecropicon3,
      label: "Humidity",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop4.webp",
      label: "Ambient Temperature",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop5.webp",
      label: "Light Intensity",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/ecrop6.webp",
      label: "Rainfall",
    },
  ];
  const images = [
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app1.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app3.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app4.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app5.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app7.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app8.webp",
    "https://api.ecrop.co/assets/precisiongrow/ecrop-app11.webp",
  ];

  const advisorySections = [
    {
      title: "Providing real-time agro advisory services:",
      points: [
        "Planting date",
        "Cultivated area",
        "Potential yield achieved date",
        "Land cover and fuel maps for analysis.",
      ],
    },
    {
      title: "SMS includes water and fertilizer requirements:",
      points: [
        "Get regular updates on water requirements (daily and weekly)",
        "Receive guidance on the daily, weekly, and total crop needs for Nitrogen, Phosphorous, and Potassium.",
        "This real-time advice helps close yield gaps and reach your targets by applying fertilizers in smaller, more frequent doses—minimizing waste and boosting crop yields.",
      ],
    },
    {
      title: "Applications of the device:",
      points: [
        "Yield forecasting to be more accurate at local, regional, and national levels.",
        "Forecasts by eCrop devices that are in different parts of places. Centralized data can be accessed by compiling data at desired levels at different times.",
        "Providing information to farmers via SMS about crops even while away from the field.",
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>eCrop: Smart Solutions for Enhanced Crop Management</title>
        <meta
          name="description"
          content="Discover eCrop by Precision Grow for innovative crop management solutions that boost yields and promote sustainable farming practices in India."
        />
        <meta
          name="keywords"
          content="eCrop device, ICAR-CTCRI smart farming, digital crop monitoring"
        />
        <link rel="canonical" href="https://precisiongrow.co.in/ecrop" />
      </Helmet>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/eCrop3.webp"
        heading="eCrop"
        subheading="(SMART FARMING WITH ELECTRONIC CROP)"
      />
      <div className="container">
        <p className="ecrop-highlighted-text fs-5 text-center py-4">
          Recent advancements in smart farming, we’ve partnered with
          <span className="colorful-highlight"> ICAR-CTCRI </span> to introduce
          eCrop tech — a leap towards the
          <span className="colorful-highlight"> future of farming</span>. On{" "}
          <span className="colorful-highlight"> June 5th, 2024</span>, World
          Environment Day, we signed a contract with
          <span className="colorful-highlight"> ICAR-CTCRI </span> for the
          manufacturing and marketing of this device.{" "}
          <span className="colorful-highlight"> eCrop </span> brings
          <span className="colorful-highlight">
            {" "}
            cutting-edge technology{" "}
          </span>{" "}
          and
          <span className="colorful-highlight"> sustainable practices</span>,
          helping farmers use resources efficiently while promoting
          environmental stewardship.
        </p>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="abt-outer">
          <div className="ecrops">
            <Titleunderline title="An Overview" tag="h1" />

            <div className="row text-white ecrop">
              <div className="col-md-9">
                <div className="left">
                  <p className="fs-5">
                    Developed and patented by ICAR-CTCRI, eCrop is an
                    IoT-powered device built for smart farming, enabling
                    real-time crop monitoring in any climate. The device’s main
                    control unit is linked to sensors that track key soil and
                    weather conditions. It provides valuable data on:
                  </p>
                  <div className="container">
                    <div className="row">
                      {ecropData.map((item, index) => (
                        <div
                          key={index}
                          className="col-12 col-sm-6 col-md-4 mb-3"
                        >
                          <ListItem
                            icon={item.icon}
                            label={item.label}
                            index={index}
                            title={item.title}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="right">
                  <img
                    src="https://api.ecrop.co/assets/precisiongrow/ecropnewmachine.webp"
                    alt="ecropmachine"
                    loading="lazy"
                    className="ecropmachine img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="container pt-4 m-0 fs-5 text-center">
            The microcontroller inside coordinates the system’s clock, manages
            internet connections, and collects data from various sensors. With
            its user-friendly interface, eCrop allows farmers to manage their
            crops, fertilizers, soil types, and locations—simplifying smart
            farming for better decision-making
          </p>
        </div>
        {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}

        <Container>
          <Row>
            {/* Left Content */}
            <Col
              md={6}
              className="p-4 d-flex flex-column justify-content-center"
            >
              <h2 className="boldlook">eCROP Interface</h2>
              <p className="fs-5">
                The <strong>eCrop web interface</strong> makes farm management
                easy and accessible through the <strong>'eCrop'</strong> mobile
                app. It offers a comprehensive platform that brings your farming
                needs together in one place.
              </p>
              <p className="fs-5">
                Farmers can instantly get many benefits like{" "}
                <b>resource optimization</b>, <b>time-saving</b>,{" "}
                <b>nutrition supplements</b>, etc., along with pricing at ground
                level. Mobile apps are transforming agriculture for everyone
                from <strong>large-scale agribusinesses</strong> to{" "}
                <strong>small farmers</strong>.
              </p>
              <p>Click below to download our brochure:</p>
              <BrochureDownload />
            </Col>

            {/* Right Carousel */}
            <Col md={6} className="position-relative ecrop-carousal">
              <Carousel
                controls={true}
                indicators={true}
                interval={3000}
                nextIcon={
                  <span className="custom-carousel-btn next-btn">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                }
                prevIcon={
                  <span className="custom-carousel-btn prev-btn">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                }
              >
                {images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 rounded-3"
                      src={img}
                      alt={`Slide ${index + 1}`}
                      loading="lazy"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <Titleunderline title="Real-Time Agro Advisory" tag="h2" />
      </div>
      <Container fluid className="agro-advisory-wrapper py-5 px-3">
        <Container>
          {advisorySections.map((section, index) => (
            <Row className="section-block mb-5" key={index}>
              <Col md={12}>
                <h3 className="section-title mb-3">{section.title}</h3>

                <ul className="styled-list">
                  {section.points.map((point, i) => (
                    <li key={i}>
                      <FaCheck className="list-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Ecrop;
