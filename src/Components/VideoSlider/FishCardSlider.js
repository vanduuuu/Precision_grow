import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './FishCardSlider.css';
import Fishser1 from "../../assets/fish-ser-2.webp"
import Fishser2 from "../../assets/fish-ser-1.webp"
import Fishser3 from "../../assets/fish-ser-3.webp"




const FishCardSlider = () => {
    const FishSlideApi = [
        {
            id : 1,
            img : Fishser1,
            title : "Application Programming Interfaces (APIs)",
            desc : "They facilitate queries related to fishing efforts, vessel searches based on various criteria, vessel details retrieval, and identification of vessel events such as encounters.",
        },
        {
            id : 2,
            img : Fishser2,
            title : "False Identities and Spoofing",
            desc : "However, in some instances, these vessels may transmit incorrect MMSI numbers, such as a false number like 123456789 or a number belonging to another vessel. ",
        },
        {
            id : 3,
            img : Fishser3,
            title : "Announcing our Data Sharing Initiative",
            desc : "We believe in empowering anyone with internet access and a computer to utilize our data for driving positive change in ocean conservation efforts.",
        },
        {
            id : 4,
            img : Fishser1,
            title : "Sharing Results",
            desc : "To accomplish this goal, we've developed online portals and tools leveraging open-source technologies such as PostGis, ElasticSearch, Docker, and Kubernetes. ",
        },
    ]
  return (
    <div className='container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        {FishSlideApi.map((card) => (
           <SwiperSlide className="swiper_slide">
           <img src={card.img} alt="img1" />
           <div className="slide-content">
             <h2>{card.title}</h2>
             <p>{card.desc}</p>
           </div>
         </SwiperSlide>  
        ))} 
      
        <div className='swiper-button-prev slider-arrow'>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </Swiper>
    </div>
  );
};

export default FishCardSlider;
