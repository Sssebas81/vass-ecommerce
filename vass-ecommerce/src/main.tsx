import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.tsx'
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
  element:<h2>Contact Page</h2>
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
)
