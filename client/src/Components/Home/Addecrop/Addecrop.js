import React from 'react'
import './Addecrop.css'
// import IcarCiphet from '../../../assets/icons_About/ICAR-CIPHET.webp'
// import Iimr from '../../../assets/icons_About/IIMR.webp'
import pglogo from '../../../assets/icons_About/Precision-Grow.webp'
import azadilogo from '../../../assets/icons_About/Aazadi.webp'

const Addecrop = () => {
  return (
    <div>
      <div className='container-fixed ecrop-outer img-fluid' data-aos="fade-up" data-aos-duration="2000">
        <section>
            <div className='container-fluid addecrop'>
           
                <div className='row'>
                    {/* <div className='col-lg-4 leftecropadd'> */}
                        {/* <div className='machinee'>
                            <img src="https://api.ecrop.co/assets/precisiongrow/ecropnewmachine.webp" loading="lazy" alt="ecrop-device" />
                        </div> */}
                    {/* </div> */}
                    <div className='col-lg-7 col-md-8 offset-lg-2 offset-md-0 text-center medecropadd'>
                       <div>
                <h2 className='display-3 boldlook'>Your Own Agriculture Assistant</h2>
                <h5 className='my-3 fs-4'>Get real-time data on your crops and make informed decisions.</h5>
                       <p className='t1 m-0'>Manufactured & Marketed by</p>
                        <p className="display-4 pt-3 boldlook m-0" >Precision <span className='textt-color'>Grow</span></p>

                        <h5>(A Unit of Tech Visit IT Pvt Ltd)</h5>
                        <div className='pt-2'>
                        <p className='t1 m-0'>Developed & Patented by</p>
                        <h2 className='ceritified-icon'>ICAR-Central Tuber Crops Research Institute</h2>
                        <ul className='ecrop_ul mt-4 p-0'>
                                <li>Patent No. 523325 </li>
                                <li> Toll Free No. 18002688989</li>
                            </ul>
                            <div className="logo-list">
                            <ul>
                                <li><img src="https://api.ecrop.co/assets/precisiongrow/logo-3.webp" loading="lazy" className="logo1" alt="logo31"/></li>
                                                                <li><img src="https://api.ecrop.co/assets/precisiongrow/logo-4.webp" loading="lazy" className="logo1" alt="logo41"/></li>

                                <li><img src={pglogo} loading="lazy" className="logo1" alt="logo11"/></li>
                                                                <li><img src={azadilogo} loading="lazy" className="logo1" alt="logo21"/></li>

                               
                            </ul>
                        </div>
                        </div>

                        <div className="ceritified-icon">
                          <ul className="hr-lines p-0 m-0">
                         <li><img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-1.webp" loading="lazy" alt="logo51"/></li>
                        <li><img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-2.webp" loading="lazy" alt="logo61"/></li>
                        <li><img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-3.webp" loading="lazy" alt="logo71"/></li>
                        <li><img src="https://api.ecrop.co/assets/precisiongrow/cer-logo-4.webp" loading="lazy" alt="logo81"/></li>
                    </ul>
                  </div>
                       </div>
                    </div>
                    <div className='col-lg-3 col-md-4'>
                    <div className="agri">
                        <ul>
                            <li><span>1</span>Real-time crop health monitoring</li>
                            <li><span>2</span>Weather forecasts and alerts</li>
                            <li><span>3</span>Soil moisture and nutrient levels</li>
                            <li><span>4</span>Pest and disease detection</li>
                            <li><span>5</span>Personalized farming tips</li>
                        </ul>
                    </div>
                   
                    </div>
                  
                </div>
            </div>
        </section>
        
      </div>
    </div>
  )
}

export default Addecrop
