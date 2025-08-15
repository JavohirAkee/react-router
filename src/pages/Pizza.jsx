import React from 'react'
import ProductCard from '../components/layout/ProductCard'
import { pizzaData } from '../data/products'

const Pizza = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Наша <span className="text-amber-400">Пицца</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя аутентичные вкусы Италии с нашими традиционными рецептами пиццы, 
            приготовленными из свежих ингредиентов и с любовью к кулинарному искусству
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {pizzaData.map((item) => (
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Готовы заказать вкусную пиццу?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Выберите свои любимые ингредиенты и насладитесь аутентичным итальянским вкусом прямо у вас дома
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Заказать сейчас
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Посмотреть меню
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
