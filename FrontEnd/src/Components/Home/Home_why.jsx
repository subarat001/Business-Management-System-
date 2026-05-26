// Home_why.jsx

import React from "react";
import {
  FaBolt,
  FaGaugeHigh,
  FaScrewdriverWrench,
  FaDisplay,
  FaToggleOn,
  FaShieldHalved,
} from "react-icons/fa6";

export default function Home_why() {

  const features = [
    {
      icon: <FaBolt />,
      title: "Fast Correction",
      desc: "Voltage corrected within 20ms. Servo motor responds instantly to any fluctuation.",
    },
    {
      icon: <FaGaugeHigh />,
      title: "Wide Input Range",
      desc: "Handles 90V–270V (1-phase) and 270V–470V (3-phase). Outputs stable ±1% voltage.",
    },
    {
      icon: <FaScrewdriverWrench />,
      title: "Custom Build",
      desc: "12A to 500A, oil or air cooled, single or three phase — built to your exact load.",
    },
    {
      icon: <FaDisplay />,
      title: "Digital Display",
      desc: "Built-in voltmeter, ammeter and digital panel for real-time input/output monitoring.",
    },
    {
      icon: <FaToggleOn />,
      title: "Bypass Switch",
      desc: "Manual bypass for zero-downtime maintenance — no interruption to your production.",
    },
    {
      icon: <FaShieldHalved />,
      title: "2-Year Warranty",
      desc: "Comprehensive warranty + AMC plans. Nationwide service in 50+ cities.",
    },
  ];

  return (
    <div className="w-full bg-[#f7f5f3] py-20 lg:py-28 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* TOP CONTENT */}
        <div className="max-w-3xl">

          {/* SMALL TITLE */}
          <p className="text-orange-500 uppercase tracking-[4px] font-bold text-sm mb-6">
            Why Konark
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1a1412] leading-tight">
            Built for Indian Grid Conditions
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg lg:text-2xl leading-9 mt-8">
            Every unit we make handles severe voltage fluctuations —
            protecting your machines and reducing downtime.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-[32px] p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >

              {/* ICON BOX */}
              <div className="w-16 h-16 rounded-2xl border border-orange-300 bg-orange-50 flex items-center justify-center text-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-500">
                {item.icon}
              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-black text-[#16110f] mt-8">
                {item.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-600 text-lg leading-9 mt-5">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <div className="w-0 group-hover:w-full h-[3px] bg-orange-500 mt-8 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}