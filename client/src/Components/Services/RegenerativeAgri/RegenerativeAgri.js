import React from "react";
import './RegenerativeAgri.css'
import { Helmet } from 'react-helmet-async';
import Roadmap from './Roadmap.js'
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
const RegenerativeAgri = () => {
  const roadmapData = [
  {
    id: 1,
    title: "Cover Crops",
    description: "Planting cover crops to protect and enrich the soil, prevent erosion, and enhance biodiversity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_1.webp",
  },
  {
    id: 2,
    title: "Reduced Tillage",
    description: "Minimizing soil disturbance to maintain soil structure and preserve soil microorganisms.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_2.webp",
  },
  {
    id: 3,
    title: "Diverse Crop Rotations",
    description: "Implementing diverse crop rotations to break pest and disease cycles, improving soil structure and biodiversity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_3.webp",
  },
  {
    id: 4,
    title: "Agroforestry",
    description: "Integrating trees and shrubs into agricultural landscapes to provide habitat for wildlife and improve soil and water health.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_4.webp",
  },
  {
    id: 5,
    title: "Water Management",
    description: "Implementing practices such as rainwater harvesting, efficient irrigation systems, and contour farming.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_5.webp",
  },
  {
    id: 6,
    title: "Integrated Pest Management (IPM)",
    description: "Using natural predators, diversified planting, and biological controls to manage pests and reduce chemical pesticides.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_6.webp",
  },
  {
    id: 7,
    title: "Long-Term Fire Statistics",
    description: "Exporting historical fire data analytics for long term fire statistics and risk assessment.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_7.webp",
  },
  {
    id: 8,
    title: "Managed Grazing",
    description: "Utilizing planned rotational grazing to improve soil health and reduce carbon sequestration.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_8.webp",
  },
  {
    id: 9,
    title: "Composting and Organic Amendments",
    description: "Adding compost or organic matter to enhance soil fertility and microbial activity.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_9.webp",
  },
  {
    id: 10,
    title: "Soil Health",
    description: "Emphasizing increased soil organic matter and improving nutrient cycling, water retention, and carbon sequestration.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_10.webp",
  },
  {
    id: 11,
    title: "Local and Community Focus",
    description: "Supporting local food systems and fostering community involvement to create more resilient agriculture.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_11.webp",
  }
];
  const RegFaqs = [
    { question: 'Why is Regenerative Agriculture important?',
       answer: 'It stops ecosystem degradation, improves soil health, and supports sustainable farming practices.'},
   
       { question: 'How do diverse crop rotations benefit farming?',
       answer: 'They break pest cycles, improve soil structure, and boost biodiversity.'},
    
       { question: 'What is Integrated Pest Management (IPM)?',
       answer: 'Using natural predators and biological controls to reduce chemical pesticide use.'},
      
       { question: "How does Regenerative Agriculture address climate change?",
        answer:"By sequestering carbon, improving soil health, and reducing greenhouse gas emissions"},
    
        { question: "What is the focus of soil health in Regenerative Agriculture?",
          answer:"Increasing organic matter, nutrient cycling, water retention, and carbon sequestration."}
      ];
  return (
    <div>
       <Helmet>
        <title>Regenerative Agriculture | Smart Farming by Precision Grow</title>
        <meta name="description" content="Explore Precision Grow’s regenerative agriculture solutions to restore soil health, improve yields, and support sustainable, smart farming practices." />
        <meta name="keywords" content="regenerative farming practices, sustainable agriculture India, eco-friendly farming" />
          </Helmet>

    
      

  {/* banner  */}
<Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/Regenerative Agriculture.webp"
          heading="Regenerative Agriculture"
          subheading="Nourishing the soil to build a healthy planet"
        />


      <p className="text-center p-4 mx-5 fw-bold fs-5 " >
            When it comes to farming, use of fertilizers and pesticides becomes inevitable. However, uncontrolled use of such chemicals has polluted air, water, and soil extensively. “Regenerative Agriculture” is a need of an hour to address this issue.
            At Precision Grow, we are pioneering a new era in agriculture, harnessing the power of cutting-edge satellite analytics to revolutionize the way of farming. Our innovative products and services empower farmers with precision insights that drive efficiency and sustainability. 
       </p>
       
        {/* ----------------------------------------------------------------------renerative agriculture--------------------------------------------------------------------- */}
    <div className="container agri my-5">
    <div className="d-flex justify-content-center align-items-center ">
      <div className="container row Ai-power">
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center text-center">
        <img src="https://api.ecrop.co/assets/precisiongrow/Regenerative Agriculture2.webp" alt="AIFarming" className=" AIFarming img-fluid" loading="lazy" />
        </div>
        <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center" >
         <h1 className="fs-lg-6 mb-4">Why Regenerative Agriculture?</h1>
         
         <p>Regenerative Agriculture not only stops degradation of the ecosystem but also improves it to its better version. It is a process to work with the nature by catalysing  whenever required. 
          
          Advanced technologies and green practices can make this happen at a faster pace. Precision Grow has introduced revolutionary technologies in the agriculture world to minimize the adverse effects on the environment and improve the livelihood of farmers.
          </p>
        </div>
      </div>
    </div>
  </div>
 {/* ----------------------------------------------------------------------renerative agriculture--------------------------------------------------------------------- */}   
      
  <div className="red-outer-div snake mb-5"data-aos="fade-up" data-aos-duration="3000">
               <Titleunderline title="Here are some key principles and practices associated with regenerative agriculture" tag="h2" align="center" />

<Roadmap
        cards={roadmapData}
        animation="fade-up"
        duration={1500}
        colClass="col-lg-3 col-md-4 col-sm-6" 
      /></div> 

              <FaqSection data={RegFaqs}/>;
      
    </div>
  );
};

export default RegenerativeAgri;













    
