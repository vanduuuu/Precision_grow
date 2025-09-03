import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { AiOutlineClose } from "react-icons/ai";
import PatentCertificate from '../../../assets/icons_About/certificate1.png'
import PatentCertificate3 from '../../../assets/icons_About/awards3.webp'
import PublicationCertificate from '../../../assets/icons_About/award4.jpg'
import "./AwardCertificateSlider.css";
import Titleunderline from "../Titleunderline/Titleunderline";

const certificates = [
  { id: 1, title: "FICCI Certificate", image: "https://api.ecrop.co/assets/precisiongrow/FICCI-Certificate copy.webp" },
  { id: 2, title: "Great Place to Work", image: "https://api.ecrop.co/assets/precisiongrow/Great Place to Work copy.webp" },
  { id: 3, title: "IFOAM Certificate", image: "https://api.ecrop.co/assets/precisiongrow/IFOAM-Certificate-2024.webp" },
  { id: 4, title: "Patent Certificate", image: "https://api.ecrop.co/assets/precisiongrow/Patent Certificate.webp" },
  { id: 5, title: "SOT Certificate", image: "https://api.ecrop.co/assets/precisiongrow/S0T1000015_2412061604000.webp" },
  { id: 6, title: "SGS Certificate", image: "https://api.ecrop.co/assets/precisiongrow/SGS-1.webp" },
  { id: 7, title: "FCC Certificate", image: "https://api.ecrop.co/assets/precisiongrow/techvisitFCC.webp" },
  { id: 8, title: "Assocham", image: "https://api.ecrop.co/assets/precisiongrow/assocham.webp" },
  { id: 9, title: "TechVisit CE", image: "https://api.ecrop.co/assets/precisiongrow/techvisitCE.webp" },
  { id: 10, title: "Patent Certificate1", image: PatentCertificate },
  { id: 11, title: "Patent Certificate3", image: PatentCertificate3 },
  { id: 12, title: "Publication Certificate", image: PublicationCertificate },
];

const AwardCertificateSlider = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="award-container">
      <Titleunderline title="Certification & Rewards" tag="h3" />

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        className="award-swiper"
      >
        {certificates.map((cert, i) => (
          <SwiperSlide key={cert.id}>
            <div
              className="award-item"
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(i);
              }}
              aria-label={`View certificate: ${cert.title}`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                width="708"
                height="1000"
                className="award-image img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={-1}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
            className="lightbox-close"
          >
            <AiOutlineClose />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
            className="lightbox-prev"
          >
            &#10094;
          </button>

          <img
            src={certificates[lightboxIndex].image}
            alt={certificates[lightboxIndex].title}
            className="lightbox-image img-fluid"
            onClick={(e) => e.stopPropagation()}
             width="708"
                height="1000"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
            className="lightbox-next"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardCertificateSlider;
