import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../store/cartSlice'
import { toggleFavorite } from '../../store/favoritesSlice'

const ProductCard = ({ id, name, price, image, description , }) => {
  const dispatch = useDispatch()
  const favoriteItems = useSelector(state => state.favorites.items)
  const isFavorite = useMemo(() => favoriteItems.some(item => item.id === id), [favoriteItems, id])
  const [isHovered, setIsHovered] = useState(false)

  // Extract numeric price from string like "от 600 ₽"
  const numericPrice = parseInt(price.replace(/\D/g, '')) || 0

  const handleAddToCart = () => {
    dispatch(addToCart({ 
      id, 
      name, 
      price: numericPrice, 
      image,
      description
    }))
    
    toast.success(`${name} добавлен в корзину!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({ id, name, image, description, price: numericPrice }))
    if (!isFavorite) {
      toast.success(`${name} добавлен в избранное`, { position: 'top-right', autoClose: 1200 })
    } else {
      toast.warn(`${name} удален из избранного`, { position: 'top-right', autoClose: 1200 })
    }
  }

  return (
    <div 
      className="group relative w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden p-1">
        <div className='w-full h-64 p-5 flex justify-center'>
        <img 
          src={image} 
          alt={name} 
          className={`h-auto transition-transform duration-300 rounded-lg ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        </div>
        {/* Like Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors ${isFavorite ? 'bg-red-500' : 'bg-white hover:bg-gray-100'}`}
        >
          <svg className={`w-5 h-5 ${isFavorite ? 'text-white' : 'text-red-500'}`} fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold shadow-md">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-[200px]">
        <h3 className="text-gray-800 font-bold text-lg mb-2 line-clamp-2 leading-tight">
          {name}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed flex-grow">
            {description}
          </p>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-center gap-3 flex-col relative z-10">
          <div className="text-xl font-bold text-yellow-500 text-center">
            {price}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer relative z-20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            В корзину
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 border-yellow-400 rounded-xl transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  )
}

export default ProductCard
