import React from 'react'
import './GridGallery.css'

import img1 from '../assets/GalleryImages/image1.png';
import img2 from '../assets/GalleryImages/image2.png';
import img3 from '../assets/GalleryImages/image3.png';
import img4 from '../assets/GalleryImages/image4.png';
import img5 from '../assets/GalleryImages/image5.png';
import img6 from '../assets/GalleryImages/image6.png';
import img7 from '../assets/GalleryImages/image7.png';
import img8 from '../assets/GalleryImages/image8.png';
import img9 from '../assets/GalleryImages/image9.png';
import img10 from '../assets/GalleryImages/image10.png';
import img11 from '../assets/GalleryImages/image11.png';
import img12 from '../assets/GalleryImages/image12.png';
import img13 from '../assets/GalleryImages/image13.png';
import img14 from '../assets/GalleryImages/image14.png';
import img15 from '../assets/GalleryImages/image15.png';
import img16 from '../assets/GalleryImages/image16.png';
import img17 from '../assets/GalleryImages/image17.png';
import img18 from '../assets/GalleryImages/image18.png';
import img19 from '../assets/GalleryImages/image19.png';
import img20 from '../assets/GalleryImages/image20.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20
];

function GridGallery() {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default GridGallery
