import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
import Contact from './pages/contact/Contact.tsx'
import { h2 } from 'framer-motion/client'
const Routes=createBrowserRouter([{
path : '/',
  element: <Home/>

},{
  path:"/Categories",
  element:<h2>Categories Page</h2>
},{
  path:"/Shop",
  element:<h2>Shop Page</h2>
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
  element:<h2>Peripherals Page</h2> 
},{
  path:"/Devices",
  element:<h2>Devices Page</h2> 
},{
  path:"/Gaming",
  element:<h2>Gaming Page</h2> 
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
)
