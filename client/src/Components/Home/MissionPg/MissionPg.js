import React from "react";
import "./MissionPg.css";


const MissionPg = () => {
  return (
    <>
      <section className="outer-mission">
        <div className="container">
          <div className="row d-flex">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="inner-mission d-flex justify-content-center align-items-center position-relative">
                <img src="https://api.ecrop.co/assets/precisiongrow/planet-earth-global.webp" loading="lazy"  width="633" height="650" alt="satellite" className="HomeAbt img-fluid" />
                <div className="in-left-img position-absolute">
                  <img src="https://api.ecrop.co/assets/precisiongrow/leaff.webp" width="250" height="533" loading="lazy" alt="leaf" className="img-fluid" />
                </div>
              </div>
            </div>
         
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="3000">
              <div className="inner-mission-info p-2">
                <p>
                  Precision Grow (A Unit of Tech Visit IT Pvt Ltd) is revolutionizing Agriculture and Industries through its precise satellite monitoring, IoT devices, and AI technologies. Our solutions deliver real-time data, actionable insights, and sustainable practices to empower businesses turn challenges into opportunities for a smarter, greener future. Join with us for the future of farming - smarter, efficient, and sustainable!!
                </p>
              </div>
              
              <div className="miss-vis">
                <div className="card1">
                  <ul className="card-ul-li">
                    <li>
                      <div className="p-1 cardd">
                        <div className="card-body">
                          <h5>Our Vision</h5>
                          <p>Precision Grow aims to transforms agriculture by enabling it with technology to increase the yield of crops. Our innovations - eCrop, SkyWatch, and BioSense - drive businesses towards a greener, eco-friendly world where innovation fuels sustainability.</p>
                        </div>
                      </div>
                    </li>
                  </ul>    
                </div>

                <ul>
                  <li>
                    <div className="card p-1 miss-card-li">
                      <div className="card-body">
                        <h5>Our Mission</h5>
                        <p>Transforming agriculture with AI-powered insights and smart machinery to boost yields and sustainability. Our ESG Consulting leads global sustainability initiatives, while pollution monitoring aids industries in reducing carbon footprints for a greener future.</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="card p-1">
                      <div className="card-body">
                        <h5>Our Goal</h5>
                        <p>At Precision Grow, we empower farmers with data-driven insights, eliminating guesswork and optimizing resources to increase yields. We’re transforming farming with technology, creating a smarter, more efficient future for agriculture.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="esg position-relative" data-aos="fade-up" data-aos-duration="2000">
        <img src="https://api.ecrop.co/assets/precisiongrow/esg-section.webp" alt="esg" width="3520" height="614" className='img-fluid' loading="lazy" />
        <a href='https://esgconsultants.co.in/' target="_blank" rel="noopener noreferrer nofollow">
          <button className="btn btn-primary">ESG CONSULTANTS</button>
        </a>
      </div>
    </>
  );
};

export default MissionPg;
