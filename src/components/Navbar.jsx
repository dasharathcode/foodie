
    import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <nav className="fixed  sticky top-0 z-50 bg-white shadow-sm">
      <div className='container mx-auto flex items-center justify-between py-5 font-medium border-b border-gray-200'>
        {/* Logo */}
        <h1>
          <Link to="/" className=" text-primary font-rubik text-4xl font-bold tracking-tighter  ">
            Foodie<span className="inline-block text-deep-saffron">.</span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-5 text-sm text-rich-black font-rubik font-medium">
          <NavLink to="/" className="flex flex-col items-center gap-1 hover:text-dark-orange transition-colors duration-300">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1 hover:text-dark-orange transition-colors duration-300">
            <p>FOOD MENU</p>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1 hover:text-dark-orange transition-colors duration-300">
            <p>ABOUT</p>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1 hover:text-dark-orange transition-colors duration-300">
            <p>CONTACT</p>
          </NavLink>
          <NavLink to="/orders" className="flex flex-col items-center gap-1 hover:text-dark-orange transition-colors duration-300">
            <p>ORDER ITEM</p>
          </NavLink>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-6'>
          <img onClick={() => { setShowSearch(true); navigate('/collection') }}
               src={assets.search_icon}
               className='w-5 cursor-pointer'
               alt="Search" />

          <div className='group relative'>
            <img onClick={() => token ? null : navigate('/login')}
                 className='w-6 cursor-pointer'
                 src={assets.profile_icon}
                 alt="Profile" />
            {token && (
              <div className='group-hover:block hidden absolute right-0 mt-2 bg-white shadow-lg rounded py-2 w-36 z-50'>
                <p onClick={() => navigate('/profile')} className='px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>Orders</p>
                <p onClick={logout} className='px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer'>Logout</p>
              </div>
            )}
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
            <span className='absolute -right-1 -bottom-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center'>
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile Menu Icon */}
          <img onClick={() => setVisible(true)}
               src={assets.menu_icon}
               className='w-5 cursor-pointer sm:hidden'
               alt="Menu" />
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-white transform ${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 sm:hidden z-40`}>
          <div className='flex items-center p-4 border-b'>
            <img onClick={() => setVisible(false)}
                 className='h-4 rotate-180 cursor-pointer'
                 src={assets.dropdown_icon}
                 alt="Close" />
            <span className='ml-2 font-medium text-gray-700'>Back</span>
          </div>
          <nav className='flex flex-col mt-4'>
            {['/', '/collection', '/about', '/contact', '/orders'].map((path, idx) => (
              <NavLink
                key={idx}
                to={path}
                onClick={() => setVisible(false)}
                className='py-3 px-6 border-b text-gray-700 hover:bg-gray-100'
              >
                {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
