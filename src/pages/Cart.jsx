// src/pages/Cart.jsx
import React from "react";

import pizzaImg from "../assets/image/pizza.png";
import milkshakeImg from "../assets/image/milkshake.png";
import cheeseSauceImg from "../assets/image/cheese-sauce.png";
import bbqSauceImg from "../assets/image/bbq-sauce.png";
import ranchImg from "../assets/image/ranch.png";
import sourCreamImg from "../assets/image/sour-cream.png";
import mayoImg from "../assets/image/mayo.png";

const cartItems = [
  {
    id: 1,
    name: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 120,
    image: pizzaImg,
  },
  {
    id: 2,
    name: "С креветками и трюфелями",
    description:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 120,
    image: pizzaImg,
  },
];

const addOns = [
  { id: 1, name: "Молочный коктейль с ...", price: 120, image: milkshakeImg },
  { id: 2, name: "Молочный коктейль с ...", price: 120, image: milkshakeImg },
  { id: 3, name: "Молочный коктейль с ...", price: 120, image: milkshakeImg },
  { id: 4, name: "Молочный коктейль с ...", price: 120, image: milkshakeImg },
];

const sauces = [
  { id: 1, name: "Сырный соус", price: 120, image: cheeseSauceImg },
  { id: 2, name: "Барбекю", price: 120, image: bbqSauceImg },
  { id: 3, name: "Ранч", price: 120, image: ranchImg },
  { id: 4, name: "Сметана", price: 120, image: sourCreamImg },
  { id: 5, name: "Майонезный соус", price: 120, image: mayoImg },
  { id: 6, name: "Сырный соус", price: 120, image: cheeseSauceImg },
];

const Cart = () => {
  return (
    <section className="py-8">
      <div className="container">

        <h1 className="text-yellow-400 text-3xl font-extrabold mb-6">
          Корзина
        </h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg">{item.price} ₽</span>
                <div className="flex items-center border rounded">
                  <button className="px-2">-</button>
                  <span className="px-2">1</span>
                  <button className="px-2">+</button>
                </div>
                <button className="text-gray-400 hover:text-red-500">✕</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-xl mt-10 mb-4">Добавить к заказу?</h2>
        <div className="flex gap-4 overflow-x-auto">
          {addOns.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[150px] text-center border rounded-lg p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2 text-sm">{item.name}</p>
              <p className="text-red-500 font-bold">от {item.price} ₽</p>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-xl mt-10 mb-4">
          Соусы к бортикам и закускам
        </h2>
        <div className="flex gap-4 overflow-x-auto">
          {sauces.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[150px] text-center border rounded-lg p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto"
              />
              <p className="mt-2 text-sm">{item.name}</p>
              <p className="text-red-500 font-bold">от {item.price} ₽</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2">
          <input
            type="text"
            placeholder="Введите промокод"
            className="border p-2 rounded w-60"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded font-bold">
            Применить
          </button>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg">
            Сумма заказа:{" "}
            <span className="font-bold text-yellow-500 text-2xl">
              1 048 ₽
            </span>
          </p>
          <button className="bg-yellow-400 px-6 py-3 rounded font-bold">
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
