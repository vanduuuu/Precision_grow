import React from 'react'
import './ProductTraceability.css'
import { Helmet } from 'react-helmet-async';
import FaqSection from '../../Faqcomp/FaqSection.js';
import Banner from '../../Reusablecomp/Banner/Banner.js';
import { FaQuoteLeft } from 'react-icons/fa';
import Titleunderline from '../../Reusablecomp/Titleunderline/Titleunderline.js';
import { GiHerbsBundle } from 'react-icons/gi';
import ListItem from '../../Reusablecomp/ListItem.js';
const ProductTraceability = () => {
    const PtraceData = [
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product1.webp', label: 'Supply Chain Visibility' },
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product2.webp', label: 'Quality Assurance' },
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product3.webp', label: 'Data-Driven Decision-Making' },
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product4.webp', label: 'Compliance and Regulation' },
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product5.webp', label: 'Sustainability and Social Responsibility' },
      { icon: 'https://api.ecrop.co/assets/precisiongrow/Product6.webp', label: 'Operational Efficient' },
    ];
  const proTFaq = [
    { title: 'What is traceability?',
       content: 'Traceability is the ability to track the origin, processing, and journey of a product from start to finish.', isOpenInitially: false },
   
       { title: 'Why is traceability important?',
       content: 'It ensures transparency, builds trust, and helps consumers make informed, sustainable choices.', isOpenInitially: false },
    
       { title: 'How does traceability benefit consumers?',
       content: 'It empowers shoppers with data to make smarter, more ethical purchasing decisions.', isOpenInitially: false },
      
       { title: "How can I access traceability information?",
        content:"Use our tool to explore the story and data behind every product you buy.", isOpenInitially: false },
    
        { title: "Who benefits from traceability besides consumers?",
          content:"Producers and brands gain credibility by showcasing their commitment to transparency.", isOpenInitially: false }
      ];
       const points = [
    "Welcome to a revolutionary product experience that unveils the journey of your favorite products from farm to store! Our innovative solution brings transparency and insight into every step of the manufacturing process, offering you a unique and immersive product journey.",
    "Imagine being able to trace the origin of your chosen product, understanding where it was grown, how it was processed and the journey it took to reach your local store. Our product empowers you with this information, allowing you to make informed choices about the items you bring into your home.",
    "From the initial stages at the farm to the intricate processes of manufacturing and packaging, our product journey feature provides a comprehensive overview. Explore the farms where the raw materials were sourced, witness the transformation in production facilities and follow the path the product takes before it reaches the shelves.",
    "This isn't just a product it's a narrative that connects you with the entire lifecycle, fostering a deeper appreciation for the craftsmanship and dedication that goes into each item. As consumer awareness and sustainability become increasingly important, our product journey tool aligns seamlessly with the values of conscious and informed shopping.",
    "Join us on this unique journey that transforms your product experience. Say goodbye to uncertainty and hello to a new era of transparency and connection with the products you love. Embrace the future of shopping with our innovative solution – where every purchase comes with a story waiting to be discovered.",
   
  ];
  return (
    <>
     <Helmet>
        <title>Product Traceability Solutions for Sustainable Farming</title>
        <meta name="description" content="Discover Precision Grow's product traceability solutions to enhance transparency and sustainability in agriculture. Ensure quality from farm to table." />
        <meta name="keywords" content="agriculture product traceability, farm to fork solutions, food transparency" />
        <link rel="canonical" href="https://precisiongrow.co.in/product-traceability"/>
      </Helmet>
{/* banner*/}
<Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/Trace The Journey, Trust The Story.webp"
          heading="Product Traceability"
          subheading="Traceability is transparent and builds trust in the product"
        />
   
     
  
       <div className="quote-container">
    <FaQuoteLeft className="quote-icon1" />
    <p className="quote-text">
      Welcome to a revolutionary way to shop. Our product brings full transparency to the journey of your favorite items—from farm to store. With cutting-edge technology, you can now trace every step of the manufacturing process, from where it was grown to how it reached your hands.
    </p>
  </div>
     {/* ----------------------------------------------------------------------product raceability--------------------------------------------------------------------- */} 
       

      <div className="container">
<div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-12">
            <h1 className='mt-2'>Why It Matters</h1>

           <p>
  
    <span class="highlight-k">K</span>now Your Product
 
  Discover the origin, processing, and path of every item.
  Make Informed Choices: Empower yourself with data to shop smarter and more sustainably.
  Connect with the Story: Meet the people, places, and processes behind what you buy.<br/>

  As demand for transparency and sustainability grows, our tool aligns with the values of conscious consumers. Say goodbye to uncertainty and hello to a new era of trust, transparency, and smarter shopping.<br/><br/>

  Join the movement. Trace the journey. Trust the story.
</p>
          </div>
        <div className="col-lg-7 col-md-12 position-relative">
  <div className="image-bg-shape"></div> {/* Decorative shape */}
  <img src="https://api.ecrop.co/assets/precisiongrow/Trace The Journey, Trust The Story2.webp" alt="AIFarming" className="AIFarming img-fluid position-relative" loading="lazy" />
</div>

        </div>
     

   {/* --------------------------------------------------------------Benefits----------------------------------------------------------------------------- */}    
    <section>
      
                      <Titleunderline title="Harnessing Data for Success" tag="h2"/>
      <ul className="p-0 m-0">
        {points.map((point, index) => (
          <li key={index} className="d-flex align-items-start mb-3">
<GiHerbsBundle className="text-success me-2 mt-1 d-none d-lg-block" size={60} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
     
   <div className="container">
  <div className="row align-items-center">
    {/* Left Side - Main Image with Circle Overlay */}
    <div className="col-lg-9 col-md-12 mb-4 mb-lg-0 position-relative">
      <div className="productt-img position-relative">
        <img
          src="https://api.ecrop.co/assets/precisiongrow/product traceability.webp"
          alt="trace-product"
          className="img-fluid w-100 rounded-5 pro-imgg "
          loading="lazy"
        />
        {/* Circle Image Overlay */}
        <div className="circle-overlay">
          <img
            src="https://api.ecrop.co/assets/precisiongrow/Reducing.webp" // replace with your circle image
            alt="Overlay"
            className="img-fluid"
          />
        </div>
      </div>
    </div>

    {/* Right Side - ListItem Grid */}
    <div className="col-lg-3 col-md-12">
      <Titleunderline title="Benefits" tag="h2" />
      {PtraceData.map((item, index) => (
        <ListItem
          key={index}
          icon={item.icon}
          label={item.label}
          index={index}
          title={item.title}
        />
      ))}
    </div>
  </div>
</div>

<FaqSection data={proTFaq} variant="lightgreen" />;
    </section>
     </div>
</>
  )
}

export default ProductTraceability
