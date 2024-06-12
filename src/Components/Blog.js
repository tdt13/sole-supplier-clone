import React from 'react';
import { blogItems } from './productAPI';
import BlogItem from './BlogItem';

// blog section on the webpage highlights latest
// news articles. The code maps over a list(blogItems)
// from the productAPI JS file and renders BlogItem card
// for each element in the list; the props are passed by
// spreading the item that is pulled through from the map

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[#b7b7b8] text-[20px] font-semibold font-barlow">
        LATEST NEWS
      </h1>
      {blogItems.map((item) => (
        <BlogItem key={item.title} {...item}></BlogItem>
      ))}

      <div className="flex flex-row justify-center space-x-4 mt-10 mr-96 ">
        <button className=" bg-white border border-black  px-2 py-1 rounded-full font-assistant text-[13px] text-[#4D4D4F] cursor-pointer ">
          View more news
        </button>
        <button className=" bg-white border border-black  px-2 py-1 rounded-full font-assistant text-[13px] text-[#4D4D4F] cursor-pointer ">
          View more raffles
        </button>
      </div>
    </div>
  );
};

export default Blog;
