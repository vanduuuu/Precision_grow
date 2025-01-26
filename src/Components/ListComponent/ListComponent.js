import React from 'react'
import './ListComponent.css'
const ListComponent = ({ items }) => {
  return (
    <div>
       <div className='ai-list-item'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h5>{item}</h5>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default ListComponent
