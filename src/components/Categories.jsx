import React from "react";
import Link from "next/link";
const DUMMY_DATA = [
  { image: "1670428227978-image.jpg", link: "/category#everyday-value" },
  { image: "1670428259329-image.jpg", link: "/category#signature-boxes" },
  { image: "1670428289482-image.jpg", link: "/category#sharing" },
  { image: "1670428300613-image.jpg", link: "/category#snacks-beverages" },
  { image: "1664808314387-image.png", link: "/category#ala-carte-combos" },
  { image: "1664808381179-image.png", link: "/category#midnight" },
];
function Categories() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-5">
        <h1 className="text-[#d4d4d4] text-xl flex-shrink-0 lg:text-[2.08rem] font-bold">
          Browse Categories
        </h1>
        <hr className="border border-[#3f3f3f] flex-grow w-full" />
      </div>
      <div className="flex flex-nowrap overflow-x-auto justify-center ">
        {DUMMY_DATA.map((item) => (
          <Link href={item.link}>
            <img
              src={item.image}
              alt=""
              className="w-auto h-auto object-cover "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
