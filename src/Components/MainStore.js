import React from 'react';
import { mainProducts } from './productAPI';
import ProductCard from './ProductCard';

// This is the main store component and uses a
// map to map over products from the product API js file
// it renders the ProductCard component for each to make
// this more reusable.

const MainStore = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[#b7b7b8] text-[20px] font-semibold font-barlow pb-4">
        LATEST DROPS
      </h1>
      <div className="flex ">
        {mainProducts.map((product) => (
          <ProductCard key={product.title} {...product}></ProductCard>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        <button className=" bg-white border border-black   px-2 py-1 rounded-full font-assistant text-[13px] text-[#4D4D4F] cursor-pointer ">
          View more drops
        </button>
      </div>
    </div>
  );
};

export default MainStore;
