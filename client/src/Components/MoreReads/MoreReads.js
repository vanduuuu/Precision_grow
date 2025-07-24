import React from 'react';
import './MoreReads.css';
import { PublicationApi } from './PublicationApi';
import Titleunderline from '../Reusablecomp/Titleunderline/Titleunderline';

const MoreReads = () => {
  return (
    <div className="container my-5">
<Titleunderline title="More Reads" tag="h1"/>
      <div className="row justify-content-center">
        {PublicationApi.map((pub, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={pub.id}>
            <div className="glass-card h-100 d-flex flex-column position-relative shadow-sm rounded-4 border border-gradient">
              <div className="serial-number">{index + 1}</div>

              <div className="flex-grow-1">
                <p className="mb-2 pub-hover">
                  <strong>Publication Name:</strong>{" "}
                  <span>{pub.name}</span>
                </p>
                <p className="mb-2">
                  <strong>Article Title:</strong> {pub.title}
                </p>
                <p className="mb-2">
                  <strong>Volume:</strong>{" "}
                  <span className="highlight-volume">{pub.volume}</span>
                </p>
                <p className="mb-4">
                  <strong>Days of Publication:</strong> {pub.date}
                </p>
              </div>

              <div className="text-end mt-auto">
                <a
                  href={pub.pdf}
                  className="btn gradient-btn btn-sm text-white px-3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  📄 View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreReads;
    