import React from 'react'
import Title from '../components/Title';
import galleryTitle from '../data/GalleryTitle';
import GridGallery from '../components/GridGallery';
import { getImageURL } from '../functions/images';


function Gallery() {
  return (
    <>
      <Title img1={getImageURL(galleryTitle[0].img1, "GalleryImages")} img2={getImageURL(galleryTitle[0].img2, "GalleryImages")} title={galleryTitle[0].title} subtitle={galleryTitle[0].subtitle} text={galleryTitle[0].text}/>
      <GridGallery/>
    </>
  )
}

export default Gallery
