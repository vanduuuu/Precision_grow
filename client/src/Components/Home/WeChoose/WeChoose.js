import React from 'react';

import './WeChoose.css';
import InfoCardGroup from '../../Reusablecomp/InfoCardGroup.js';

const CardGroup = () => {
  const cardList = [
    {
      img: 'https://api.ecrop.co/assets/precisiongrow/data.webp',
      alt: 'Data Insights',
      text: "We're not just another app as we bring you patented technology so you know you're getting trustworthy, reliable advice for your crops.",
    },
    {
      img: 'https://api.ecrop.co/assets/precisiongrow/Automation.webp',
      alt: 'Automation',
      text: "No more guessing! Our AI-powered crop simulations provide daily insights into exactly what your soil and crops need.",
    },
    {
      img: 'https://api.ecrop.co/assets/precisiongrow/Bespoke.webp',
      alt: 'Bespoke Solutions',
      text: "Grow more, waste less! Reduce fertilizer use, save money, and protect the environment all while boosting your profits.",
    },
  ];

  return (
    <>
 <InfoCardGroup
      cardData={cardList} 
      bgClass="choose-bg" 
      imgClass="circle-img"
    />
    </>
  );
};

export default CardGroup;
