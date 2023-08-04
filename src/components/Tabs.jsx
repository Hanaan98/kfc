import Link from "next/link";
import React from "react";

function Tabs(props) {
  const link = `/category#${props.id}`;

  return (
    <Link href={link}>
      {" "}
      {props.id !== props.params ? (
        <div className="flex items-center justify-center w-28 h-12 bg-[#e4002b] rounded-md cursor-pointer lg:w-40 lg:h-12">
          <h1 className="text-white text-sm  w-full text-center tracking-wider lg:text-base ">
            {props.text}
          </h1>
        </div>
      ) : (
        <div className="flex items-center justify-center w-32 h-14 bg-[#e4002b] rounded-md cursor-pointer lg:w-40 lg:h-16 border-[4px] border-white">
          <h1 className="text-white text-sm  w-full text-center tracking-wider lg:text-base">
            {props.text}
          </h1>
        </div>
      )}
    </Link>
  );
}

export default Tabs;
