import { useState } from "react";
import React from "react";
import "./style.css";
import { Menu, Home, User } from "lucide-react";

const NavLink = ({ text }) => (
  <div className="relative group px-4 py-2 cursor-pointer">
    <a className="text-white relative">{text}</a>
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff004f] transition-all duration-300 group-hover:w-full"></span>
  </div>
);

export default function Header({ handleScroll, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#101820] px-6 py-4">
      <div className="w-3/4 flex justify-center items-center py-3">
        {/* <div className="bg-[#a2a2a2] p-3 rounded-lg">
          <span className="text-white font-bold text-xl">SHAYAN</span>
        </div> */}
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <button onClick={handleScroll}>
            <NavLink text="HOME" />
          </button>
          <button onClick={() => handleScroll(refs.aboutMeRef)}>
            <NavLink text="ABOUT" />
          </button>
          <button onClick={() => handleScroll(refs.servicesRef)}>
            <NavLink text="SERVICES" />
          </button>

          <button onClick={() => handleScroll(refs.portfolioRef)}>
            <NavLink text="PORTFOLIO" />
          </button>
          <button onClick={() => handleScroll(refs.contactMeRef)}>
            <NavLink text="CONTACT" />
          </button>
        </div>
      </div>
      {/* Left Side - Logo */}

      {/* Right Side - Mobile Menu Button */}
      <button
        className="md:hidden bg-[#50E3C2] p-3 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="text-black w-6 h-6" />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#101820] p-5 rounded-lg md:hidden">
          <a className="block text-white mb-2 hover:text-gray-400">HOME</a>
          <a
            onClick={() => handleScroll(refs.aboutMeRef)}
            href="#"
            className="block text-white mb-2 hover:text-gray-400"
          >
            ABOUT
          </a>
          <a
            onClick={() => handleScroll(refs.servicesRef)}
            href="#"
            className="block text-white mb-2 hover:text-gray-400"
          >
            SERVICES
          </a>
          <a
            onClick={() => handleScroll(refs.portfolioRef)}
            href="#"
            className="block text-white mb-2 hover:text-gray-400"
          >
            PROJECTS
          </a>

          <a
            onClick={() => handleScroll(refs.contactMeRef)}
            href="#"
            className="block text-white hover:text-gray-400"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
