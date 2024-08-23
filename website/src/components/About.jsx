import React, { forwardRef } from 'react';
import './About.css'

const About = forwardRef((props, ref) => (
  <div className='about' ref={ref} id="about">
    <div className='about-container'>
      <div className='about-text-container'>
        <h1>About Us</h1>
        <p>Welcome to Bill Jiang Flooring, your premier destination for top-quality flooring solutions. With a commitment to excellence, we offer a wide range of stylish and durable flooring options to suit any space. From hardwood and laminate to vinyl and carpet, our expert team is dedicated to helping you find the perfect floor to transform your home or office. At Bill Jiang Flooring, we combine quality products with exceptional customer service to ensure your complete satisfaction. Discover the difference with Bill Jiang Flooring—where your dream floor becomes a reality.</p>
      </div>
    </div>
  </div>
));

export default About
