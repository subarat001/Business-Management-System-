// About_steps.jsx

import React from "react";
import {
  FaCheck,
  FaCogs,
  FaTools,
  FaIndustry,
  FaClipboardCheck,
} from "react-icons/fa";

export default function About_steps() {

  const steps = [
    {
      number: "1",
      icon: <FaIndustry />,
      title: "Raw Material",
      desc: "Copper & CRGO inspection",
    },

    {
      number: "2",
      icon: <FaCogs />,
      title: "Winding",
      desc: "Auto winding + insulation",
    },

    {
      number: "3",
      icon: <FaTools />,
      title: "Assembly",
      desc: "Servo & panel setup",
    },

    {
      number: "4",
      icon: <FaClipboardCheck />,
      title: "Load Testing",
      desc: "110%–150% testing",
    },

    {
      number: "✓",
      icon: <FaCheck />,
      title: "Dispatch",
      desc: "Packing & approval",
      dark: true,
    },
  ];

  return (
    <div className="w-full bg-[#f8f6f4] py-14 lg:py-20 overflow-hidden">

      <div className="max-w-[1350px] mx-auto px-5 lg:px-10">

        {/* TOP */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-orange-500 uppercase tracking-[5px] font-bold text-[11px] sm:text-xs mb-4">
            Quality Process
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17110f] leading-tight">
            Every Unit Tested Before Dispatch
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-5 leading-7">
            Each stabilizer passes through multiple quality checkpoints
            before delivery to ensure maximum performance & reliability.
          </p>
        </div>

        {/* PROCESS */}
        <div className="relative mt-16">

          {/* DESKTOP LINE */}
          <div className="hidden xl:block absolute top-8 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 z-0"></div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 relative z-10">

            {steps.map((item, index) => (
              <div
                key={index}
                className="relative"
              >

                {/* MOBILE LINE */}
                {index !== steps.length - 1 && (
                  <div className="xl:hidden absolute left-1/2 top-[88px] w-[2px] h-12 bg-orange-200 -translate-x-1/2"></div>
                )}

                {/* CARD */}
                <div className="group relative bg-white/70 backdrop-blur-xl border border-white rounded-[24px] px-5 py-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-500">

                  {/* STEP NUMBER */}
                  <div
                    className={`relative w-16 h-16 mx-auto rounded-full flex items-center justify-center text-lg font-black shadow-md transition duration-500
                      
                      ${
                        item.dark
                          ? "bg-[#17110f] text-white"
                          : "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                      }
                    `}
                  >

                    {item.number}

                    {/* PULSE */}
                    <div className="absolute inset-0 rounded-full border border-orange-300 animate-ping opacity-20"></div>
                  </div>

                  {/* ICON */}
                  <div className="w-10 h-10 rounded-xl bg-[#fafafa] border border-gray-100 flex items-center justify-center text-orange-500 text-sm mx-auto -mt-3 relative z-10 group-hover:bg-orange-500 group-hover:text-white transition duration-500 shadow-sm">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl font-black text-[#17110f] mt-5">
                    {item.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-gray-500 text-sm leading-6 mt-3">
                    {item.desc}
                  </p>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-orange-500/[0.03] to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="flex justify-center mt-12">

          <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-full px-6 py-3 shadow-sm">

            <p className="text-gray-600 text-xs sm:text-sm tracking-wide">
              Strict testing standards for every stabilizer unit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}