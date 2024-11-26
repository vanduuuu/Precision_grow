import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import Footlogo from "../../../assets/foot-logo.webp"
import Saplogo from "../../../assets/sap-b1.webp"
import Indiaflag from '../../../assets/india-flag.webp'
import Usflag from '../../../assets/us.png'
import client1 from '../../../assets/nasscom.png'
import client2 from '../../../assets/Assocham_India.png'
import client3 from '../../../assets/cii.png'
import client4 from '../../../assets/ficci.png'
import client5 from '../../../assets/ifoam.png'
import trackter from '../../../assets/7.png'
import dun from '../../../assets/dun-logo.jpeg'






function Footer() {
  return (
    <>
    <Link to="https://wa.me/+918097283444?text=Welcome To Precision Grow" className="whatsapp_btn circle-50" data-title="whatsapp" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
    <div className="support"> 
            <p className="text-center">We Make Farming Better With Remote Sensing  Data For Partnership Contact Us At <a href="mailto:mail@precisiongrow.co.in"><span className="hglt">mail@precisiongrow.co.in</span></a></p>
            <p className="p-0 m-0 text-center">For Support Contact Us For <a href="mailto:support@precisiongrow.co.in"><span className="hglt">support@precisiongrow.co.in</span></a></p>
            </div>
      <footer className="footer" style={{backgroundImage:'../../../assets/16.png'}}>
        <div className="foot-newsletter">
            
        </div>
        <div className="container">
          <h2 className="text-whitee  text-center">
            Agriculture Meets Technology with<br/>
            Precision Grow
          </h2>
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <div className="widget1">
                <div className="footerlogo">
                  <img src={Footlogo} className="img-fluid mb-4 rounded"  alt="" />
                </div>
                <a href="#"><img src={dun} alt="DUN logo" className="rounded dunlogo"/></a>

                <h5 className="power ml-5">Powered By</h5>
                <img src={Saplogo} alt="sap icon" className="sap footerlogo rounded mb-4"/><br/>

                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/PrecisionGrow/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fprecision_grow">
                      <i className="fa-brands fa-square-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/precision-grow/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/precisiongrow_/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://precisiongrowindia.blogspot.com/">
                        <i className="fa-brands fa-blogger-b"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://precisiongrow.co.in/">
                        <i className="fa-brands fa-flickr"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://soundcloud.com/precision-grow?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                        <i className="fa-brands fa-soundcloud"></i>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 offset-lg-1 footer-here-is">
              <h5>Get in Touch and Start Your Journey to Success</h5>
              <div className="row">
                <div className="col-md-2">
                <i class="fa fa-map-marker"><div></div></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Corporate Office :</h6></li>
                    <li>
                    Unit No 22, Building No. 2(A3), Sector 1,
Millennium Business Park, Mahape, Navi Mumbai, 400710
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                <i class="fa fa-map-marker"><div></div></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Regd. Office :</h6></li>
                    <li>
                    Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi,
                    Mumbai, Mumbai City, Maharashtra, 400703
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                <i class="fa fa-map-marker"><div></div></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Project Office :</h6></li>
                    <li>
                      61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel,
                      Mumbai, 400012
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-5 text-white">
             
                <ul className="country-flag inline-block">
                                        <li>
                                            <div className="icon-flag">
                                            <img className="imgh" src={Indiaflag}  alt="India" />
                                          </div>
                                          <div className="content">
                                          <p className=""><strong>INDIA</strong></p>

                                          <strong>Phone :</strong>
                                          <a href="tel:912248888888">+91 22 48888888</a> / <a href="tel:912246165798">46165798</a>
                                         
                                          <div className="content mt-3">
                                              <strong>Mobile :</strong>
                                              <a href="tel:918097283444">+91 8097283444</a>
                                          </div>
                                          </div>
                                        </li>
                                            <li>
                                       
                                       <div className="icon-flag">
                                       <img className="imgh" src={Usflag} width="45px" alt="us" />
                                     </div>
                                     <div className="content">
                                     <p className=""><strong>USA</strong></p>
                                         <strong>Phone :</strong>
                                         <a href="tel:0014242390105">+1 424-239-0105</a>
                                     </div>
                                     </li>
                                         
                                    </ul>
              </div>
            </div>

            <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-1">
              <div className="widget4">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/ecrop">Products</Link>
                  </li>
                  <li>
                    <Link to="/crop_monitoring">Sustainability</Link>
                  </li>
                  <li>
                    <Link to="https://precisiongrowindia.blogspot.com/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/FaqPage">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/refund_policy">Policy</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-certified text-center">
                <div className="row">
                    <ul>
                        <li><img className="logo-certi" src={client1} alt="nasscom"/></li>
                        <li><img className="logo-certi" src={client2} alt="Assocham_India"/></li>
                        <li><img className="logo-certi" src={client3}  alt="cii"/></li>
                        <li><img className="logo-certi" src={client4}  alt="ficci"/></li>
                        <li><img className="logo-certi" src={client5} alt="ifoam"/></li>
                    </ul>

                </div>
            </div>
        </div>
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-md-left mb-3 mb-md-0 zindex" >
                <p className="">
                  &copy; 2024. All Rights Reserved by <span>Precision Grow (A Unit of
                  Tech Visit IT Pvt Ltd)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-right-bottom">
            <img src={trackter} alt="Image Not Found"/>
        </div>
      </footer>
    </>
  );
}
export default Footer;
