import React, { useRef } from 'react';
import Title from '../components/Title';
import Service from '../components/Service';
import servicesInfo from '../data/ServicesInfo';
import serviceTitle from '../data/ServiceTitle';
import useSmoothScroll from '../functions/useSmoothScroll';
import cardsInfo from '../data/CardsInfo'
import { getImageURL } from '../functions/images';

function Services() {
  const hardwoodRef = useRef(null);
  const basementRef = useRef(null);
  const tileRef = useRef(null);
  const carpetRef = useRef(null);

  const refs = [
    hardwoodRef,
    basementRef,
    tileRef,
    carpetRef
  ];

  refs.forEach((ref, index) => {
    useSmoothScroll(ref, `#${cardsInfo[index].param}`);
  });

  return (
    <>
      <Title img1={getImageURL(serviceTitle[0].img1, "ServiceImages")} img2={getImageURL(serviceTitle[0].img2, "ServiceImages")} title={serviceTitle[0].title} subtitle={serviceTitle[0].subtitle} text={serviceTitle[0].text} />
      <div>
        {servicesInfo.map((service, index) => (
          <Service key={index} index={index} ref={refs[index]} title={service.title} subtitle={service.subtitle} text={service.text} img={getImageURL(service.img, "ServiceImages")} />
        ))}
      </div>
    </>
  );
}

export default Services;
