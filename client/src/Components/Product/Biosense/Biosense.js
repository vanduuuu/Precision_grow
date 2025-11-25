import React from 'react';
import biosence from '../../../assets/bio-sense.png';
import './Biosense.css';
import boichart from '../../../assets/bio-chart.png';
import ease from '../../../assets/rs.png';
import rs1 from '../../../assets/ease1.png';
import test from '../../../assets/test.png';
import rs from '../../../assets/1.jpg';
import biomob from '../../../assets/bio-mob.png'
import Titleunderline from "../../Reusablecomp/Titleunderline/Titleunderline.js";
import { FaLeaf } from "react-icons/fa";
import img1 from '../../../assets/aerial-drone.webp'
import Banner from '../../Reusablecomp/Banner/Banner.js';


const Biosence = () => {


    return (
        <div>
             <Banner
          imageSrc={img1}
          heading="Biosense"
          subheading="Instant Soil Health at Your Fingertips"
        />
            <div className="abt-outer">
                    <Titleunderline title="Biosense" tag="h1" align="center" />

                <section>
                    <div className="container">
                     
                        <p className="text-center fs-4">
                            BioSense is a compact, on-site soil testing device which is easy to use, accurate and affordable.
                            Multiple samples are collected and tested in an incredibly short time. This enables instant availability of results, bringing the lab to the field!
                        </p>
                    </div>
                </section>
            </div>
            <div className='shapehere1'>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="achivement-items">
                                    <ul className="list-details Vision-miss">
                                        <li>
                                            <h2 className='listtitle'>What Does It Do?</h2>
                                            <p>BioSense for soil, is comparable to a glucometer for humans. It measures the following soil-health parameters :</p>
                                           <ul className='list-unstyled mb-4'>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> N (Nitrate)</li>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> K (Potassium)</li>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> P (Phosphate)</li>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> pH - Soil acidity</li>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> Organic Carbon</li>
  <li className="mt-1"><FaLeaf className="me-2 text-success" /> EC (Electric Conductivity)</li>
  <li>(Extendable to micro-nutrients with update)</li>
</ul>
                                        </li>
                                        <li>
                                            <h2 className='listtitle'>How Does It Help?</h2>
                                            <p>Currently, farmers have to send the soil sample to agricultural labs, which is time-consuming and expensive. Using BioSenses, anyone with basic training can perform soil analysis in the field with precise results and recommendations at a very nominal price.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div>
                                    <img src={biosence} alt="biosense img" className='w-100'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div>
                                    <h2 className='listtitle'>How to Test Soil</h2>
                                    <p className='fs-5'>BioSense is based on a pre-calibrated electrochemical technology that is reliable, rapid and accurate</p>
                                    <div className="row text-center">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="feature-item">
                                <img src={rs} alt="rs"/>
                                <h4>15 days <br/> 5 mins</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="feature-item">
                            <img src={ease} alt="rs"/>
                            <h4>₹ 750 <br/>₹ 250</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="feature-item">
                            <img src={test} alt="rs"/>
                            <h4>On-Site Testing</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="feature-item">
                            <img src={rs1} alt="rs"/>
                            <h4>Ease of Use</h4>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                                <div className='biomobb'>
                                    <img src={biomob} alt="bio-mob" className='w-100 h-100'/>
                                    <h4 className="soil mt-3">Soil Health Card accessible on the <br/>mobile phone!</h4>
                                </div>
                            </div>
                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div>
                                    <img src={boichart} alt="how_to_test_soil_image" className='w-100 h-100' />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
     
        </div>
    );
}

export default Biosence;
