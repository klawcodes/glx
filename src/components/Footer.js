import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa' 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} />+62</h4>
          </div>
          <div>
            <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/> akuganteng@galaxy.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About The Company</h4>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          
          <div className='social'>
            <FaFacebook size={20} style={{color: '#fff', marginRight: '2rem'}}/>
            <FaTwitter size={20} style={{color: '#fff', marginRight: '2rem'}}/>
            <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
