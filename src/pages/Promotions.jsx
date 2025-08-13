import React from 'react'
import { MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md'
import cake from '../assets/image/tort-.png'
import minicake from '../assets/image/mini-tort.png'

const Promotions = () => {
  return (
    <section className=' mt-16 '>
      <div className='container'>
        <h1 className='text-center mb-[47px] font-extrabold text-[44px] leading-[100%]  '>
          Наши   <span className='text-yellow-300'>акции</span>
        </h1>
        <div className='flex gap-7'>
          <img src={cake} alt="" />
          <div className='grid grid-cols-2 gap-7'>
            <img src={minicake} alt="" />
            <img src={minicake} alt="" />
            <img src={minicake} alt="" />
            <img src={minicake} alt="" />
          </div>
        </div>
        <button className='w-[160px] h-12 bg-yellow-300 rounded-3xl font-bold text-[14px] leading-7 text-white ml-[473px] mt-12'>Все вкции</button>
      </div>
    </section>
  )
}

export default Promotions