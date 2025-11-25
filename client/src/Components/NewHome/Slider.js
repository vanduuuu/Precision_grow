import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Slider.css";
import banner1 from '../../assets/PG_Biosence.webp'
import banner2 from '../../assets/PG_acteast.webp'
import banner3 from '../../assets/PG_ecrop.webp'
import banner4 from '../../assets/PG_Skywatch.webp'
import banner5 from '../../assets/PG_PrecisionGrow.webp'
const Slider = () => {
  const slides = [
    {
      img: banner5,
      title: "Grow with precision Grow",
      desc: "Advanced Agri-Tech for Sustainable Farming",
      link: "/about",
    },
    {
      img: banner3,
      title: "Know Your Farm with eCrop",
      desc: "Smart solution for enhanced crop management",
      link: "/ecrop",
    },
    {
      img: banner4,
      title: "Smarter Decisions with SkyWatch",
      desc: "Protecting Every Breath you take with SkyWatch",
      link: "https://skywatch.co.in/",
    },
    {
      img: banner1,
      title: "Forget Labs, Get Biosense",
      desc: "Soil Testing now made Easy with Biosense",
      link: "/biosense",
    },
    // {
    //   img: banner2,
    //   title: "Acteast",
    //   desc: "Soil Testing now made Easy with Biosense",
    //   link: "https://acteast.co.in/",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleHover = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <>
    <section className="slider-outer">
<div className="container p-0 pb-lg-5">
      <div className="row align-items-center">
        {/* Left Image Carousel */}
        <div className="col-md-8 position-relative">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded-4 shadow main-image"
                  />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn btn btn-sm"
                  >
                    Visit Page →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side Content */}
        <div className="col-md-4">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`feature-item border-start ps-4 mb-5 ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
            >
              <h3 className="fw-bold heading-style">{item.title}</h3>

              {/* Show desc & progress only for active */}
              {activeIndex === index && (
                <>
                  <p className="text-muted mb-2 mt-2">{item.desc}</p>
                  <div className="progress-line run"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    </>
  
  );
};

export default Slider;
