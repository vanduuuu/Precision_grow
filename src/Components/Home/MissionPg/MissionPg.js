import React from "react";
import "./MissionPg.css";
import Missioncard from "./Missioncard";
import HomeAbt from '../../../assets/planet-earth-global.webp';
import Leaf from '../../../assets/1.png';
import Vision from '../../../assets/vision.png';
import Mission from '../../../assets/mission.png'



const MissionPg = () => {
  return (
    <>
      <section className="outer-mission">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-md-12">
              <div className="inner-mission">
                <img src={HomeAbt} alt="satellite" className="w-100"></img>
                <div className="in-left-img"  style={{ transform: "translate(0%, -24.35%) translate3d(0px, 0px, 0px)", translate: "none", rotate: "none", scale: "none" }}>
                  <img src={Leaf}  alt="leaf" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 col-md-12  col-sm-12">
              <div className="inner-mission-info" data-aos="fade-left" data-aos-duration="3000">
                <h1> Welcome To <br/><span>Precison Grow</span> </h1>
                <p>
                  <b>Transform</b> your farming with Precision Grow –{" "}
                  <b>Precision, Efficiency, Sustainability</b>. Our cutting-edge
                  satellite, traceability and AI technologies maximize yields
                  for a new era in agriculture. Elevate your farm and farming
                  practices with us.
                </p>
              </div>

              <div className="miss-vis">
                <ul className="" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                      <li className="vision">
                        <Missioncard
                          imageSrc={Vision}
                          title="Our Vision"
                          // title="Smart Farming for a Sustainable Future"
                          description="We envision a future where sustainable farming practices, driven by data-driven insights and 
                          artificial intelligence, lead to increased crop yields, minimized environmental impact, and improved livelihoods for farmers."
                          cardStyle={{ backgroundColor: "#f7c75f", color: "#000" }}
                        />
                      </li>
                      <li className="mission">
                        <Missioncard
                          imageSrc={Mission}
                          title="Our Mission"
                          // title="Nurturing Agriculture Through Innovation"
                          description="We are dedicated to revolutionizing agriculture through cutting-edge technology. We aim to empower farmers with precise satellite data 
                          for real-time crop monitoring and deploy advanced AI solutions to provide actionable crop advisory."
                          cardStyle={{ backgroundColor: "#9aad46", color: "#000" }}
                        />
                      </li>
                      </ul>
                      </div>
                      </div>
                      </div>
            {/* <div className="row" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="col-lg-4">
              <Missioncard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/vision.png'
                mission="Our Vision"
                title="Smart Farming for a Sustainable Future"
                description="We envision a future where sustainable farming practices, driven by data-driven insights and artificial intelligence, lead to increased crop yields, minimized environmental impact, and improved livelihoods for farmers. Our vision extends to creating a global ecosystem where every stakeholder in agriculture benefits from innovation, transparency, and the responsible use of technology in farming."
                cardStyle={{ backgroundColor: "#9aad4614", color: "#000",border:"3px solid #9bad3e" }}
              />
            </div>
            <div className="col-lg-4">
              <Missioncard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/mission.png'
                mission="Our Mission"
                title="Nurturing Agriculture Through Innovation"
                description="We are dedicated to revolutionizing agriculture through cutting-edge technology. We aim to empower farmers with precise satellite data for real-time crop monitoring and deploy advanced AI solutions to provide actionable crop advisory. We are committed to fostering transparency in the agricultural supply chain by ensuring traceability, offering consumers a clear journey of our products from farm to table."
                cardStyle={{ backgroundColor: "#9aad4614", color: "#000",border:"3px solid #9bad3e" }}
              />
            </div>
            <div className="col-lg-4">
              <Missioncard
                imageSrc='https://webpagecdnstorage.blob.core.windows.net/precisiongrow/goal.png'
                mission="Our Goal"
                title="Leading the Way in Sustainable Agricultural Transformation"
                description="We aim to be at the forefront of sustainable agricultural transformation by leveraging cutting-edge technology and data-driven solutions. We strive to enhance productivity and profitability for farmers while reducing environmental impact. By fostering a culture of innovation and transparency, we aim to build a more resilient and equitable agricultural ecosystem that benefits farmers, consumers, and all stakeholders involved. Our ultimate goal is to ensure that agriculture is not only a means of livelihood but a sustainable pathway to a better future for all."
                cardStyle={{ backgroundColor: "#9aad4614", color: "#000",border:"3px solid #9bad3e" }}
              />
            </div>
            </div> */}
             </div>
      </section>
    </>
  );
};

export default MissionPg;
