import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import momo from "../../assets/momo.png";
import { CartContext } from "../../context/CardProvider";

const Header = () => {
  const { state } = useContext(CartContext);
  const { cartItems } = state;
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 md:px-10 py-3 relative">
      {/* Top row: Logo + Desktop nav + Hamburger */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={momo} alt="logo" className="w-10 h-10" />
          <h1 className="font-bold text-[#0C6967] text-2xl">Momos</h1>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#6B788E]">
          <NavLink to="/about" className="hover:text-[#D95103]">About Us</NavLink>
          <NavLink to="/menu" className="hover:text-[#D95103]">Our Menu</NavLink>
          <NavLink to="/service" className="hover:text-[#D95103]">Our Services</NavLink>
          <NavLink to="/allergy" className="hover:text-[#D95103]">Allergy</NavLink>
          <NavLink to="/cardPages" className="relative hover:text-[#D95103]">
            <FaCartArrowDown size={26} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-amber-500 px-2 text-white text-xs font-bold">{totalItems}</span>
            )}
          </NavLink>
        </div>

        {/* Hamburger & Profile */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>

          {/* Profile */}
          <div className="relative">
            <FaRegUser size={35} className="cursor-pointer" onClick={() => setProfileOpen(!profileOpen)} />
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-gray-300 rounded-lg shadow-lg p-3 flex flex-col gap-2 z-50">
                <NavLink to="/profile" className="hover:underline">Profile</NavLink>
                <NavLink to="/register" className="hover:underline">Register</NavLink>
                <NavLink to="/login" className="hover:underline">Login</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white shadow-lg p-4 rounded-lg">
          <NavLink to="/about" className="hover:text-[#D95103]" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/menu" className="hover:text-[#D95103]" onClick={() => setMenuOpen(false)}>Our Menu</NavLink>
          <NavLink to="/service" className="hover:text-[#D95103]" onClick={() => setMenuOpen(false)}>Our Services</NavLink>
          <NavLink to="/allergy" className="hover:text-[#D95103]" onClick={() => setMenuOpen(false)}>Allergy</NavLink>
          <NavLink to="/cardPages" className="relative hover:text-[#D95103]" onClick={() => setMenuOpen(false)}>
            Cart <FaCartArrowDown className="inline ml-1" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-amber-500 px-2 text-white text-xs font-bold">{totalItems}</span>
            )}
          </NavLink>

          {/* Social links */}
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
            <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
          </div>

          <NavLink to="/contact" className="bg-[#D95103] py-2 px-5 rounded-3xl text-white mt-2 text-center">Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;