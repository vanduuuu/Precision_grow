import React from "react";
import Banner from "../../Banner/Banner";
import Titletag from "../../Titletag/Titletag";
import "./Ecrop.css";
import ListComponent from "../../ListComponent/ListComponent";
import ListCompTitle from "../../ListComponent/ListCompTitle";
import ecrop from '../../../assets/ecrop.mp4'
import HeadBanner from '../../../assets/aerial-drone.webp'
import NameBanner from '../../../assets/hero_44.webp'


const Ecrop = () => {
    const items2 = [
      {
        detail:
        "Forecasting of yield of the crop can be done more accurately at local, regional and national level.",
      },
      {
        detail:
        "The forecasts sent by the e-crop devices installed in different places to the centralized database can be pooled and a national / state / regional level crop yield / status can be obtained by just compiling that information at the desired level for different times in future.",
      },  
      {
        detail:
        "Device gives information to the farmer in the form of SMS about what is happening to the crop even if he is far away from field.",
      },    
    ]
  const items1 = [
    {
      title: "Step 1 : Device Owner",
      detail:
        "Adds new farmers for the e-Crop device coming under his purview. Then set up a new simulation for these farmers for their scenarios of crops, soils, varieties, devices etc which were already added by the Admin.",
    },
    {
      title: "Step 2 : Creation of SimulationID",
      detail:
        "When a new simulation is setup for the crop, variety, location, date of planting, e-Crop device, cultivated area and farmer, a unique SimulationID is created, which can be used later for executing the simulation in a single step. For each simulation, unique simulationID is created .",
    },
    {
      title: "Step 3 : Input management",
      detail:
        "In this section the user can add the information regarding the water, N,P and K which were available in soil at the time of planting as well as that added during planting and at later stages.",
    },
    {
      title: "Step 4 : Results of Simulation",
      detail:
        "Each day the crop growth is simulated using the web interface/mobile app using this simulationID. The advisory generated from the simulation is sent to the mobile of the farmer as well as to other mobile numbers included while creating the simulationID.",
    },
  ];
  const listItems7 = ["Soil moisture", "Temperature", "Humidity"];
  const listItems8 = ["Ambient Temperature", "Light intensity", "Rainfall"];

  const breadcrumbItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "e-Crop (Smart Farming With Electronic Crop)" },
  ];

  const paragraphStyle = {
    color: 'white',
  };
  return (
    <div>
      <Banner
        title="e-Crop (Smart Farming With Electronic Crop)"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className="abt-outer">
        <section>
          <div className="container">
            <Titletag
              title="e-Crop (Smart Farming With Electronic Crop)"
              bgImage={NameBanner}
              className="pt-5"
            />
            <p className="txt1">
              <span>Precision Grow</span> Advances Smart Farming with e-Crop
              Technology in Collaboration with ICAR Precision Grow (a unit of
              Tech Visit IT Pvt Ltd) has taken a significant step forward in
              advancing smart farming technology by collaborating with the
              Indian Council of Agricultural Research (ICAR). On June 5th, 2024,
              coinciding with World Environment Day, Precision Grow signed a
              contract for the manufacturing and marketing of the innovative
              e-Crop technology. This agricultural solution combines advanced
              technology with sustainable practices to optimize crop production
              while minimizing environmental impact.
            </p>
          </div>
        </section>
      </div>
      <div className="ecrop-outer2">
        <section>
          <div className="container">
            <h1>Addressing Food Security</h1>
            <p>
              Current food production levels are insufficient to achieve zero
              hunger, particularly in third-world countries where the demand for
              food is rising due to an ever-increasing population. With
              cultivable land shrinking, the only viable solution is to achieve
              higher productivity from the existing genetic stock. Precision
              agriculture, which focuses on attending to individual crops and
              applying the exact required inputs, increases production and
              minimizes environmental loss. The gap between potential and actual
              yield is often wide, and closing this gap is crucial to meet
              future food requirements. Smart farming technology, which
              integrates information technology with agriculture, is the best
              strategy to reduce this gap.
            </p>
          </div>
        </section>
      </div>
      <div className="ecrop-outer3">
        <div className="shapehere"></div>
        <video autoPlay muted loop className="bg-video">
          <source src={ecrop} type="video/mp4" />
          {/* <source src={bgvideo} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        <section className="content-overlay">
          <h1>e-Crop an Overview</h1>
          <p>
            Developed and patented by ICAR-CTCRI, the e-Crop is an IoT device
            designed for smart farming by simulating crop growth in real-time.
            This weatherproof electronic device works in any terrain and under
            various climatic conditions. The main control unit of the device is
            connected to sensors that collect various soil and weather
            parameters. The data collected by e-Crop includes :
          </p>
          <div className="row text-start">
            <div className="col-lg-6 col-md-6 col-6">
              <ListComponent items={listItems7} />
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <ListComponent items={listItems8} />
            </div>
          </div>
          <p>
            The microcontroller inside the control unit coordinates the clock,
            initiates the internet connection, and collects data from different
            sensors. A web interface is used for managing smart farming using
            e-Crop, allowing users to add crops, fertilizers, soil types,
            locations, and more.
          </p>
        </section>
      </div>
      <div className="navtabsouter">
        <section>
          <div className="container">
            <h1>e-Crop Interface</h1>
            <p>
              The e-Crop web interface facilitates farm management and can also
              be operated through the "Krishi Krithya" mobile app. Different
              types of users are assigned rights to manage e-Crop, providing a
              comprehensive platform for farm management.
            </p>
          </div>
          <div class="col-md-8 mx-auto offset-md-2 mt-5 navtabshere1">
            <div class="row">
              <div class="col-lg-10 mx-auto">
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
                    Real-Time Agro Advisory
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
                    Applications of e-Crop
                  </button>
                </div>

                <div class="tab-content tab-content-info" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="description-tab"
                    role="tabpanel"
                    aria-labelledby="description-tab-control"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <h5 class="px-3 mb-1">
                          <b>
                            e-Crop provides real-time agro advisory services,
                            including:
                          </b>
                        </h5>
                        <ul>
                          <li>
                            <i class="fa-solid fa-check"></i> Date of planting
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> Cultivated area
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> Variety and
                            location of the field (latitude &amp; longitude)
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> Potential yield
                            achieved as of date
                          </li>
                        </ul>
                        <h5 class="px-3 mt-5 mb-1">
                          <b>
                            The advisory part of the SMS includes water and
                            fertilizer requirements, specifying:
                          </b>
                        </h5>
                        <ul>
                          <li>
                            <i class="fa-solid fa-check"></i> Daily, weekly, and
                            total crop duration water requirements
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> Required amounts
                            of Nitrogen, Phosphorous, and Potassium for the day,
                            week, and total crop duration This real-time
                            advisory helps reduce yield gaps and achieve
                            targeted yields by applying fertilizers as per
                            demand in smaller, frequent doses, reducing losses,
                            and increasing yields.
                          </li>
                        </ul>
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
                      <div class="col-lg-12">
                        <ul className="p-0 m-0">
                          <li>
                            <i class="fa-solid fa-check"></i> Accurate
                            forecasting of crop yield at local, regional, and
                            national levels
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> Centralized
                            database pooling of forecasts from different
                            locations for comprehensive crop yield/status
                            reports
                          </li>
                          <li>
                            <i class="fa-solid fa-check"></i> SMS notifications
                            to farmers about crop conditions, even when they are
                            away from the field Precision Grow's collaboration
                            with ICAR and the introduction of e-Crop technology
                            marks a significant milestone in smart farming,
                            aiming to improve crop production efficiency and
                            sustainability, thereby contributing to global food
                            security.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="ecp4">
      <div className="shapehere"></div>
        <section>
            <div className="container-fluid">
                <div className="col-lg-4">
                    <h1>Applications Of
                    The Device</h1>
                 <ListCompTitle
                 items={items2}
                 pStyle={paragraphStyle} // Pass paragraph styles here
               />
 

                </div>
            </div>
         </section>
      </div>
      <div className="ecropouter4 text-white">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="mb-5">Management of Farm Using e-Crop</h1>
                <ListCompTitle items={items1} />
                <p className="px-2">
                  Results of execution of simulation reach the farmer’s mobile
                  through SMS. Fig 6 shows the view of SMS (Crop advisory
                  generated by e-Crop) on 10th June 2022.
                </p>
                <p className="px-2">
                  This SMS includes date of planting, cultivated area, variety,
                  location of field which includes latitude & longitude,
                  potential yield achieved as on date in Tones. The advisory
                  part of the SMS includes water and fertilizer requirements. It
                  specifies the water requirement (Liters) for that day, next
                  one week and for the remaining crop duration in one dose. The
                  fertilizer advisory include the required amount (kg) of
                  Nitrogen, Phosphorous and Potassium to be applied on that day,
                  next one week and for the remaining total crop duration in one
                  dose. This device can be used for giving real-time agro
                  advisory of any crop to reduce yield gap and to achieve
                  targeted yield. This helps in the application of fertilizers
                  as per demand and in smaller and frequent doses which helps in
                  reducing the losses and at the same time increasing the yield.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ecrop;
