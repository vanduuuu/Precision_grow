import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
   <>
   <div className='marquee-bar'>
   <marquee behavior="alternate" scrollamount="3"><h5 className='text-white'>World's First Toll Free No. For <span className="orange">eCROP</span> - <span class="o-no">18002688989</span></h5></marquee>
   </div>
    <div className="top-bar-area text-light">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <ul className="d-flex addr1">
              <li>
                <Link to="mailto:mail@precisiongrow.co.in">
                  <i className="fa fa-envelope"></i> <span>mail@precisiongrow.co.in</span>
                </Link>
              </li>
              <li>
                <Link to="tel:+918097283444">
                  <i className="fa fa-phone"></i> <span>+91 - 8097283444</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 ">
            <div className="social">
              <ul className="d-flex ">
                <li>
                  <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow" className="twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/PrecisionGrow" className="facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/precisiongrow_/" className="instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/100778255/admin/feed/posts/" className="linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g" className="youtube" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://blogger.com" className="blogger" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-blogger"></i>
                  </a>
                </li>

                <li>
                  <Link to="#" className="flickr" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-flickr"></i>
                  </Link>
                </li>
                <li>
                  <a href="https://on.soundcloud.com/BTa2Q" className="soundcloud" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-soundcloud"></i>
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
