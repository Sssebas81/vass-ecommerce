import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Contact from './pages/contact/Contact.tsx'
import { h2 } from 'framer-motion/client'
import Peripherals from './components/Peripheralsproducts/Peripherals.tsx'
import PeripheralsPage from './pages/Categories/PeripheralsPage.tsx'
import DevicesPage from './pages/Categories/DevicesPage.tsx'
import GamingPage from './pages/Categories/GamingPage.tsx'
import DetailProduct from './pages/detailProduct/DetailProduct.tsx'
const Routes=createBrowserRouter([{
path : '/',
  element: <Home/>,
  index:true

},{
  path:"/Categories",
  element:<h2>Categories Page</h2>
},{
  path:"/Shop",
  element: <ShopPage />
},{
  path:"/Profile",
  element:<h2>Profile Page</h2>
},{
  path:"/Favorites",
  element:<h2>Favorites Page</h2>
},{
  path:"/Cart",
  element:<h2>Cart Page</h2>
},{
  path:"/Contact",
  element:<Contact/>
},{
  path:"/Blog",
  element:<h2>Blog Page</h2> 
},{
  path:"/Peripherals",
  element: <PeripheralsPage />
},{
  path:"/Devices",
  element:<DevicesPage />
},{
  path:"/Gaming",
  element:<GamingPage />
},{
  path:"/Product/:id",
  element:<DetailProduct />
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
)
