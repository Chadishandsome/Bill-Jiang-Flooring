import React, { forwardRef } from 'react';
import './Service.css';
import cardsInfo from '../data/CardsInfo'

const Service = forwardRef(({ index, title, subtitle, text, img }, ref) => (
  <div className='service' ref={ref} id={cardsInfo[index].param}>
    <div className='service-container'>
      <div className='service-text-container'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </div>
      <div className='service-img-container'>
        <img src={img} alt={`Image of ${title}`} className='service-img' />
      </div>
    </div>
    <hr />
  </div>
));

export default Service;

// hi