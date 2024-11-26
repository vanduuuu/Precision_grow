import React from "react";
import LeftTextVideo from "../../LeftTextVideo/LeftTextVideo";
import Titletag from "../../Titletag/Titletag";
import './AgriDrone.css'
import ListBoxBg from "../../ListBoxBg/ListBoxBg";

import Namebanner from '../../../assets/hero_44.webp'
import SDS from '../../../assets/sds.webp'
import Videobg from '../../../assets/agri-drone.mp4';


const item7 =[
    {
      detail : "Cutting-edge technology for unmatched precision.",
    },
    {
      detail : "Sustainability-driven practices for environmentally conscious agriculture.",
    },
    {
      detail : "Real-time data for informed decision-making.",
    },
    {
      detail : "Enhanced efficiency resulting in elevated yields and increased profitability.",
    },
  ]
const AgriDrone = () => {
    const DroneCardApi = [
        {
            id : "1",
            title : "Seeding the Future, Row by Row",
            desc :"Precision Grow Agri-Drones utilize advanced sensors and imaging technology to assess crop health, nutrient levels, and pest infestations with pinpoint accuracy. By providing real-time data, farmers can make informed decisions, optimizing yield and minimizing resource wastage.",
            h2tag : "01",
        },
        {
            id : "2",
            title : "Watching Over Your Fields",
            desc :"Our drones offer continuous surveillance, monitoring vast expanses of farmland from above. Detect issues such as disease outbreaks, irrigation inefficiencies, or weed proliferation before they become major concerns. Precision Grow keeps a vigilant eye on your crops, ensuring nothing goes unnoticed.",
            h2tag : "02",
        },
        {
            id : "3",
            title : "Spraying Success, One Drop at a Time",
            desc :"With precision spraying capabilities, our Agri-Drones apply fertilizers, pesticides, and herbicides only where needed. This targeted approach reduces environmental impact, lowers input costs, and maximizes the effectiveness of crop protection measures.",
            h2tag : "03",
        },
        {
            id : "4",
            title : "Navigating Tomorrow's Harvest, Today",
            desc :"Precision Grow Agri-Drones swiftly scout vast fields, providing farmers with up-to-date information on crop conditions. This time-saving technology allows farmers to focus their efforts where they're needed most, enhancing overall productivity and decision-making.",
            h2tag : "04",
        },
        {
            id : "5",
            title : "Navigating Challenges, Reaping Triumphs",
            desc :"Our Agri-Drones collect weather and climate data, helping farmers anticipate and adapt to changing conditions. This proactive approach enables better risk management, ensuring crops are resilient in the face of unpredictable weather patterns.",
            h2tag : "05",
        },
    ]
  return (
    <div>
      <div>
        <LeftTextVideo
          title="ELEVATING AGRICULTURE TO NEW HEIGHTS"
          description="At Precision Grow, we transform agriculture with advanced Agri-Drone services, delivering unmatched efficiency, precision, and sustainability."
          buttonText="Contact Us"
          buttonLink="/contact"
          videoSrc={Videobg}
        />
      </div>
      <div className="ai-outer drone-div">
        <section>
          <div className="container">
            <Titletag title="Agri Drone" bgImage={Namebanner} className="pt-5" />
            <div className="loanp2 text-center">
              <p>
                Our tailored drone technology empowers farmers for precise and
                insightful field cultivation
              </p>
            </div>
            <div className="row">
                {DroneCardApi.map((cardss ,index)=> (
 <div className="col-lg-4 col-12">
 <div class="card1 skew glow my-4">
   <div class="content">
     <h2>{cardss.h2tag}</h2>
     <h3>{cardss.title}</h3>
     <p>
      {cardss.desc}
     </p>
   </div>
 </div>
</div>
                ))}
             
            </div>
          </div>
        </section>
      </div>
    
      <ListBoxBg
  mediaSrc={SDS}  // Path to the image or video
  title="Why Choose Precision Grow?"
  items={item7}
  textcolor="#c6e800"  // Text color for the title
  bgcolor="rgba(43, 62, 62, 0.82)"  // Background color of the content box
  mediaType="image"  // Use 'image' for image or 'video' for video
/> 
    </div>
  );
};

export default AgriDrone;
