import React from 'react'
import "./Sustainability.css";
import Titletag from '../Titletag/Titletag';
import NameBanner1 from '../../assets/images/hero_441.webp'
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner'
import NameBanner from '../../assets/images/sus11.webp'
import Offer1 from '../../../src/assets/images/sus-img1.webp'
import Offer2 from '../../../src/assets/images/sus-img2.webp'
import Offer3 from '../../../src/assets/images/sus-img3.webp'
import flaw from '../../../src/assets/shapes/floral1.webp'
import Gdp from './Gdp';
import { Helmet } from 'react-helmet';

   
  function Sustainability  (){

    const breadcrumbItems = [
      { path: '/', label: 'Home' },
      { path: '/product', label: 'Product' }
    ];
    
  
    const ServiceApi = [
      {
          id: 1,
          title: 'Overview',
          image: Offer1,
          detail: "Precision Grow believes that the Earth and its resources must be preserved for the future generation. Every corporate and governments should take initiatives toward the green future. At Precision Grow, we have integrated business strategies, manufacturing value chain, and product life cycle in sustainable manner. ",
          link: "/overview"
      },
      {
        id: 2,
        title: 'Glossary',
        image: Offer2,
        detail: "We created The Sustainability Glossary to increase your understanding of sustainability and CSR. The Glossary includes terms that are often used in CSR and are talked about when creating a sustainability strategy.",
        link: "/glossary"
    },
      {
          id: 3,
          title: 'Green GDP',
          image: Offer3,
          detail: "Green GDP is an economic metric that accounts for the environmental costs of economic growth. Green GDP measures the depletion of natural resources and the damage caused by pollution. By factoring in the costs of environmental degradation, Green GDP helps policymakers balance growth with ecological responsibility. ",
          link: "https://greengdp.in/"
      },
  
    ] 
  return (
   <>
    <Helmet>
           <title>Sustainability at Precision Grow: Innovating Agri-Tech Solutions</title>
           <meta name="description" content="Discover how Precision Grow champions sustainability through innovative agri-tech solutions, enhancing farming practices and promoting eco-friendly agriculture." />
           {/* <meta name="keywords" content="Precision Grow: Advanced Agri-Tech Solutions for Sustainable Farming" /> */}
           <link rel="canonical" href="https://precisiongrow.co.in/sustainability" />

         </Helmet>
     <Banner 
    title="Sustainability"
    backgroundImage={NameBanner}
    breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
  />
    
    <div className="feature-one feature-one--two padding-box"> 
        <div className="container">
          <div
            className="section-common-title fadeInDown wow text-center"
            data-wow-delay="500ms"
            data-aos="fade-down"
          >
            <h2 className="feature-one--two__title food-chose-title">
              What is Sustainability?
            </h2>
            <p>
              Sustainability refers to the ability to meet the needs of the
              present without compromising the ability of future generations to
              meet their own needs. It encompasses environmental, social, and
              economic aspects, often referred to as the "three pillars" of
              sustainability.
            </p>
          </div>
          <div>
            <ul className="sustain-list d-flex flex-wrap">
              <div className="row mx-auto">
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Environmental Sustainability:</u>
                    </span>
                    <br /><br /> This aspect prioritizes the preservation of natural
                    resources, reduction of pollution and waste, and protection
                    of ecosystems. It involves adopting practices that minimize
                    environmental harm, such as conserving energy and water,
                    using renewable resources, and embracing eco-friendly
                    technologies.
                  </li>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Social Sustainability:</u>
                    </span>
                    <br /> <br />Social sustainability focuses on promoting equity,
                    justice, and well-being within communities. It aims to
                    ensure fair treatment and opportunities for everyone,
                    irrespective of factors like race, gender, or socioeconomic
                    status. Socially sustainable practices include advocating
                    for diversity, investing in education and healthcare, and
                    empowering communities through engagement.
                  </li>
                </div>
                <div className="col-lg-4 col-md-6 mb-3" data-aos="fade-up">
                  <li>
                    <span>
                      <u>Economic Sustainability:</u>
                    </span>
                    <br /> <br />Economic sustainability centers on maintaining
                    long-term economic growth while ensuring efficient and
                    equitable resource use. It involves fostering stable,
                    prosperous economies, encouraging responsible consumption
                    and production, and addressing income inequality and poverty
                    through inclusive policies and practices.
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
        <section className='section-txt 'data-aos="fade-up">
     <div className='container bg-content '>
          <Titletag
            title="Sustainability Overview"
            bgImage={NameBanner1}
            className="pt-2"
          />
          <p className='txt1' >
          Sustainability remains a key watchword of our times. For Precision Grow, sustainability is of abiding concern as the company understands that 'sustainability' will determine the level of its economic success and the nation's well-being. <span>Precision Grow</span> has been conducting its business socially, environmentally, and in a financially responsible manner. Sustainable practices are integral to Precision Grow’s business strategies, manufacturing value chain, product life cycle, and community development initiatives. Over the years, its investments in drivers of top-line growth and earnings have continued apace, together with investments in building environmental and social capital.
          </p>
        </div>
        
     </section>
     <div className='service_outer'>
        <section>
          <div className='service_inner'>
          <div>
      <div className='container-fixed'>
        <div className='row'>
          {ServiceApi.map((card) => (
            <div className='col-lg-4' key={card.id}>
              <div className='service_card_outer'>
                <div className='card'>
                  <div className='Sthumb'>
                    <img decoding="async" loading="lazy" src={card.image} alt={card.title}/>
                  </div>
                  <div className='card-body' style={{ position: 'relative', paddingBottom: '50px' }}>
                    <h3 className='card-title my-4'>{card.title}</h3>
                    <p className='card-text'>{card.detail}</p>
                    <Link to={card.link} target="_blank" className='btn btnSer' style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', margin: 'auto', width: 'fit-content' }}>View More</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
        </section>

        <div className='img-flaw '>
          <img src={flaw} className='img-fluid w-100' loading='lazy' alt='flaw'/>
        </div>
      </div>
        {/*-----------sus content section-4-------------*/}
        <section className='section-4'>
        
            <div className='container data-aos="fade-up '>
              <div className='col-md-10 mm mx-auto'>
              <p>It has successfully mainstreamed sustainability by embedding it in its corporate DNA and creating awareness about it across the organization. The positive impacts of its sustainability initiatives, especially its efforts to create pioneering benchmarks, are well acknowledged in the industry. Furthermore, Precision Grow is committed to Environmental, Social, and Governance (ESG) compliance, ensuring that its operations meet the highest standards of ethical conduct, environmental stewardship, and social responsibility.</p>

              <p>By aligning its operations with the United Nations Sustainable Development Goals (SDGs), Precision Grow actively contributes to global efforts to combat climate change, reduce inequality, and promote responsible consumption and production. The company’s robust ESG framework encompasses comprehensive measures to reduce carbon emissions, enhance energy efficiency, and minimize waste across its production processes.</p>

              <p>Additionally, Precision Grow invests in innovative technologies and sustainable agricultural practices that enhance productivity while conserving natural resources. These efforts not only improve operational efficiency but also foster long-term environmental sustainability. The company’s dedication to sustainability is reflected in its transparent reporting practices, regularly publishing detailed sustainability reports that outline its progress and commitments.</p>
              </div>
            </div>
          
        </section>
  

    
          <Gdp />




      </>
  )
}

export default Sustainability