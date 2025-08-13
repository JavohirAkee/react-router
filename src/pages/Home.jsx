import yellow from '../assets/image/yellow-img.png'
import black from '../assets/image/black-img.png'
import minipizza from '../assets/image/mini-piza.png'
import Pizza from './Pizza'
import Promotions from './Promotions'
import Contact from './Contact'

const newProducts = [
  { id: 1, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 2, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 3, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 4, name: "Карбонара", price: "от 120 ₽", image: minipizza }
]

const Home = () => {
  return (
    <section>
      <div className='container'>
        <div className="flex items-center justify-center mt-4">
          <img src={yellow} alt="yellow banner" />
          <img src={black} alt="black banner" />
        </div>
        <div className='mt-13'>
          <h2 className='font-bold text-2xl mb-9'>Навинки</h2>
          <div className='flex gap-[30px] flex-wrap'>
            {newProducts.map(item => (
              <div key={item.id} className='flex text-center w-[255px] h-[99px] bg-white rounded-lg shadow-lg p-2'>
                <img src={item.image} alt={item.name} />
                <div className='text-start my-auto ml-4 w-[107px]'>
                  <h3 className='font-bold text-[18px] leading-[100%]'>{item.name}</h3>
                  <h3 className='font-extrabold text-[16px] leading-[100%] text-yellow-400 mt-2'>
                    {item.price}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pizza />
      <Promotions />
      <Contact />
    </section>
  )
}

export default Home
