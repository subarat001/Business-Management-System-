// Navbar.jsx

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaIndustry,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [ {name:"Home", link:"/"},  {name:"Products" , link:"/products"}, {name:"About" , link:"/about"}, {name:"Contact" , link:"/contact"}];

  return (
    <div className="w-full bg-base-100 shadow-sm sticky top-0 left-0 z-999">
      <div className="navbar max-w-[1400px] mx-auto px-4 lg:px-10 py-2">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="flex items-center gap-3">

            {/* Example Logo */}
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center">
              <FaIndustry className="text-yellow-500 text-2xl" />
            </div>

            {/* Company Name */}
            <div className="leading-tight">
              <h1 className="text-2xl font-bold text-[#1e1e1e]">
                Konark Enterprises
              </h1>

              <p className="text-sm uppercase tracking-wide text-gray-500">
                Servo Stabilizers & Variacs
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={`font-medium transition duration-200 hover:text-orange-500 ${
                item === "Home"
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Quote Button */}
          <button className="btn bg-[#17110f] hover:bg-black border-none text-white rounded-2xl px-7">
            Get Quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpenMenu(true)}
            className="btn btn-ghost text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>

          <button
            onClick={() => setOpenMenu(false)}
            className="btn btn-sm btn-circle btn-ghost"
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-5 gap-5">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={`${item.link}`}
              className={`text-lg font-medium ${
                item === "Home"
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </NavLink>
          ))}

          <button className="btn bg-[#17110f] hover:bg-black border-none text-white rounded-xl mt-3">
            Get Quote
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </div>
  );
};

export default Navbar;