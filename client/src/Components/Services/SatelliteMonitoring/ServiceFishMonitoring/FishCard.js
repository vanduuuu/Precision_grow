import React from "react";
import "./FishCard.css";


const FishCard = () => {
  // Mock API data
  const fishcard_api = [
    {
      id: 1,
      title: "Automatic Identification System (AIS)",
      description:
        "This data is captured by ground stations and satellites, enabling continuous tracking of vessels even in the most remote oceanic regions.",
      imageSrc: "https://api.ecrop.co/assets/precisiongrow/automatic-identification-system.webp",
      
    },
    {
      id: 2,
      title: "Vessel Monitoring System (VMS)",
      description:
        "Our Vessel Monitoring System (VMS) operates akin to AIS (Automatic Identification System), with a primary focus on regulatory oversight by government bodies and fisheries authorities.",
      imageSrc: "https://api.ecrop.co/assets/precisiongrow/vv_april2024.webp",
      
    },
    {
      id: 3,
      title: "Satellite Imagery Integration",
      description:
        "Tracking commercial fishing activity is vital, yet relying solely on AIS and VMS may overlook a substantial portion of global fishing operations.",
      imageSrc:  "https://api.ecrop.co/assets/precisiongrow/satellite-imagery-integration.webp",
     
    },
  ];

  return (
    <div className="container" data-aos="fade-up" data-aos-duration="3000"> {/* Add container to wrap the grid */}
      <div className="row justify-content-center d-flex align-items-start" >
        {/* Properly map over fishcard_api array */}
        {fishcard_api.map((cardd) => (
          <div key={cardd.id} className="col-lg-4 col-md-6 mb-3"> {/* mb-4 to add spacing */}
            <div className="card fishcardhere p-2 shadow">
              <img
                src={cardd.imageSrc}
                className="card-img-tops "
                loading="lazy"
                alt={cardd.title}
              />
              <div className="card-body">
                <h4 className="card-title1 fw-bold ">{cardd.title}</h4>
                <p className="card-text1">{cardd.description}</p>
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishCard;
