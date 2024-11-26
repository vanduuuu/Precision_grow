import React from 'react'
import Banner from '../Banner/Banner'
import Titletag from '../Titletag/Titletag';
import VdoText from '../Home/VdoText/VdoText';
import './Overview.css'

import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/hero_44.webp'
import Goals from '../../assets/ship_1.webp'
import Sustainable from '../../assets/Sustainable-Development-Goals.png'
import GoalsHead from '../../assets/lg2.png'
import life from '../../assets/sustainable-still-life.webp'


const Overview = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'Overview' }
      ];
  return (
    <div>
        <Banner 
        title="Sustainability Overview"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
            <div className='abt-outer'>
     <section>
     <div className='container'>
          <Titletag
            title="Sustainability Overview"
            bgImage={NameBanner}
            className="pt-5"
          />
          <p className='txt1' >
          Sustainability remains a key watchword of our times. For Precision Grow, sustainability is of abiding concern as the company understands that 'sustainability' will determine the level of its economic success and the nation's well-being. <span>Precision Grow</span> has been conducting its business socially, environmentally, and in a financially responsible manner. Sustainable practices are integral to Precision Grow’s business strategies, manufacturing value chain, product life cycle, and community development initiatives. Over the years, its investments in drivers of top-line growth and earnings have continued apace, together with investments in building environmental and social capital.
          </p>
        </div>
     </section>
      </div>
      <div className='wheel-outer'>
      <div class="shapehere"></div>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5  d-flex justify-content-center align-items-center'>
                    <Titletag
            title="Agriculture And The Global Goals"
            bgImage={Goals}
            className="pt-5"
          />
                    </div>
                    <div className='col-lg-6 offset-lg-1'>
                        <div className='tine'>
                            <img src={Sustainable} alt="wheel earth" className='wheelll'/>
                            <div className='innerSimg'>
                                <img src={GoalsHead} alt="lg-logo"/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
      </div>
      <div className="overview-outer1">
        <section>
          <div className="container" data-aos="fade-up">
            <p>
            It has successfully mainstreamed sustainability by embedding it in its corporate DNA and creating awareness about it across the organization. The positive impacts of its sustainability initiatives, especially its efforts to create pioneering benchmarks, are well acknowledged in the industry. Furthermore, Precision Grow is committed to Environmental, Social, and Governance (ESG) compliance, ensuring that its operations meet the highest standards of ethical conduct, environmental stewardship, and social responsibility.
            </p>
            <p>By aligning its operations with the United Nations Sustainable Development Goals (SDGs), Precision Grow actively contributes to global efforts to combat climate change, reduce inequality, and promote responsible consumption and production. The company’s robust ESG framework encompasses comprehensive measures to reduce carbon emissions, enhance energy efficiency, and minimize waste across its production processes.</p>
            <p>Additionally, Precision Grow invests in innovative technologies and sustainable agricultural practices that enhance productivity while conserving natural resources. These efforts not only improve operational efficiency but also foster long-term environmental sustainability. The company’s dedication to sustainability is reflected in its transparent reporting practices, regularly publishing detailed sustainability reports that outline its progress and commitments.</p>
          </div>
        </section>
      </div>
      <div className='overvdotxt white'>
      <VdoText 
          mediaSrc={life}
          isVideo={false} 
          Desc="Precision Grow’s resilience in incorporating sustainability into its core operations ensures that it remains at the forefront of industry standards, setting a model for others to follow. This commitment positions Precision Grow not just as a business leader but as a responsible corporate citizen dedicated to fostering a sustainable future for all. Moreover, Precision Grow actively engages with stakeholders, including employees, customers, suppliers, and the communities in which it operates, to ensure that its sustainability efforts are inclusive and impactful."
          Desc1 ="Through educational programs, partnerships with environmental organizations, and community outreach initiatives, the company promotes sustainability awareness and action at multiple levels."
        />
      </div>

      <div className="overview-outer2">
        <section>
          <div className="container" data-aos="fade-up">
            <p>
            Precision Grow’s supply chain management also reflects its commitment to sustainability. The company collaborates with suppliers to ensure that sustainable practices are upheld throughout the supply chain, from sourcing raw materials to delivering finished products. This approach not only strengthens the company’s sustainability credentials but also supports global efforts to promote ethical and sustainable business practices. In its pursuit of continuous improvement, Precision Grow regularly evaluates and updates its sustainability strategies to address emerging challenges and opportunities. By fostering a culture of innovation and continuous learning, the company ensures that it remains adaptable and resilient in the face of changing environmental and social landscapes.
            </p>
            <p>Ultimately, Precision Grow’s holistic approach to sustainability – encompassing environmental protection, social equity, and economic viability – ensures that it can deliver long-term value to its shareholders while contributing positively to society and the planet. This unwavering commitment to sustainability positions Precision Grow as a leader in the industry and a trusted partner in building a more sustainable future.</p>
           
          </div>
        </section>
      </div>
   

    </div>
  )
}

export default Overview