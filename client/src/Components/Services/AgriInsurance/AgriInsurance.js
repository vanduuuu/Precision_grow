import React from "react";
import  '../../Services/AgriInsurance/AgriInsurance.css'
import { Helmet } from 'react-helmet-async';
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import CardBorderGrid from "../../Reusablecomp/CardBorderGrid/CardBorderGrid.js";
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";

const AgriInsurance = () => {
  const agriIFaq = [
    { title: 'How does agri insurance support green farming?',
       content: 'It encourages modern farming practices while safeguarding your future.', isOpenInitially: false },
   
       { title: 'What risks are covered under crop insurance?',
       content: 'It covers risks like droughts, floods, pests, and other natural calamities.', isOpenInitially: false },
    
       { title: 'Who benefits from your services?',
       content: 'Thousands of farmers have already benefited from our trusted and reliable services..', isOpenInitially: false },
      
       { title: "How do I file a claim?",
        content:"Claims can be filed online or through our customer support for quick processing.", isOpenInitially: false },
    
        { title: "How does Precision Grow empower farming communities?",
          content:"Precision Grow empowers farming communities by providing reliable insurance solutions that secure income, promote modern practices, and build resilience for a sustainable future", isOpenInitially: false }
      ];

  const cardData = [
    {
      image: "https://api.ecrop.co/assets/precisiongrow/insurance1.webp",
      title: "	Tailored Insurance Plans ",
      content:
        "Customized coverage for crops, livestock, and more, designed to meet your unique needs.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/insurance2.webp",
      title: "	Fast & Transparent Claims ",
      content:
        "Quick, hassle-free payouts so you can recover and rebuild without delay.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/insurance1.webp",
      title: "	Tech-Driven Convenience ",
      content:
        " Easy enrollment, real-time tracking, and 24/7 support—all at your fingertips.",
    },
    {
      image: "https://api.ecrop.co/assets/precisiongrow/insurance3.webp",
      title: "Government Support Plan  ",
      content:
        " Partnering with schemes like Pradhan Mantri Fasal Bima Yojana where we bring you affordable, subsidized insurance options.",
    },
   
  ];
  const cardData1 = [
    {
      title: "Secure Your Income",
      content: "Protect your crops and livestock against droughts, floods, pests, and other risks."
    },
    {
      title: "Boost Green Farming",
      content: "Encourage modern practices while safeguarding your future."
    },
    {
      title: "Empower Your Community",
      content: "Join thousands of farmers who’ve already benefited from our trusted services."
    }
  ];
  return (
    <>
    <Helmet>
        <title>Agri Insurance Solutions for Smart Farming | Precision Grow</title>
        <meta name="description" content="Protect your crops with Precision Grow’s Agri insurance. Get tailored coverage to secure your farm, reduce risks, and support smarter farming decisions." />
        <meta name="keywords" content="agriculture insurance tech, crop protection plans, farm risk solutions" />
      
        <link rel="canonical" href="https://precisiongrow.co.in/agri-insurance" />
      </Helmet>
{/* ---------------------------------------------------------agri insurance banner-----------------------------------------------------------------------------------------------*/}
     
    

   <Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/Agri Insurance.webp"
          heading="Agri Insurance"
          subheading="Empowering Farmers, Securing Futures"
        />
{/* -------------------------------------------------------------------what we offer-------------------------------------------------------------------------------*/}
<section>
  <Titleunderline title="What We Offer" tag="h1"/>
  <CardBorderGrid cardinfo={cardData} colsLg={4} />

</section>



   {/* --------------------------------------------------------Why It Matter-------------------------------------------------------------------------------------------- */}
   <Titleunderline title="Why It Matters" tag="h2"/>

   <div className="container" data-aos="fade-up" data-aos-duration="2000">
  <div className="row justify-content-center align-items-stretch">
    {cardData1.map((card, index) => (
      <React.Fragment key={index}>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
          <div className="card11 h-100 flex-fill position-relative">
            <h5 className="card-title fw-bold">{card.title}</h5>
            <p className="card-content text-white">{card.content}</p>
            {/* Arrow (conditionally rendered) */}
            {index !== cardData1.length - 1 && (
              <div className="arrow-right d-none d-lg-block"></div>
            )}
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
</div>




    
      {/* ------------------------------------------Together, We Grow Stronger----------------------------------------------------------------------------- */}
      <Titleunderline title="Together, We Grow Stronger" tag="h3"/>

      <p className="text-center grow container fs-5 fw-bold" >We’re not just offering insurance we’re building a safety net for farmers, ensuring no one faces the challenges of farming alone. Your harvest is your future. Let’s protect it together.Explore our Agri Insurance solutions today and take the first step toward a safer, more secure tomorrow.
     </p>
     <FaqSection data={agriIFaq} variant="lightblue" />;  

    </>
  );
};

export default AgriInsurance;
