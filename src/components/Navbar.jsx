import React, { useState } from "react";
import Link from "next/link";
import cartContext from "./Cart-Context";
import { useContext } from "react";
function Navbar(props) {
  const cart = useContext(cartContext);
  const [button, setButton] = useState(1);
  const [showLoc, setShowLoc] = useState(false);
  const statusChangeHandler = (id) => {
    setButton(id);
    {
      id == 2 ? setShowLoc(true) : setShowLoc(false);
    }
  };
  const cartClickHandler = () => {
    props.onclick();
  };
  return (
    <div className="flex  items-center justify-between bg-black py-3 ">
      <div className="flex gap-7 items-center ">
        <div className="w-[3rem] h-[3rem] lg:w-[4.45rem] lg:h-[4.45rem]">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </Link>
        </div>
        <div className="hidden items-center bg-[#1c1816] rounded-3xl lg:flex ">
          {button !== 1 ? (
            <button
              onClick={() => statusChangeHandler(1)}
              className="flex gap-2 items-center bg-[#1c1816] px-[0.85rem] py-[0.32rem] rounded-3xl justify-center"
            >
              <img
                src="/1.png"
                alt="delivery"
                className="w-6 h-6 object-contain"
              />
              <h1 className="text-white font-bold">DELIVERY</h1>
            </button>
          ) : (
            <button className="flex gap-2 items-center bg-[#48413e] px-[0.85rem] py-[0.32rem] rounded-md justify-center transition-all duration-100">
              <img
                src="/1.png"
                alt="delivery"
                className="w-6 h-6 object-contain"
              />
              <h1 className="text-white font-bold">DELIVERY</h1>
            </button>
          )}
          {button !== 2 ? (
            <button
              onClick={() => statusChangeHandler(2)}
              className="flex gap-2 items-center bg-[#1c1816] px-[0.85rem] py-[0.32rem] rounded-3xl justify-center"
            >
              <img
                src="/2.png"
                alt="delivery"
                className="w-6 h-6 object-contain"
              />
              <h1 className="text-white font-bold">PICKUP</h1>
            </button>
          ) : (
            <button className="flex gap-2 items-center bg-[#48413e] px-[0.85rem] py-[0.32rem] rounded-md justify-center transition-all duration-100">
              <img
                src="/2.png"
                alt="delivery"
                className="w-6 h-6 object-contain"
              />
              <h1 className="text-white font-bold">PICKUP</h1>
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-3 items-center lg:gap-7">
        {!showLoc && (
          <div className="hidden gap-1 bg-[#1c1816] px-3 py-2 items-center justify-center rounded-full cursor-pointer lg:flex">
            <img
              src="/map-marker-svgrepo-com.svg"
              alt="map"
              className="w-8 h-8 object-cover"
            />
            <p className="text-white text-lg">Select Location</p>
            <i className="fas fa-caret-down text-white mx-2"></i>
          </div>
        )}
        {cart.items.length === 0 ? (
          <div
            className="bg-[url('../../public/bucket-empty.png')] bg-cover w-[1.8rem] h-[1.83rem] flex items-center justify-center cursor-pointer lg:w-[2.1rem] lg:h-[2.13rem]"
            onClick={cartClickHandler}
          >
            <h1 className="text-white text-lg ">0</h1>
          </div>
        ) : (
          <div
            className=" bg-[url('../../public/cartmain.png')] bg-cover w-[2.1rem] h-[2.13rem] flex items-center justify-center cursor-pointer "
            onClick={cartClickHandler}
          >
            <h1 className="text-white text-lg ">{cart.items.length}</h1>
          </div>
        )}
        <button className="px-3 h-9 rounded-lg bg-[#e4002b] text-white text-lg hover:opacity-80 hover:transition-all ">
          Register / Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
