import React from "react";
import "./MissionPg.css";


const MissionPg = () => {
  return (
    <>
      <section className="outer-mission">
        <div className="row align-items-center mission-layout">
  {/* LEFT SIDE IMAGE with LEAF OVERLAY */}
  <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
    <div className="position-relative">
      <img
        src="https://api.ecrop.co/assets/precisiongrow/planet-earth-global.webp"
        alt="planet"
        width="633"
        height="650"
        className="img-fluid"
        loading="lazy"

      />
      <img
        src="https://api.ecrop.co/assets/precisiongrow/leaff.webp"
        alt="leaf"
        className="img-fluid leaf-overlay"
        loading="lazy"
        width="250"
        height="533"
      />
    </div>
  </div>

  {/* RIGHT SIDE – ZIG-ZAG CARDS */}
  <div className="col-lg-6 col-12">
    <div className="d-flex flex-column gap-4">
      {/* CARD 2 – right aligned */}
      <div className="card p-3 ms-auto w-75">
        <div className="card-body">
          <h4>Our Mission</h4>
          <p>
            Transforming agriculture with AI-powered insights and smart machinery to boost yields and sustainability.
            Our ESG Consulting leads global sustainability initiatives, while pollution monitoring aids industries in reducing carbon footprints for a greener future.
          </p>
        </div>
      </div>

      {/* CARD 1 – left aligned */}
      <div className="card p-3 me-auto w-75 card111 absolute">
        <div className="card-body">
          <h4>Our Vision</h4>
          <p>
            Precision Grow aims to transform agriculture by enabling it with technology to increase crop yield.
            Our innovations — eCrop, SkyWatch, and BioSense — create a greener, eco-friendly world powered by innovation.
          </p>
        </div>
      </div>

      {/* CARD 3 – right aligned */}
      <div className="card p-3 ms-auto w-75">
        <div className="card-body">
          <h4>Our Goal</h4>
          <p>
            We empower farmers with data-driven insights, eliminating guesswork and optimizing resources for higher yields.
            We're building a smarter, more efficient future in agriculture.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

 

    </>
  );
};

export default MissionPg;
