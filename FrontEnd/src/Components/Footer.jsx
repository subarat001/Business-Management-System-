// Footer.jsx

import React from "react";
import {
  FaIndustry,
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {

  const products = [
    "Single Phase Servo",
    "Three Phase Servo",
    "Variacs",
    "Oil Cooled",
    "Isolation Transformers",
  ];

  const company = [
    "About Us",
    "Industries",
    "Certifications",
    "Careers",
  ];

  const support = [
    "AMC Plans",
    "Service Centers",
    "Download Manuals",
    "FAQ",
  ];

  return (
    <footer className="w-full bg-[#060606] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 relative z-10">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-14">

          {/* LEFT SECTION */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <FaIndustry className="text-white text-2xl" />
              </div>

              <div>
                <h1 className="text-3xl font-black leading-tight">
                  Konark Enterprises
                </h1>

                <p className="uppercase tracking-[3px] text-xs text-orange-400 font-semibold mt-1">
                  Servo Stabilizers
                </p>
              </div>
            </div>

            {/* DESC */}
            <p className="text-white/50 text-lg leading-9 mt-8 max-w-md">
              Premium manufacturer of servo stabilizers &
              variacs since 2004. Trusted across industries
              with pan-India support.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-10">

              <button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-orange-500 transition duration-300 flex items-center justify-center text-lg">
                <FaInstagram />
              </button>

              <button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-orange-500 transition duration-300 flex items-center justify-center text-lg">
                <FaLinkedinIn />
              </button>

              <button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-orange-500 transition duration-300 flex items-center justify-center text-lg">
                <FaFacebookF />
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div>

            <h2 className="text-xl font-bold mb-8 text-white">
              Products
            </h2>

            <div className="flex flex-col gap-5">

              {products.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="group flex items-center justify-between text-white/50 hover:text-orange-400 transition duration-300"
                >
                  <span>{item}</span>

                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>

            <h2 className="text-xl font-bold mb-8 text-white">
              Company
            </h2>

            <div className="flex flex-col gap-5">

              {company.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="group flex items-center justify-between text-white/50 hover:text-orange-400 transition duration-300"
                >
                  <span>{item}</span>

                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div>

            <h2 className="text-xl font-bold mb-8 text-white">
              Support
            </h2>

            <div className="flex flex-col gap-5">

              {support.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="group flex items-center justify-between text-white/50 hover:text-orange-400 transition duration-300"
                >
                  <span>{item}</span>

                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>
              <h2 className="text-3xl font-black">
                Stay Updated
              </h2>

              <p className="text-white/50 mt-3 text-lg">
                Get latest product updates & industrial solutions.
              </p>
            </div>

            {/* INPUT */}
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-white/5 border-white/10 text-white placeholder:text-white/40 w-full sm:w-[320px] h-[58px] rounded-2xl focus:outline-none"
              />

              <button className="btn h-[58px] px-8 bg-orange-500 hover:bg-orange-600 border-none rounded-2xl text-white text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-14 pt-8 border-t border-white/10">

          <p className="text-white/35 text-sm text-center md:text-left">
            © 2024 Konark Enterprises. All rights reserved.
          </p>

          <p className="text-white/35 text-sm text-center md:text-right">
            GST: 07XXXXX1234X1ZX · Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}