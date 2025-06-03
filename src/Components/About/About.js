import React from "react";
import { Helmet } from "react-helmet-async";
import InfoCardGroup from "../Reusablecomp/InfoCardGroup.js";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline.js";
import Banner from "../Reusablecomp/Banner/Banner.js";

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

  return (
    <div>
      <Helmet>
        <title>
          About Precision Grow: Innovating Sustainable Agri-Tech Solutions
        </title>
        <meta
          name="description"
          content="Learn how Precision Grow is transforming agriculture with innovative agri-tech solutions that enhance sustainability and crop productivity in India."
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
        <section>
          {/*-------------------------------------Aboutsection -----------------------------------------------------*/}
          <div className="container">
            <p className="txt1 text-center">
              At Precision Grow, we’re not just building tools - we’re
              cultivating a revolution. Our goal is simple: to empower farmers
              with the technology they need to thrive in a changing world. By
              combining satellite data, IoT devices, and AI-driven insights,
              we’re transforming the way crops are grown, monitored, and
              harvested. We believe in a future where farming is smarter, more
              sustainable, and more rewarding. A future where every farmer has
              access to real-time data that helps them make better decisions,
              increase yields, and reduce their environmental footprint. But our
              vision doesn’t stop at agriculture. With our IoT-based solutions
              for industries, we’re helping businesses monitor real-time gas
              emissions, optimize their operations, and significantly reduce
              their carbon footprint. By providing actionable insights, we’re
              enabling industries to meet sustainability goals, comply with
              regulations, and contribute to a healthier planet. This isn’t just
              about technology - it’s about people. It’s about ensuring that
              farmers, the backbone of our world, have the tools they need to
              succeed. Together, we’re not just growing crops; we’re growing
              possibilities.
            </p>
          </div>
        </section>
      </div>
      {/*------------------------------------- What Makes Us Different? -----------------------------------------------------*/}
      <Titleunderline title="What Makes Us Different?" tag="h1"/>

      <section className="container col-lg-8 content-about">
        <div className="text-center cont ">
          <p>
            We don’t just farm — we revolutionize. By combining our intelligent
            farming technology with commitment to sustainability, we redefine
            agriculture for a smarter, greener tomorrow. Our precision-driven
            solutions maximize yields, minimize waste, and harmonize with
            nature, ensuring a balanced ecosystem. With excellence as our
            promise and sustainability as our mission, we’re not just growing
            crops - we’re cultivating a future where farming and the planet
            thrive together. Join us in shaping a world that grows smarter, not
            harder.
          </p>
        </div>
      </section>

      {/*------------------------------------- WHAT WE WANT TO DO-----------------------------------------------------*/}
      <section>
        <Titleunderline title="What We Want To Do" tag="h2"/>

        <div data-aos="fade-up" data-aos-duration="3000" className="mx-auto">
          <InfoCardGroup cardData={cardData} />
        </div>
        <p className="text-center fs-4 fw-bold">
          Together, we’re not just growing crops, we’re growing a smarter, more
          sustainable future for farming.
        </p>
      </section>
    </div>
  );
};

export default About;
