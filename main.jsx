import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
// import Home from './assets/pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Products from './assets/pages/Products.jsx'
import ProductDetails from './assets/pages/ProductDetails.jsx'
let router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
