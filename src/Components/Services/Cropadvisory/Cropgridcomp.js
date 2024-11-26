import React from 'react';
import './Cropgridcomp.css';

const Cropgridcomp = ({ image, title, description, reverse }) => {
    return (
        <div className={`container py-5`}>
            <div className={`row ${reverse ? 'flex-row-reverse' : ''}`}>
                <div className="col-md-6">
                    <img
                        src={image}
                        className="img-fluid crop-image"
                        alt={title}
                    />
                </div>
                <div className="col-md-6">
                    <h5 className="txxt1">{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cropgridcomp;
