import React from "react";
import "./Ecoloo.css";
import Titletag from "../../Titletag/Titletag";

import Headbanner from '../../../assets/ecolo-bg.jpg'
import NameBanner from '../../../assets/hero_44.webp'
import Circle from '../../../assets/eco-1.png'
import Circle1 from '../../../assets/eco-2.png'
import Circle2 from '../../../assets/eco-3.png'
import Circle3 from '../../../assets/eco-4.png'
import Circle4 from '../../../assets/eco-5.png'
import toilet1 from '../../../assets/ecolo-1.webp'
import toilet2 from '../../../assets/ecolo-3.webp'
import toilet3 from '../../../assets/toilet.jpg'
import icon1 from '../../../assets/save-energy.png'
import icon2 from '../../../assets/sandclock.png'
import icon3 from '../../../assets/carbon.png'



const Ecoloo = () => {
  const ecolocard = [
    {
      id: 1,
      title: "Water and Energy Saving",
      imgg:icon1,
      det: " 1. Reduction of  water  consumption  on  the flushing . ",
      det1: "2. Reduction of energy used to treat and pump water and wastewater, and to produce more chemical fertilizer.",
    },
    {
      id: 2,
      title: "Passive Income thru Fertiliser",
      imgg:icon2,
      det: "A self-sustained technology that generates passive income to the end users from the liquid fertilizer collected, saves money and creates better, healthier and greener environment for its users.",
    },
    {
      id: 3,
      title: "Carbon Emission Footprint Reduction",
      imgg:icon3,
      det: "The carbon emission is caused by sewage treatment and sewage treatment plants, usage of chemical fertilizer, energy used to treat and pump water and wastewater, pollution caused by chemical fertilizer.",
    },
  ];
  return (
    <>
      <div className="container-fixed">
        <div className="ecoloo-outer">
          <img src={Headbanner} alt="ecoloo banner" />
        </div>
        <div className="abt-outer">
          <section>
            <div className="container">
              <Titletag
                title="A Revolutionary Waste Management Technology"
                bgImage={NameBanner}
                className="pt-5"
              />
              <p className="txt1">
                <span>Precision Grow</span> Solutions are based on the
                principles of simplicity, scalability, environmental
                responsibility and economic viability. ECOLOO is odour-free,
                water-free (water can still be used for hygiene purposes),
                sewage-free, energy-free and hassle-free, easy to install and
                maintain, can be used permanently or temporarily. It employs
                special formulated bacterial culture to treat and vanish human
                waste and transform the urine into natural liquid fertilizer.
                ECOLOO provides a sustainable sanitation solution that is
                totally enclosed (preventing pollution and environmental
                contamination), waterless (preventing sewage generation and
                water contamination).
              </p>
            </div>
          </section>
          <div className="ecoloo-card">
            <div className="container pt-5 pb-5">
              {" "}
              <div className="row justify-content-center align-items-start">
                {ecolocard.map((card) => (
                  <div className="col-lg-4 mb-4">
                    <div className="card1 card-hover">
                      <div className="card-front">
                        <div className="card-body d-flex align-items-center">
                          <div className="row">
                            <div className="col-lg-3">
                              <img
                                src={card.imgg}
                                alt="Water and Energy Saving"
                              />
                            </div>
                            <div className="col-lg-9">
                              <h6 className="card-text">{card.title}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="card-body">
                          {card.det}
                          {card.det1}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div class="ecoloo-container">
            <div class="top-right-text">
              <h1>Our Solution</h1>
              <p>
                ECOLOO is a stand alone, decentralized toilet solution that is
                made ofa 2-tier box: The upper box is where the pee, poo and
                good bacteria go to and where an organic filter is placed. The
                lower box is where the treated pee or water drop at the end of
                the whole process after going through the nitrification process
                and transformed into natural fertilizer. Our fertilizer is full
                of nutrition, odour free, pathogen free, safe to use and perfect
                for agriculture. ECOLOO comes in various shapes and designs to
                fit all purposes in all climate conditions, indoor or outdoor,
                anywhere!
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <div className="timeline-outer">
            <section>
              <div class="container-fixed mt-5">
                <div class="timeline">
                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src={Circle} alt="" />
                    </div>
                    <div class="timeline-content">
                      <h4>Eco-Friendly</h4>
                      <p>
                        We care deeply about our planet. Our toilets are
                        designed to minimize environmental impact, reducing your
                        carbon footprint and helping to combat climate change.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item right">
                    <div class="circle-img">
                      <img src={Circle1} alt="" />
                    </div>
                    <div class="timeline-content">
                      <h4>Odour-Free</h4>
                      <p>
                        No more unpleasant smells! Our advanced odor control
                        systems ensure a fresh and pleasant environment, even in
                        high-traffic areas.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src={Circle2} alt="" />
                    </div>
                    <div class="timeline-content">
                      <h4>Water-Free</h4>
                      <p>
                        Say goodbye to excessive water consumption! Our
                        cutting-edge technology eliminates the need for water,
                        making ECOLOO the perfect solution for water-scarce
                        regions and water conservation advocates
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item right">
                    <div class="circle-img">
                      <img src={Circle3} alt="" />
                    </div>
                    <div class="timeline-content">
                      <h4>Sewage-Free</h4>
                      <p>
                        We've eliminated the need for sewage systems, making
                        ECOLOO ideal for remote locations, disaster-stricken
                        areas, and places lacking proper infrastructure.
                      </p>
                    </div>
                  </div>

                  <div class="timeline-item left">
                    <div class="circle-img">
                      <img src={Circle4} alt="" />
                    </div>
                    <div class="timeline-content">
                      <h4>Energy-Free</h4>
                      <p>
                        ECOLOO operates efficiently without relying on external
                        energy sources. It's a sustainable choice that reduces
                        your energy bills and dependency on fossil fuels.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* -------------------------------------------------- */}

          <div className="navtabs-outer">
            <section>
              <div class="container">
                <div class="single-product-bottom-info">
                  <div class="row">
                    <div class="col-lg-12 navtabshere1">
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          class="nav-link active"
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
                          class="nav-link"
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
                          class="nav-link"
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
                          <div class="row">
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
                              <div class="tab-img">
                                <img src={toilet1} alt="Image Not Found" />
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
                              <div class="tab-img">
                                <img src={toilet2} alt="toiletimg"/>
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
                              <div class="tab-img">
                              <img src={toilet3} alt="Image Not Found" />

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
    </>
  );
};

export default Ecoloo;
