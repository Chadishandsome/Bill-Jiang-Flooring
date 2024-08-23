import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import productsInfo from '../data/ProductsInfo'
import { getImageURL } from '../functions/images'
import styles from './Product.module.css'

function Product({length, isHome, perRow}) {
  const navigate = useNavigate()

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 1040);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const perRow1 = isSmallScreen
      ? { gridTemplateColumns: `repeat(${perRow/2}, 1fr)` }
      : { gridTemplateColumns: `repeat(${perRow}, 1fr)` };

  return (
    <div className={styles['products']}>
      <h1 className={isHome ? "" : styles["hidden"]}>{isHome ? "Take a Look at our Products" : ""}</h1>
      <div className={styles['products-container']} style={perRow1}>
        {productsInfo.slice(0, length).map((product, index) => (
          <ProductSingle key={index} path={isHome ? `products/${product.path}` : product.path} product={product}/>
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
      <div className={styles["product"]}>
        <div className={styles['product-title-container']}>
          <h2>{product.title}</h2>
        </div>
        <div className={styles['product-image']} style={backgroundStyle}></div>
      </div>
    </Link>

  )
}

