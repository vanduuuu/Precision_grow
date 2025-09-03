import React from 'react';
import './AgricLoan.css';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import AgriCard from './AgriCard.js';
import Banner from '../../Reusablecomp/Banner/Banner';
import Titleunderline from '../../Reusablecomp/Titleunderline/Titleunderline';

const AgricLoan = () => {
  const cardData = [
    {
      title: "No reliable method to verify farmer authenticity with minimal data.",
      description: "Satellite data enables easy ground-level verification."
    },
    {
      title: "Lack of a system to check farmer loan eligibility.",
      description: "Combines cadastral and satellite data for land checks."
    },
    {
      title: "Multi-step assessments delay loan approval process.",
      description: "Regular updates improve transparency for all parties."
    },
    {
      title: "Limited automation, high manual involvement",
      description: "Remote sensing aids risk assessment and claims."
    },
    {
      title: "Verification depends on manual surveys, causing time delays.",
      description: "Replace manual surveys with real-time satellite insights."
    },
    {
      title: "Claim settlements rely on manual surveys, and no tracking system.",
      description: "Direct farm data for accurate, faster settlements."
    },
    {
      title: "Transparency gap between farmers and lenders",
      description: "Satellite checks reduce false reports and claims."
    },
    {
      title: "False reports from farmers or surveyors lead to fraud.",
      description: "Closes tech gaps, ensuring streamlined efficiency."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Agri Loans for Smart Farming | Precision Grow Solutions</title>
        <meta name="description" content="Access flexible Agri loans tailored for smart farming. Precision Grow empowers farmers with financial support, IoT devices, and smart Agri tools to grow better." />
        <meta name="keywords" content="agri loan services, farming finance India, agriculture credit solutions" />
        <link rel="canonical" href="https://precisiongrow.co.in/agri-loan" />
      </Helmet>

      {/* Banner */}
      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Agri loan.webp"
        heading="Agri Loan"
        subheading="Reshaping Agriculture Financing With Agri loan"
      />

      {/* Intro */}
      <section>
        <h1 className='text-center boldlook'>Welcome to the future of agri-lending!</h1>
        <Container>
          <p className='text-center fs-4'>
            With the help of satellite data, our cutting-edge technology provides accurate risk insights, making decisions simpler for farmers and lenders.
          </p>
        </Container>

        <Titleunderline title="Let's look at some of the difficulties that lenders face" tag="h3"/>

        <ul className='text-center mt-3 pt-3 d-flex justify-content-center gap-4'>
  <li className='legend-item gry'>Issues</li>
  <li className='legend-item grn'>Solutions</li>
</ul>

      </section>

      {/* Cards */}
      <Container>
        <Row className="justify-content-center g-4">
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <AgriCard title={card.title} description={card.description} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AgricLoan;
