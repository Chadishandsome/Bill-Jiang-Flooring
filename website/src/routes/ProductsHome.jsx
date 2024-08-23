import React from 'react'
import Title from '../components/Title'
import productTitle from '../data/ProductTitle'
import Product from '../components/Product'
import productsInfo from '../data/ProductsInfo'
import { getImageURL } from '../functions/images'

function ProductsHome() {
  return (
    <>
      <Title img1={getImageURL(productTitle[0].img1, "ProductImages")} img2={getImageURL(productTitle[0].img2, "ProductImages")} title={productTitle[0].title} subtitle={productTitle[0].subtitle} text={productTitle[0].text} />
      <Product length={productsInfo.length} isHome={false} perRow={4}></Product>
    </>
  )
}

export default ProductsHome
