import React from 'react'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import ProductsHome from './routes/ProductsHome.jsx'
import ProductsProduct from './routes/ProductsProduct.jsx'
import productsInfo from "./data/ProductsInfo.jsx"
import Services from './routes/Services.jsx'
import Gallery from './routes/Gallery.jsx'
import Contact from './routes/Contact.jsx'
import NotFoundPage from './routes/NotFoundPage.jsx'

import { createBrowserRouter } from 'react-router-dom'

const productRoutes = productsInfo.map((product) => ({
  path: product.path,
  element: <ProductsProduct title={product.title} img={product.img} details={product.details}/>,
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products', 
        element: <Products/>,
        children: [
          {
            path: '', 
            element: <ProductsHome/>
          },
          ...productRoutes,
        ]
      },
      {
        path: 'services', 
        element: <Services/>
      },
      {
        path: 'gallery', 
        element: <Gallery/>
      },
      { 
        path: '*', 
        element: <NotFoundPage/>
      },
    ],
  },
],
{
  basename: "/Bill-Jiang-Flooring",
},
);

export default router;