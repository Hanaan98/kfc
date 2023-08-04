import React, { useState } from "react";
import { useRouter } from "next/router";
import Tabs from "@/components/Tabs";
import { useEffect } from "react";
import Product from "@/components/Product";
import Layout from "@/components/Layout";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
function productId() {
  const router = useRouter();
  const productId = router.query.productid;
  const [newProduct, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://messenger-84c29-default-rtdb.firebaseio.com/products.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const availableProducts = [];
      for (const key in data) {
        availableProducts.push({
          key: key,
          id: key,
          title: data[key].title,
          category: data[key].category,
          image: data[key].image,
          descr: data[key].descr,
          price: data[key].price,
        });
      }
      const reqProduct = availableProducts.find(
        (item) => item.id === productId
      );
      setProduct(reqProduct);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
    getData();
  }, [router, setProduct]);
  let param;
  {
    newProduct ? (param = newProduct.category) : (param = "");
  }
  const sticky = !isLoading ? (
    <div className="flex gap-3 items-center bg-black overflow-x-auto scrollbar-none lg:justify-center">
      {DUMMY_DATA.map((item) => (
        <Tabs text={item.text} id={item.id} params={param} />
      ))}
    </div>
  ) : (
    <div className="flex gap-2 items-center justify-center">
      <Skeleton
        height={50}
        duration={2}
        enableAnimation={true}
        baseColor="#202020"
        highlightColor="#444"
        width={160}
        count={6}
        inline={true}
        borderRadius={5}
        className="mx-1"
      />
    </div>
  );
  return (
    <Layout sticky={sticky}>
      {!isLoading ? (
        newProduct && (
          <Product
            id={newProduct.id}
            price={newProduct.price}
            title={newProduct.title}
            descr={newProduct.descr}
            image={newProduct.image}
          />
        )
      ) : (
        <div className="flex gap-10 justify-center items-center">
          <div className="min-w-[400px] h-[400px] overflow-hidden rounded-xl">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton height={400} duration={2} enableAnimation={true} />
            </SkeletonTheme>
          </div>
          <div className="h-[400px] overflow-hidden rounded-xl flex flex-col gap-3 justify-center">
            <Skeleton
              height={50}
              duration={2}
              enableAnimation={true}
              baseColor="#202020"
              highlightColor="#444"
              width={200}
            />
            <Skeleton
              height={50}
              duration={2}
              enableAnimation={true}
              baseColor="#202020"
              highlightColor="#444"
              width={300}
            />
            <Skeleton
              height={50}
              duration={2}
              enableAnimation={true}
              baseColor="#202020"
              highlightColor="#444"
              width={150}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default productId;
