import React, { useState, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Titleunderline from "../Titleunderline/Titleunderline";
import "./AwardCertificateSlider.css";
import Wave from "../../NewHome/wave";

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
];

const Lightbox = memo(({ index, close, next, prev }) => (
  <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
    <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); close(); }}>
      <AiOutlineClose size={28} />
    </button>
    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
      <RiArrowLeftSLine size={28} />
    </button>
    <img
      key={index}
      src={certificates[index].image}
      alt={certificates[index].title}
      className="lightbox-image img-fluid"
      onClick={(e) => e.stopPropagation()}
    />
    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>
      <RiArrowRightSLine size={28} />
    </button>
  </div>
));

const AwardCertificateSlider = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("awards-section");
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev === 0 ? certificates.length - 1 : prev - 1);
  const nextImage = () => setLightboxIndex(prev => prev === certificates.length - 1 ? 0 : prev + 1);

  return (
    <>
      <Wave color="#02746a" position="bottom" height={120} />

        <section id="awards-section" className="award-section p-0 position-relative overflow-hidden">
   

      <div className="container position-relative z-2 pb-5">
        <Titleunderline title="Certification & Rewards" tag="h3"  titleColor="#ffffff"
 />
        <div className="row align-items-center g-5">
          <div className="col-lg-5 text-center text-lg-start">
            <h2 className="fw-bold mb-3 text-white boldlook">
              Celebrating Excellence, Inspiring Innovation
            </h2>
            <p className="text-white fs-4">
              Our awards and certifications reflect a journey of passion, precision, and performance.
            </p>
          </div>
          <div className="col-lg-7">
            {isVisible && (
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={{
                  prevEl: ".award-slider-prev",
                  nextEl: ".award-slider-next",
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },

                }}
                className="award-swiper"
              >
                {certificates.map((cert, i) => (
                  <SwiperSlide key={cert.id}>
                    <div className="award-item" onClick={() => openLightbox(i)}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="award-image img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="award-slider-prev"><RiArrowLeftSLine size={28} /></div>
                <div className="award-slider-next"><RiArrowRightSLine size={28} /></div>
              </Swiper>
            )}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          close={closeLightbox}
          next={nextImage}
          prev={prevImage}
        />
      )}
    </section>
    </>
  
  );
};

export default AwardCertificateSlider;
