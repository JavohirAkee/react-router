import React from 'react'
import Logo from '../../assets/image/logo.svg'      
import Icon from '../../assets/image/icon.svg'

const Footer = () => {
  return (
  <footer className='mt-28'>
      <div className='container '>
      <div className='flex items-center font-bold text-[21px] justify-between w-[1110px] '>
         <img src={Logo} alt="" />  
         <h1 className='relative right-6 '>Остались вопросы? А мы всегда на связи:</h1>
      </div>

       <div className='flex space-x-10 font-bold text-[16px] leading-7 mt-10   '>
        <p>Калорийность и состав</p>
        <p className=''>Правовая информация</p>
        <div className=' relative left-47 '>
       <div className='flex gap-4'>
           <button className=' border px-8 py-2 rounded-[13px] '><img src={Icon} alt="" /></button>
        <button className=' border px-10 py-2 rounded-[13px] '><img src={Icon} alt="" /></button>
        <button className=' border px-10 py-2 rounded-[13px] '><img src={Icon} alt="" /></button>
        <button className=' border px-10 py-2 rounded-[13px] '><img src={Icon} alt="" /></button> 
       </div>
        <div className=' mt-4 flex gap-4'>
        <button className=' border px-10 py-2 rounded-[13px] '><img src={Icon} alt="" /></button> 
        <button className=' border px-10 py-2 rounded-[13px] '><img src={Icon} alt="" /></button> 
        <button className=' border px-10 py-3 rounded-[13px] text-[19px]  '>Написать нам</button> 
        </div>
        </div>
        
       </div>
       <p className='flex space-x-10 font-bold text-[16px] mt-[-30px]'>Правовая информация</p>

       <div className='flex gap-27 font-mono text-gray-600 mt-10'>
        <p>YouTube</p>
        <p>Facebook</p>
        <p>Москва ул. Проспект </p>
       </div> 
       <div className='mt-[-20px]'>
       <button><p className='w-[248px] h-[37px] font-bold text-3xl text-yellow-300 ml-[700px] relative top-10 right-18  '>8 499 391-84-49</p></button>
       </div>

       <div  className='flex gap-28 font-mono text-gray-600 mt-'>
        <p>Instagram</p>
        <p className='ml-[-20px]'>ВКонтакте</p>
        <p className='ml-[-10px]'>Вернадского 86В </p>   
       </div>
       <div className='mt-10'>
       <button><p className='border border-none bg-gray-300 py-3 px-11 rounded-3xl ml-[641px]'>Заказать звонок</p></button>
       </div>
       <p className='mt-[-30px]'>YaBao Все праав защищены © 2021</p>                              
    </div>

  </footer>
    
  )
}

export default Footer