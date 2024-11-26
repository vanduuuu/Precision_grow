import React from "react";
import { Link } from "react-router-dom";
import "./FishCard.css";
import Fishcard1 from '../../../../assets/automatic-identification-system.webp'
import Fishcard2 from '../../../../assets/vv_april2024.webp'
import Fishcard3 from '../../../../assets/satellite-imagery-integration.jpg'



const FishCard = () => {
  // Mock API data
  const fishcard_api = [
    {
      id: 1,
      title: "Automatic Identification System (AIS)",
      description:
        "This data is captured by ground stations and satellites, enabling continuous tracking of vessels even in the most remote oceanic regions.",
      imageSrc: Fishcard1,
      link: "/automatic_Identification_System",
    },
    {
      id: 2,
      title: "Vessel Monitoring System (VMS)",
      description:
        "Our Vessel Monitoring System (VMS) operates akin to AIS (Automatic Identification System), with a primary focus on regulatory oversight by government bodies and fisheries authorities.",
      imageSrc: Fishcard2,
      link: "/vessel_monitoring_system",
    },
    {
      id: 3,
      title: "Satellite Imagery Integration",
      description:
        "Tracking commercial fishing activity is vital, yet relying solely on AIS and VMS may overlook a substantial portion of global fishing operations.",
      imageSrc:  Fishcard3,
      link: "/satellite_imagery_integration",
    },
  ];

  return (
    <div className="container"> {/* Add container to wrap the grid */}
      <div className="row">
        {/* Properly map over fishcard_api array */}
        {fishcard_api.map((cardd) => (
          <div key={cardd.id} className="col-lg-4 col-md-6 mb-4"> {/* mb-4 to add spacing */}
            <div className="card fishcardhere p-3 rounded-0 border-0 shadow">
              <img
                src={cardd.imageSrc}
                className="card-img-top rounded-0"
                alt={cardd.title}
              />
              <div className="card-body">
                <h4 className="card-title my-3">{cardd.title}</h4>
                <p className="card-text1">{cardd.description}</p>
                <Link
                  to={cardd.link}
                  className="btn rounded-0 read-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishCard;
