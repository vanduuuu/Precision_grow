import React from 'react'
import Banner from '../../../Banner/Banner'
import Titletag from '../../../Titletag/Titletag';
import GridSection from './GridSection/GridSection';
import topviewcoast from '../../../../assets/top-view-coast.webp'
import fantasticseascape from '../../../../assets/fantastic-seascape.webp' 
import fishais from '../../../../assets/fish-ais.webp'
const AutomaticIdentificationSystem = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/vessel_monitoring_system', label: 'Automatic Identification System (AIS)' }
      ];
  return (
    <>
    <Banner 
      title="Automatic Identification System (AIS)"
      backgroundImage={topviewcoast}
      breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
    />
      
  <div className='fishdivouter'>
    <section>
      <div className='container'>
      <Titletag
          title="Automatic Identification System (AIS)"
          bgImage={fantasticseascape}
          className="pt-5"
        />
        <p className='txt1'>
        By regulations set forth by the International Maritime Organization and other governing bodies, large ships, including numerous commercial fishing vessels, are mandated to utilize AIS for transmitting their positional data. This measure is crucial for collision avoidance at sea. Annually, over 400,000 AIS devices broadcast vital vessel details such as location, identity, course, and speed.
        </p>
      </div>
    </section>
  </div>
  <div className='vessel-outer'>
  <div class="shapehere"></div>

<section>
<GridSection 
      image={fishais} 
      content="This data is captured by ground stations and satellites, enabling continuous tracking of vessels even in the most remote oceanic regions. Despite only a small fraction - approximately two percent - of the world's roughly 2.9 million fishing vessels being equipped with AIS, they contribute significantly to fishing activities, particularly those occurring more than 100 nautical miles from the coastline. These vessels account for over half of such fishing efforts and up to 80 percent of fishing activities on the high seas. The adoption of AIS among fishing vessels is steadily increasing, growing by an estimated 10 to 30 percent annually. This progressive uptake ensures that AIS technology becomes increasingly insightful over time."
    />
</section>

</div>
  </>
  )
}

export default AutomaticIdentificationSystem
