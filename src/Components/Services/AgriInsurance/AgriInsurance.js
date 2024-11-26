import React from "react";
import LeftTextVideo from "../../LeftTextVideo/LeftTextVideo";
import Titletag from "../../Titletag/Titletag";
import ListCompTitle from "../../ListComponent/ListCompTitle";
import  '../../Services/AgriInsurance/AgriInsurance.css'
import agriinsurance from '../../../assets/agri-insurance.mp4'

import Namebanner from '../../../assets/hero_44.webp'

const AgriInsurance = () => {
  const items1 = [
    {
      title: "Safeguarding Your Investment",
      detail:
        "Farming is a venture filled with unpredictable variables, from weather fluctuations to market volatility. Our Agri-Insurance is designed to protect your investment, ensuring that your hard work and dedication are shielded from unforeseen risks.",
    },
    {
      title: "Weathering the Storm:",
      detail:
        "Extreme weather events, such as droughts, floods, and storms, can devastate crops. Our insurance policies provide coverage against these natural disasters, empowering you to recover and rebuild even in the face of adversity.",
    },
    {
      title: "Tailored to Your Needs",
      detail:
        "We understand that every farm is unique. That's why we offer customizable insurance solutions to meet the specific needs of your operation. Whether you're a small family farm or a large-scale enterprise, we have a plan that fits.",
    },

  ];
  const items2 = [
    {
      title: "Coverage You Can Count On",
      detail:
        "Our comprehensive coverage includes protection against crop failure, loss of livestock, equipment damage and more. You can trust us to be your partner in resilience, ensuring that your livelihood is secure in the event of unforeseen circumstances.",
    },
    {
      title: "Expertise and Trust",
      detail:
        "Backed by years of experience, Precision Growis a trusted name in the agricultural insurance industry. Our team of experts understands the intricacies of farming and is committed to supporting you every step of the way.",
    },
    {
      title: "Seamless Claims Process",
      detail:
        "In the unfortunate event of a claim, we prioritize a seamless and quick claims process. Our goal is to get you back on your feet as soon as possible, minimizing disruptions to your farming operations.",
    },
 
  ];
  return (
    <>
      <div>
        <LeftTextVideo
          title="Get a Quote Today"
          description="Seize control of your farm's future with Precision Grow Agri-Insurance. Contact our friendly team today for a personalized quote and secure your harvest for a prosperous future."
          buttonText="Get Quote"
          buttonLink="/contact"
          videoSrc={agriinsurance}
        />
      </div>
      <div className="ai-outer">
        <section>
          <div className="container">
            <Titletag
              title="Crop Insurance"
              bgImage={Namebanner}
              className="pt-5"
            />
            <div className="row Insurance">
              <div className="col-lg-6">
                <ListCompTitle items={items1} />
              </div>
              <div className="col-lg-6">
                <ListCompTitle items={items2} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgriInsurance;
