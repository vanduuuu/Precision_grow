import React from 'react'
import './ServiceFishMonitoring.css'
import FishCard from './FishCard.js'
import FishCardSlider from '../../../VideoSlider/FishCardSlider.js'
import { Helmet } from 'react-helmet-async'
import FaqSection from '../../../Faqcomp/FaqSection.js'
import Titleunderline from '../../../Reusablecomp/Titleunderline/Titleunderline.js'

const ServiceFishMonitoring = () => {
  const fishMFaqs = [
    {
      title: 'What is the Automatic Identification System (AIS)?',
      content: 'The Automatic Identification System (AIS) tracks vessels in real time using ground stations and satellites, ensuring continuous monitoring even in remote ocean areas.',
      isOpenInitially: false
    },
    {
      title: ' How does the Vessel Monitoring System (VMS) differ from AIS?',
      content: 'The Vessel Monitoring System (VMS) works like AIS but is focused on regulatory oversight, helping authorities monitor and enforce fishing regulations.',
      isOpenInitially: false
    },
    {
      title: 'Can AIS and VMS track all fishing vessels globally?',
      content: 'AIS and VMS don’t cover every fishing vessel, some lack these systems or disable them. Satellite imagery fills in the gaps by detecting untracked vessels.',
      isOpenInitially: false
    },
    {
      title: ' Why is satellite imagery integration important in fish monitoring?',
      content: 'Satellite imagery fills gaps in monitoring fishing activities by capturing operations that AIS and VMS miss, providing a complete, global view of commercial fishing.',
      isOpenInitially: false
    },
    {
      title: 'Can fish monitoring systems help in combating illegal fishing?',
      content: 'AIS, VMS, and satellite imagery combat illegal fishing by tracking vessels, detecting unlawful activities, and aiding enforcement against IUU fishing.',
      isOpenInitially: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Fish Monitoring Solutions | Precision Grow Agri-Tech</title>
        <meta name="description" content="Enhance fish farming with Precision Grow's monitoring solutions. Optimize growth, ensure sustainability, and leverage satellite technology for success!" />
        <meta name="keywords" content="aquaculture monitoring system, smart fish farming, IoT for aquaculture" />
        <link rel="canonical" href="https://precisiongrow.co.in/fish-monitoring" />
      </Helmet>

<div className="fisheries-container">
  <div className="fish-banner">
    <div className="overlay"></div>
    <div className="content">
      <h1>
        Satellite Monitoring <br />
        <span>For Fisheries</span>
      </h1>
      <p className='mt-5'>
        Thanks to advancements in satellite technology, cloud computing, and machine learning, Precision Grow is at the forefront of innovation. We monitor commercial fishing and transshipment activities, providing valuable insights to scientists, marine biologists, and governments to safeguard our oceans. Additionally, we're actively working to address the issue of forced labor on fishing vessels.
      </p>
    
    </div>
  </div>
</div>


      <div className="fishcard-section container">
          <div className="technology-section mt-5 text-center">
        <h3 className="boldlook">Applying Innovative Technology</h3>
        <h3>
          We gather large data from satellites and various sources to keep track of vessels at sea. This includes public tracking info from the Automatic Identification System (AIS) along with data from government Vessel Monitoring Systems (VMS). By combining these, we gain a clearer picture of what's happening out in the ocean, helping understand the activities.
        </h3>
      </div>
        <section>
                  <Titleunderline title="Maritime Vessel Tracking" tag="h3"/>

          <FishCard />
        </section>
        <FishCardSlider />
      </div>

      <FaqSection data={fishMFaqs} variant="blue" />
    </>
  )
}

export default ServiceFishMonitoring
