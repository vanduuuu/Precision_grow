import React from "react";
// import banner from "../../../assets/icons_About/agristack-banner.webp";
import coffeeCup from "../../../assets/icons_About/coffe4.webp";
import coffeeCup1 from "../../../assets/icons_About/coffe3.webp";
import coffeeCup2 from "../../../assets/icons_About/coffeebg.webp";
import "./Ecropcoffe.css";
import ListItem from "../../Reusablecomp/ListItem";
import CardBorderGrid from "../../Reusablecomp/CardBorderGrid/CardBorderGrid";
import InfoCardGroup from "../../Reusablecomp/InfoCardGroup";
import { FaBrain, FaCertificate, FaHandsHelping, FaLeaf, FaGlobe } from "react-icons/fa";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline";
import { MdCheckCircle } from "react-icons/md";
import graph from '../../../assets/icons_About/graph.webp'
const Ecropcoffe = () => {
const data6 = [
  {
    id: 1,
    title: "Pioneering AI",
    text: "eCrop is the first AI solution dedicated solely to coffee, ensuring specialised and effective support for your specific needs.",
    iconType: "react-icon",
    icon: FaBrain, // AI / intelligence
    iconColor: "#47190d",
    bgColor: "linear-gradient(to top, #d79452, white)",
  },
  {
    id: 2,
    title: "Patented Technology",
    text: "Certified by ICAR-CTCRI, our technology is rigorously tested and validated, offering reliable and proven results.",
    iconType: "react-icon",
    icon: FaCertificate, // certificate = patented
    iconColor: "#47190d",
    bgColor: "linear-gradient(to top, white, #d79452)",
  },
  
  {
    id: 3,
    title: "Empowering Growers",
    text: "Transforms traditional farming challenges into significant opportunities for enhanced yields and sustainable practices.",
    iconType: "react-icon",
    icon: FaHandsHelping, // support/helping farmers
    iconColor: "#47190d",
    bgColor: "linear-gradient(to top, #d79452, white)",
  },
  {
    id: 4,
    title: "Harmonious Cultivation",
    text: "Balances advanced technology with nature, fostering sustainable cultivation practices that benefit both the farm and the environment.",
    iconType: "react-icon",
    icon: FaLeaf, // leaf = harmony with nature
    iconColor: "#47190d",
    bgColor: "linear-gradient(to top, white, #d79452)",
  },
  {
    id: 5,
    title: "Global Market Access",
    text: "Creates better livelihoods for farmers by connecting them to stronger global markets and premium prices.",
    iconType: "react-icon",
    icon: FaGlobe, // global access
    iconColor: "#47190d",
    bgColor: "linear-gradient(to top, #d79452, white)",
  }
];
  const features = [
    "Smarter",
    "Sustainable",
    "Profitable",
    "Transparent",
  ];
  const cardData5 = [
    {
      //   image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (1).webp",
      title: "AI + Satellite Imagery",
      content: "Provides real-time monitoring of farms.",
    },
    {
      //   image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (2).webp",
      title: "Precision Agriculture",
      content:
        "Informs irrigation, fertilization, and pest control with data-driven accuracy.",
    },
    {
      //   image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (3).webp",
      title: "Machine Learning Models",
      content: "Predict plant stressors before they damage yields.",
    },
    {
      //   image: "https://api.ecrop.co/assets/precisiongrow/AI_icon1 (3).webp",
      title: "Sustainability Insights",
      content:
        "Recommends eco-friendly practices that reduce harmful chemical inputs.",
    },
  ];
  const Data3 = [
    {
      title: "Climate Change ",
      label: "Unpredictable rains, rising temperatures, and shifting seasons.",
    },
    {
      title: "Pest Infestations ",
      label: "Crop losses from diseases and insects.",
    },
  ];
  const Data4 = [
    {
      title: "High Input Costs",
      label: "Overuse of fertilizers and pesticides.",
    },
    {
      title: "Market Pressures",
      label:
        "Demand for premium quality and sustainability from global consumers.",
    },
  ];
  return (
    <>
      <div className="coffee-outer">
        <section className="coffee-hero position-relative p-0 text-center text-white">
          {/* Background banner */}
          <div className="hero-banner d-flex flex-column justify-content-center align-items-center">
            {/* Overlay */}
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

            {/* Text Content */}
            <div className="position-relative z-1 hero-text">
              <h1 className="display-4 fw-bold mb-3">
                eCrop – The World’s First AI Solution for Coffee
              </h1>
            </div>
          </div>

          {/* Bottom Center Image */}
          <div className="coffee-image position-absolute start-50 translate-middle-x">
            <img src={coffeeCup1} alt="Coffee Cup" className="img-fluid" />
          </div>
        </section>
        <section className="coffee-section">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Image */}
              <div className="col-md-6 mb-4 mb-md-0 text-center">
                <img
                  src={coffeeCup}
                  alt="Coffee AI"
                  className="img-fluid coffee-img"
                />
              </div>

              {/* Right Content */}
              <div className="col-md-6 text-white">
                <h2 className="coffee-title">
                  eCrop: Unlocking the Future of <span className="brnclr">Coffee with AI</span>
                </h2>
                <p className="coffee-description">
                  Coffee is a miracle of nature. A single bean is a complex
                  universe of flavor, aroma, and culture. From the high-altitude
                  Arabica estates of Brazil's Minas Gerais to the robust Robusta
                  heartlands of India's Coorg, each cup tells a story of sun,
                  soil, and dedication.
                </p>
                <p className="coffee-description">
                  But this story is under threat. Climate change shifts seasons,
                  pests evolve, and market demands for sustainable,
                  transparently sourced coffee are rising. As the 7th largest
                  producer, with 75% of its harvest bound for the global market,
                  the pressure on Indian coffee growers - and growers worldwide
                  has never been greater.
                </p>
                <p className="coffee-description">
                  With eCrop, we are not replacing the art of coffee
                  cultivation. We are preserving it. We are arming it for the
                  future. We empower farmers to elevate quality, champion
                  sustainability, and secure their harvests. We are honing the
                  future of cultivation, ensuring every bean reaches its full
                  potential and every cup tells a story of resilience.
                </p>
              </div>
            </div>
            <section className="quote-section d-flex align-items-center justify-content-center text-center">
              <div className="container">
                <blockquote className="quote-text display-4 rounded">
                  "The art of coffee needs a new tool. It needs intelligence."
                </blockquote>
              </div>
            </section>
          </div>
        </section>
        <section class="coffee-innovation text-white">
          <div class="container">
            <div class="text-center">
              <Titleunderline title="Why Coffee Needs Innovation?" titleColor="#ffffff" />

              <p>
                Coffee is more than a drink; it’s a livelihood for millions of
                farmers and a global commodity powering economy. Yet, its
                cultivation faces challenges:
              </p>
            </div>

            <div class="row align-items-center">
              <div class="col-md-4">
                {Data3.map((item, index) => (
                  <div key={index} className="col-md-12 col-lg-12">
                    <ListItem
                      icon="https://api.ecrop.co/assets/precisiongrow/Sustainability5.webp"
                      label={item.label}
                      title={item.title}
                      index={index}
                      titleColor="white"
                    />
                  </div>
                ))}
              </div>

              <div class="col-md-4 text-center">
                <img
                  src={coffeeCup2}
                  alt="Coffee Innovation"
                  class="img-fluid rounded"
                />
              </div>

              <div class="col-md-4">
                {Data4.map((item, index) => (
                  <div key={index} className="col-md-12 col-lg-12">
                    <ListItem
                      icon="https://api.ecrop.co/assets/precisiongrow/Sustainability5.webp"
                      label={item.label}
                      title={item.title}
                      index={index}
                      titleColor="white"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div class="my-5 text-center">
            
              <Titleunderline title="Meet eCrop: The World's First AI Agronomist for Coffee" titleColor="#ffffff" />

              <p>
                Unlike generic farming tools, eCrop is built for coffee growers
                - addressing unique crop needs from seed to export.
              </p>
            </div>
              <CardBorderGrid
                cardinfo={cardData5}
                colsLg={4}
                
                titleClass="custom-title-white"
                textClass="subhead-white"
              />
          </div>
        </section>
     
    <div className="text-white container mt-5">
      <Titleunderline title="How eCrop Helps Coffee Farmers?" titleColor="#ffffff" />

      <p className="text-center fs-5">Transforming Challenges into Opportunities</p>

      <div className="row align-items-start py-4">
        {/* Left Column - Table */}
       <div className="col-lg-7 mb-4 mb-lg-0">
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle coffee-table">
          <thead className="table-header text-center">
            <tr>
              <th>Challenge</th>
              <th>The eCrop Solution</th>
              <th>The Grower's Gain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Water Waste</td>
              <td>Smart moisture tracking &amp; weather integration</td>
              <td>-40% Water Use, Lower Costs</td>
            </tr>
            <tr>
              <td>Pest Damage</td>
              <td>Early AI detection &amp; targeted intervention tips</td>
              <td>-35% Crop Loss, Fewer Pesticides</td>
            </tr>
            <tr>
              <td>Soil Degradation</td>
              <td>Tailored nutrient recommendations</td>
              <td>Healthier Soil, Higher Quality Beans</td>
            </tr>
            <tr>
              <td>Market Access</td>
              <td>Data-driven proof of sustainable practices</td>
              <td>Access to Premium Markets &amp; Prices</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        {/* Right Column - Why Choose */}
        <div className="col-lg-5 fs-5">
          <h3 className="fw-bold mb-3">Sustainability & Ecological Impact</h3>
          <p>eCrop is committed to fostering a sustainable future for coffee cultivation:</p>
         <ul className="ms-3">
  <li>Significantly reduces chemical footprint in biodiverse coffee regions.</li>
  <li>Promotes organic alternatives and integrated pest management strategies.</li>
  <li>Actively preserves soil health, ecosystems, and biodiversity of your farm.</li>
  <li>Enhances climate resilience, helping coffee plants adapt to rainfall shifts and heat stress.</li>
</ul>

        </div>
      </div>
   
    </div>
  
<Titleunderline title="Why Choose eCrop for Your Coffee Farm?" titleColor="#ffffff" />

        <div data-aos="fade-up" data-aos-duration="3000" className="p-2">
          <InfoCardGroup cardData={data6}  colClass="col-12 col-md-6 col-lg-3 col-xl-2" />
        </div>
        <div className="container py-5">
            <div className="row align-items-center rounded-3 coffee-farm p-4">
                            <Titleunderline title="eCrop and the Coffee Supply Chain" titleColor="#47190d" />


              {/* Right Content */}
              <div className="col-md-6">

                  <div className="container my-5">
      {/* Traceability Section */}
      <h3 className="mb-3 fw-bold">Traceability You Can Trust</h3>
      <p className="fs-5">
        Customers are becoming more demanding about the origins of their coffee. 
        <strong> eCrop </strong> makes it possible to:
      </p>
      <ul className="list-unstyled fs-5">
        <li><MdCheckCircle className="text-success me-2" /> Transparent farm-to-cup data</li>
        <li><MdCheckCircle className="text-success me-2" /> Proof of sustainable practices</li>
        <li><MdCheckCircle className="text-success me-2" /> Confidence for global buyers & exporters</li>
      </ul>

      {/* Economic Edge Section */}
      <h3 className="mt-4 mb-3 fw-bold">Economic Edge for Farmers</h3>
      <ul className="list-unstyled fs-5">
        <li><MdCheckCircle className="text-success me-2" /> Access to premium international markets</li>
        <li><MdCheckCircle className="text-success me-2" /> Higher profit margins through quality certification & traceability</li>
        <li><MdCheckCircle className="text-success me-2" /> Strengthened farmer livelihoods by connecting them to global supply chains</li>
      </ul>
    </div>
           
              </div>
                {/* Left Image */}
              <div className="col-md-6 mb-4 mb-md-0 text-center">
                <img
                  src={coffeeCup}
                  alt="Coffee AI"
                  className="img-fluid coffee-img"
                />
              </div>
            </div>
            <div className="row py-5">
                          <Titleunderline title="Future Perspective: Coffee Without Interruption" titleColor="#ffffff" />

             <div className="col-lg-6 text-white">
  <h3 className="mb-3">
    As the world faces climate change and food insecurity, 
    <span className="brnclr"> eCrop </span> stands as a pioneer for the future of coffee.
  </h3>

  <ul className="fs-5">
    <li>
      <strong>Resilient Farming :</strong> Protects against climatic disruptions.
    </li>
    <li>
      <strong>Efficient Practices :</strong> Maximizes hectare productivity to meet growing demand.
    </li>
    <li>
      <strong>Global Prosperity :</strong> Builds a coffee sector that’s sustainable, transparent, and profitable.
    </li>
  </ul>
</div>

              <div className="col-lg-5 offset-lg-1">
                   <img
                  src={graph}
                  alt="Coffee AI"
                  className="img-fluid coffee-img"
                />
              </div>
            </div>
  <section className="coffee-section1 py-5 text-white">
      <div className="container text-center">
        {/* Heading */}
                          <Titleunderline title="The Future of Coffee Is Here" titleColor="#ffffff" />

        {/* Subheading */}
        <p className="lead mb-4">
          With eCrop, coffee
          production becomes:
        </p>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card coffee-farm border-0 h-100 shadow-lg">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h3 className="fw-bold mb-0">
                    {feature}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mt-5 fs-4 fw-semibold">
          Be part of the{" "}
         AI-powered coffee revolution.
          <br />
          Your coffee deserves the world's first AI guardian. It deserves{" "}
          eCrop.
        </p>
      </div>
    </section>
        </div>
      </div>
       
    </>
  );
};

export default Ecropcoffe;
