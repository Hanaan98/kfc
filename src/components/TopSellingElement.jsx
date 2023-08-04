import React from "react";
import Link from "next/link";

function TopSellingElement(props) {
  const url = `/product/${props.id}`;
  return (
    <Link href={url}>
      <div className="flex flex-col gap-2  justify-around p-2 rounded-xl bg-[#1c1816] h-auto cursor-pointer lg:h-[70vh] lg:px-4 lg:py-3">
        <div className=" w-full max-h-[15rem] mt-1 lg:mt-3">
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-cover transition duration-300 transform hover:scale-105 "
          />
        </div>

        <h1 className="text-white text-md lg:text-2xl font-bold">
          {props.title}
        </h1>
        <h2 className="text-[#ffffff8a] text-sm truncate lg:text-lg">
          {props.descr}
        </h2>

        <div className="flex justify-between items-center  lg:mt-5">
          <h1 className="text-white text-md lg:text-3xl font-bold">
            Rs {props.price}
          </h1>
          <button className="hidden px-3 h-9 rounded-lg bg-[#e4002b] text-white text-lg hover:opacity-80 hover:transition-all lg:block">
            Add to bucket
          </button>
          <button className="text-[#e4002b] hover:opacity-80 hover:transition-all text-3xl lg:hidden">
            +
          </button>
        </div>
      </div>
    </Link>
  );
}

export default TopSellingElement;
