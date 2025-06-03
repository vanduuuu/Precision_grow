import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import Certi2 from '../../../assets/award/FICCI-Certificate copy.webp';
import Certi3 from '../../../assets/award/Great Place to Work copy.webp';
import Certi4 from '../../../assets/award/IFOAM-Certificate-2024.webp';
import Certi5 from '../../../assets/award/Patent Certificate.webp';
import Certi6 from '../../../assets/award/S0T1000015_2412061604000.webp';
import Certi7 from '../../../assets/award/SGS-1.webp';
import Certi9 from '../../../assets/award/assocham.webp';
import Certi10 from '../../../assets/award/techvisitCE.webp';
import Certi11 from '../../../assets/award/techvisitFCC.webp';
import Certi12 from '../../../assets/award/techvisitROHS.webp';
import Titleunderline from '../../Reusablecomp/Titleunderline/Titleunderline.js';

const AwardCertificate = () => {
  const swiperRef = useRef(null); // Creating a reference for Swiper instance

  const AwardCertificateApi = [
    { id: 2, img: Certi2 },
    { id: 3, img: Certi3 },
    { id: 4, img: Certi4 },
    { id: 5, img: Certi5 },
    { id: 6, img: Certi6 },
    { id: 7, img: Certi7 },
    { id: 9, img: Certi9 },
    { id: 10, img: Certi10 },
    { id: 11, img: Certi11 },
    { id: 12, img: Certi12 },
  ];

  return (
    <div className="container my-4" data-aos="fade-up" data-aos-duration="2000">
      <Titleunderline title="Certification & Rewards" tag="h3"/>

      <Swiper
        ref={swiperRef} // Adding the swiper reference
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnHover: true, // This will stop autoplay on hover
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Storing swiper instance
        }}
      >
        {AwardCertificateApi.map((card) => (
          <SwiperSlide key={card.id} className="swiper_slide">
            <img
              src={card.img}
              loading="lazy"
              alt={`certificate-${card.id}`}
              onMouseEnter={() => swiperRef.current.autoplay.stop()} // Stop autoplay on hover
              onMouseLeave={() => swiperRef.current.autoplay.start()} // Restart autoplay when the mouse leaves
            />
            <div className="slide-content">
              <p className='h2'>{card.title}</p>
              <p>{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </Swiper>
    </div>
  );
};

export default AwardCertificate;
