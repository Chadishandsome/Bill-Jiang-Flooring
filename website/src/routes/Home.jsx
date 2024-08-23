import React, { useRef, useEffect} from 'react'
import useSmoothScroll from '../functions/useSmoothScroll';
import Hero from '../components/Hero'
import Cards from '../components/Cards';
import About from '../components/About'
import Product from '../components/Product';
import Testimonials from '../components/Testimonials';

function Home() {

  const aboutRef = useRef(null);
  
  useSmoothScroll(aboutRef, '#about');

  return (
    <>
      <Hero/>
      <Cards/>
      <About ref={aboutRef}/>
      <Product length={6} isHome={true} perRow={2}/>
      <Testimonials/>
    </>
  )
}

export default Home
