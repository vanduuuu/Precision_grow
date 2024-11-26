import React from "react";
import Banner from "../../Banner/Banner";
import Titletag from "../../Titletag/Titletag";
import VdoText from "../../Home/VdoText/VdoText";
import './RegenerativeAgri.css'
import ListCompTitle from "../../ListComponent/ListCompTitle";
import Headbanner from '../../../assets/regenerative-agriculture.webp'
import Namebanner from '../../../assets/hero_44.webp'
import Plant from '../../../assets/plant-grown.webp'


const breadcrumbItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "Regenerative Agriculture" },
];

const items = [
    { title: 'Diverse Crop Rotations:', detail: 'Implementing diverse crop rotations and cover cropping to break pest and disease cycles, improve soil structure, and increase biodiversity.' },
    { title: 'LONG-TERM FIRE STATISTICS', detail: 'Export historical fire data and analytics.' },
    { title: 'Reduced Tillage:', detail: 'Minimizing soil disturbance to maintain soil structure, reduce erosion, and preserve soil microorganisms.' },
    { title: 'Managed Grazing:', detail: 'Utilizing planned rotational grazing to mimic natural herd movements, which can improve pasture health, soil fertility, and carbon sequestration.' },
    { title: 'Composting and Organic Amendments:', detail: 'Adding compost and organic matter to the soil to enhance nutrient availability and microbial activity.' },
  ];
  const items1 = [
    { title: 'Cover Crops:', detail: 'Planting cover crops to protect and enrich the soil, prevent erosion, and improve water infiltration.' },
    { title: 'Agroforestry:', detail: 'Integrating trees and shrubs into agricultural landscapes to provide habitat for wildlife, improve soil health, and enhance biodiversity.' },
    { title: 'Integrated Pest Management (IPM):', detail: 'Using natural predators, diversified planting, and biological controls to manage pests and reduce reliance on chemical pesticides.'},
    { title: 'Water Management:', detail: 'Implementing practices such as rainwater harvesting, efficient irrigation systems, and contour farming to optimize water use and reduce runoff.'},
    { title: 'Local and Community Focus:', detail: 'Supporting local food systems and fostering community involvement to create more resilient and sustainable agricultural practices.'},
    { title: 'Soil Health:', detail: 'Emphasis on increasing soil organic matter and improving soil biology to enhance nutrient cycling, water retention, and carbon sequestration.' },

  ];

const RegenerativeAgri = () => {
   
  return (
    <div>
      <Banner
        title="Regenerative Agriculture"
        backgroundImage={Headbanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className="abt-outer">
        <section>
        <div className="container">
          <Titletag
            title="Regenerative Agriculture"
            bgImage={Namebanner}
            className="pt-5 mb-5"
          />
          <p className="txt1 mt-4">
            At <span>Precision Grow</span>, we are pioneering a new era in
            agriculture, harnessing the power of cutting-edge satellite
            analytics to revolutionize the way we farm. Our commitment is to
            empower farmers with precision insights that drive efficiency,
            sustainability and unprecedented crop management. Explore the future
            of agriculture with Precision Grow!
          </p>
        </div>
        </section>
        <VdoText
          mediaSrc={Plant}
          isVideo={false}
          title="How Does It Work?"
          Desc="The key to regenerative agriculture is that it not only “does no harm” to the land but improves it, using technologies that regenerate and revitalize the soil and the environment. Regenerative agriculture leads to healthy soil, capable of producing high quality, nutrient-dense food while simultaneously improving, rather than degrading land, and ultimately leading to productive farms and healthy communities and economies. It is dynamic and holistic, incorporating permaculture and organic farming practices, including conservation tillage, cover crops, crop rotation, composting, mobile animal shelters, and pasture cropping, to increase food production, farmers’ income, and especially, topsoil."
          textcolor="#c9d500"
          textcolorP="white"
          bgcolor="transparent"
        />
        <div className="red-outer-div">
          <section>
            <div className="container">
                <h2 className="darkgreentitle">Here are some key principles and practices associated with regenerative agriculture:</h2>
              <div className="row">
                <div className="col-lg-6">
                <ListCompTitle items={items1} />
                </div>
                <div className="col-lg-6">
                    <ListCompTitle items={items} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegenerativeAgri;
