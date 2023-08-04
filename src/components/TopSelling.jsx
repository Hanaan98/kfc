import React from "react";
import TopSellingElement from "./TopSellingElement";
const DUMMY_DATA = [
  {
    id: "krunch-burger",
    image: "1670410356108-image.jpg",
    title: "Krunch Burger",
    descr:
      "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    price: 250,
  },
  {
    id: "krunch-with-fries-n-drink",
    image: "1670409700963-image.jpg",
    title: "Krunch With Fries N Drink",
    descr: "Krunch + 1 regular Fries + 1 regular Drink",
    price: 470,
  },
  {
    id: "mighty-zinger",
    image: "1664273664824-image.png",
    title: "Mighty Zinger",
    descr:
      "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain...",
    price: 670,
  },
  {
    id: "xtreme-duo-box",
    image: "1670410761440-image.jpg",
    title: "Xtreme Duo Box",
    descr:
      "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + ...",
    price: 1340,
  },
];
function TopSelling() {
  return (
    <div className="flex flex-col gap-7 mt-10">
      <div className="flex items-center gap-5">
        <h1 className="text-[#d4d4d4] text-xl flex-shrink-0 lg:text-[2.08rem] font-bold">
          Top Selling
        </h1>
        <hr className="border border-[#3f3f3f] flex-grow w-full" />
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-3  lg:grid-cols-4 lg:gap-4">
        {DUMMY_DATA.map((item) => (
          <TopSellingElement
            title={item.title}
            image={item.image}
            price={item.price}
            descr={item.descr}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TopSelling;
