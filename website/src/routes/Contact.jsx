import React from 'react'
import Testimonials from '../components/Testimonials'
import Title from '../components/Title'
import contactTitle from '../data/ContactTitle'
import ContactInput from '../components/ContactInput'
import { getImageURL } from '../functions/images'

function Contact() {
  return (
    <>
      <Title img1={getImageURL(contactTitle[0].img1, 'ContactImages')} img2={getImageURL(contactTitle[0].img2, 'ContactImages')} title={contactTitle[0].title} subtitle={contactTitle[0].subtitle} text={contactTitle[0].text}/>
      <ContactInput/>
      <Testimonials/>
    </>
  )
}

export default Contact
