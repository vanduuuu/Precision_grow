 import React from 'react'
import Banner from '../Banner/Banner'
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'
import NameBanner from '../../assets/images/aerial-drone.webp'
import { Helmet } from 'react-helmet';



const Services = () => {
  const breadcrumbItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' }
  ];

  
  return (
    <>
     <Helmet>
        <title>Precision Grow Services: Innovative Agri-Tech Solutions</title>
        <meta name="description" content="Discover Precision Grow's services to enhance crop yield and sustainability. Explore our innovative agri-tech solutions for modern farming practices." />
        {/* <meta name="keywords" content="Precision Grow: Advanced Agri-Tech Solutions for Sustainable Farming" /> */}
        <link rel="canonical" href="https://precisiongrow.co.in/services" />
      </Helmet>

    <div className='bgdraw'>
     <Banner 
        title="Services"
        backgroundImage={NameBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
      <div className='service_outer bgdraw'>
        <section>
          <div className='service_inner'>
            <ServiceCard/>
          </div>
        </section>
      </div>
  
    </div>
    </>
  )
}

export default Services
