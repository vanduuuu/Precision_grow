import React, { useState, useEffect } from 'react';
import Banner from '../../Banner/Banner';
import Titletag from '../../Titletag/Titletag';
import fqaApi from './FaqPageApi'; // Importing fqaApi
import './FaqPage.css';

import HeadBanner from '../../../assets/aerial-drone.webp'
import NameBanner from '../../../assets/hero_44.webp'




const FaqPage = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'FAQ' }
    ];

    const [faqs, setFaqs] = useState([]);

    // Setting the FAQ data from fqaApi on component mount
    useEffect(() => {
        setFaqs(fqaApi); // Simulating an API call
    }, []);

    return (
        <div>
            <Banner
                title="FAQ"
                backgroundImage={HeadBanner}
                breadcrumbItems={breadcrumbItems}
            />
            <div className='abt-outer'>
                <section>
                    <div className="faq-bg bg-gray">
                        <div className="container">
                            <Titletag
                                title="FAQ"
                                bgImage={NameBanner}
                                className="pt-5"
                            />
                            <div className="col-md-11 mx-auto" >
                                <div className="accordion" id="accordionExample">
                                    {faqs.map((content, index) => (
                                        <div className="accordion-item" data-aos="fade-up" key={content.id}>
                                            <h2 className="accordion-header p-0">
                                                <button
                                                    className="accordion-button collapsed shadow-none" // Ensure "collapsed" class is added
                                                    style={{ backgroundColor: '#2c2b26' }}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${index}`}
                                                    aria-expanded="false" // Set to false by default
                                                    aria-controls={`collapse${index}`}
                                                >
                                                    <div className="d-flex">
                                                        <div className="acco-no">{content.srno}</div>
                                                        <div className="acco-text">{content.title}</div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                className="accordion-collapse collapse" // Ensure collapse is not open by default
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{content.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FaqPage;
