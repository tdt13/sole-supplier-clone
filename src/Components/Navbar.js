import React from "react";
import navlogo from "../Images/navbar_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'




const Navbar = () => {
  return (
    <div className="bg-black flex align-middle justify-center h-[70px] ">
    <nav className=" text-white px-4 py-2 flex items-center justify-between bg-black max-w-7xl h-[70px]   ">
      
    {/* Logo */}
    <div className="flex items-center">
      <img src={navlogo} alt="Logo" className="h-15 w-auto pr-5 cursor-pointer" />
    </div>
    
    {/* Navigation Links */}
    <div className="flex space-x-4">
      <a href="#footwear" className=" navbar-text">Footwear</a>
      <a href="#marketplace" className="navbar-text">Marketplace</a>
      <a href="#clothing" className="navbar-text">Clothing</a>
      <a href="#sale" className="navbar-text">Sale</a>
      <a href="#news" className="navbar-text">News</a>
    </div>

    {/* Search Box */}
    <div className="flex items-center pl-[200px] relative ">
      <input
        type="text"
        placeholder=  "Search"
        className="px-2 py-1 h-[40px] rounded-3 transition ease-in duration-900 focus:outline-solid focus:ring focus:ring-gray-800 focus:w-60 "
      />
    </div>
    <FontAwesomeIcon icon={faBell} className="text-gray-300 size-6 m-4 cursor-pointer" />
    <FontAwesomeIcon icon={faUser} className="text-gray-300 size-5 font-extrabold cursor-pointer" />
    
  </nav>
  </div>
  );
};

export default Navbar;
