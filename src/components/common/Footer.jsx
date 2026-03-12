import React from "react";
import momo from "../../assets/momo.png";
import { NavLink } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={momo} alt="Momo Logo" className="w-10 h-10" />
            <h1 className="font-bold text-[#0C6967] text-2xl">Momos</h1>
          </div>
          <p className="text-[#6B788E] text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fugit fuga amet repellendus non blanditiis ea esse nemo? Pariatur, suscipit inventore nostrum beatae quasi ducimus explicabo quo assumenda ex.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-[#0C6967] text-xl md:text-2xl">Quick Links</h2>
          <NavLink className="hover:text-[#D95103]" to="/about">About Us</NavLink>
          <NavLink className="hover:text-[#D95103]" to="/menu">Our Menu</NavLink>
          <NavLink className="hover:text-[#D95103]" to="/service">Our Services</NavLink>
          <NavLink className="hover:text-[#D95103]" to="/contact">Contact Us</NavLink>
        </div>

        {/* Legals */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-[#0C6967] text-xl md:text-2xl">Legals</h2>
          <NavLink className="hover:text-[#D95103]" to="#">Terms & Conditions</NavLink>
          <NavLink className="hover:text-[#D95103]" to="#">Privacy Policy</NavLink>
          <NavLink className="hover:text-[#D95103]" to="#">Support</NavLink>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[#0C6967] text-xl md:text-2xl">Follow Us</h2>
          <div className="flex flex-wrap gap-4">
            <FaSquareFacebook size={25} className="text-[#0C6967] hover:text-[#D95103] cursor-pointer" />
            <FaInstagram size={25} className="text-[#0C6967] hover:text-[#D95103] cursor-pointer" />
            <FaTwitter size={25} className="text-[#0C6967] hover:text-[#D95103] cursor-pointer" />
            <FaYoutube size={25} className="text-[#0C6967] hover:text-[#D95103] cursor-pointer" />
            <IoLogoTiktok size={25} className="text-[#0C6967] hover:text-[#D95103] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-[#E5E5E5] pt-6 text-center text-sm text-[#6B788E]">
        &copy; {new Date().getFullYear()} Momo Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;