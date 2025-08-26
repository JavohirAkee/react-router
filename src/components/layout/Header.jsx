import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../../assets/image/logo.svg'
import Icons from '../../assets/image/image 31 (2).svg'

const Header = () => {
  const { totalQuantity } = useSelector(state => state.cart)
  const favoritesCount = useSelector(state => state.favorites.items.length)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/pizza', label: 'Pizza' },
    { path: '/pasta', label: 'Pasta' },
    { path: '/soups', label: 'Soups' },
    { path: '/salads', label: 'Salads' },
    { path: '/drinks', label: 'Drinks' },
    { path: '/dessert', label: 'Dessert' },
    { path: '/antipasti', label: 'Antipasti' },
    { path: '/promotions', label: 'Promotions' },
    { path: '/contact', label: 'Contact' }
    
  ]

  return (
    <header className=" bg-white shadow-lg sticky top-0 z-50">
      <nav className='container'>
        {/* Top Section */}
        <div className='flex justify-between items-center py-4'>
          <div className="flex items-center gap-4 md:gap-8">
            <img src={logo} alt="Logo" className="h-10 md:h-12" />
            <div className='font-bold hidden sm:block'>
              <h1 className='flex gap-3 text-lg md:text-xl'>
                Доставка пасты
                <span className='text-amber-400'>Москва</span>
              </h1>
              <p className='hidden md:flex items-center gap-2 text-gray-600'>
                <img src={Icons} alt="Яндекс еда" className="w-5 h-5" />
                Яндекс еда
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <button className='hidden md:block px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105'>
              Заказать звонок
            </button>
            <a 
              href="tel:84993915275" 
              className='text-xl md:text-2xl font-bold text-amber-400 hover:text-amber-500 transition-colors'
            >
              8 499 391-52-75
            </a>
          </div>
        </div>

        {/* Navigation Section */}
         <div className='flex justify-between items-center py-4 border-t border-gray-200'>
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-4 font-semibold text-gray-700">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className="hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Cart + Favorite */}
          <div className="flex items-center gap-2 md:hidden">
            <Link to={'/cart'}>
              <button className='relative p-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white transition-colors'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{totalQuantity}</span>
                )}
              </button>
            </Link>
            <Link to={'/favorite'}>
              <button className='relative p-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white transition-colors'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{favoritesCount}</span>
                )}
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden sm:flex items-center gap-4">
           
            
            {/* Cart Button */}
            <Link to={'/cart'}>
              <button className='relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Корзина
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </Link>
            <Link to={'/favorite'}>
              <button className='relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Избранное
                {favoritesCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    {favoritesCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <ul className="grid grid-cols-1 gap-2 font-semibold text-gray-700">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="block p-3 rounded-lg hover:bg-gray-100 hover:text-amber-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header