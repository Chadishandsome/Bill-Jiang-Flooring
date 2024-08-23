import './Testimonials.css'
import React, { useState, useEffect} from 'react'
import profile1 from '../assets/TestimonialImages/pfp1.png'
import profile2 from '../assets/TestimonialImages/pfp2.png'
import profile3 from '../assets/TestimonialImages/pfp3.png'
import profile4 from '../assets/TestimonialImages/pfp4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    pfp: profile1,
    name: "Sarah Martinez", 
    text: "“In our recent home renovation project, Bill Jiang Flooring provided an exceptional experience. The quality of their work is evident in every corner of our newly floored spaces. Their attention to detail and dedication to excellence made the entire process smooth and stress-free. Highly recommended for anyone seeking top-notch flooring solutions!”"
  },

  {
    pfp: profile2,
    name: "Mark Robinson", 
    text: "“From the initial consultation to the final installation, Bill Jiang Flooring demonstrated a high level of professionalism and skill. Their team was knowledgeable and efficient, transforming our old floors into a beautiful new look. We were impressed by their commitment to delivering a quality product and outstanding customer service throughout the project.”"
  },

  {
    pfp: profile3,
    name: "David Nguyen", 
    text: "“Choosing Bill Jiang Flooring was one of the best decisions we made for our home. Their expertise and craftsmanship are second to none. Each step of the process was handled with care and precision, resulting in floors that look fantastic and stand the test of time. We couldn't be happier with the results and the service provided.”"
  },

  {
    pfp: profile4,
    name: "Emily Tomlinson", 
    text: "“When we decided to update our flooring, Bill Jiang Flooring was the clear choice based on their stellar reputation. Their work exceeded our expectations in every way. The new floors are not only beautiful but also durable, thanks to their meticulous attention to detail and expert installation techniques. We are thrilled with the outcome and the value received.”"
  }
]

function Testimonials() {
  const [counter, setCounter] = useState(0)

  const testimonialIndex = ((counter % testimonials.length) + testimonials.length) % testimonials.length

  const [fade, setFade] = useState(true);

  const goForward = () => {
    setFade(false);
    setTimeout(() => {
      setCounter((c) => (c + 1) % testimonials.length);
      setFade(true);
    }, 250);
  };

  const goBackward = () => {
    setFade(false);
    setTimeout(() => {
      setCounter((c) => (c - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 250);
  };


  return (
    <div className='testimonials'>
      <div className='testimonials-container'>
        <button onClick={goBackward} className='button desktop'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className='testimonials-text-container'>
          <p className={fade ? 'fade-in' : 'fade-out'}>
            {testimonials[testimonialIndex].text}
          </p>
          <div className='testimonial-person'>
            <div className='testimonial-pfp-container'>
              <img src={testimonials[testimonialIndex].pfp} alt= {testimonials[testimonialIndex].name + "'s profile picture"} className={`testimonial-pfp ${fade ? 'fade-in' : 'fade-out'}`}/>
            </div>
            <h4 className={fade ? 'fade-in' : 'fade-out'}>
              {testimonials[testimonialIndex].name}
            </h4>
          </div>
        </div>
        <div className='button-mobile'>
          <button onClick={goBackward} className='button mobile'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={goForward}  className='button'>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
