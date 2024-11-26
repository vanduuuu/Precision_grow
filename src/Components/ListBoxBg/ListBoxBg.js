import React from 'react';
import ListCompTitle from '../ListComponent/ListCompTitle';
import './ListBoxBg.css';

const ListBoxBg = ({ mediaSrc,para1,para2, title, items, textcolor, bgcolor, mediaType = 'image' }) => {

  const paragraphStyle = {
    color: 'white',
  };
  const h4Stylee = {
    color: 'white',
  }

  return (
    <div className="vdotxtt position-relative">
      <div className='shapehere'></div>
      {mediaType === 'video' ? (
        <video
          src={mediaSrc}
          className="position-absolute w-100 h-100"
          style={{ objectFit: 'cover' }}
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={mediaSrc}
          alt="Background"
          className="position-absolute w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="vdotxttinfo position-absolute" style={{ backgroundColor: bgcolor }}>
        <h1 className="mb-4" style={{ color: textcolor }}>{title}</h1>
        <p>{para1}</p>
        <ListCompTitle
          items={items}
          pStyle={paragraphStyle} // Pass paragraph styles here
          h4Style={h4Stylee} // Pass paragraph styles here
        />
        <p>{para2}</p>
      </div>
    </div>
  );
};

export default ListBoxBg;
