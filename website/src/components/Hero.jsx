import React from 'react'
import './Hero.css'
import { Link, useNavigate } from 'react-router-dom'

function Hero() {

  const navigate = useNavigate() 

  return (
    <div className='Hero'>
      <div className='Hero-container'>
        <div className='Hero-text-container'>
          <h1>WELCOME TO <br /> BILL JIANG FLOORING</h1>
          <p>Cutting Edge Dustless Flooring Solutions. <br /> Sanding, Refinishing & Installation.</p>
        </div>
        <div className='Hero-button-container'>
          <button className='btn-contact' onClick={() => navigate('/contact')}>Get a Quote</button>
          <button className='btn-gallery' onClick={() => navigate('/gallery')}>Gallery</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
