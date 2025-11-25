import React from "react";
import { Helmet } from "react-helmet-async";
import InfoCardGroup from "../Reusablecomp/InfoCardGroup.js";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline.js";
import Banner from "../Reusablecomp/Banner/Banner.js";
import Roadmap from "../Services/RegenerativeAgri/Roadmap.js";
import ListItem from "../Reusablecomp/ListItem.js";
import abtimg from '../../assets/icons_About/abt-img.webp'
import abtimg1 from '../../assets/icons_About/about-bg.png'
import './About.css'
// import ArrowCardsSection from "../Reusablecomp/ArrowCardsSection/ArrowCardsSection.js";
import { FaIndustry, FaSatellite, FaHandsHelping } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const About = () => {
  const cardData = [
    {
      id: 1,
      title: "Growing Together: A Global Network for Smarter Farming",
      text: "By 2035, we aim to partner with research institutions and governments to create a collaborative ecosystem that connects research and technology.",
      img: "https://api.ecrop.co/assets/precisiongrow/icon5.webp",
      bgColor: "linear-gradient(to top, rgb(172, 236, 159), white)",
    },
    {
      id: 2,
      title: "Million Farmers, 1 Billion Harvests!!",
      text: "By 2030, we aim to empower 1 million farmers worldwide with Precision Grow’s technology and training programs, enabling them to increase yields by 35% while reducing resource dependency.",
      img: "https://api.ecrop.co/assets/precisiongrow/icon2.webp",
      bgColor: "linear-gradient(to top, rgb(172, 236, 159), white)",
    },
    {
      id: 3,
      title: "Create a Lasting Legacy – Go Zero Emissions, Go Green!",
      text: "By 2030, we aim to transition all operations from manufacturing to logistics — to net-zero carbon emissions, setting a new standard for sustainability in agriculture and industrial sectors.",
      img: "https://api.ecrop.co/assets/precisiongrow/icon3.webp",
      bgColor: "linear-gradient(to top, rgb(172, 236, 159), white)",
    },
    {
      id: 4,
      title: "Unlock 20% More Water Savings – Small Changes, Big Impact!",
      text: "By 2027, we aim to harness precision irrigation and data-driven insights to transform water efficiency in agriculture.",
      img: "https://api.ecrop.co/assets/precisiongrow/icon4.webp",
      bgColor: "linear-gradient(to top, rgb(172, 236, 159), white)",
    },
    {
      id: 5,
      title:
        "Revolutionize Farming with AI: Smarter Yields, Sustainable Futures!",
      text: "By 2027, we aim to develop and deploy next-generation AI models that predict crop health, yield, and risks with 99% accuracy, empowering farmers with unparalleled insights and transforming the future of farming.",
      img: "https://api.ecrop.co/assets/precisiongrow/icon1.webp",
      bgColor: "linear-gradient(to top, rgb(172, 236, 159), white)",
    },
  ];
const AboutData = [
  {
    id: 1,
    title: "AI-Boosted Wisdom",
    description: "Our AI tools amplify your expertise, translating complex data into simple, actionable steps - whether you’re just starting out or a seasoned expert.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_1.webp",
  },
  {
    id: 2,
    title: "Sustainability at Heart",
    description: "Use resources wisely, maximize yields, and reduce your environmental impact - all while nurturing the planet you depend on.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_2.webp",
  },
  {
    id: 3,
    title: "Nature, Nurtured by Numbers/ Less Waste, More Yield",
    description: "Use exactly the right amount of water and nutrients—no more, no less. Good for harvests, and great for the planet.",
    image: "https://api.ecrop.co/assets/precisiongrow/Regenerative_3.webp",
  }
]
const listData = [
  {
    iconComponent: <FaIndustry size={50} color="#76bc01" />, // react-icon
    title: "Precision Meets Compliance:",
    label:
      "SkyWatch sets the new benchmark for pollution monitoring, combining advanced sensors with real-time IoT analytics to ensure industries meet environmental standards effortlessly.",
    bgClass: "bg-lightgreen",
  },
  {
    iconComponent: <FaSatellite size={50} color="#76bc01" />, // react-icon
    title: "Satellite-Powered Insight:",
    label:
      "By integrating real-time satellite data, SkyWatch offers a comprehensive, regional view of environmental health, helping you see the bigger picture.",
    bgClass: "bg-lightblue",
  },
  {
    iconComponent: <FaHandsHelping size={50} color="#76bc01" />,
    title: "Partner in Progress:",
    label:
      "From installation to ongoing support, SkyWatch guides businesses with expert solutions, bridging technology and environmental responsibility for a cleaner future.",
    bgClass: "bg-lightyellow",
  },
];
  const cardsData = [
    { title: "Sense", label: "We gather real-time data from satellites, IoT-enabled field sensors, and industrial devices like SkyWatch for pollution monitoring."},
    { title: "Understand", label: "Our AI-powered models unify and analyze diverse data streams to detect patterns, forecast risks, and optimize agricultural and environmental performance." },
    { title: "Recommend", label: "We deliver clear, prioritized insights and actionable advice directly via mobile and web platforms - helping growers and industries make smarter, sustainable decisions quickly." }
  ];
  return (
    <div>
      <Helmet>
        <title>
          About Precision Grow | Driving Innovation in Smart Farming
        </title>
        <meta
          name="description"
          content="See how Precision Grow leads smart farming with innovative agri-tech that boosts crop productivity and supports sustainable agriculture in India."
        />
        <meta
          name="keywords"
          content="about precision grow, agri-tech company India, smart farming innovators"
        />
      </Helmet>

      {/*------------------------------------- about banner section -----------------------------------------------------*/}
      <div className="abt-outer">
        {/* banner  */}

        <Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/About Us.webp"
          heading="About Us"
          subheading="Cultivating Innovation for Sustainable Growth"
        />
        <section className="about-section py-5">
  <div className="container">
  <div className="row align-items-center justify-content-center position-relative">
  {/* Left side image with rotating background */}
  <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
    {/* Rotating background image */}
    <div className="rotating-bg d-none d-lg-block">
      <img
        src={abtimg1} // your rotating background image
        alt="rotating background"
      />
    </div>

    {/* Main image */}
    <img
      src={abtimg}
      alt="Farming illustration"
      className="img-fluid rounded main-img"
    />
  </div>

  {/* Right side content */}
  <div className="col-lg-6">
    <Titleunderline title="Get to Know Us!" tag="h2" align="left" />
    
    <p>
      Farming has always been about passion, perseverance, and progress. At Precision Grow, we blend the timeless wisdom of the fields with the smart power of data and innovation for every generation of grower, innovator, and dreamer.
    </p>
    <p>
      At Precision Grow, we build the intelligence layer for land and industry. We fuse satellite imagery, field level IoT, and AI to turn raw data into decisions - so growers and operators can boost yields, cut inputs, and shrink emissions without guessing.
    </p>
    <p>
      We’re here for the people who feed and power the world. Our job is to make their work simpler, more sustainable, and more rewarding.
    </p>
  </div>
</div>

  </div>
</section>

      </div>
      {/*------------------------------------- What Makes Us Different? -----------------------------------------------------*/}
  <section className="about-roadmap-section bg-light position-relative py-5">
  <Titleunderline title="Precision Agriculture Solutions" tag="h1" />

  <Roadmap
    cards={AboutData}
    animation="fade-up"
    duration={1500}
    colClass="col-lg-4 col-md-6 col-sm-12"
  />
</section>


      {/*------------------------------------- WHAT WE WANT TO DO-----------------------------------------------------*/}
      <section>
        <Titleunderline title="We Thrive To" tag="h2"/>

        <div data-aos="fade-up" data-aos-duration="3000" className="mx-auto px-5">
          <InfoCardGroup cardData={cardData} />
        </div>
        <p className="text-center fs-4 fw-bold">
          Together, we’re not just growing crops, we’re growing a smarter, more
          sustainable future for farming.
        </p>
      </section>
       <section>
      <div className="container">
                        <Titleunderline title="SkyWatch: Industrial Emissions Intelligence" tag="h2"/>

        <div className="row align-items-center">
          {/* Left side: List items */}
          <div className="col-lg-6">
            {listData.map((item, index) => (
              <ListItem
                key={index}
                iconComponent={item.iconComponent}
                title={item.title}
                label={item.label}
                bgClass={item.bgClass}
                index={index}
              />
            ))}
          </div>

          {/* Right side: Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://api.ecrop.co/assets/precisiongrow/skywatchmodel.webp"
              alt="Illustration"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
    
                        <Titleunderline title="How We Work: Our Three-Step Process" tag="h2"/>
          {/* <ArrowCardsSection cardsData={cardsData} /> */}
             <Row className="justify-content-center mx-3">
                    {cardsData.map((item, index) => (
                     <Col
  key={index}
  lg={3}
  md={5}
  sm={12}
  className="mb-4 mx-3 sustain-card1"
  data-index={index + 1}  // pass number to CSS
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

    </div>
  );
};

export default About;
