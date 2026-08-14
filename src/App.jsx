import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './components/Footer'
import { UpdateFollower } from 'react-mouse-follower'
import ProductList from './components/ProductList'
import Navbar2 from './components/Navbar2'
import SingleProduct from './components/SingleProduct'

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Home/><Footer/></>
  },
  {
    path:'/login',
    element: <><Navbar2/><Login/><Footer/></>
  },
  {
    path:'/register',
    element: <><Navbar2/><Register/><Footer/></>
  },
  {
    path:'/mens',
    element: <><Navbar2/><ProductList category="men"/><Footer/></>
  },
  {
    path:'/womens',
    element: <><Navbar2/><ProductList category="women"/><Footer/></>
  },
  {
    path:'/kids',
    element: <><Navbar2/><ProductList category="kid"/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Navbar2/><Contact/><Footer/></>
  },
  {
    path: "/products/:productId",
    element: <><Navbar2/><SingleProduct/><Footer/></>
  },
  {
    path:'/cart',
    element: <><Navbar2/><Cart/><Footer/></>
  },
 
])

const App = () => {
  return (
    <main className='overflow-x-hidden min-h-screen w-full font-sans relative'>
      {/* Dark Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      <div className='relative z-10'>
        <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
        >
       <RouterProvider router={router}/>
       </UpdateFollower>
      </div>
    </main>
  )
}

export default App
