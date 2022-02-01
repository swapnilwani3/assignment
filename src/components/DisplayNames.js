import React from 'react';
import './displayNames.css'

export default function DisplayNames({laureates}) {
  return <div className='display'>

      {laureates && laureates.map(item=>{return(<div key={item.id} className='dNames' >
          <span className='names'>{item.firstname} {item.surname}</span>
          <span className='motivation'>{item.motivation}</span>
      </div>)})}
  </div>;
}