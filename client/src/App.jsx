import React from 'react'
// import { Counter } from './features/counter/Counter'
import Home from './pages/Home'
import LoginPage from "./pages/LoginPage"
import SignUpPage from './pages/SignUpPage'
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage/>
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App