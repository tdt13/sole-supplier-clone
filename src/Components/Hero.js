import React from 'react';
import HeroProductCard from './HeroProductCard';
import { heroProducts } from './productAPI';
import heroImage from '../Images/hero_image_3.jpg';

// This hero section provides an interesting layout for
// the main image and featured products. The section makes
//  use of the productAPI JS file to map over some featured
// products and render images, titles and price; this makes
// the components more resusable

const Hero = () => {
  return (
    <div className="flex flex-row py-[24px] container mx-auto px-4">
      <div className="flex flex-col max-w-[700px] overflow-hidden">
        <img
          src={heroImage}
          alt="Stacked trainers"
          width="700"
          className="rounded-3 cursor-pointer"
        ></img>
        <h1 className="hero-heading mt-[40px] font-semibold leading-10 cursor-pointer">
          Every Travis Scott x Nike Sneaker Rumoured to Release This Year
        </h1>
        <p1 className="hero-paragraph pt-2 cursor-pointer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p1>
      </div>
      <div className="flex flex-col space-y-12">
        {heroProducts.map((product) => (
          <HeroProductCard key={product.name} {...product}></HeroProductCard>
        ))}
      </div>
    </div>
  );
};

export default Hero;
