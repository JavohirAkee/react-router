import React from 'react'
import { MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md'
import cake from '../assets/image/tort-.png'
import minicake from '../assets/image/mini-tort.png'

const Promotions = () => {
  return (
    <section className='mt-16'>
      <div className='container'>
        <h1 className='text-center mb-12 font-extrabold text-4xl lg:text-5xl leading-[100%]'>
          Наши <span className='text-yellow-300'>акции</span>
        </h1>
        <div className='flex flex-col lg:flex-row gap-7 items-center lg:items-start'>
          <img src={cake} alt="Special cake" className="w-full lg:w-auto max-w-md" />
          <div className='grid grid-cols-2 gap-7 w-full lg:w-auto'>
            <img src={minicake} alt="Mini cake 1" className="w-full" />
            <img src={minicake} alt="Mini cake 2" className="w-full" />
            <img src={minicake} alt="Mini cake 3" className="w-full" />
            <img src={minicake} alt="Mini cake 4" className="w-full" />
          </div>
        </div>
        <div className="text-center lg:text-left mt-12">
          <button className='w-40 h-12 bg-yellow-300 rounded-3xl font-bold text-sm leading-7 text-white hover:bg-yellow-400 transition-colors duration-300'>
            Все акции
          </button>
        </div>
      </div>
    </section>
  )
}

export default Promotions