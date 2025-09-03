import React from "react";
import './RegenerativeAgri.css'
import { Helmet } from 'react-helmet-async';
import Roadmap from './Roadmap.js'
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";

const RegenerativeAgri = () => {
  const RegFaqs = [
    { title: 'Why is Regenerative Agriculture important?',
       content: 'It stops ecosystem degradation, improves soil health, and supports sustainable farming practices.', isOpenInitially: false },
   
       { title: 'How do diverse crop rotations benefit farming?',
       content: 'They break pest cycles, improve soil structure, and boost biodiversity.', isOpenInitially: false },
    
       { title: 'What is Integrated Pest Management (IPM)?',
       content: 'Using natural predators and biological controls to reduce chemical pesticide use..', isOpenInitially: false },
      
       { title: "How does Regenerative Agriculture address climate change?",
        content:"By sequestering carbon, improving soil health, and reducing greenhouse gas emissions", isOpenInitially: false },
    
        { title: "What is the focus of soil health in Regenerative Agriculture?",
          content:"Increasing organic matter, nutrient cycling, water retention, and carbon sequestration.", isOpenInitially: false }
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
       <p className="h2 text-center">Here are some key principles and practices associated with regenerative agriculture</p>
          <Roadmap />
</div> 

              <FaqSection data={RegFaqs} variant="lightgreen" />;
      
    </div>
  );
};

export default RegenerativeAgri;













    
