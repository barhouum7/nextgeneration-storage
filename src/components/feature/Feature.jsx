import React from 'react'
import './feature.css'

function Feature({ title }) {
  return (
    <div className='features-container__feature'>
      <div className='features-container__feature-title'>
          <h1>{title}</h1>
          <div />
      </div>
    </div>
  )
}

export default Feature