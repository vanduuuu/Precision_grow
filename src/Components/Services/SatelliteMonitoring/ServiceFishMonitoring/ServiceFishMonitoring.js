import React from 'react'
import LeftTextVideo from '../../../LeftTextVideo/LeftTextVideo'
import Titletag from '../../../Titletag/Titletag'
import './ServiceFishMonitoring.css'
import VdoText from '../../../Home/VdoText/VdoText'
import FishCard from './FishCard'
import FishCardSlider from '../../../VideoSlider/FishCardSlider'
import Headbanner from '../../../../assets/fantastic-seascape.webp'
import FishBg from '../../../../assets/fish.webp'
import fishMontVdo from '../../../../assets/fish.mp4'


const ServiceFishMonitoring = () => {
  return (
    <>
        <LeftTextVideo
      title="Satellite Monitoring For Fisheries"
      description="Revolutionizing Ocean Monitoring and Analysis"
      buttonText="Contact Us"
      buttonLink="/contact"
      videoSrc={fishMontVdo}
      />
   
    <div className='fishdivouter'>
      <section>
        <div className='container'>
        <Titletag
            title="Satellite Monitoring For Fisheries"
            bgImage={Headbanner}
            className="pt-5"
          />
          <p className='txt1'>
          Ten years ago, gaining comprehensive insights into human activity in the world's oceans seemed insurmountable. However, through significant advancements in satellite technology, cloud computing, machine learning, and addressing instances of forced labor abuses aboard vessels. <span>Precision Grow </span>has transformed this vision into reality. We are pioneering monitoring commercial fishing, transshipment at sea, and maritime shipping with our cutting-edge data and technology platforms to facilitate scientific research, bolster marine conservation efforts, and enhance ocean governance practices.
          </p>
        </div>
      </section>
    </div>
  <div className='fishshape'>
  <VdoText  
          mediaSrc={FishBg}
          isVideo={false} 
          title="UTILISING ADVANCED TECHNOLOGY"
          Desc="We collect extensive data from satellites and various other sources. Our approach involves merging tracking data obtained from the publicly accessible automatic identification system (AIS) with information derived from vessel monitoring systems (VMS) operated by governmental entities. These partnerships enable us to access VMS data, which, alongside AIS, utilizes global positioning and transmitters to consistently broadcast vessel locations."
        />
  </div>
<div className='fishcard-section'>
<section>
  <FishCard/>
</section>

<FishCardSlider/>
</div>
    </>
  )
}

export default ServiceFishMonitoring
