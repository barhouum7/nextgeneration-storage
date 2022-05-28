import React from 'react'
import Logo from '../../assets/logo.jpg'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </div>
      <a href='#upload'>
        <button class="cssbuttons-io-button"> Get started
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
          </div>
        </button>
      </a>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={Logo} alt="INSPIRE Logo" />
          <p>©2022  France | Place Vendôme, 75001 Paris, France, <br /> All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <button>Links</button>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <button>Company</button>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <button>Get in touch</button>
          <p>France | Place Vendôme, 75001 Paris, France</p>
          <p>+33 9 70 44 64 22</p>
          <p>info@agence-inspire.com</p>
        </div>
      </div>

      <div className="footer-copyright">
      {/* <span class="love-mark">❤</span> */}
        <span class="my-signature">Made With <div class="loader"><div></div></div> By <a
                    href="https://github.com/barhouum7" target="_blank" rel="noopener noreferrer">Ibrahim BHMBS</a> &copy;2022. All rights reserved.</span>
            {/* <span class="icons">
                <a class="twitter" href="https://twitter.com/mindh4q3rr" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a class="linkedin" href="https://www.linkedin.com/in/ibrahimbs/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a class="github" href="https://www.github.com/barhouum7/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github fa-2x"></i>
                </a>
            </span> */}
            <button class="btn-follow-me">
              <span>Follow Me</span>
              <div class="container">
              {/* <a class="twitter" href="https://twitter.com/mindh4q3rr" target="_blank" rel="noopener noreferrer">
                    
                    </a>
                    <a class="linkedin" href="https://www.linkedin.com/in/ibrahimbs/" target="_blank" rel="noopener noreferrer">
                    
                    </a>
                    <a class="github" href="https://www.github.com/barhouum7/" target="_blank" rel="noopener noreferrer">
                    
                </a> */}
                <a class="twitter" href="https://twitter.com/mindh4q3rr" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
                <a class="linkedin" href="https://www.linkedin.com/in/ibrahimbs/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
                <a class="github" href="https://www.github.com/barhouum7/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
              </div>
            </button>
      </div>
    </div>
  )
}

export default Footer