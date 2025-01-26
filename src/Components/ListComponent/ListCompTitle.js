import React from 'react';

const ListCompTitle = ({ items,ulStyle={}, h4Style = {}, h6Style = {}, pStyle = {} }) => {
  return (
    <div className='ai-list-item'>
      <ul style={ulStyle}>
        {items.map((item, index) => (
          <li key={index} >
            <h4 style={{ ...h4Style, textTransform: 'uppercase' }}>
              {item.title}
            </h4>
            <p style={pStyle}>
              {item.detail}
            </p>
            <h6 style={h6Style}>{item.subdetail}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCompTitle;
