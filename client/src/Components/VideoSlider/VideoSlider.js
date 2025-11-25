import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import "./VideoSlider.css";
import homeimg from "../../assets/pg-banner1.webp";

const VideoSlider = () => { 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // ✅ new key to re-trigger animations

  const slides = [
    {
      id: 1,
      title: "Grow with Precision Grow",
      desc: "Advanced Agri-Tech for Sustainable Farming.",
      button: "Know About Us",
      image: homeimg,
      link: "/about",
    },
    {
      id: 2,
      title: "Know Your Farm with eCrop",
      desc: "Smart solutions for enhanced crop management.",
      button: "Learn More",
      image: "https://api.ecrop.co/assets/precisiongrow/ecrop.webp",
      link: "/ecrop",
    },
    {
      id: 3,
      title: "Smarter Decisions with SkyWatch",
      desc: "Protecting every breath you take with SkyWatch.",
      button: "Explore More",
      image: "https://api.ecrop.co/assets/precisiongrow/Skywatch_Lead.webp",
      link: "https://skywatch.co.in/",
    },
    {
      id: 4,
      title: "Forget Labs, Get Biosense",
      desc: "Soil Testing now made Easy with Biosense.",
      button: "Upgrade your testing!",
      image: "https://api.ecrop.co/assets/precisiongrow/Biosense.webp",
      link: "/biosense",
    },
  ];

  const splitTitle = useMemo(
    () => (title) =>
      title.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      )),
    []
  );

  return (
    <div className="banner-slider position-relative">
      <Swiper
        direction="vertical"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        allowTouchMove={false}
        touchStartPreventDefault={false} // ✅ important
  touchReleaseOnEdges={true} 
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setAnimateKey((prev) => prev + 1); // ✅ re-trigger animations
        }}
        className="h-100"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="banner-slide d-flex align-items-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div
                key={animateKey + "-" + index} // ✅ unique key to restart animation
                className={`container banner-content ${
                  index === activeIndex ? "animate slide" : ""
                }`}
              >
                <h1 className="display-3 fw-bold mb-3 animate-title text-wrap">
                  {splitTitle(slide.title)}
                </h1>
                <p className="lead fs-2 mb-4 animate-text">{slide.desc}</p>

                {slide.link.startsWith("http") ? (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border-progress"
                  >
                    <span>{slide.button}</span>
                  </a>
                ) : (
                  <Link to={slide.link} className="btn border-progress">
                    <span>{slide.button}</span>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-nav-vertical">
        <button className="swiper-button-prev">
          <RiArrowUpSLine size={28} />
        </button>
        <button className="swiper-button-next">
          <RiArrowDownSLine size={28} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(VideoSlider);
