import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>A decentralized solution for storing our clients' documents in a secure and transparent manner.</h1>
        <p>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.</p>
      </div>
      <div className='header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header