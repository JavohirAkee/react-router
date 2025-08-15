import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice, totalQuantity } = useSelector(state => state.cart)
  
  const handleRemoveFromCart = (id, name) => {
    dispatch(removeFromCart(id))
    toast.error(`${name} удален из корзины`, {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const handleIncreaseQuantity = (id, name) => {
    dispatch(increaseQuantity(id))
    toast.info(`Количество ${name} увеличено`, {
      position: "top-right",
      autoClose: 1500,
    })
  }

  const handleDecreaseQuantity = (id, name) => {
    dispatch(decreaseQuantity(id))
    toast.info(`Количество ${name} уменьшено`, {
      position: "top-right",
      autoClose: 1500,
    })
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    toast.warning('Корзина очищена', {
      position: "top-right",
      autoClose: 2000,
    })
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Корзина пустая</h2>
          <p className="text-gray-600 text-lg mb-8">Добавьте товары в корзину для оформления заказа</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Корзина ({totalQuantity} товаров)
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-12">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center">
                {/* Product Image */}
                <div className="w-24 h-24 rounded-xl overflow-hidden mr-6 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 mr-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  )}
                  <div className="text-2xl font-bold text-yellow-500">{item.price} ₽</div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mr-6">
                  <div className="flex items-center bg-gray-100 rounded-xl p-2">
                    <button 
                      onClick={() => handleDecreaseQuantity(item.id, item.name)}
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="px-4 py-1 text-lg font-semibold text-gray-800">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncreaseQuantity(item.id, item.name)}
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => handleRemoveFromCart(item.id, item.name)}
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Итого: {totalPrice} ₽</h2>
            <button 
              onClick={handleClearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Очистить корзину
            </button>
          </div>
          
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xl flex items-center justify-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
