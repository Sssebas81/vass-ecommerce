import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store'; 


import Home from './pages/home/Home.tsx';
import Contact from './pages/contact/Contact.tsx';
import LoginPage from './pages/login/LoginPage.tsx';
import SignUp from './components/authentication/SignUp.tsx';
import PersonalInfo from './pages/personalinfo/PersonalInfo.tsx';
import PeripheralsPage from './pages/Categories/PeripheralsPage.tsx';
import DevicesPage from './pages/Categories/DevicesPage.tsx';
import GamingPage from './pages/Categories/GamingPage.tsx';
import DetailProduct from './pages/detailProduct/DetailProduct.tsx';
import ShopPage from './pages/shoppage/ShopPage.tsx';
import CartPage from './pages/cart/CartPage.tsx';
import FavoritesPage from './pages/favorites/FavoritesPage.tsx';


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Shop',
    element: <ShopPage />,
  },
  {
    path: '/Profile',
    element: <PersonalInfo />,
  },
  {
    path: '/Favorites',
    element: <FavoritesPage/>, 
  },
  {
    path: '/Cart',
    element: <CartPage/>, 
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Blog',
    element: <h2>Blog Page</h2>,
  },
  {
    path: '/Peripherals',
    element: <PeripheralsPage />,
  },
  {
    path: '/Devices',
    element: <DevicesPage />,
  },
  {
    path: '/Gaming',
    element: <GamingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    index: true,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/Product/:id',
    element: <DetailProduct />,
  },
]);

// Render principal
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* <- Aquí envolvemos toda la app con Redux */}
      <RouterProvider router={Routes} />
    </Provider>
  </StrictMode>
);
