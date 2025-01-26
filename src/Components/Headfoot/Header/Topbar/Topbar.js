import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaBlogger, FaSoundcloud } from 'react-icons/fa'; // React Icons import
import './Topbar.css';

const Topbar = () => {
  return (
    <>
      <div className='marquee-bar'>
      <div className="scrolling-text">
  <h6 className='text-white'>
    World's First Toll Free No. For <span className="orange">eCROP</span> - <span className="o-no">18002688989</span>
  </h6>
</div>

      </div>
      <div className="top-bar-area text-light">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3 col-md-4 mx-auto">
              <ul className="d-flex addr1">
                <li>
                  <Link to="mailto:mail@precisiongrow.co.in">
                    {/* Wrap icon in the existing class */}
                    <FaEnvelope className="fa" /> <span>mail@precisiongrow.co.in</span>
                  </Link>
                </li>
                <li>
                  <Link to="tel:+918097283444">
                    <FaPhoneAlt className="fa" /> <span>+91 - 8097283444</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 text-center'>
              <div className="d-flex align-items-center text-center text-light addr2">
                <Link to="https://maps.app.goo.gl/wa6USgTW4GJhCwUz8?g_st=aw">
                  <FaMapMarkerAlt className="fa fa-map-marker-alt text-white" />
                  <span className='text-white px-2'>
                    Unit No 22, Building No.2(A3), sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 px-5 col-md-5">
              <div className="social">
                <ul className="d-flex">
                  <li>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow" className="twitter" target="_blank" rel="noopener noreferrer">
                      {/* Wrap icon in the existing class */}
                      <FaTwitter className="fa fa-twitter fas" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/PrecisionGrow" className="facebook" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/precisiongrow_/" className="instagram" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/100778255/admin/feed/posts/" className="linkedin" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g" className="youtube" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://precisiongrowindia.blogspot.com/" className="blogger" target="_blank" rel="noopener noreferrer">
                      <FaBlogger className="fa fa-blogger" />
                    </a>
                  </li>
                  {/* <li>
                    <Link to="#" className="flickr" target="_blank" rel="noopener noreferrer">
                      <FaFlickr className="fa fa-flickr" />
                    </Link>
                  </li> */}
                  <li>
                    <a href="https://on.soundcloud.com/BTa2Q" className="soundcloud" target="_blank" rel="noopener noreferrer">
                      <FaSoundcloud className="fa fa-soundcloud" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
