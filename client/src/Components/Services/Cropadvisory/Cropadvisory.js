import React from "react";
import Cropgridcomp from "./Cropgridcomp.js";
import { Helmet } from "react-helmet-async";
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import HoverCardList from "../../Reusablecomp/HoverCardList/HoverCardList.js";

const crop_api = [
  {
    id: 1,
    title: "Pest Preparedness",
    description:
      "Precision Grow provides real-time pest monitoring and forecasting, allowing farmers to anticipate and mitigate pest outbreaks before they occur. Through advanced satellite imagery, remote sensing, and AI-powered data analysis, we provide farmers with early warning and field-specific pest management solutions, ensuring that crops are protected efficiently and sustainably.",
    imageSrc: "https://api.ecrop.co/assets/precisiongrow/Crop Advisory1.webp",
  },
  {
    id: 2,
    title: "Farmer Advisory",
    description:
      "Our advisory platform delivers personalized, data-driven recommendations to help farmers adopt Integrated Pest Management (IPM). With cutting-edge digital tools and hands-on training, we empower farmers to make informed decisions on pest control, nutrients, and water use, boosting yields while reducing reliance on chemical inputs.",
    imageSrc: "https://api.ecrop.co/assets/precisiongrow/Crop Advisory2.webp",
  },
  {
    id: 3,
    title: "Pesticide Risk Reduction",
    description:
      "At Precision Grow, we promote safe pesticide use by educating farmers on sustainable alternatives like biological control. Our guidance helps reduce chemical reliance, ensuring healthier crops and a greener environment. We also work with regulators to uphold safety standards for responsible farming practices.",
    imageSrc: "https://api.ecrop.co/assets/precisiongrow/Crop Advisory3.webp",
  },
];

const sections = [
  {
    image: "https://api.ecrop.co/assets/precisiongrow/Reducing.webp",
    title: "Reducing Crop Losses and Increasing Food Security",
    description:
      "Precision Grow’s advisory services deliver accurate, actionable insights, enabling farmers to embrace sustainable practices. This reduces crop losses, boosts climate resilience, and increases yields, enhancing food security for both farmers and their communities.",
    reverse: false,
  },
  {
    image: "https://api.ecrop.co/assets/precisiongrow/Supporting.webp",
    title: "Supporting Rural Youth and Women",
    description:
      "Precision Grow promotes inclusivity by providing training, resources, and agri-entrepreneurship opportunities to women and youth in rural areas. Through innovation and support, we promote a sustainable and just future, guaranteeing that all individuals will prosper in agricultural environments.",
    reverse: true,
  },
  {
    image:
      "https://api.ecrop.co/assets/precisiongrow/A-Commitment-to-Sustainable-Agriculture.webp",
    title: "A Commitment to Sustainable Agriculture",
    description:
      "At Precision Grow, we empower farmers by giving them knowledge, tools, and training to adapt to climate change and market demands. Our crop advisory services help grow more with less to increase yields, protect resources, and secure livelihoods. Together, we build resilient farms that feed the world sustainably.",
    reverse: false,
  },
];
const cropAFaq = [
  {
    title: "What is Precision Grows crop advisory service?",
    content:
      "Precision Grow provides data-driven, field-specific recommendations to optimize pest control, nutrient use, and water management for sustainable farming.",
    isOpenInitially: false,
  },

  {
    title: "What tools are used in Precision Grows advisory services?",
    content:
      "We use advanced satellite imagery, remote sensing, and AI-powered data analysis to deliver real-time, actionable insights.",
    isOpenInitially: false,
  },

  {
    title: "Can Precision Grow help increase crop yields?",
    content:
      "Yes, our advisory services help farmers adopt sustainable practices, boosting yields and enhancing food security.",
    isOpenInitially: false,
  },

  {
    title: "What makes Precision Grow's advisory services unique?",
    content:
      "We combine AI-powered insights, real-time monitoring, and personalized recommendations for efficient and sustainable farming.",
    isOpenInitially: false,
  },

  {
    title: "How does Precision Grow support farmers in pest management?",
    content:
      "Our platform offers early pest detection, forecasting, and tailored solutions to prevent outbreaks and reduce crop losses",
    isOpenInitially: false,
  },
];
const Cropadvisory = () => {
  return (
    <>
      <Helmet>
        <title>Expert Crop Advisory Services for Sustainable Farming</title>
        <meta
          name="description"
          content="Get tailored crop advisory solutions to enhance yields and sustainability. Empower your farming practices with Precision Grow's expert guidance."
        />
        <meta
          name="keywords"
          content="crop advisory services, smart crop recommendations, farming decision support"
        />

        <link
          rel="canonical"
          href="https://precisiongrow.co.in/crop-advisory"
        />
      </Helmet>
      {/* -------------------------------------------------------------------------crop advisory-------------------------------------------------------------------------------------- */}
      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Cultivating Success Through Knowledge.webp"
        heading="Crop Advisory"
        subheading="Cultivating Success Through Knowledge"
      />
      {/* ----------------------------------------------------------------------We operate through 3 key pathways-------------------------------------------------------------- */}
      <div className="container ">
        <p className="text-center fw-bold my-3 fs-5">
          At Precision Grow we know farming is always evolving, and we're here
          to help by offering smart, practical solutions that support you and
          your land. With the use of climate-smart solutions, our Crop Advisory
          Services assist farmers in preventing losses, addressing plant health
          concerns, and thriving.
        </p>
        <Titleunderline title="We Operate Through 3 Key Pathways" tag="h1" />
        <HoverCardList data={crop_api}/>
      {/* -------------------------------------------------------------container Empowering Agri-Service Providers----------------------------------------- */}
      <Titleunderline title="Empowering Agri-Service Providers" tag="h3" />
      <p className="text-center fs-5 fw-bold coloredtxt1">
        Precision Grow empowers agronomists, input dealers, and service
        providers with gender-sensitive, culturally tailored tools that enhance
        their advisory capabilities. With AI-powered decision-support systems,
        we enable farmers to get accurate, timely advice, increase crop yields,
        and open new business opportunities. We ensure equal benefits for men
        and women in rural communities and build a future where everyone
        thrives.
      </p>
      <div className="py-4">
        {sections.map((section, index) => (
          <Cropgridcomp
            key={index}
            image={section.image}
            title={section.title}
            description={section.description}
            reverse={section.reverse}
          />
        ))}
      </div>
      <FaqSection data={cropAFaq} variant="lightblue" />;
      </div>
    </>
  );
};

export default Cropadvisory;
