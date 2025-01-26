
import React from 'react';
import Titletag from '../Titletag/Titletag';
import img1 from '../../assets/images/ecrop-machine.webp'
import img2 from '../../assets/images/bio-sense.webp'
import img3 from '../../assets/images/ecolo-3.webp'
import NameBanner from '../../assets/images/hero_44.webp'
import '../Product/Products.css'
import Horizontalcard from '../Horizontalcard/Horizontalcard'
import { Helmet } from 'react-helmet';

function Service() {
  return (
    <>
     <Helmet>
        <title>Precision Grow Products: Innovative Agri-Tech Solutions</title>
        <meta name="description" content="Discover Precision Grow's innovative agri-tech products designed to enhance crop yield and promote sustainable farming practices in India." />
        {/* <meta name="keywords" content="Precision Grow: Advanced Agri-Tech Solutions for Sustainable Farming" /> */}
        <link rel="canonical" href="https://precisiongrow.co.in/product" />
      </Helmet>

    <div className='bgdraw'>
         <div className='abt-outer py-5'>
     <div className='container'>
          <Titletag
            title="Product"
            bgImage={NameBanner}
            className="pt-5"
          />
          <p className='txt1'>
          Discover our innovative solutions that empower farmers and drive sustainability.
          </p>
        </div>
       
      </div>
      <Horizontalcard 
  reverse={false} 
  title="1. e-Crop: Revolutionizing Agriculture" 
  paragraphs={[
    "e-Crop is a groundbreaking product in the agriculture sector developed by ICAR-CTCRI. This smart IoT device provides farmers with real-time data on both weather and field conditions, empowering them to make informed decisions about farming activities.",
    "At its core, e-Crop is designed to simplify farming and enhance prosperity for farmers. By leveraging advanced technology, this device plays a crucial role in optimizing resources and improving agricultural outcomes."
  ]}
  subtitle={
    [
      "Our Mission"
    ]
  }
  listItems={[
    "Our mission is to make farmers lives easier and more prosperous through cutting-edge innovations, and e-Crop is a proud testament to that goal.",
  ]}
  image={img1}  // Dynamically passed image
/>

<Horizontalcard 
  reverse={true} 
  title="2. Biosense: On-Site Soil Testing Simplified" 
  paragraphs={[
    "Biosense is a compact and efficient soil testing device designed to address a critical challenge faced by farmers: understanding soil content. This device is portable, accurate, and affordable, offering on-the-spot solutions for soil analysis.",
  ]}
  subtitle={
    [
      "How It Works"
    ]
  }
  listItems={[
    "Farmers can collect and test multiple soil samples in a short period.",
    "The device delivers instant results, eliminating the need for laboratory testing.",
    "Makes soil analysis accessible anytime, anywhere.",
    "Brings the laboratory to the field, allowing farmers to make better-informed decisions about soil health and crop management.",
  ]}
  image={img2}  // Dynamically passed image
/>
<Horizontalcard 
  reverse={false} 
  title="3. ECOLOO: Sustainable Sanitation for a Better Future" 
  paragraphs={[
    "ECOLOO is an innovative, sustainable sanitation solution designed to prevent environmental pollution and contamination. This waterless system eliminates sewage generation and water contamination, making it an eco-friendly alternative to traditional sanitation methods.",
    "The system is odourless, sewage-free, energy-free, and hassle-free, offering a convenient and user-friendly experience. It is easy to install and maintain, making it suitable for both permanent and temporary needs."
  ]}
  subtitle={
    [
      "How It Works"
    ]
  }
  listItems={[
    " ECOLOO uses processed bacteria culture to effectively treat and eliminate human waste. Additionally, it converts urine into natural liquid fertilizer, promoting sustainability and reducing waste.",
  ]}
  image={img3}  // Dynamically passed image
/>
       </div>
    </>
  );
}

export default Service;

