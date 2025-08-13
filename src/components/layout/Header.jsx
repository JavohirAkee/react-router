import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'
import Icons from '../../assets/image/image 31 (2).svg'
const Header = () => {
  return (
    <header>
      <nav className='container'>
        <div className='flex justify-between items-center'>
          <img src={logo} alt="" />
          <div className=' ml-[-400px] font-bold'>
            <h1 className='flex gap-3'>Доставка пасты<span className=' text-amber-300' >Москва</span></h1>
          <p className='flex'><img src={Icons} alt="" />Яндекс еда</p>
          </div>
          <div>
            <button className='w-[180px] h-[42px] bg-gray-300 text-[14px] font-bold leading-[28px] rounded-3xl text-gray-600 mr-6'>Заказать звонок</button>
            <a className='text-2xl font-bold leading-[100%] text-amber-300' href="#">8 499 391-52-75</a>
          </div>
        </div>

        <div className='flex justify-between mt-9 items-center'>
          <ul className="flex space-x-5 font-semibold text-[16px] leading-[100%]">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/pizza'}>Pizza</Link>
            </li>
            <li>
              <Link to={'/pasta'}>Pasta</Link>
            </li>
            <li>
              <Link to={'/soups'}>Soups</Link>
            </li>
              <li>
              <Link to={'/salads'}>Salads</Link>
            </li>
              <li>
              <Link to={'/drinks'}>Drinks</Link>
            </li>
              <li>
              <Link to={'/dessert'}>Desert</Link>
            </li>
              <li>
              <Link to={'/antipasti'}>Antipasti</Link>
            </li>
              <li>
              <Link to={'/promotions'}>Promotions</Link>
            </li>
              <li>
              <Link to={'/contact'}>Contact</Link>
            </li>

          </ul>

          <button className='ml-30 text-[16px] font-bold text-gray-500 leading-7 '>Войти</button>
          <button className='bg-yellow-300 w-[160px] h-[42px] rounded-[8px] leading-7 text-[16px] font-bold'><Link to={'cart'}>Корзина | 1</Link></button>
        </div>

      </nav>

    </header>
  )
}

export default Header