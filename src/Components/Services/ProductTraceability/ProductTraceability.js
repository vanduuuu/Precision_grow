import React from 'react'
import './ProductTraceability.css'
import LeftTextVideo from '../../LeftTextVideo/LeftTextVideo'
import Titletag from '../../Titletag/Titletag'
import ListComponent from '../../ListComponent/ListComponent'
import Pdotracevdo from '../../../assets/product-traceability.mp4'
import Namebanner from '../../../assets/hero_44.webp'


const ProductTraceability = () => {
    // Define lists for different columns
const listItems1 = [
    'Supply Chain Visibility',
    'Quality Assurance',
  ];

  const listItems2 = [
    'Data-Driven Decision-Making',
    'Compliance and Regulation',
  ];

  const listItems3 = [
    'Sustainability and Social Responsibility',
    'Operational Efficiency',
  ];
  return (
    <>
      <LeftTextVideo
      title="Product Traceability"
      description="Provide your products with a feature to allow customers track the whole journey of the product and increase your product trust."
      buttonText="Contact Us"
      buttonLink="/contact"
      videoSrc={Pdotracevdo}
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
            <h2 className='listtitle'>Product Traceability</h2>
            <h4 className='h11'>Harnessing Data for Success</h4>
            <p>
            Welcome to a revolutionary product experience that unveils the journey of your favorite products from farm to store! Our innovative solution brings transparency and insight into every step of the manufacturing process, offering you a unique and immersive product journey.
            </p>
            <p>Imagine being able to trace the origin of your chosen product, understanding where it was grown, how it was processed and the journey it took to reach your local store. Our product empowers you with this information, allowing you to make informed choices about the items you bring into your home.</p>
            <p>From the initial stages at the farm to the intricate processes of manufacturing and packaging, our product journey feature provides a comprehensive overview. Explore the farms where the raw materials were sourced, witness the transformation in production facilities and follow the path the product takes before it reaches the shelves.</p>
            <p>This isn't just a product it's a narrative that connects you with the entire lifecycle, fostering a deeper appreciation for the craftsmanship and dedication that goes into each item. As consumer awareness and sustainability become increasingly important, our product journey tool aligns seamlessly with the values of conscious and informed shopping.</p>
            <p>Join us on this unique journey that transforms your product experience. Say goodbye to uncertainty and hello to a new era of transparency and connection with the products you love. Embrace the future of shopping with our innovative solution – where every purchase comes with a story waiting to be discovered.</p>
            </div>
            </div>
            </section>
            </div>
</>
  )
}

export default ProductTraceability
