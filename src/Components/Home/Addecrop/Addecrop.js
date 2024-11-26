import React from 'react'
import './Addecrop.css'
import ecropmachine from '../../../assets/ecrop-machine.png'
import Logo1 from '../../../assets/logo-1.webp'
import Logo2 from '../../../assets/logo-2.webp'
import Logo3 from '../../../assets/logo-3.webp'
import Logo4 from '../../../assets/logo-4.webp'
import CerLogo1 from '../../../assets/cer-logo-1.png'
import CerLogo2 from '../../../assets/cer-logo-2.png'
import CerLogo3 from '../../../assets/cer-logo-3.png'
import CerLogo4 from '../../../assets/cer-logo-4.png'



const Addecrop = () => {
  return (
    <div>
      <div className='container-fixed ecrop-outer'>
        <section>
            <div className='container-fluid'>
                <div className='text-center mb-5'>
                <h1 className='fw-5'>Your Own Agriculture Assistant</h1>
                <h5 style={{color:'#164e4c'}}>Get real-time data on your crops and make informed decisions.</h5>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='machinee'>
                            <img src={ecropmachine} alt="ecrop-device"/>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                       <div>
                       <p className='t1'>Manufactured & Marketed by</p>
                        <h1 style={{color:'#164e4c',margin:'0px',marginTop:'20px'}}>Precision Grow</h1>
                        <h5 style={{color:'#164e4c',marginBottom:'50px'}}>(A Unit of Tech Visit IT Pvt Ltd)</h5>
                        <div>
                        <p className='t1' style={{background:'#366da9'}}>Developed & Patented by</p>
                        <h2 style={{color:'#386102',margin:'0px',marginTop:'20px'}}>ICAR-Central Tuber Crops Research Institute</h2>
                        <ul className='ecrop_ul mt-4'>
                                <li>Patent No. 523325 </li> |
                                <li> Toll Free No. 18002688989</li>
                            </ul>
                            <div class="logo-list">
                            <ul>
                                <li><img src={Logo1} className="logo" alt="logo"/></li>
                                <li><img src={Logo2} className="logo" alt="logo"/></li>
                                <li><img src={Logo3} className="logo" alt="logo"/></li>
                                <li><img src={Logo4} className="logo" alt="logo"/></li>
                            </ul>
                        </div>
                        </div>

                        <div class="ceritified-icon">
                <ul class="hr-lines">
                         <li><img src={CerLogo1} alt="logo"/></li>
                        <li><img src={CerLogo2} alt="logo"/></li>
                        <li><img src={CerLogo3} alt="logo"/></li>
                        <li><img src={CerLogo4} alt="logo"/></li>
                    </ul>
                  </div>
                       </div>
                    </div>
                    <div className='col-lg-4'>
                    <div class="agri">
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
