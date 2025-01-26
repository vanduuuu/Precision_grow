import React from 'react'
import './Gdp.css'
import { RxTriangleRight } from "react-icons/rx";

//import ecropimg from '../../assets/ecrop-machine.webp'
import ecolooimg from '../../assets/images/sus-img1.webp'
const Gdp = () => {
  return (
    <div>
      <div className="container-fixed bg111">
        <div className='container py-5'>
        <div className="modi-container m-cont11">
            <div className="row py-2 mb-5">
                <div className="col-lg-6 col-12 text-dark">
                <h1 class="m-title">What Does Green GDP Include?</h1>
                    <ul >
                        <li><h6><RxTriangleRight />The services given by the environment are included in the Green GDP. For &nbsp; &nbsp; &nbsp;example, if one geographical location has higher water quality than &nbsp;&nbsp;&nbsp;another, the residents in that region are likely to enjoy healthier and more  &nbsp;&nbsp;&nbsp;productive lives.</h6>
                        </li>
                        <li><h6><RxTriangleRight />The medical expenses linked with contaminated water or air have a  &nbsp;&nbsp;&nbsp;tangible and measurable cost.</h6>
                        </li>
                        <li><h6><RxTriangleRight />As a result, it is feasible to establish a baseline for the quality of natural  &nbsp;&nbsp;&nbsp;resources present in an ecosystem and the savings they provide.</h6></li>
                        <li><h6><RxTriangleRight />The most significant aspect of Green GDP is the depletion analysis.</h6></li>
                        <li><h6><RxTriangleRight />This document outlines the process of natural resource depletion in an  &nbsp;&nbsp;&nbsp;economy. It also explains whether or not the trend is sustainable.</h6></li>
                        <li><h6><RxTriangleRight />This information is helpful for investors who make investments based on a  &nbsp;&nbsp;&nbsp;country’s natural resources that can be used.</h6>
                        </li>
                        <li><h6><RxTriangleRight />As a result, the depletion of natural resources would deter investors from  &nbsp;&nbsp;&nbsp;maintaining an ecological equilibrium.</h6></li>
                        <li><h6><RxTriangleRight />It should be remembered, however, that the depletion analysis is merely  &nbsp;&nbsp;&nbsp;an informational document. It has no legal backing, and the participants &nbsp;&nbsp;&nbsp;can do anything.</h6></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12">
                    <div className='include-img mx-auto'>
                    <img src={ecolooimg} loading="lazy" alt="inc-img" className='w-100'/>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Gdp;
