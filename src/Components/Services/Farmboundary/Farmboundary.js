import React from "react";
import Banner from "../../Banner/Banner";
import Titletag from "../../Titletag/Titletag";
import ListCompTitle from "../../ListComponent/ListCompTitle";
import iconimg1 from "../../../assets/API-Ready-High-Accuracy.png";
import iconimg2 from "../../../assets/High-Accuracy.png";
import iconimg3 from "../../../assets/PredictablePricing.png";
import "./Farmboundary.css";
import farmboundary from "../../../assets/farmboundary.mp4";
import farmbimg from '../../../assets/farmboundary.png'
import Headbanner from '../../../assets/aerial-drone.webp'
import Namebanner from '../../../assets/hero_44.webp'


const Farmboundary = () => {
  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Farm Boundary" },
  ];
  const items = [
    {
      title: "Increased Efficiency",
      detail:
        "By understanding the exact boundaries of your farm, you can better plan planting, irrigation, and resource allocation.",
    },
    {
      title: "Cost-Effective Solutions",
      detail:
        "Eliminate guesswork and prevent resource waste with precise boundary detection, leading to more efficient farm operations.",
    },
    {
      title: "Sustainability",
      detail:
        "Optimize land use and contribute to sustainable farming practices by managing your farm’s resources more effectively.",
    },
  ];
  const items1 = [
    {
      title: "Accurate Boundary Mapping",
      detail:
        "Utilizing satellite imagery and advanced algorithms, we deliver highly accurate farm boundary data to assist in precise land management.",
    },
    {
      title: "Customizable for Any Scale:",
      detail:
        "Whether you manage small plots or large-scale agricultural land, our solutions adapt to your needs, offering tailored results based on the specific dimensions and characteristics of your property.",
    },
    {
      title: "Easy Integration",
      detail:
        "Our boundary detection data is easily integrated with existing farm management software and tools, making it simple to incorporate into your current workflows.",
    },
    {
      title: "Compliance and Documentation",
      detail:
        "Stay compliant with local regulations by having clearly defined and documented farm boundaries, ensuring smooth legal processes and proper land ownership records.",
    },
  ];
  const items5 = [
    {
      title: "8+ Years of Historical Data",
      detail:
        "We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.",
    },
    {
      title: "0.95 IoU Score:",
      detail:
        "Our Field Delineation Model boasts an Intersection over Union (IoU) accuracy score of 0.94-0.96, ensuring highly reliable field boundary data.",
    },
    {
      title: "200M+ Hectares",
      detail:
        "We have delineated over 200 million hectares of agricultural fields and seeded acres using Sentinel-2 imagery at 1m resolution, offering unparalleled accuracy and coverage.",
    },
    {
      title: "4 Query Types",
      detail:
        "Our field boundary data is available via API, allowing seamless integration into your products and systems.",
    },
  ];
  const items6 = [
    {
      title: "Pre-Production:",
      detail:
        "Companies involved in fungicides, herbicides, pesticides, and plant breeding rely on accurate boundaries for variable rate technology (VRT) applications.",
    },
    {
      title: "Processing & Storage",
      detail:
        "Grain traders, mills, and logistical networks use current-season boundaries and seeded acres to forecast grain inventory volumes.",
    },
    {
      title: "Wholesale & Retail Market",
      detail:
        "Grain buyers, food processors, and carbon credit organizations depend on precise boundary data for carbon and sustainability mapping.",
    },
   
  ];

  const items7 = [
    
    {
      title: "Autonomy & Robotics",
      detail:
        "Autonomous agricultural machinery requires accurate boundaries for dependable operation, offering a scalable alternative to costly RTK systems.",
    },
    {
      title: "Distribution & Logistics",
      detail:
        "Farm Management System (FMS) providers need scalable solutions, and manual field boundary digitization is time-consuming and prone to errors.",
    },
    {
      title: "Crop Insurance & Subsidies",
      detail:
        "Crop insurers and national agencies conducting manual field inspections face costly and time-consuming processes that can be improved with accurate boundary data.",
    },
  ];
  return (
    <div>
      <Banner
        title="Farm Boundary"
        backgroundImage={Headbanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className="abt-outer">
        <section>
          <div className="container">
            <Titletag
              title="Farm Boundary"
              bgImage={Namebanner}
              className="pt-5"
            />
            <h6 className="direct"> Detection by Precision Grow</h6>
            <p className="txt1">
              At <span>Precision Grow</span>, we offer cutting-edge Farm
              Boundary Detection services designed to help farmers and
              agribusinesses optimize land management with precision and
              accuracy. Our advanced satellite-based technology provides an
              exact mapping of farm boundaries, ensuring that every inch of land
              is accounted for and efficiently utilized.
            </p>
          </div>
        </section>
        <div className="red-outer-div">
          <div className="shapehere"></div>
          <section>
            <div className="container pt-6">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="key">
                    Key Features
                  </h1>
                  <ListCompTitle items={items1} />
                </div>
                <div className="col-lg-6">
                <h1 className="key">
                    Benefits
                  </h1>
                  <ListCompTitle items={items} />
                </div>
         
              </div>

              <blockquote className="quote-container">
                  <p className="para11">
                    With{" "}
                    <b style={{ color: "#6f850b" }}>
                      Precision Grow's Farm Boundary Detection services
                    </b> , you can gain better control over your land, maximize its
                    potential, and achieve greater agricultural success. Let us
                    help you take the guesswork out of boundary management, so
                    you can focus on what matters most growing your farm.
                  </p>
                </blockquote>
            </div>
          </section>
        </div>
      </div>

      <div className="farmbounday1 global-cover">
        <section>
          <div className="container-fluid">
            <h1 style={{ color: "#FFF" }} className="text-center">
              Global Coverage
            </h1>
            <p>
              At Precision Grow, we're continuously expanding our services to
              new regions, including France, Spain, Brazil, the US, Australia,
              Germany, and over 30 more countries. Our goal is to provide
              comprehensive global agricultural solutions.
            </p>
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={iconimg3}
                      alt="Predictable Pricing"
                      className="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4 className="card-title">Predictable Pricing</h4>
                    <p className="card-text">
                      We offer a flexible pricing system with discounts based on
                      usage volume. The more data requests you make, the lower
                      the cost, ensuring affordability as your usage grows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={iconimg1}
                      alt="API-Ready High Accuracy"
                      className="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4>API-Ready High Accuracy</h4>
                    <p className="card-text">
                      Our services are fully integrated with simple API
                      endpoints, providing full access to documentation for easy
                      integration into your existing systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={iconimg2}
                      alt="High Accuracy"
                      className="mb-3"
                      style={{ width: "80px", height: "auto" }}
                    />
                    <h4 className="card-title">High Accuracy</h4>
                    <p className="card-text">
                      Our data is 12-15% more accurate than existing cadastral
                      maps like LPIS in the EU and CLU in the US, using AI
                      solutions with a 10m resolution. This high level of
                      accuracy makes Precision Grow the go-to choice for precise
                      farm management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
      {/* <div className="ecrop-outer3 farmB3">
        <div className="shapehere"></div>
        <video autoPlay muted loop className="bg-video">
          <source src={farmboundary} type="video/mp4" />
        </video>
       
      </div> */}
      <div className="farmoB3">
        <div className="container-fluid">
        <div className="model-work">
          <h2>How Our Field Delineation Model Works</h2>
          <p>
            We accurately delineate field boundaries and measure seeded acres
            during the growing season using super-resolved Sentinel-2 imagery at
            1m per pixel resolution. With RGB + NIR 4-band technology, we
            provide the most up-to-date data, delivered through our API or as
            Shape, KML, or GeoJSON files. This data is essential for in-season
            analysis and planning.
          </p>
        </div>

        <div className="">
          <h2 className="greentitle text-center">
            Schedule a Tour with Our Experts
          </h2>
          <div className="timeline-in">
                <ul className="text">
                  <span className="hr-line"></span>
                  <li className="one">
                    <h3>8+ Years of Historical Data</h3>
                    {/* <div className="dote">
                      <div></div>
                    </div> */}
                    <p>We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.</p>
                  </li>

                  <li className="one">
                    <h3>0.95 IoU Score</h3>
                    {/* <div className="dote">
                      <div></div>
                    </div> */}
                    <p>Our Field Delineation Model boasts an Intersection over Union (IoU) accuracy score of 0.94-0.96, ensuring highly reliable field boundary data.</p>
                  </li>

                  <li className="one">
                    <h3>200M+ Hectares</h3>
                    {/* <div className="dote">
                      <div></div>
                    </div> */}
                    <p>We have delineated over 200 million hectares of agricultural fields and seeded acres using Sentinel-2 imagery at 1m resolution, offering unparalleled accuracy and coverage.</p>
                  </li>

                  <li className="one">
                    <h3>4 Query Types</h3>
                    {/* <div className="dote">
                      <div></div>
                    </div> */}
                    <p>We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.</p>
                  </li>
                </ul>
              </div>
              </div>


        </div>
      </div>
      <div className="overview-outer1">
        <section>
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <h1>Field Boundary Data Delivery</h1>
            <p>
            We deliver field boundary data via API, complete with detailed documentation for easy integration. Field boundaries are provided as GeoJSON for a given point, bounding box (bbox), or field ID. You can obtain a field ID from a low-resolution API endpoint, which allows you to display low-resolution polygons for users to select fields and then receive high-resolution boundary data.
            </p>
            <p>
            Our API offers multiple endpoints for agricultural solutions:
            </p>
            <ul>
              <li><p>●	<b>Data Availability:</b> For a specific bounding box (bbox).</p></li>
              <li><p>●	<b>Low-Resolution Boundaries:</b> Automatically delineated for a given bbox or as MVT vector tiles for selection purposes</p></li>
              <li><p>●	<b>High-Resolution Boundaries:</b> Automatically delineated for a given bbox, point, or field ID.</p></li>
              <li><p>●	<b>Deep Resolution:</b> Enhanced Sentinel-2 imagery, improving the resolution from 10m to 1m using our proprietary technology.</p></li>
            </ul>
            <h2>Explore Field Boundaries</h2>
            <p>Discover 25+ regions with thousands of field boundaries already mapped, and request coverage for your area of interest if it's not listed.</p>
          </div>
        </section>
      </div>


     
      <div className="farmoB4">
        <div className="container-fluid">
         <div className="row">
            <div className="col-lg-7">
              <div className="farmin">
            <p className="demo">Check Demo Regions</p>
          <h2 className="greentitle mb-5 my-3">Why Accurate Field Boundaries Matter</h2>
          <p>Accurate field boundary and seeded acreage data benefit the entire agricultural value chain. With over 570 million farmers and growers worldwide, precise boundary data helps improve yields and reduce input costs across the industry.</p>
          <div className="row">
          <div className="col-lg-6">
            <ListCompTitle items={items6} />
            </div>
            <div className="col-lg-6">
            <ListCompTitle items={items7} />
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-5">
              <div className="frmimg">
                <img src={farmbimg} alt="fimg"/>
                </div>
            </div>
           
          </div>
        </div>
  <div className="container">
  <blockquote className="quote-container">
          <h5><b style={{color: 'yellow'}}>Edit, Split, and Merge Boundaries</b></h5>
          <h6 className="para13">As a bonus, Precision Grow offers a user-friendly editor allowing you to modify field boundaries by splitting, 
            merging, or adding/removing sections, providing greater flexibility for farm management.</h6></blockquote>
  </div>
      </div>
      
    </div>
  );
};

export default Farmboundary;
