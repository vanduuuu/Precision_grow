import React from 'react';
import Banner from '../../Banner/Banner';
import Titletag from '../../Titletag/Titletag';
import biosence from '../../../assets/bio-sense.png';
import './Biosence.css';
import boichart from '../../../assets/bio-chart.png';
import ease from '../../../assets/rs.png';
import rs1 from '../../../assets/ease1.png';
import test from '../../../assets/test.png';
import rs from '../../../assets/1.jpg';
import biomob from '../../../assets/bio-mob.png'

import HeadBanner from '../../../assets/aerial-drone.webp'
import NameBanner from '../../../assets/hero_44.webp'


const Biosence = () => {
    const breadcrumbItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "Biosence" },
    ];

    return (
        <div>
            <Banner
                title="Biosence"
                backgroundImage={HeadBanner}
                breadcrumbItems={breadcrumbItems}
            />
            <div className="abt-outer">
                <section>
                    <div className="container">
                        <Titletag
                            title="Biosence"
                            bgImage={NameBanner}
                            className="pt-5"
                        />
                        <p className="txt1">
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
                                            <ul>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> N (Nitrate) </li>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> K (Potassium)</li>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> P (Phosphate)</li>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> pH - Soil acidity</li>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> Organic Carbon</li>
                                                <li className="mt-1"><i className="fa-brands fa-pagelines"></i> EC (Electric Conductivity)</li>
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
                                    <img src={biosence} alt="biosence img" />
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
                                    <p>BioSense is based on a pre-calibrated electrochemical technology that is reliable, rapid and accurate</p>
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
                                    <img src={biomob} alt="bio-mob"/>
                                    <h4 className="soil mt-3">Soil Health Card accessible on the <br/>mobile phone!</h4>
                                </div>
                            </div>
                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div>
                                    <img src={boichart} alt="how_to_test_soil_image" />
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
