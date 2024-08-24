import React from 'react'
import './Title.css'

function Title({img1, img2, title, subtitle, text}) {
  return (
    <div className='title'>
      <div className='title-container'>
        <div className='col'>
          <div className='title-title-container'>
            <h1>{title}</h1>
          </div>
          <div className='col-1-img-container'>
            <img src={img1} alt="" className='col-1-img'/>
          </div>
          <div className='title-description-container'>
            <h2>{subtitle}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className='col desktop'>
          <div className='col-2-img-container'>
            <img src={img2} alt="" className='col-2-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
