import React from "react";
import Layout from "@/components/Layout";
import CartElement from "@/components/CartElement";
import { useContext } from "react";
import cartContext from "@/components/Cart-Context";
import { useRouter } from "next/router";
import { useEffect } from "react";
function bucket() {
  const cart = useContext(cartContext);
  const router = useRouter();
  useEffect(() => {
    if (cart.items.length == 0) {
      router.push("/");
    }
  }, [cart.items.length]);
  return (
    <Layout>
      <div className="flex  w-full items-center justify-center px-20">
        <div className="flex flex-col gap-1 w-1/3 justify-center items-center">
          <div className="bg-[#e4002b] flex justify-center items-center rounded-full h-16 w-16">
            <h1 className="text-white text-2xl ">✓</h1>
          </div>
          <h1 className="text-white text-xl text-center">Menu</h1>
        </div>
        <hr className="w-1/3 border-[#e4002b]"/>
        <div className="flex flex-col gap-1 w-1/3 justify-center items-center">
          <div className="bg-[#e4002b] flex justify-center items-center rounded-full h-16 w-16">
            <h1 className="text-white text-2xl ">2</h1>
          </div>
          <h1 className="text-white text-xl text-center">Bucket</h1>
        </div>
        <hr className="w-1/3 border-[#e4002b]"/>
        <div className="flex flex-col gap-1 w-1/3 justify-center items-center opacity-50">
          <div className="bg-[#e4002b] flex justify-center items-center rounded-full h-16 w-16">
            <h1 className="text-white text-2xl ">3</h1>
          </div>
          <h1 className="text-white text-xl text-center">Checkout</h1>
        </div>
      </div>
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
    </Layout>
  );
}

export default bucket;
