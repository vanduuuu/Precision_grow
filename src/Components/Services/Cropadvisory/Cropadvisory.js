import React from 'react';
import LeftTextVideo from '../../LeftTextVideo/LeftTextVideo';
import cropadvisory from '../../../assets/cropadvisory.mp4';
import r1 from '../../../assets/r1.png';
import r2 from '../../../assets/r2.png';
import r3 from '../../../assets/r3.png';
import './Cropadvisory.css';
import Cropgridcomp from './Cropgridcomp'; // Make sure this component is correctly defined
import c1 from '../../../assets/Supporting.webp'
import c2 from '../../../assets/Reducing.webp'
import c3 from '../../../assets/A-Commitment-to-Sustainable-Agriculture.webp'




const api1 = [
    {
        title: "Pest Preparedness",
        description: "Precision Grow offers real-time pest monitoring and forecasting, allowing farmers to anticipate and mitigate pest outbreaks before they occur. Through advanced satellite imagery, remote sensing, and AI-powered data analysis, we provide farmers with early warnings and region-specific pest management solutions, ensuring that crops are protected efficiently and sustainably.",
        image: r1,
    },
    {
        title: "Farmer Advisory",
        description: "Our comprehensive advisory platform offers personalized, data-driven recommendations tailored to each farmer's unique crop and location. We focus on enhancing the uptake of Integrated Pest Management (IPM) practices by providing farmers with access to cutting-edge digital advisory tools. These tools help farmers make informed decisions on pest control, nutrient management, and water usage, ensuring optimal crop health. We also provide hands-on training through field agents and digital platforms, making IPM knowledge easily accessible to all farmers, regardless of location or resources. This pathway plays a critical role in improving yields while reducing the reliance on chemical inputs.",
        image: r2,
    },
    {
        title: "Pesticide Risk Reduction",
        description: "We promote the safe and responsible use of pesticides by educating farmers on sustainable alternatives and effective application techniques. By encouraging the use of eco-friendly pest control methods such as biological control agents, Precision Grow helps farmers reduce their dependence on harmful chemicals, leading to healthier crops and reduced environmental impact. Additionally, we collaborate with regulatory bodies to ensure that pesticide use complies with local and international safety standards.",
        image: r3,
    },
];

const sections = [
    {
        image: c2,
        title: 'Reducing Crop Losses and Increasing Food Security',
        description: 'Through our advisory services, farmers gain access to more accurate and actionable information, allowing them to adopt more sustainable farming practices. As a result, they experience reduced crop losses, increased resilience to climate challenges, and higher yields. This contributes to greater food security, not just for individual farmers, but for entire communities that depend on consistent and reliable food production.',
        reverse: false,
    },
    {
        image: c1, // Replace with another image
        title: 'Supporting Rural Youth and Women',
        description: 'We are committed to promoting inclusivity in agriculture. Precision Grows programs are designed to provide rural youth and women with access to training and resources, empowering them to develop new income-generating opportunities within the agricultural sector. By nurturing entrepreneurship and fostering innovation, we help create a more sustainable and equitable agricultural landscape for future generations.',
        reverse: true,
    },
    {
        image: c3, // Replace with another image
        title: 'A Commitment to Sustainable Agriculture',
        description: 'At Precision Grow, we believe that knowledge is the key to sustainable agriculture. By providing farmers with the tools, training, and support they need to adapt to changing environmental conditions and market demands, we help create resilient farming systems that can feed the world, protect natural resources, and provide livelihoods for millions of people.With Precision Grow’s Crop Advisory Services, farmers can grow more with less, ensuring long-term food security, improved livelihoods, and sustainable agricultural practices.',
        reverse: false,
    },
];

const Cropadvisory = () => {
    return (
        <>
            <div className='cropOut1'>
                <LeftTextVideo
                    title="Knowledge for Growth"
                    description="At Precision Grow, we understand the evolving needs of farmers and the agricultural systems that support them. 
                    "
                    buttonText="Contact Us"
                    buttonLink="/contact"
                    videoSrc={cropadvisory}
                />
            </div>
            <div className='cropadvisory-outer'>
                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <p className='para23'>Our Crop Advisory Services are designed to predict, prevent, and respond to plant health challenges while minimizing crop losses.
                     Through climate-resilient and inclusive approaches, we empower farmers, particularly smallholders, with the tools and knowledge to thrive.
                      Our services operate through three key pathways:</p>
                            {api1.map((card, index) => (
                                <div className="col-lg-4 col-md-12 mb-3" key={index}>
                                    <div className="card text-center position-relative">
                                        <img
                                            src={card.image}
                                            className="card-img-top img-fluid"
                                            alt="Card"
                                        />
                                        <div className="card-body">
                                            <h4 className="card-title" style={{color: '#12170a',padding:'20px 0px'}}>{card.title}</h4>
                                            <p className="card-text">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className='dropdivAd py-5'>
                    <div className='container'>
                        <blockquote className="quote-container">
                            <h4 ><b style={{color: 'yellow'}}>Empowering Agri-Service Providers</b></h4>
                            <p className="para20">Precision Grow supports a diverse range of agricultural service providers, from local agronomists to input dealers, by enhancing their advisory capabilities. We provide them with gender-sensitive and culturally relevant resources, ensuring that both men and women in rural communities benefit equally from our services. By equipping these providers with decision-support tools, we empower them to offer accurate and timely advice to farmers, improving crop productivity and creating new business opportunities for the providers themselves.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className='cropAddiv2'>
                {sections.map((section, index) => (
                    <Cropgridcomp
                        key={index}
                        image={section.image}
                        title={section.title}
                        description={section.description}
                        reverse={section.reverse}
                    />
                ))}
            </div>
        </>
    );
}

export default Cropadvisory;
