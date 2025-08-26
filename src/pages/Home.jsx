import React, { useState, useEffect, useMemo } from 'react'
import ProductCard from '../components/layout/ProductCard'
import yellow from '../assets/image/yellow-img.png'
import black from '../assets/image/black-img.png'
import { pizzaData, pastaData } from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../store/favoritesSlice'

const Home = () => {
  const featuredProducts = [...pizzaData.slice(0, 8), ...pastaData.slice(0, 8)]
  const dispatch = useDispatch()
  const favoriteItems = useSelector(state => state.favorites.items)
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [yellow, black]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 1000) 

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Лучшая <span className="text-amber-400">итальянская</span> кухня в Москве
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя аутентичные вкусы Италии с нашими свежими ингредиентами и традиционными рецептами
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Заказать сейчас
                </button>
                <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Меню
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    className={`absolute inset-0 w-full h-full rounded-2xl shadow-2xl transition-all duration-500 object-contain bg-white ${
                      currentImageIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                    src={image} 
                    alt={`Italian cuisine ${index + 2}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши новинки</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Попробуйте наши новые блюда, приготовленные с любовью и использованием только свежих ингредиентов
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.slice(0, 4).map(item => {
              const isFavorite = favoriteItems.some(f => f.id === item.id)
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group relative">
                  <button
                    onClick={() => dispatch(toggleFavorite({ id: item.id, name: item.name, image: item.image, description: item.description, price: parseInt(String(item.price).replace(/\D/g, '')) || 0 }))}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-colors ${isFavorite ? 'bg-red-500' : 'bg-white hover:bg-gray-100'}`}
                  >
                    <svg className={`w-5 h-5 ${isFavorite ? 'text-white' : 'text-red-500'}`} fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 mx-auto p-1">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-2xl font-bold text-amber-400">
                      {item.price}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Популярные блюда</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши самые любимые блюда, которые выбирают наши постоянные клиенты
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
            {featuredProducts.map(item => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем за 30 минут или заказ бесплатно</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Свежие ингредиенты</h3>
              <p className="text-gray-600">Используем только свежие и качественные продукты</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Гарантия качества</h3>
              <p className="text-gray-600">100% гарантия качества всех наших блюд</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
