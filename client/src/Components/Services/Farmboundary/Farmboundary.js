import React from "react";
import "./Farmboundary.css";
import { Helmet } from "react-helmet-async";
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";
import Featurecard from "../../Reusablecomp/Featurecard/Featurecard.js";
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import Arrowcard from "../../Reusablecomp/Arrowcard/Arrowcard.js";
import CardBorderGrid from "../../Reusablecomp/CardBorderGrid/CardBorderGrid.js";
import f1 from '../../../assets/icons_About/f1.webp'
import f2 from '../../../assets/icons_About/f2.webp'
import f3 from '../../../assets/icons_About/f3.webp'
const Farmboundary = () => {

const tourData = [
  {
    title: "8+ Years of Historical Data",
    description:
      "We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.",
  },
  {
    title: "0.95 IoU Score",
    description:
      "Our Field Delineation Model boasts an Intersection over Union (IoU) accuracy score of 0.94-0.96, ensuring highly reliable field boundary data.",
  },
  {
    title: "200M+ Hectares",
    description:
      "We have delineated over 200 million hectares of agricultural fields and seeded acres using Sentinel-2 imagery at 1m resolution, offering unparalleled accuracy and coverage.",
  },
  {
    title: "4 Query Types",
    description:
      "We offer historical field data dating back to 2015, along with in-season data including seeded acres, providing valuable insights for long-term planning and analysis.",
  },
];

  const boundarydata = [
    {
      title: "Data Availability",
      content:
        "Get data for a specific bounding box (bbox) based on the needs.",
    },
    {
      title: "Low-Resolution Boundaries",
      content:
        "Automatically generate boundaries for a given bbox or select MVT files.",
    },
    {
      title: "High-Resolution Boundaries",
      content:
        "Automatically generate boundaries for a bbox or field ID, with higher accuracy.",
    },
    {
      title: "Deep Resolution",
      content:
        "Using our proprietary technology, we enhance Sentinel-2 imagery to improve resolution from 10m to 1m, giving more detailed insights",
    },
  ];

  const features = [
    {
      title: "Accurate Boundary Mapping",
      description:
        "Using satellite imagery, we provide precise farm boundary data that makes land management easier and more accurate.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Easy Integration",
      description:
        "The boundary data we provide seamlessly integrates with your existing farm management software and tools.",
      aos: "fade-down",
      duration: "2000",
    },
    {
      title: "Customizable for Any Scale",
      description:
        "Our solutions are flexible and tailored to farmers' specific needs, fitting their unique land dimensions.",
      aos: "fade-right",
      duration: "2000",
    },
    {
      title: "Compliance and Documentation",
      description:
        "We help you stay compliant with local regulations, ensuring smooth legal processes and proper ownership records.",
      aos: "fade-left",
      duration: "1000",
    },
  ];

  const global = [
    {
      title: "Affordable and Predictable Pricing",
      description:
        "We offer a flexible pricing model based on the number of data requests, making it easy to scale with your needs while keeping costs manageable.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "API-Ready and Easy to Integrate",
      description:
        "Our services come with seamless API integration and clear documentation, so you can easily incorporate them into your current systems.",
      aos: "fade-down",
      duration: "2000",
    },
    {
      title: "Exceptional Accuracy",
      description:
        "Our data is 15% more accurate than what’s currently available on the market, making us the trusted choice for precision farming",
      aos: "fade-right",
      duration: "2000",
    },
  ];

  const farmBFaq = [
    {
      title: "What is farm boundary mapping?",
      content:
        "Farm boundary mapping uses satellite imagery to provide precise land boundary data for accurate land management.",
      isOpenInitially: false,
    },

    {
      title: "Can the solution be customized for different farm sizes?",
      content:
        "Yes, our solutions are flexible and tailored to fit farms of any scale or unique land dimensions.",
      isOpenInitially: false,
    },

    {
      title: "What are the benefits of accurate boundary mapping?",
      content:
        "It increases efficiency, reduces costs, and supports sustainable farming practices.",
      isOpenInitially: false,
    },

    {
      title: "What tools are needed to use this service?",
      content:
        "No additional tools are needed; our data integrates with your existing farm management systems.",
      isOpenInitially: false,
    },

    {
      title: "How does farm boundary data integrate with my tools?",
      content:
        "Our boundary data seamlessly integrates with your existing farm management software and tools.",
      isOpenInitially: false,
    },
  ];
  const Boundaries=[
    {
      title: "Wholesale and Retail Market",
      description:
        "Grain buyers, food processors, and carbon credit organizations rely on precise boundary data for sustainable land mapping and responsible sourcing.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Processing and Storage",
      description:
        "Grain traders, mills, and logistics networks use up-to-date field boundaries and seeded acreage data to predict grain inventories and manage supply effectively.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Pre-Production",
      description:
        "Companies in herbicides, pesticides, and plant breeding rely on accurate field boundaries to support Variable Rate Technology (VRT) applications, ensuring better precision in their processes.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Autonomy and Robotics",
      description:
        "Autonomous farming machinery needs accurate field boundaries to operate reliably, providing a more scalable and cost-effective alternative to expensive RTK systems.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Distribution and Logistics",
      description:
        "Farm management system (FMS) providers look for scalable solutions and seek to avoid the time-consuming process of manually digitizing field boundaries.",
      aos: "fade-up",
      duration: "1000",
    },
    {
      title: "Crop Insurance and Subsidies",
      description:
        "Crop insurers and national agencies face high costs and lengthy processes for manual field inspections, which can be streamlined with accurate boundary data.",
      aos: "fade-up",
      duration: "1000",
    },
  ]
  return (
    <>
      <Helmet>
        <title>
          Farm Boundary Solutions | Smart Farming with Precision Grow
        </title>
        <meta
          name="description"
          content="Explore Precision Grow’s smart farm boundary solutions to boost productivity, support sustainability, and modernize your agricultural practices today."
        />
        <meta
          name="keywords"
          content="farm boundary mapping, satellite farm mapping, digital farm layout"
        />
        <link rel="canonical" href="https://precisiongrow.co.in/farm-boundary" />
      </Helmet>
      {/* -----------------------------------------------banner section farmboundary-------------------------------------------------------------------------------------*/}

      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Farm Boundary.webp"
        heading="Farm Boundary"
        subheading="Smart Boundaries for Smart Agriculture"
      />

      <div className="container">
        <section>
          <p className="text-center fs-5 fw-bold">
            Our satellite technology is built to help farmers and businesses
            increase their results. It helps define farm boundaries, making land
            use more efficient and productivity.
          </p>
        </section>
        <Titleunderline title="Key Features"  tag="h1"/>
        <div className="row">
          <div className="col-lg-8">
            <div className="features-container1 d-flex flex-wrap justify-content-center p-4">
              {features.map((item, index) => (
                <Featurecard key={item.title} {...item} customClass="card-height1" />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <Titleunderline title="Benefits"  tag="h3"/>

            <div className="my-3">
              <img
                src="https://api.ecrop.co/assets/precisiongrow/Farm Boundary3.webp"
                alt="Efficiency"
                className="benefit-icon img-fluid my-2"
                loading="lazy"
                width="100"
                height="100"
              />
              <div className="benefit-text">
                <p>
                  <strong>Increased Efficiency</strong>&nbsp;Better planning for
                  planting, irrigation, and resource management saves time and
                  effort.
                </p>
              </div>
            </div>

            <div className="my-3">
              <img
                src="https://api.ecrop.co/assets/precisiongrow/Farm Boundary4.webp"
                alt="Cost Effective"
                className="benefit-icon img-fluid my-2"
                loading="lazy"
                width="100"
                height="100"
              />
              <div className="benefit-text">
                <p>
                  <strong>Cost-Effective Solutions</strong>&nbsp;Technology
                  makes farming more precise, reducing unnecessary costs.
                </p>
              </div>
            </div>

            <div className="my-3">
              <img
                src="https://api.ecrop.co/assets/precisiongrow/Farm Boundary5.webp"
                alt="Sustainability"
                className="benefit-icon img-fluid my-2"
                loading="lazy"
                width="100"
                height="100"
              />
              <div className="benefit-text">
                <p>
                  <strong>Sustainability</strong>&nbsp;Optimize land use and
                  embrace sustainable practices for the environment and
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section>
          <p className="text-white txt fs-3">
            Take charge of your land and unlock its full potential to drive
            greater success in your farming efforts.
          </p>
        </section>
        {/* ---------------------------------------------------global coverage------------------------------------------------------------------ */}
        <Titleunderline title="Global Coverage"  tag="h2"/>
        <p className="text-center fs-5">
          Proud to expand to new regions, including France, Spain, Brazil, USA,
          Australia, Germany, and many more. Currently, we’re operating in over
          30 countries and have exciting plans for even more global expansion.
        </p>
        <section className="position-relative">
          <img
            src="https://api.ecrop.co/assets/precisiongrow/green-world-1.webp"
            alt="map"
            className="img-fluid w-100 d-block"
            loading="lazy"
            width="1385"
                height="733"
          />

          <div
            className="position-lg-absolute start-lg-50 translate-middle-x-lg"
            style={{ bottom: "-75px", zIndex: 2 }}
          >
            <div className="row justify-content-center">
              {global.map((item, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <Featurecard
                  key={item.title}
                    title={item.title}
                    description={item.description}
                    aos={item.aos}
                    duration={item.duration}
                    customClass="card-height2"
                    bgColor="#357f82"
                    descColor="white"
                    titleColor="white"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ----------------------------------------------------------model work--------------------------------------------------------- */}
        <Titleunderline title="How The Field Delineation Modal Works"  tag="h5"/>

        
              <p className="text-center fs-5 mb-5">
                We accurately delineate field boundaries and measure seeded
                acres during the growing season using super-resolved Sentinel-2
                imagery at 1m per pixel resolution. With RGB + NIR 4-band
                technology, we provide the most up-to-date data, delivered
                through our API or as Shape, KML, or GeoJSON files. This data is
                essential for in-season analysis and planning.
              </p>
        
        {/* -------------------------------------------------------SCHEDULE A TOUR WITH US--------------------------------------------------------- */}
        <div className="overview-outers">
          <Titleunderline title="Schedule a Tour With Us"  tag="h4"/>

          <div className="tour row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
  {tourData.map((item, index) => (
    <div className="col1" key={item.title}>
      <Arrowcard
        title={item.title}
        description={item.description}
        isFirst={index === 0}
        isLast={index === tourData.length - 1}
      />
    </div>  
  ))}
</div>

         
        </div>
        {/* -----------------------------------------------------------Field boundary data delivery--------------------------------------------------------------*/}
        <div className="outer3">
          <section>
            <div
              className="datadelivery p-2 p-lg-5 aos-init aos-animate"
              data-aos="fade-up"
            >
            
              <Titleunderline title="Our Sustainability Mission" tag="h2" titleClass="green-title" />


              <p>
                We provide detailed field boundary data through our API,
                including everything farmers need. They’ll receive field
                boundaries in GeoJSON format, whether it's for a specific point,
                a bounding box (bbox), or a field ID. Start with low-resolution
                data to select the fields, then easily access high-resolution
                data for deeper insights.
              </p>
            
              <Titleunderline title="Our API provides several endpoints for easy access" tag="h2" titleClass="green-title" />

               <div className=" m-auto">
                   
                        
                        <CardBorderGrid
  cardinfo={boundarydata}
  colsLg={4}
  titleClass="custom-title-white"
  textClass="subhead-white"
/>
                      </div>
              <div className="boundaries py-1 mt-3">
               
              <Titleunderline title="Explore Field Boundaries" tag="h3" />

                <p className="fs-5 fw-bold">
                  Explore over 25 regions with thousands of pre-mapped field
                  boundaries, and easily request coverage for the area of
                  interest.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Titleunderline title="Why Accurate Field Boundaries Matter" tag="h2" />
        <p className="text-center fs-5" >
        With more than 570 million farmers and growers around the world, accurate field boundaries and data play a key role in benefiting the entire agricultural supply chain. By providing precise boundary data, we help reduce input costs and improve efficiency across the industry.
      </p>
  <div className="row pt-5">
    <div className="col-lg-3 position-relative image-stack-container">
      <div className="image-wrapper">
        <img src={f2} alt="farm-whole-sale" className="img-fluid img-stacked" loading="lazy" width="100"
                height="100"/>
      </div>
      <div className="image-wrapper image-middle">
        <img src={f3} alt="farm-pre-production" className="img-fluid img-stacked" loading="lazy"/>
      </div>
      <div className="image-wrapper">
        <img src={f1} alt="farm-insurance" className="img-fluid img-stacked" loading="lazy"/>
      </div>
    </div>
    <div className="col-lg-8 offset-lg-1">
  <div className="row">
    {Boundaries.map((item, index) => (
      <div className="col-md-6 col-12 mb-4" key={index}>
        <Featurecard
          title={item.title}
          description={item.description}
          aos={item.aos}
          duration={item.duration}
          customClass="card-height2"
          bgColor="#f5ffdc"
          descColor="black"
          titleColor="#00695c"
        />
      </div>
    ))}
  </div>
</div>

  </div>
  <div className="boundaries p-3 text-white text-center">
      <Titleunderline title="Edit, Split, and Merge Boundaries"  tag="h2"/>

      <p className="fs-5">We also offer an easy-to-use editor that lets you modify field boundaries by splitting, merging, or adding/removing sections. This gives you more flexibility to manage your farm just the way you need it.</p>
    </div>

        <FaqSection data={farmBFaq} variant="lightblue" />;
      </div>
    </>
  );
};

export default Farmboundary;
