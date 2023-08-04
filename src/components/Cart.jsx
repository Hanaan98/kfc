import React from "react";
import CartElement from "./CartElement";
import cartContext from "./Cart-Context";
import { useContext } from "react";
import Link from "next/link";
function Cart(props) {
  const cart = useContext(cartContext);
  const clickHandler = () => {
    props.onclick();
  };
  return (
    <div className="w-full bg-black h-screen px-5 py-6 flex flex-col">
      <div className="flex justify-between items-center h-20vh">
        <div className="flex gap-5 items-center">
          {cart.items.length === 0 ? (
            <div className="bg-[url('../../public/bucket-empty.png')] bg-cover w-[2.3rem] h-[2.3rem] flex items-center justify-center">
              <h1 className="text-white text-lg ">0</h1>
            </div>
          ) : (
            <div className="bg-[url('../../public/cartmain.png')] bg-cover w-[2.3rem] h-[2.3rem] flex items-center justify-center">
              <h1 className="text-white text-lg ">{cart.items.length}</h1>
            </div>
          )}
          <div>
            <h1 className="text-white text-2xl">Your Bucket</h1>
          </div>
        </div>
        <div className="flex gap-2">
          {cart.items.length !== 0 && (
            <h1 className="text-white text-xl">RS {cart.totalAmount}</h1>
          )}
          <img
            src="\cross-svgrepo-com.svg"
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={clickHandler}
          />
        </div>
      </div>
      {cart.items.length === 0 ? (
        <div className="flex flex-col gap-2 items-center justify-center  h-[80vh]">
          <img src="/bucket.png" alt="bucket" className="w-16 h-16" />
          <h1 className="text-white text-2xl">
            You haven't added any items in bucket yet
          </h1>
        </div>
      ) : (
        <>
          <div className="mt-10 flex flex-col gap-2 max-h-[60vh] overflow-y-scroll scrollbar-thumb-[#ffffff33] scrollbar-thin scrollbar-track-black scroll-smooth scrollbar-thumb-rounded-full">
            {cart.items.map((item) => (
              <CartElement
                image={item.image}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>

          <Link
            href="/bucket"
            className="fixed bottom-5 left-1 right-1  flex items-center justify-center w-full"
          >
            <button className="w-[90%] h-10 rounded-lg bg-[#e4002b] text-white text-lg hover:opacity-80 hover:transition-all">
              View Bucket
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
