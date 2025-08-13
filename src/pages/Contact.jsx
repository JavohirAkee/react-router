import React from 'react'
import store from '../assets/image/store.png'
import location from '../assets/image/location.png'

// Kartochka ma'lumotlari
const contactItems = [
  {
    id: 1,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 3,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 4,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
]

const Contact = () => {
  return (
    <section className='bg-blue-100 h-[668px] mt-15'>
      <div className='container'>
        <h2 className='text-center mb-15 pt-14 font-extrabold text-yellow-400 text-3xl'>
          Оплата и доставка
        </h2>
        <div className='flex gap-[30px] flex-wrap'>
          {contactItems.map(item => (
            <div key={item.id} className='w-[255px] h-[104px] bg-white rounded-[14px]'>
              <div className='bg-white w-[77px] h-[77px] rounded-[50%] relative bottom-9 left-22'>
                <img className='m-auto relative top-3.5' src={item.icon} alt="icon" />
              </div>
              <p className='relative bottom-10 left-6 font-bold text-[14px] leading-[22px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div>
          <img className='mt-8' src={location} alt="location map" />
        </div>
      </div>
    </section>
  )
}

export default Contact
