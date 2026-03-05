import React from "react";
import momo from "../../assets/momo.png";
import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center p-12">
      <div className="grid grid-cols-4 gap-8 ml-5">
        <div>
          <div className="flex gap-2 items-center">
            <img src={momo} alt="" />
            <h1 className="font-bold text-[#0C6967] text-2xl">momos</h1>
          </div>

          <p className="mt-3 text-[#6B788E] text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab fugit
            fuga amet repellendus non blanditiis ea esse nemo? Pariatur,
            suscipit inventore nostrum beatae quasi ducimus explicabo quo
            assumenda ex.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#0C6967] text-2xl">momos</h1>

          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/menu">Our Menu</NavLink>
          <NavLink to="/service">Our Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#0C6967] text-2xl">Legals</h1>

          <h1>Terms and conditions</h1>
          <h1>Privacy and Policy</h1>
          <h1>Support</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-[#0C6967] text-2xl">Follow Us</h1>

          <div className="grid grid-cols-3 gap-3">
            <FaSquareFacebook size={25} className="font-bold" />
            <FaInstagram size={25} className="font-bold" />
            <FaTwitter size={25} className="font-bold" />
            <FaYoutube size={25} className="font-bold" />
            <IoLogoTiktok size={25} className="font-bold" />
          </div>
        </div>
      </div>

      {/* <div className="bg-black p-5 text-white italic text-sm text-center w-full">
        @copyright reserved by sipalaya Info Tech
      </div> */}
    </div>
  );
};

export default Footer;
