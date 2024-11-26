import React from 'react'
import Banner from '../Banner/Banner'
import Titletag from '../Titletag/Titletag';
import { Link } from 'react-router-dom';
import './RefundPolicy.css'

import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/planet-earth-global-2.webp'


const RefundPolicy = () => {
  const breadcrumbItems = [
    { path: '/', label: 'Home' },
    { path: '/refund_policy', label: 'Refund Policy' }
  ];
  return (
    <div>
       <Banner 
        title="Refund Policy"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
       <div className='refund-outer'>
        <section>
        <Titletag
            title="Refund Policy"
            bgImage={NameBanner}
            className="pt-5"
          />
          <div className='container'>
          <h2 class="listtitle">Precision Grow Refund Policy for SaaS Products</h2>
          <h3>Effective Date: February 1, 2024</h3>
          <p>Thank you for choosing Precision Grow and our SaaS Products. We strive to provide our customers with a seamless and satisfactory experience. This Refund Policy outlines the terms and conditions under which refunds may be issued for our SaaS product.
</p>
<ol>
  <li>
    <h5>Refund Eligibility :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Refunds will be considered only in the following circumstances:</b></p>
    <p>The company is unable to deliver the specified datasets as promised in the product description.</p>
  </li>
  <li>
    <h5>Initiating a Refund Request :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Customers must submit a refund request to mail@precisiongrow.co.in within 3 days from the date of purchase.</b></p>
    <p ><b><i className="fa-solid fa-arrow-right"></i> The request must include:</b></p>
    <ol style={{listStyle:'square'}}>
      <li><p>Order details (Order number, date of purchase)</p></li>
      <li><p>Detailed explanation of the issue</p></li>
      <li><p>Any supporting documentation that may be relevant</p></li>
    </ol>
  </li>
  <li>
    <h5>Refund Process :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Upon receiving a refund request, our team will review the case and assess the validity of the claim.</b></p>
    <p ><b><i className="fa-solid fa-arrow-right"></i> If it is determined that Precision Grow was unable to deliver the datasets as specified, a refund will be processed.</b></p>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Refunds will be issued through the same payment method used for the original purchase.</b></p>
  </li>
  <li>
    <h5>Exceptions :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Refunds will not be provided for any issues arising from user error, misuse, or failure to meet system requirements.</b></p>
    <p> No refunds will be issued after 3 days period from the date of purchase.</p>
  </li>
  <li>
    <h5>Contact Information :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> For any questions or concerns regarding the refund policy, please contact our customer support at <Link to="mail@precisiongrow.co.in">mail@precisiongrow.co.in</Link></b></p>
    <p>The company is unable to deliver the specified datasets as promised in the product description.</p>
  </li>
  <li>
    <h5>Policy Updates :</h5>
    <p ><b><i className="fa-solid fa-arrow-right"></i> Precision Grow reserves the right to update or modify this refund policy at any time. Customers will be notified of any changes through our website or other appropriate channels.</b></p>
 
  </li>
  <p> By purchasing and using our SaaS Products, you acknowledge and agree to abide by the terms and conditions outlined in this Refund Policy.</p>
</ol>
<h2 className='text-center py-5'>Thank you for choosing Precision Grow.</h2>
          </div>
        </section>
       </div>
    </div>
  )
}

export default RefundPolicy
