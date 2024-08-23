import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productsInfo from '../data/ProductsInfo'
import { getImageURL } from '../functions/images'
import styles from './Product.module.css'

function Product({length, isHome, perRow}) {
  const navigate = useNavigate()

  return (
    <div>
      <h1 className={isHome ? "" : styles["hidden"]}>{isHome ? "Take a Look at our Products" : ""}</h1>
      <div className={styles.products} style={{gridTemplateColumns: `repeat(${perRow}, 1fr)` }}>
        {productsInfo.slice(0, length).map((product, index) => (
          <ProductSingle key={index} path={isHome ? `products/${product.path}` : product.path} product={product} />
        ))}
      </div>
      <button onClick={() => navigate('products')} className={isHome ? styles["getquote"] : styles["hidden"]}>{isHome ? "More Products" : ""}</button>
    </div>
    
  )
}

export default Product

function ProductSingle({path, product}) {

  const backgroundStyle = {
    backgroundImage: `url(${getImageURL(product.img, "ProductImages/samples")})`,
  };
  return (
    <Link to={path}  style={{ textDecoration: 'none' }}>
      <div className={styles['product']} style={backgroundStyle}>
        <div className={styles['product-container']}>
          <h2>{product.title}</h2>
        </div>
      </div>
    </Link>

  )
}

