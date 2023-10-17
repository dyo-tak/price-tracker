import React from "react";
import Image from "next/image";
import Searchbar from "@/components/Searchbar";
import HerpCarousal from "@/components/HerpCarousal";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const page = async () => {
  const allProducts = await getAllProducts();
  
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text ">
              Unleash the Power of
              <span className="text-blue-700"> PriceTracker</span>
            </h1>
            <p className="mt-6">
              Paste your amazon product link below and we will provide you with the history of the product and notify you.
            </p>
            <Searchbar />
          </div>

          <HerpCarousal />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex justify-between flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
