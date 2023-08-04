import React, { useEffect, useState } from "react";
import { useContext } from "react";
import cartContext from "./Cart-Context";
function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const cart = useContext(cartContext);
  const incrementer = () => {
    setQuantity(quantity + 1);
  };
  const decrementer = () => {
    if (quantity >= 2) setQuantity(quantity - 1);
  };
  const product = {
    id: props.id,
    image: props.image,
    amount: quantity,
    price: props.price,
    title: props.title,
  };
  const addHandler = () => {
    cart.addItem(product);
    setQuantity(1);
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center lg:flex-row ">
      <div className="">
        <img
          src={props.image}
          alt={props.id}
          className="w-auto h-80 object-cover lg:w-96 lg:h-96"
        />
      </div>
      <div className="flex flex-col gap-3 lg:w-[35%]">
        <h1 className="text-white text-2xl lg:text-5xl font-bold">
          {props.title}
        </h1>
        <h2 className="text-white opacity-70 text-lg">{props.descr}</h2>
        <h1 className="text-white text-4xl font-bold">Rs {props.price}</h1>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center bg-[#e4002b] w-10 h-10 p-7 rounded-lg cursor-pointer hover:opacity-80 hover:transition-all"
              onClick={decrementer}
            >
              <h2 className="text-white text-3xl">-</h2>
            </div>
            <h2 className="text-white text-xl">{quantity}</h2>
            <div
              className="flex items-center justify-center bg-[#e4002b] w-10 h-10 p-7 rounded-lg cursor-pointer hover:opacity-80 hover:transition-all"
              onClick={incrementer}
            >
              <h2 className="text-white text-3xl">+</h2>
            </div>
          </div>
          <div
            className="bg-[#e4002b] w-44 h-10 rounded-lg flex items-center justify-center p-7 cursor-pointer hover:opacity-80 hover:transition-all"
            onClick={addHandler}
          >
            <h1 className="text-white text-xl ">Add to bucket</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
