import React from 'react';
import heart from '../Images/heart-regular.svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

// This is the heroproduct card component which is rendered
// inside the Hero component where the props for the title
// image, price etc. Are passed from the Hero component
// It also uses conditional rendering to show whether or
// not a product is in stock or not based on the boolean
// inStock prop

const HeroProductCard = ({ name, url, inStock, price }) => {
  return (
    <div className="max-w-[350px] pl-5">
      <div>
        <img
          src={url}
          alt={name}
          className="rounded-3 object-cover h-[200px] w-[355px] cursor-pointer"
        />
      </div>
      <h2 className="hero-subheading font-bold cursor-pointer">{name}</h2>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {inStock ? (
            <p1 className="font-assistant text-sm text-green-700 font-bold">
              In Stock
            </p1>
          ) : (
            <p1 className="font-assistant text-sm text-red-700 font-bold">
              Out of Stock
            </p1>
          )}
          <p1 className="hero-subparagraph font-semibold">£ {price}</p1>
        </div>
        <div className="flex space-x-3 ">
          <img
            src={heart}
            alt="Heart Icon"
            width="25px"
            className="cursor-pointer"
          ></img>
          <button className="bg-purple-600 rounded-2 text-white p-2 font-assistant text-[16px] font-bold h-[33px] text-center">
            {
              <FontAwesomeIcon
                icon={faBell}
                className="text-white size-4 pr-2"
              />
            }
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroProductCard;
