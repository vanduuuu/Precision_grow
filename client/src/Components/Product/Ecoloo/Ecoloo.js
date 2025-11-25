import React from "react";
import "./Ecoloo.css";
import { Helmet } from 'react-helmet-async';
import FaqSection from "../../Faqcomp/FaqSection.js";
import Banner from "../../Reusablecomp/Banner/Banner.js";
import InfoCardGroup from "../../Reusablecomp/InfoCardGroup.js";
import ecoloo11 from '../../../assets/icons_About/ecoloo-11.png'
const Ecoloo = () => {
   const ecoloodata = [
    {
      id: 1,
      title: "Water and energy saving product",
      text: "Saving water in flushing reduces waste, reduces energy use for treatment and pumping, and reduces the need for chemical fertilizers, making sustainability easier. ",
      img: "https://api.ecrop.co/assets/precisiongrow/save-energy.png",
      bgColor: "linear-gradient(to top, #b8d54f, white)",
    },
    {
      id: 2,
      title: "Passive income through fertilizer",
      text: "A self-sustaining technology that generates passive income for end users from collected liquid fertilizer saves money and creates a better, healthier, and greener environment for its users.",
      img: "https://api.ecrop.co/assets/precisiongrow/sandclock.png",
      bgColor: "linear-gradient(to top, #a2d4ea, white)",
    },
    {
      id: 3,
      title: "Carbon emission footprint reduction ",
      text: "Carbon emission is caused by sewage treatment and sewage treatment plants, usage of chemical fertilizer, energy used to treat and pump water and wastewater, and pollution caused by chemical fertilizer.",
      img: "https://api.ecrop.co/assets/precisiongrow/carbon.webp",
      bgColor: "linear-gradient(to top, #b8d54f, white)",
    }
  ];
  const ecolooFaq = [
    { question: '	What is ECOLOO? ',
       answer: 'ECOLOO is a sustainable, waterless, and energy-free toilet solution that uses special bacteria to treat human waste and transform urine into natural liquid fertilizer. It provides a hygienic, eco-friendly, and efficient alternative to conventional toilets.'},
   
       { question: '	How does ECOLOO work? ',
       answer: 'ECOLOO is made of a two-tier box system. The upper box collects urine and waste, while the lower box stores treated liquid that has gone through a nitrification process, transforming it into odor-free, pathogen-free, and nutrient-rich natural fertilizer.'},
    
       { question: 'Can ECOLOO be used in all climates?',
       answer: 'Yes, ECOLOO comes in various designs and can be used both indoors and outdoors, making it suitable for all climate conditions.'},
      
       { question: "	How does ECOLOO help conserve water?",
        answer:"ECOLOO eliminates the need for water-based flushing, significantly reducing water consumption in areas where water is scarce or for individuals looking to reduce their overall water use."},
    
        { question: "Is the fertilizer produced by ECOLOO safe? ",
          answer:"Yes, the liquid fertilizer produced is pathogen-free, nutrient-rich, and completely safe to use in agricultural applications."}
      ];
 
  return (
    <>
     <Helmet>
        <title>Ecoloo: Sustainable & Eco-Friendly Farming Solutions</title>
        <meta name="description" content="Discover Ecoloo’s smart farming solutions that boost productivity and protect the environment. Embrace sustainable agriculture with Precision Grow’s innovation." />
        <meta name="keywords" content="sustainable toilets for rural areas, ecoloo smart sanitation, eco-friendly loo" />
        <link rel="canonical" href="https://precisiongrow.co.in/ecoloo" />
      </Helmet>
      <div className="container-fixed">
     
        <Banner
          imageSrc="https://api.ecrop.co/assets/precisiongrow/ecoloo.webp"
          heading="ecoloo"
          subheading="Better sustainable sanitation"
        />
        <div className="abt-outer">
          <section>
            <div className="container">
            <h4 className="boldlook"> Transforming Waste into Sustainable Solutions</h4>
              <p className="text-center fs-5">
              ECOLOO is a smart, sustainable solution for farmers. It's odour-free, water-free, sewage-free, and energy-free, easy to install, use, and maintain. It turns waste into valuable liquid fertilizer with zero hassle. It keeps your farm clean, sustainable, and pollution-free. 
              <h4 className="fw-bolder pt-4">ECOLOO IS PERFECT FOR YOUR FARM'S future!</h4>

              </p>
            </div>
          </section>
        <div data-aos="fade-up" data-aos-duration="3000">
          <InfoCardGroup cardData={ecoloodata} />
        </div>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div class="ecoloo-container">
            <div class="top-right-text">
              <h1>Our Solution</h1>
              <p>
              Our innovation is a stand-alone, decentralized toilet solution that is made of a 2-tier box: The upper box is where the pee, poo, and good bacteria go and where an organic filter is placed. The lower box is where the treated pee or water drops at the end of the whole process after going through the nitrification process and is transformed into natural fertilizer. Our fertilizer is full of nutrition, odour-free, pathogen-free, safe to use, and perfect for agriculture. ECOLOO can be used indoors or outdoors, at every temperature, and comes in a variety of shapes and patterns.
              </p>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="timeline-outer">
            <section>
              <div class="container-fixed mt-5">
                <div class="timeline">
                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src="https://api.ecrop.co/assets/precisiongrow/Ecoloo1.webp" loading="lazy" alt="Eco-Friendly" className="img-fluid" height="100" width="100" />
                    </div>
                    <div class="timeline-content">
                      <h6>Eco-Friendly</h6>
                      <p>
                      Our toilets are designed to have as little impact on the environment as possible, helping to fight climate change by reducing carbon emissions.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item right">
                    <div class="circle-img">
                      <img src="https://api.ecrop.co/assets/precisiongrow/Ecoloo2.webp" loading="lazy" alt="Odour-Free" className="img-fluid" height="100" width="100"/>
                    </div>
                    <div class="timeline-content">
                      <h6>Odor Free</h6>
                      <p>
                      Our advanced odour control systems ensure a fresh and pleasant environment, even in high-traffic areas.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src="https://api.ecrop.co/assets/precisiongrow/Ecoloo3.webp" loading="lazy" alt="Water-Free" className="img-fluid" height="100" width="100"/>
                    </div>
                    <div class="timeline-content">
                      <h6>Water Free</h6>
                      <p>
                      Since our cutting-edge technology does not require water, ECOLOO is the ideal answer for areas with limited water supplies.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item right">
                    <div class="circle-img">
                      <img src="https://api.ecrop.co/assets/precisiongrow/Ecoloo4.webp" loading="lazy" alt="Sewage-Free" className="img-fluid" height="100" width="100"/>
                    </div>
                    <div class="timeline-content">
                      <h6>Sewage Free</h6>
                      <p>
                      Our toilet is perfect for isolated areas, disaster-affected areas, and places without adequate infrastructure because we have removed the requirement for sewage systems. 
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src="https://api.ecrop.co/assets/precisiongrow/Ecoloo5.webp" loading="lazy" alt="Energy-Free" className="img-fluid" height="100" width="100"/>
                    </div>
                    <div class="timeline-content">
                      <h6>Energy Free</h6>
                      <p>
                      ECOLOO doesn't need outside energy to function well. It is a sustainable option that reduces your dependence on fossil fuels and your energy costs.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}

          <div className="navtabs-outer">
            <section>
              <div class="container">
                <div class="single-product-bottom-info">
                  <div class="row p-5">
                    <div class="col-lg-12 navtabshere1">
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          class="nav-link active mx-3 text-white btnn bg-success"
                          id="description-tab-control"
                          data-bs-toggle="tab"
                          data-bs-target="#description-tab"
                          type="button"
                          role="tab"
                          aria-controls="description-tab"
                          aria-selected="true"
                         
                        >
                          OUR UNIQUENESS
                        </button>

                        <button
                          class="nav-link mx-3 text-white btn bg-success"
                          id="information-tab-control"
                          data-bs-toggle="tab"
                          data-bs-target="#information-tab"
                          type="button"
                          role="tab"
                          aria-controls="information-tab"
                          aria-selected="false"
                        
                        >
                          UNIQUE BENEFITS
                        </button>

                        <button
                          class="nav-link mx-3 text-white btn bg-success"
                          id="review-tab-control"
                          data-bs-toggle="tab"
                          data-bs-target="#review-tab"
                          type="button"
                          role="tab"
                          aria-controls="review-tab"
                          aria-selected="false"
                          
                        >
                          Environmental Benefits
                        </button>
                      </div>
                      <div
                        class="tab-content tab-content-info"
                        id="myTabContent"
                      >
                        <div
                          class="tab-pane fade active show"
                          id="description-tab"
                          role="tabpanel"
                          aria-labelledby="description-tab-control"
                        >
                          <div class="row align-items-center justify-content-center">
                            <div class="col-lg-7">
                              <ul>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No odour
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Easy to
                                  install, use and maintain
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No eye or
                                  physical contact with poo and pee
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No septic
                                  tank or sewage treatment plant required
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No water
                                  flushing, only for washing or cleaning
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i>{" "}
                                  Ergonomically and comfortably designed
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Temporary or
                                  permanent, long term &amp; non-polluting
                                  solution
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No energy
                                  sources required, only wind or solar or
                                  minimal energy demand
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Best
                                  alternative to flush toilets, sewers and
                                  so-called sewage treatment
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Major cut
                                  ofthe cost of waste handling or transportation
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Functions in
                                  perfect harmony with environment
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Poo and pee
                                  isolated from its disease carrying pathogens
                                  and its medical residues for several decades
                                  without entering the environment using our
                                  special formulated bacteria
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-5">
                              <div class="tab-img mt-5">
                                <img src={ecoloo11} loading="lazy" alt="perfect_harmony_with_environment" className="img-fluid" height="500" width="500"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="information-tab"
                          role="tabpanel"
                          aria-labelledby="information-tab-control"
                        >
                          <div class="row">
                            <div class="col-lg-7">
                              <ul>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Affordable,
                                  beneficial, comfortable, durable, eco friendly
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Value added,
                                  free, natural fertilizer
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Easy to
                                  install, uninstall, move and maintain
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Resilient to
                                  flood and yet safe to human
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Gallons of
                                  water per household is saved
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No sewage
                                  suction required
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> No more
                                  clogging issues
                                </li>
                                <li>
                                  {" "}
                                  <i class="fa-solid fa-check"></i> Provides
                                  business and job opportunities or passive
                                  income
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-5">
                              <div class="tab-img mt-3">
                                <img src="https://api.ecrop.co/assets/precisiongrow/ecolo-3.webp" loading="lazy" alt="toiletimg" className="img-fluid" height="600" width="450"/>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="review-tab"
                          role="tabpanel"
                          aria-labelledby="review-tab-control"
                        >
                          <div class="row">
                            <div class="col-lg-7">
                              <div class="review-form">
                                <ul>
                                  <li>
                                    {" "}
                                    <i class="fa-solid fa-check"></i> Lower
                                    carbon emission footprint
                                  </li>
                                  <li>
                                    {" "}
                                    <i class="fa-solid fa-check"></i> Reduction
                                    of water consumption on flushing
                                  </li>
                                  <li>
                                    {" "}
                                    <i class="fa-solid fa-check"></i> Reduction
                                    of energy used to treat and pump water and
                                    wastewater
                                  </li>
                                  <li>
                                    {" "}
                                    <i class="fa-solid fa-check"></i> Reduction
                                    of usage of chemical fertilizer, leading to
                                    less pollution
                                  </li>
                                  <li>
                                    {" "}
                                    <i class="fa-solid fa-check"></i> Compliance
                                    with Environmental requirements
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-5">
                              <div class="tab-img mt-3">
                              <img src="https://api.ecrop.co/assets/precisiongrow/toilet.webp" loading="lazy" alt="environmental-requirement" className="img-fluid" height="581" width="428"/>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FaqSection  data={ecolooFaq} variant="green" />;

    </>
  );
};

export default Ecoloo;
