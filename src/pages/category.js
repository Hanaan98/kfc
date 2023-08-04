import React, { useEffect, useState } from "react";
import Tabs from "@/components/Tabs";
import { useRouter } from "next/router";
import TopSellingElement from "@/components/TopSellingElement";
import Layout from "@/components/Layout";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
const DUMMY_DATA = [
  {
    text: "Everday Value",
    id: "everyday-value",
  },
  {
    text: "Ala Carte & Combos",
    id: "ala-carte-combos",
  },
  {
    text: "Signature Boxes",
    id: "signature-boxes",
  },
  {
    text: "Sharing",
    id: "sharing",
  },
  {
    text: "Snacks & Beverages",
    id: "snacks-beverages",
  },
  {
    text: "Midnight",
    id: "midnight",
  },
];

function category() {
  const router = useRouter();
  const [category, setCategory] = useState("All Products");
  const [isLoading, setIsLoading] = useState(true);
  const [param, setParam] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = router.asPath.split("#")[1];
    const isPresent = DUMMY_DATA.find((item) => item.id === params);
    if (!params || !isPresent) {
      router.push("/");
    }
    const getData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://messenger-84c29-default-rtdb.firebaseio.com/category.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const availableCategories = [];
      for (const key in data) {
        const products = data[key].products;
        const productsArray = Object.entries(products).map(([id, product]) => ({
          id,
          ...product,
        }));
        availableCategories.push({
          key: key,
          id: key,
          text: data[key].text,
          products: productsArray,
        });
      }

      const match = availableCategories.find((item) => item.id === params);
      if (match) {
        setCategory(match);
        setIsLoading(false);
      }
    };
    if (params) {
      getData();
      setParam(params);
    }
  }, [router, setCategory]);
  const sticky = (
    <div className="flex  gap-3 items-center  bg-black overflow-auto scrollbar-none lg:justify-center">
      {DUMMY_DATA.map((item) => (
        <Tabs text={item.text} id={item.id} params={param} />
      ))}
    </div>
  );
  return (
    <Layout sticky={sticky}>
      <div className="mt-10 flex items-center gap-5 ">
        {!isLoading ? (
          <h1 className="text-[#d4d4d4] text-xl flex-shrink-0 lg:text-[2.08rem] font-bold">
            {category.text}
          </h1>
        ) : (
          <Skeleton
            height={50}
            width={150}
            duration={2}
            enableAnimation={true}
            baseColor="#202020"
            highlightColor="#444"
          />
          // <div className="w-32 h-10 rounded-lg bg-[#1c1816] lg:w-40 lg:h-14"></div>
        )}
        {!isLoading && (
          <hr className="border border-[#3f3f3f] flex-grow w-full" />
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-10 lg:grid-cols-4">
        {!isLoading ? (
          category &&
          category.text &&
          category.products.map((item) => (
            <TopSellingElement
              title={item.title}
              image={item.image}
              price={item.price}
              descr={item.descr}
              id={item.id}
            />
          ))
        ) : (
          <>
            {/* <div className="bg-[#1c1816] h-[40vh] rounded-lg w-40 lg:w-64"></div>
            <div className="bg-[#1c1816] h-[40vh] rounded-lg w-40 lg:w-64"></div>
            <div className="bg-[#1c1816] h-[40vh] rounded-lg w-40  lg:w-64"></div>
            <div className="bg-[#1c1816] h-[40vh] rounded-lg w-40  lg:w-64"></div> */}
            <div className="min-w-[180px] h-[400px] overflow-hidden rounded-xl">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
            <div className="min-w-[180px] h-[400px] overflow-hidden rounded-xl">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
            <div className="min-w-[180px] h-[400px] overflow-hidden rounded-xl">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
            <div className="min-w-[180px] h-[400px] overflow-hidden rounded-xl">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={400} duration={2} enableAnimation={true} />
              </SkeletonTheme>
            </div>
          </>
        )}
      </div>
      {!isLoading &&
        category &&
        category.text &&
        category.products.length == 0 && (
          <h1 className="text-white text-4xl text-center w-full lg:text-6xl font-bold">
            No Products Found
          </h1>
        )}
    </Layout>
  );
}

export default category;
