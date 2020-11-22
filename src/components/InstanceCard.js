import React from 'react'

function InstanceCard({instance}) {
  return (
    <div className='card-container'>
      <img src='https://via.placeholder.com/200x90.png' alt='place holder' />
      <p>Event 1: {instance.event}</p>
      <p>Scene: {instance.place}</p>
      <style jsx='true'>
        {`
        .card-container {
          width: 200px;
          padding: 5px;
          margin: 5px;
          border: 1px solid black;
        }
        `}
      </style>
    </div>
  )
}

export default InstanceCard
