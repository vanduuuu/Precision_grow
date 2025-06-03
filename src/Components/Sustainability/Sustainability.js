import React from "react";
import "./Sustainability.css";

import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Reusablecomp/Banner/Banner.js";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline.js";
import CardBorderGrid from "../Reusablecomp/CardBorderGrid/CardBorderGrid.js";
import ListItem from "../Reusablecomp/ListItem.js";

const Sustainability = () => {
  const cardData5 = [
    {
      image: "https://api.ecrop.co/assets/precisiongrow/Sustainability1.webp",
      title: "ECO-FRIENDLY ENVIRONMENT",
      content:
        "This is about caring for our natural resources, cutting pollution and waste, and protecting ecosystems. It involves adopting practices that reduce harm to the environment while saving energy and water.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/Sustainability2.webp",
      title: "SOCIAL SUSTAINABILITY",
      content:
        "Social sustainability focuses on fairness, justice, and the well-being of communities. It strives to ensure everyone has equal opportunities, embraces diversity, and invests in education and healthcare for all.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/Sustainability3.webp",
      title: "ECONOMIC SUSTAINABILITY",
      content:
        "Economic sustainability is about maintaining steady growth while using resources efficiently. It encourages responsible consumption and production to ensure lasting and balanced economic practices.",
    },
  ];
  const sustainabilityData = [
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/Sustainability4.webp",
      title: "BLOCKCHAIN",
      label:
        "Tracking and recording information digitally, through blockchain, allows us to trace every step of an item’s journey from farm to consumer.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/Sustainability5.webp",
      title: "GREENWASHING",
      label:
        "When companies intentionally or unintentionally present themselves or their products as more sustainable or green than they truly are.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/Sustainability6.webp",
      title: "CARBON OFFSETTING",
      label:
        "A compensatory action that gives individuals, businesses, and organizations the option to offset their carbon footprint by purchasing carbon credits, which fund projects aimed at reducing emissions.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/Sustainability7.webp",
      title: "CARBON NEUTRAL",
      label:
        "Balancing out what’s emitted and what’s restored to make the total impact zero. For fashion brands, carbon neutrality can be achieved by either reducing emissions or offsetting them.",
    },
    {
      icon: "https://api.ecrop.co/assets/precisiongrow/Sustainability8.webp",
      title: "ESG – ENVIRONMENTAL, SOCIAL AND GOVERNANCE",
      label:
        "This approach evaluates how companies go beyond just maximizing profits for their shareholders and work toward broader goals. Social goals within the ESG (Environmental, Social, Governance) framework focus on achieving sustainability. It often involves working to meet environmental objectives, supporting social causes, and aligning with movements promoting diversity, equity, and inclusion.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Sustainability at Precision Grow: Innovating Agri-Tech Solutions
        </title>
        <meta
          name="description"
          content="Discover Precision Grow's innovative sustainability practices that enhance agriculture, boost yields, and promote eco-friendly farming in India."
        />
        <meta
          name="keywords"
          content="agri sustainability practices, environment-friendly farming, carbon neutral agriculture"
        />
        <link
          rel="canonical"
          href="https://precisiongrow.co.in/sustainability"
        />
      </Helmet>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}

      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Sustainability.webp"
        heading="Sustainability"
        subheading="Innovate, sustain, and grow to lead a greener Future"
      />

      <Titleunderline title="Overview" tag="h1" />

      <div className="container">
        <p className="fs-5 text-center">
          Sustainability is at the heart of what we do. We create smart,
          eco-friendly solutions that benefit farmers, communities, and the
          planet. From product design to manufacturing and beyond, every step we
          take is socially, environmentally, and financially responsible. We’re
          not just growing crops; we’re growing a better future.
        </p>
        <div className="row sustain-row">
          <div className="col-lg-6">
            <h4 className="boldlook mb-3">Agriculture And The Global Goal</h4>
            <p className="mb-3">
              Everything we do is driven by sustainability. We develop solutions
              that protect the environment and increase productivity in line
              with the UN SDGs. We reduce waste, increase productivity, and
              provide environmentally responsible solutions that really make a
              difference. With every step, we're not just growing crops, we're
              growing a greener, more sustainable future.
            </p>
            <p className="mb-3">
              At Precision Grow, we are committed to sustainability. We create
              industry standards and set an example to encourage others to
              follow. We work with stakeholders including communities,
              suppliers, workers, and customers to promote an inclusive,
              significant change in our commitment to a green future.
            </p>
            <p>
              Through collaboration, outreach, and education, we enable action
              for a sustainable future. Come join us in a responsible manner.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="tine">
              <img
                src="https://api.ecrop.co/assets/precisiongrow/Sustainable-Development-Goals.webp"
                loading="lazy"
                alt="wheel earth"
                className="wheelll"
              />
              <div className="innerSimg">
                <img src="https://api.ecrop.co/assets/precisiongrow/lg2.webp" loading="lazy" alt="lg-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Container className="mt-4">
        <Titleunderline title="Sustainability" tag="h2" />

        <p className="text-center fs-5">
          Sustainability means using resources in a way that doesn’t impact the
          ability of future generations to do the same.
        </p>

        <CardBorderGrid
          cardinfo={cardData5}
          colsLg={3}
          textClass="custom-text"
        />

        <Titleunderline title="Glossary" tag="h3" />

        <Row className="justify-content-center">
          {sustainabilityData.map((item, index) => (
            <Col
              key={index}
              lg={5}
              md={5}
              sm={12}
              className="mb-4 sustain-card"
            >
              <ListItem
                icon={item.icon}
                label={item.label}
                title={item.title}
                index={index}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Sustainability;
