import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ProductsProduct.module.css'
import { getImageURL } from '../functions/images'

function ProductsProduct({title, img, details}) {

  const navigate = useNavigate() 

  return (
    <div className={styles['product']}>
      <div className={styles['product-container']}> 
        <div className={styles['col-1']}>
          <div className={styles['col-1-img']}>
            <img src={getImageURL(img, 'ProductImages/samples')} alt="" />
          </div>
          <div className={styles['button-container']}>
            <button onClick={() => navigate('/contact')} className={styles['getquote']}>Get Quote</button>
            <button onClick={() => navigate({/*Brother add your link in here*/})} className={styles['seethisinmyroom']}>See This in My Room</button> {/*Brother add your link in here*/}
          </div> 
        </div>
        <div className={styles['col-2']}>
          <div className={styles['text-title']}>
            <h1>{title}</h1>
            <h5>Made in Canada. Available in various widths and grades.</h5>
          </div>
          <div className={styles['text-content']}>
            <h5>About this item</h5>
            <h5>Introducing Bill's Flooring, the epitome of elegance and craftsmanship. Our {title} flooring, proudly made in the Canada can transform any space into a masterpiece.</h5>
            <h3>Product Details:</h3>
            <ul>
              {details.map((detail, index) => 
                <li key={index}>{detail}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsProduct
