import React from "react";
import Banner from "../../Reusablecomp/Banner/Banner";
import cropban from "../../../assets/Crop-Consultancy.webp";
import cropc1 from "../../../assets/icons_About/Crop-Consultancy.jpeg";
import SectionTitle from "../../Reusablecomp/SectionTitle/SectionTitle";
import "./CropConsultancy.css";
import Arrowcard from "../../Reusablecomp/Arrowcard/Arrowcard";
import { FaSeedling, FaTractor, FaLeaf } from "react-icons/fa";
import precisonfarimg from "../../../assets/icons_About/2.webp";
import sustfar from "../../../assets/icons_About/sustainable-farming.webp";
import aiiot from "../../../assets/icons_About/ai-iot.webp";
import ListItem from "../../Reusablecomp/ListItem";
import { Helmet } from "react-helmet-async";
import CardIcon from "../../Reusablecomp/CardIcon/CardIcon";
const CropConsultancy = () => {
  const CropConsultancyData = [
    {
      title: "Crop Selection",
      label:
        "Analyzing market trends and guiding farmers on profitable crop varieties.",
    },
    {
      title: "Land & Soil Preparation",
      label:
        "Advising on soil enrichment, fertility management, and land development.",
    },
    {
      title: "Seed Selection & Nursery Maintenance",
      label:
        "Recommending high-quality seeds for better germination and growth.",
    },
    {
      title: "Nutrient & Irrigation Management",
      label:
        "Optimizing fertilizer use, drip irrigation, and water conservation.",
    },
    {
      title: "Pest & Disease Control",
      label:
        "Implementing integrated pest management (IPM) and organic solutions.",
    },
    {
      title: "Harvesting & Post-Harvest Handling",
      label:
        "Ensuring proper harvesting techniques to maximize quality and storage life.",
    },
  ];
  const tourData = [
    {
      title: "Market-Driven Crop Selection",
      description: "Identifying high-demand crops for better profitability.",
      bgColor: "transparent",
      textColor: "white",
    },
    {
      title: "Complete Farming Guidance",
      description: "Support from soil preparation to harvesting.",
      bgColor: "transparent",
      textColor: "white",
    },
    {
      title: "Scientific & Sustainable Practices",
      description: "Promoting eco-friendly, resource-efficient farming.",
      bgColor: "transparent",
      textColor: "white",
    },
    {
      title: "Pest & Disease Management",
      description: "Preventive strategies to protect crops and enhance yield.",
      bgColor: "transparent",
      textColor: "white",
    },
  ];
  const cardData = [
    {
      id: 1,
      image: precisonfarimg,
      title: "Precision Farming",
      description:
        "We provide real-time field data analysis using advanced tools like drones, soil sensors, and satellite imaging to help farmers monitor soil health, predict weather conditions, and apply fertilizers efficiently. This ensures optimized resource use and higher yields.",
      icon: FaLeaf,
    },
    {
      id: 2,
      image: sustfar,
      title: "Sustainable Farming Solutions",
      description:
        "Our consultancy promotes eco-friendly agricultural practices such as organic farming, water conservation, crop rotation, and integrated pest management (IPM). We help farmers reduce chemical dependency, improve soil fertility, and minimize environmental impact while maintaining high productivity.",
      icon: FaTractor,
    },
    {
      id: 3,
      image: aiiot,
      title: "AI & IoT-Based Solutions",
      description:
        "With smart sensors and AI-powered analytics, we enable automated irrigation systems, pest detection, and crop monitoring. Our solutions allow farmers to make real-time, data-driven decisions that improve efficiency, reduce waste, and increase profits.",
      icon: FaSeedling,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
         Smart Crop Consultancy for Higher Yields & Profitability
        </title>
        <meta
          name="description"
          content="Get expert crop consultancy with ECROP. Leverage smart farming, IoT devices, and Agri tools to increase yields, reduce waste, and grow high-demand crops."
        />
        <link
          rel="canonical"
          href="https://precisiongrow.co.in/crop-consultancy"
        />
      </Helmet>
      <Banner
        imageSrc={cropban}
        heading="What Services Do We Provide?"
        subheading="Crop Consultancy"
      />
      <div className="mt-0 mt-lg-5">
        <section className="container py-5">
          <div className="row gy-4 align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 col-md-12">
              <SectionTitle title="Expert Guidance for Maximized Yield" />
              <h1 className="mb-3 boldlook">Crop Consultancy</h1>
              <p className="lead text-secondary">
                ECROP’s Crop Consultancy Services provide farmers with
                market-driven insights to help them grow the most profitable
                crops. We offer end-to-end guidance, from land preparation to
                harvesting, ensuring optimized farming practices for higher
                yields and better market value.
              </p>
              <ul className="square-bullets ps-3 fs-5 text-secondary">
                <li>
                  <strong>Higher Crop Yields -</strong> Scientific farming
                  techniques lead to improved production.
                </li>
                <li>
                  <strong>Better Market Prices -</strong> Grow high-demand crops
                  and maximize revenue.
                </li>
                <li>
                  <strong>Efficient Resource Utilization -</strong> Smart
                  irrigation and nutrient application reduce waste.
                </li>
                <li>
                  <strong>Pest & Disease Prevention –</strong> Timely
                  interventions save crops from damage.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className="organic-img-wrap position-relative">
                <img
                  src={cropc1}
                  alt="Crop Consultancy"
                  className="img-fluid organic-img shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="agr-benf-sec">
          <div className="py-5 tour container mx-auto row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
            {tourData.map((item, index) => (
              <div className="col1" key={item.title}>
                <Arrowcard
                  title={item.title}
                  description={item.description}
                  // bgColor={item.bgColor}
                  // textColor={item.textColor}
                  className={item.className}
                  isFirst={index === 0}
                  isLast={index === tourData.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container py-5 text-center">
          <SectionTitle title="Our Farming Solutions" position="center" />
          <h4 className="fw-bold mb-3 boldlook">
            Integrating Technology & Sustainability in Farming
          </h4>
          <p className="lead text-secondary">
            At ECROP, our Crop Consultancy service goes beyond traditional
            farming methods by integrating Precision Farming, Sustainable
            Farming Solutions, and AI & IoT-based technologies. These
            innovations help farmers make informed decisions, maximize
            productivity, and ensure long-term sustainability.
          </p>
        <section className="py-5">
  <div className="container">
    <div className="row g-4">
      {cardData.map((item) => (
        <div key={item.id} className="col-md-6 col-lg-4">
          <CardIcon {...item} />
        </div>
      ))}
    </div>
  </div>
</section>

        </div>
        <div className="bg-light py-5">
          <div className="container pb-5 text-center">
            <h4 className="fw-bold mb-3 boldlook">Consultation Process</h4>
            <p className="lead text-secondary mb-5">
              At ECROP, we provide end-to-end consultation to help farmers
              maximize productivity and profitability. Our expert-guided
              approach ensures that farmers receive the right guidance at every
              stage, from crop selection to post-harvest management.
            </p>
            <div className="row g-4 ">
              {CropConsultancyData.map((item, index) => (
                <div
                  key={index}
                  className="cropdatabg shadow-sm me-3 col-12 col-md-5 mx-auto p-4 text-start"
                >
                  <ListItem
                    icon="https://api.ecrop.co/assets/precisiongrow/Farm Boundary5.webp"
                    label={item.label}
                    title={item.title}
                    index={index}
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

export default CropConsultancy;
