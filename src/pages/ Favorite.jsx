import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/layout/ProductCard'
import { clearFavorites } from '../store/favoritesSlice'

const  Favorite = () => {
  const items = useSelector(state => state.favorites.items)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Список избранного пуст</h2>
          <p className="text-gray-600 text-lg mb-8">Нажмите на сердечко на товарах, чтобы добавить их в избранное</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Вернуться к покупкам
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8'>
      <div className='container'>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Избранное ({items.length})</h1>
          <button
            onClick={() => dispatch(clearFavorites())}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Очистить избранное
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {items.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={`${item.price} ₽`}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default  Favorite

