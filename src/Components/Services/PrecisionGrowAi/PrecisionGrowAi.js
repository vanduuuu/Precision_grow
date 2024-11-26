import React from 'react'
import './PrecisionGrowAi.css'
import LeftTextVideo from '../../LeftTextVideo/LeftTextVideo'
import Titletag from '../../Titletag/Titletag'
import ListComponent from '../../ListComponent/ListComponent'
import Pgaivdo from '../../../assets/agro-ai.mp4'
import Namebanner from '../../../assets/28.webp'



const PrecisionGrowAi = () => {

// Define lists for different columns
const listItems1 = [
    'Enhanced Crop Health Monitoring',
    'Weather-Driven Decision Making',
    // Add more items for the first list
  ];

  const listItems2 = [
    'Optimized Irrigation Strategies',
    'Future of sustainable and efficient agriculture',
    // Add more items for the second list
  ];

  const listItems3 = [
    'Proactive Pest and Disease Management',
    // Add more items for the third list
  ];

  return (
    <div>
          <LeftTextVideo
      title="Precision Grow AI"
      description="Highly Advance Artificial Intelligence System which help you to do better farming"
      buttonText="Contact Us"
      buttonLink="/contact"
      videoSrc={Pgaivdo}
      />
      <div className='ai-outer'>
        <section>
        <div className='container'>
        <Titletag
            title="Benefits"
            bgImage={Namebanner}
            className="pt-5"
          />
          <div className='row'>
            <div className='col-lg-4'>
            <ListComponent items={listItems1}/>
            </div>
            <div className='col-lg-4'>
            <ListComponent items={listItems2}/>
            </div>
            <div className='col-lg-4'>
            <ListComponent items={listItems3}/>
            </div>
          </div>
        </div>
        </section>
      </div>
<div className='ai-outer2'>
<section>
<div className='container'>
        <div className='div_p'>
            <h2 className='listtitle'>Precision Grow AI</h2>
            <p>
            Welcome to the forefront of modern agriculture with Precision Grow AI, a groundbreaking solution that harnesses the power of artificial intelligence to revolutionize crop management. In an era where technology is shaping the future of farming, Precision Grow AI emerges as a game-changer, seamlessly integrating data from satellites, weather forecasts and on-ground sensors to provide unparalleled insights and field-level advisories.
            </p>
            <ul className='ul-list'>
            <li><i class="fa-solid fa-circle-arrow-right"></i> <span>Unlocking Precision Agriculture with AI:</span>
                               <p class="ml-20 mt-10">In the age of information, traditional farming methods are evolving to meet the demands of a growing global population. 
                                Precision Grow AI is not just a tool; it's a comprehensive system designed to enhance every facet of crop cultivation. 
                                Imagine having a virtual farming assistant that constantly monitors your fields, analyzes data from satellites and factors 
                                in current and forecasted weather conditions to deliver precise and actionable advisories. This is the promise of 
                                Precision Grow AI – a tool that transforms farms into intelligent, data-driven ecosystems.&ZeroWidthSpace;</p>
                        </li>
                        <li><i class="fa-solid fa-circle-arrow-right"></i> <span>How Precision Grow AI Works:</span>
                            <p class="ml-20 mt-10">Precision Grow AI utilizes cutting-edge artificial intelligence algorithms to process vast datasets related 
                                to crop health, irrigation and various environmental factors. By tapping into satellite imagery, it provides 
                                real-time insights into the condition of crops, enabling farmers to detect potential issues such as diseases 
                                or nutrient deficiencies early on. This proactive approach allows for targeted interventions, minimizing crop
                                 losses and optimizing yields.</p>

                                 <p class="ml-20 mt-10">The integration of weather data is a key strength of Precision Grow AI. 
                                By considering both current weather conditions and accurate forecasts, the system generates field-level advisories 
                                tailored to the unique needs of each farm. Whether it's optimizing irrigation schedules or recommending specific crops
                                 based on anticipated weather patterns, Precision Grow AI empowers farmers to make informed decisions that directly impact
                                  productivity and resource efficiency.</p>
                        </li>
                        <li><i class="fa-solid fa-circle-arrow-right"></i><span> Embracing the Future of Agriculture:</span>
                            <p class="ml-20 mt-10"> Precision Grow AI is not just a technological innovation; it's a commitment to the future of sustainable and efficient agriculture.
                                     As the global population continues to grow, the demand for food increases, making it imperative for farmers to adopt intelligent
                                      solutions that optimize resources and maximize yields. Precision Grow AI is not only at the forefront of this agricultural revolution 
                                      but is actively shaping the narrative, proving that the fusion of technology and agriculture is not just a possibility but a necessity
                                       for a resilient and food-secure future.</p>
                         </li>
            </ul>
          </div>
        </div>
</section>
</div>
    </div>
  )
}

export default PrecisionGrowAi
