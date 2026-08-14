import React, { useContext, useState } from 'react'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3, } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { UpdateFollower } from 'react-mouse-follower';
import { NavbarMenu } from './Navbar';
import { ShopContext } from '../context/ShopContext';
import { AuthContext } from '../context/AuthContext';

const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const {getTotalCartItems} = useContext(ShopContext)
  const { user, logout } = useContext(AuthContext)
  return (
    <div className='text-foreground py-2 bg-gray-900/50 backdrop-blur-md border-b border-gray-800 z-10'>
      <div className='container flex justify-between items-center'>
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className='max-w-[100px] invert' />
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 relative z-40'>
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference"
                  }}
                >
                  <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference"
              }}
            >
              <Link to='/cart'> <div className='relative'>
                <ShoppingCart /> <div className='bg-[#138695] w-5 absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
              </div>
              </Link>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference"
              }}
            >
              {user ? (
                <div className="flex items-center gap-4 ps-8 text-white">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <button onClick={logout} className='text-sm bg-red-600 px-3 py-1 rounded-md hover:bg-red-700'>
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <Link to='/login'>
                  <button className='text-xl ps-8 text-white'>
                    <FaRegUser />
                  </button>
                </Link>
              )}
            </UpdateFollower>

          </ul>
        </div>
        <div className='flex gap-8 md:hidden z-50'>
          <Link to={'/cart'}><div className='relative w-10 z-50'>
          <ShoppingCart /> <div className='bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
            </div></Link>
          {/* mobile hamburger menu */}
          {
            showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            )
          }
        </div>
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}

export default Navbar2
