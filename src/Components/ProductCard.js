import React from 'react';

// product card for displaying the products in the
//  MainStore component; props recevied via the 
// productAPI js file through the MainStore component
// allows flexibility for adding new products

const ProductCard = ({ name, url, arrival, price }) => {
  return (
    <div className="max-w-[210px] pl-5">
      <div>
        <img
          src={url}
          alt={name}
          className="rounded-3 object-cover h-[95px] w-[165px] cursor-pointer"
        />
      </div>
      <h2 className="main-title font-semibold pt-3 pb-1 cursor-pointer overflow-hidden max-w-[165px]">
        {name}
      </h2>
      <div className="space-x-2">
        <p1 className="main-title font-semibold">£ {price}</p1>
        <p2 className="main-arrival">{arrival}</p2>
      </div>
    </div>
  );
};

export default ProductCard;
