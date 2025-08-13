import pastaImg from '../assets/image/pasta.jpeg'


const pastaData = [
  {
    id: 1,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 2,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 3,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 4,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
    {
    id: 1,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 2,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 3,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 4,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
    {
    id: 1,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 2,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 3,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  },
  {
    id: 4,
    name: 'С креветками и трюфелями',
    description:
      'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан. 350 г',
    price: 'от 500 ₽',
    image: pastaImg
  }
]


const Pasta = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-14">
          <h1 className="font-extrabold text-3xl leading-[100%] text-yellow-300 mb-7">Pastas</h1>
          <div className="flex justify-between flex-wrap gap-5">
            {pastaData.map((item) => (
              <div key={item.id} className="w-[256px] h-[468px]">
                <img src={item.image} alt="pizza" />
                <h3 className="text-gray-500 font-extrabold text-2xl leading-7">{item.name}</h3>
                <p className="text-gray-400 font-medium text-[13px] leading-[19px] mt-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-7 mt-4">
                  <h3 className="font-bold text-2xl leading-[19px]">{item.price}</h3>
                  <button className="w-32 h-9 bg-yellow-300 text-white rounded-[8px] font-bold text-[13px]">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pasta