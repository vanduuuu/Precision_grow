import React from 'react';
import LeftTextVideo from '../../LeftTextVideo/LeftTextVideo';
import Titletag from '../../Titletag/Titletag';
import './AgricLoan.css';
import ListComponent from '../../ListComponent/ListComponent';

import Namebanner from '../../../assets/hero_44.webp';
import Videobg from '../../../assets/agro-loan.mp4';

const AgricLoan = () => {
  const listItems5 = [
    'No reliable way to verify a farmers authenticity with minimal data.',
    'Lack of a robust system to determine farmer eligibility for loans.',
    'Multi-stage assessments slow down the process.',
    'Limited automation, extensive manual involvement.',
  ];

  const listItems6 = [
    'Verification relies on manual surveys, causing time delays.',
    'Claim settlements rely on manual surveys; no system to trace farm-level activity.',
    'Transparency gap between farmers and lenders.',
    'Farmers or surveyors providing false reports for fraudulent claims.',
  ];

  const loancardApi = [
    {
      id: 1,
      icon: '01',
      desc: 'Satellite data for ground-level verification, minimizing manual intervention.',
    },
    {
      id: 2,
      icon: '02',
      desc: 'Solution combines cadastral and satellite data for efficient farmer land verification.',
    },
    {
      id: 3,
      icon: '03',
      desc: 'Regular data updates from both parties enhance transparency.',
    },
    {
      id: 4,
      icon: '04',
      desc: 'Satellite data for ground-level verification, minimizing manual intervention.',
    },
    {
      id: 5,
      icon: '05',
      desc: 'Remote-sensing data for risk assessment and claim settlement.',
    },
    {
      id: 6,
      icon: '06',
      desc: 'Farm-level data for direct settlements, departing from taluka averages.',
    },
    {
      id: 7,
      icon: '07',
      desc: 'Satellite validation cuts false reporting, settlements; no manual intervention.',
    },
    {
      id: 8,
      icon: '08',
      desc: 'Closes the tech gap, streamlining the solution for maximum efficiency.',
    },
  ];

  return (
    <div>
      <div>
        <LeftTextVideo
          title="Transforming Agricultural Financing through Satellite Data Intelligence"
          buttonText="Contact Us"
          buttonLink="/contact"
          videoSrc={Videobg}
        />
      </div>
      <div className="ai-outer">
        <section>
          <div className="container">
            <Titletag
              title="Agri Loan"
              bgImage={Namebanner}
              className="pt-5"
            />
            <div className="loanp2 text-center">
              <p className="text-center">
                Welcome to the future of agri-lending!<br />
                Our advanced solution uses satellite data for precise risk insights, streamlining decisions for both lenders and farmers.
              </p>
              <h1 style={{ color: '#c8d41a' }}>Issues</h1>
              <p className="text-center">
                Lenders encounter various challenges; let's examine a few.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ListComponent items={listItems5} />
              </div>
              <div className="col-lg-6">
                <ListComponent items={listItems6} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="loanouter-div">
        <section>
          <div className="container">
            <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Solutions</h1>
            <div className="row">
              {loancardApi.map((loancard) => (
                <div className="col-xl-3 col-md-6 mb-5" key={loancard.id}>
                  <div className="service-card">
                    <div className="icon-wrapper">{loancard.icon}</div>
                    <p>{loancard.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AgricLoan;
