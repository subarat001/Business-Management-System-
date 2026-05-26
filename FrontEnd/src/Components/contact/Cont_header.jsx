import React from "react";

export default function Cont_header() {
  return (
    <div className="bg-white border-b border-gray-100 py-3 px-4">
      <div className="max-w-5xl mx-auto flex items-center gap-2">
        <div className="w-1 h-5 rounded-full bg-orange-500" />
        <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase">
          Contact Us
        </span>
        <span className="text-gray-300 text-xs">·</span>
        <span className="text-xs text-gray-400">
          Konark Enterprises — Voltage Stabilizer Specialists
        </span>
      </div>
    </div>
  );
}