import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import momo from "../../assets/momo.png";
import { CartContext } from "../../context/CardProvider";

const Header = () => {

  const {state}=useContext(CartContext);
  const {cartItems}=state;

  const totalItems=cartItems.reduce((acc,item)=>{

     return acc+item.qty;
  },0);


  return (
    <nav className="flex justify-around items-center p-3 bg-white">
      <NavLink to="/" className="flex items-center gap-x-3">
     <img src={momo}/>
      <h1 className="font-bold text-[#0C6967] text-2xl">momos</h1>
      </NavLink>
      <div className="space-x-8 flex items-center justify-center text-[#6B788E]">
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Our Services</NavLink>
        <NavLink to="/allergy">Allergy</NavLink>
        <NavLink to="/cardPages" className="relative">
        <p className="absolute left-4 bottom-5 rounded-2xl bg-amber-500  px-2 text-white">{totalItems}</p>
        <FaCartArrowDown size={26}/></NavLink>
        
      </div>
      <div className="flex items-center gap-x-8">
        <NavLink to="https://www.facebook.com/">
          <FaFacebook size={20} />
        </NavLink>
        <NavLink>
          <FaTiktok to="https://www.tiktok.com/en/" size={20}/>
        </NavLink>
        <NavLink>
          <FaInstagram to="https://www.instagram.com/" size={20}/>
        </NavLink>

        <NavLink to="/contact" className="bg-[#D95103] py-2 px-5 rounded-3xl text-white">Contact us</NavLink>
      </div>
      <div className="group relative z-100">
        <FaRegUser size={35} color="black" />

        <div className="hidden group-hover:flex flex-col gap-y-2 bg-gray-400 absolute font-bold gap-y-2 p-4">
            <NavLink to="/profile" className="hover:underline">Profile</NavLink>
            <NavLink to="/register" className="hover:underline">Register</NavLink>
            <NavLink to="/login" className="hover:underline">Login</NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Header;
