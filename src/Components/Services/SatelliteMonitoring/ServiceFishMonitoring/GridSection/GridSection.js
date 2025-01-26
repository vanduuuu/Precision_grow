import React from 'react'
import './GridSection.css'
const GridSection = ({ image, title, content, reverse }) => {
  return (
    <div className="grid-section">
        <div className='container'>
          <div className='row'>
            {/* Reverse order if reverse is true */}
            <div className={`col-lg-6 ${reverse ? 'order-lg-2' : ''}`}>
              <div className='imgwrapper'>
                <img className="fishimghere shadow" loading="lazy" src={image} alt={title}/>
              </div>
            </div>
            <div className={`col-lg-6 ${reverse ? 'order-lg-1' : ''}`}>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GridSection
