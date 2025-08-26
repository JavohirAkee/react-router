import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Pizza from './pages/Pizza'
import Pasta from './pages/Pasta'
import { Route, Routes } from 'react-router-dom'
import Soups from './pages/Soups'
import Salads from './pages/Salads'
import Drinks from './pages/Drinks'
import Dessert from './pages/Dessert'
import Antipasti from './pages/Antipasti'
import Promotions from './pages/Promotions'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Favorite from './pages/ Favorite'

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/pasta' element={<Pasta />} />
          <Route path='/soups' element={<Soups />} />
          <Route path='/salads' element={<Salads />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/dessert' element={<Dessert />} />
          <Route path='/antipasti' element={<Antipasti />} />
          <Route path='/promotions' element={<Promotions />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App