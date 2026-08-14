import React, { useState } from 'react'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3, } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import { UpdateFollower } from 'react-mouse-follower';
import { AuthContext } from '../context/AuthContext';


export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Mens",
    link: "/mens",
  },
  {
    id: 3,
    title: "Womens",
    link: "/womens",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { user, logout } = React.useContext(AuthContext)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='text-white py-8'>
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
                  scale:5,
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
              scale:5,
              mixBlendMode: "difference"
            }}
            >
            <Link to='/cart'>
              <button className='text-xl ps-14'>
                <ShoppingCart />
              </button>
            </Link>
            </UpdateFollower>
            <UpdateFollower
             mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 1.5,
              scale:5,
              mixBlendMode: "difference"
            }}
            >
            {user ? (
              <div className="flex items-center gap-4 ps-8">
                <span className="text-sm font-semibold">{user.name}</span>
                <button onClick={logout} className='text-sm bg-red-600 px-3 py-1 rounded-md hover:bg-red-700'>
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <Link to='/login'>
                <button className='text-xl ps-8'>
                  <FaRegUser />
                </button>
              </Link>
            )}
            </UpdateFollower>

          </ul>
        </div>
        <div className='flex gap-8 md:hidden z-50'>
          <Link to={'/cart'}><ShoppingCart /></Link>
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

export default Navbar
