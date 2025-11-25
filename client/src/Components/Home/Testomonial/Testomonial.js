import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaUserCircle, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import "./Testomonial.css";
const testimonials = [
  {
    title: "Help us improve our productivity",
    text: "Precision Grow has transformed my farming! Their technology helps me track soil health, weather changes, and crop needs in real time. Even when I travel, I stay updated about my farm and make the right decisions. Smart farming is the way forward, and I'm proud to be a part of it!",
    name: "Mahesh Kumar, Pune",
    role: "Progressive Farmer",
  },
  {
    title: "Manage projects much easier with this tool",
    text: "Before using eCrop, I used to apply fertilizers blindly. Now, the device’s simulation data tells me the exact nutrients my soil needs. My yield has increased, and I’ve cut down on unnecessary fertilizer use, saving money and keeping my farm eco-friendly!",
    name: "Rajesh Kumar, Madhya Pradesh",
    role: "Agriculture Innovator",
  },
  {
    title: "Data insights improved our workflow",
    text: "With e-Crop’s simulation data, I can predict pest infestations based on weather and soil conditions. Last season, I prevented an infection in my tomato field and saved 35% on pesticide costs. The app tells me what precautions to take and which medicines to use at the right time. Now, I prevent problems instead of reacting to them!",
    name: "Ravi Shankar, Karnataka",
    role: "Smart Farming Enthusiast",
  },
  {
    title: "Weather alerts that really help",
    text: "Precision Grow’s weather alerts and soil sensors changed the way I farm! Their data alerted me to significant rains during the previous monsoon, which helped me safeguard my wheat crop. I saw a 25% increase in yield and a decrease in expenses. Now, I farm with confidence, not guesswork.",
    name: "Ramesh Patil, Maharashtra",
    role: "Wheat Farmer",
  },
  {
    title: "Better air monitoring for industries",
    text: "Skywatch has completely changed how we monitor air quality at our plant. Now, we can track pollution levels instantly and take action before issues arise. The mobile app makes it so easy to stay updated from anywhere. A must-have for industries committed to a cleaner environment!",
    name: "Amit Verma, Gujarat",
    role: "Environmental Manager",
  },
  {
    title: "Reliable weather alerts save my crops",
    text: "Last Season, heavy rainfall nearly destroyed my crop, but thanks to Precision Grow’s weather alerts, I was prepared. I adjusted my irrigation and saved most of my harvest. My farm is thriving, and I now trust technology to guide my decisions. I highly recommend Precision Grow!",
    name: "Vikram Singh, Uttar Pradesh",
    role: "Progressive Farmer",
  },
];


const Testimonial = () => {
  const swiperRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && nextBtnRef.current) {
      swiperRef.current.params.navigation.nextEl = nextBtnRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="testimonial-section py-5">
      <Container>
        {/* Heading Row */}
        <div className="d-flex align-items-center justify-content-between mb-5 position-relative">
          <div className="d-flex align-items-center position-relative">
            {/* Blue Quote Circle */}
            <div className="quote-circle position-absolute">
              <FaQuoteLeft />
            </div>
            <h2 className="testimonial-title mb-0 ms-5 heading-style position-relative">
              What Our Customers Are Saying
            </h2>
          </div>

          {/* Next Arrow Navigation */}
          <div className="testimonial-nav">
            <div ref={nextBtnRef} className="swiper-button-next-custom">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: nextBtnRef.current,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-box p-4">
                <h5 className="fw-semibold mb-3">{item.title}</h5>
                <p className="text-muted mb-4">{item.text}</p>
                <div className="d-flex align-items-center">
                  <FaUserCircle className="testimonial-icon me-3" />
                  <div>
                    <h6 className="mb-0 fw-semibold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
