import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Cart from "@/components/Cart";
function Layout(props) {
  const [showCart, setShowCart] = useState(false);
  const cartClickHandler = () => {
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <div className=" bg-black relative">
        <div className="px-5 mb-32 flex flex-col gap-5 lg:px-32">
          <div className="sticky top-0 z-30 flex flex-col gap-5 bg-black">
            <Navbar onclick={cartClickHandler} />
            {props.sticky}
          </div>
          {props.children}
        </div>
        <Footer />
      </div>
      {showCart && (
        <div className="bg-opacity-30 bg-white max-h-screen fixed inset-0 z-50 w-screen flex justify-end">
          <div className="animate__animated animate__slideInRight w-full lg:w-[33%]">
            <Cart onclick={cartCloseHandler} />
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
