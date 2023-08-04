import React, { useState } from 'react'
import cartContext from './Cart-Context'
import { useContext } from 'react'
function CartElement(props) {
    const cart = useContext(cartContext);
    const product={
        id:props.id,
        title:props.title,
        amount:1,
        price:props.price,
        image:props.image,
    }
    const addHandler = ()=>{
        cart.addItem(product);
    }
    const removeHandler =()=>{
        cart.deleteItem(props.id);

    }
    const required = cart.items.find((item)=>item.id===props.id);
  return (
    <div className="flex justify-between p-4 w-full bg-[#1c1816] rounded-lg items-center">
        <div className="flex items-center gap-3">
          <img src={props.image} alt="" className="w-[4.5rem] h-[4.5rem] object-cover"/>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg tracking-wider">{props.title}</h1>
            <div className="flex gap-4 items-center">
              <h1 className="text-[#e4002b] text-3xl cursor-pointer" onClick={removeHandler}>-</h1>
              <h1 className="text-white">{required.amount}</h1>
              <h1 className="text-[#e4002b] text-3xl cursor-pointer" onClick={addHandler}>+</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-white text-xl">RS {props.price * required.amount}</h1>
        </div>
      </div>
  )
}

export default CartElement