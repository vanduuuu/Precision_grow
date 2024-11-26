import React from 'react'
import './Weoffer.css'
import Titletag from '../../Titletag/Titletag'
import WeofferCard from './WeofferCard'
import NameBanner from '../../../assets/28.webp'
import Offer1 from '../../../assets/offer-1.webp'
import Offer2 from '../../../assets/offer-2.webp'
import Offer3 from '../../../assets/offer-3.webp'
import Offer4 from '../../../assets/offer-4.webp'
import Offer5 from '../../../assets/offer-5.webp'
import Offer6 from '../../../assets/offer-6.webp'
import Offer7 from '../../../assets/offer-7.webp'
import Offer8 from '../../../assets/offer-8.webp'
import Offer9 from '../../../assets/offer-9.webp'






const Weoffer = () => {
  return (
    <div>
      <div className='Weoff-outer'>
        <section>
            <div className='container'>
            <Titletag
      title="What We Offer"
      bgImage={NameBanner} // Path to your image
    />
     <div className='row'>
     <WeofferCard
        image={Offer1}
        title="Crop Health Monitoring"
        description="Smart Insights for Healthy Crops and Informed Farming Decisions."
        number="01"
      />
       <WeofferCard
        image={Offer2}
        title="Crop Irrigation Monitoring"
        description="Precision crop irrigation monitoring enhances water efficiency."
        number="02"
      />
         <WeofferCard
        image={Offer3}
        title="Radar Data"
        description="Radar data ensures continuous monitoring during adverse weather"
        number="03"
      />
       <WeofferCard
        image={Offer4}
        title="Soil Organic Carbon"
        description="Soil organic carbon tracking for sustainable and fertile agriculture"
        number="04"
      />
       <WeofferCard
        image={Offer5}
        title="Digital Elevation Model"
        description="Digital elevation models optimize land use and drainage planning"
        number="05"
      />
       <WeofferCard
        image={Offer6}
        title="Crop Area & Yield Estimation"
        description="Accurate crop area and yield estimation for informed decisions"
        number="06"
      />
       <WeofferCard
        image={Offer7}
        title="Current & Forecast Weather"
        description="Real-time and forecast weather updates guide agricultural planning"
        number="07"
      />
       <WeofferCard
        image={Offer8}
        title="Plantation Management"
        description="Tree Age, Tree Count, Tree Uprooting Analysis with high accuracy"
        number="08"
      />
       <WeofferCard
        image={Offer9}
        title="Product Traceability"
        description="Seamless product traceability, unveiling the journey from farm to table"
        number="09"
      />




     </div>
            </div>
        </section>
      </div>
      
    </div>
  )
}

export default Weoffer
