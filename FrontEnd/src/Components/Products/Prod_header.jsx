// Prod_header.jsx
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBolt, FaArrowRight, FaFireFlameCurved, FaIndustry, FaFlask, FaMicrochip, FaShield } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    tag: "Best Seller",
    tagColor: "badge-warning",
    icon: <FaBolt />,
    category: "Single Phase · Servo",
    title: "Single Phase Servo Stabilizer",
    specs: ["12A – 80A", "4 – 20 KVA", "Air Cooled"],
    desc: "Ideal for homes, offices, clinics and commercial setups. Fast correction with stable ±1% output.",
    price: "₹8,500",
    type: ["All", "Servo Stabilizers"],
    needleAngle1: -20,
    needleAngle2: 25,
  },
  {
    tag: "Most Popular",
    tagColor: "badge-success",
    icon: <FaFireFlameCurved />,
    category: "Three Phase · Servo",
    title: "3-Phase Servo Stabilizer",
    specs: ["50A – 500A", "15 – 160 KVA", "Air / Oil Cooled"],
    desc: "For textile mills, hospitals, factories and heavy industrial loads requiring balanced 3-phase output.",
    price: "₹18,500",
    type: ["All", "Servo Stabilizers", "3-Phase"],
    needleAngle1: -10,
    needleAngle2: 30,
  },
  {
    tag: "Industrial",
    tagColor: "badge-error",
    icon: <FaIndustry />,
    category: "Three Phase · Oil Cooled",
    title: "Oil Cooled Stabilizer",
    specs: ["100A – 500A", "30 – 160 KVA", "Oil Cooled"],
    desc: "Heavy-duty oil cooled units for continuous industrial operation. Superior heat dissipation and longer life.",
    price: "₹45,000",
    type: ["All", "Oil Cooled", "3-Phase"],
    needleAngle1: -5,
    needleAngle2: 15,
  },
  {
    tag: "Precision",
    tagColor: "badge-info",
    icon: <FaFlask />,
    category: "Variable · Variac",
    title: "Variable Auto Transformer",
    specs: ["2A – 100A", "0.5 – 25 KVA", "Manual / Motorised"],
    desc: "Smooth 0–270V variable output for labs, testing equipment and R&D applications.",
    price: "₹3,200",
    type: ["All", "Variacs"],
    needleAngle1: -30,
    needleAngle2: 10,
  },
  {
    tag: "Compact",
    tagColor: "badge-secondary",
    icon: <FaMicrochip />,
    category: "Single Phase · Digital",
    title: "Digital Servo Stabilizer",
    specs: ["15A – 60A", "3 – 15 KVA", "Air Cooled"],
    desc: "Microprocessor-based DSP control for ultra-precise voltage regulation. LCD display with fault logging.",
    price: "₹12,000",
    type: ["All", "Servo Stabilizers"],
    needleAngle1: -15,
    needleAngle2: 20,
  },
  {
    tag: "Heavy Duty",
    tagColor: "badge-neutral",
    icon: <FaShield />,
    category: "Three Phase · Oil Cooled",
    title: "Ultra-Duty Oil Stabilizer",
    specs: ["250A – 500A", "80 – 320 KVA", "Oil Cooled"],
    desc: "Built for steel plants, rolling mills and large industrial complexes. Continuous 24/7 rated.",
    price: "₹1,20,000",
    type: ["All", "Oil Cooled", "3-Phase"],
    needleAngle1: 0,
    needleAngle2: 35,
  },
];

const FILTERS = ["All", "Servo Stabilizers", "Variacs", "Oil Cooled", "3-Phase"];

function StabilizerMock({ a1, a2 }) {
  return (
    <div className="w-[170px] rounded-2xl overflow-hidden relative z-10 border border-[#3a2416]" style={{ background: "#1e1510" }}>
      {/* Top stripe */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, #92400e, #f97316, #f59e0b, #f97316, #92400e)" }} />
      <div className="px-[18px] pt-4 pb-3">
        {/* Brand row */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[8px] font-black tracking-[0.3em] text-orange-500 uppercase">KONARK</span>
          <div className="flex items-center gap-1">
            <div className="w-[5px] h-[5px] rounded-full bg-emerald-400" style={{ boxShadow: "0 0 5px #4ade80" }} />
            <span className="text-[7px] font-bold tracking-wider text-emerald-400/50">ACTIVE</span>
          </div>
        </div>
        {/* Gauges */}
        <div className="flex justify-center gap-5">
          {[{ label: "V", angle: a1, color: "#f97316" }, { label: "A", angle: a2, color: "#94a3b8" }].map(({ label, angle, color }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center relative border-2 border-[#3a2416]" style={{ background: "#130d08" }}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-[1.5px] h-[6px]"
                    style={{
                      background: i % 2 === 0 ? "#4a3020" : "#2e1e10",
                      top: "3px", left: "50%",
                      transformOrigin: "50% 19px",
                      transform: `translateX(-50%) rotate(${i * 45}deg)`,
                    }} />
                ))}
                <div className="absolute w-[2px] h-[15px] rounded-sm"
                  style={{
                    background: color, bottom: "50%", left: "50%",
                    transformOrigin: "50% 100%",
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                    boxShadow: `0 0 4px ${color}88`,
                  }} />
                <div className="w-[7px] h-[7px] rounded-full z-10 border-[1.5px]"
                  style={{ background: "#1a0f08", borderColor: color }} />
              </div>
              <span className="text-[7px] font-bold tracking-[0.15em] uppercase" style={{ color: "#5a4030" }}>
                {label === "V" ? "VOLT" : "AMP"}
              </span>
            </div>
          ))}
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-1">
            <div className="w-6 h-[14px] bg-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-[6px] font-black text-white">ON</span>
            </div>
            <div className="w-6 h-[14px] rounded-sm flex items-center justify-center border border-[#3a2416]" style={{ background: "#1a100a" }}>
              <span className="text-[6px] font-bold" style={{ color: "#4a3020" }}>OFF</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            {[["#4ade80","#4ade8080"],["#f97316","#f9731680"],["#38bdf8","#38bdf880"]].map(([c, g], i) => (
              <div key={i} className="w-[7px] h-[7px] rounded-full" style={{ background: c, boxShadow: `0 0 5px ${g}` }} />
            ))}
          </div>
        </div>
        {/* Vents */}
        <div className="flex justify-end gap-1 mt-2.5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[10px] h-[3px] rounded-sm border border-[#2e1e10]" style={{ background: "#130d08" }} />
          ))}
        </div>
      </div>
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }} />
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-2xl border border-base-200 hover:border-orange-300 rounded-[28px] overflow-hidden hover:-translate-y-2 transition-all duration-300 group flex flex-col">

      {/* Image area */}
      <div className="relative h-[240px] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #140e0a 0%, #211510 100%)" }}>
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Glow */}
        <div className="absolute w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)" }} />

        {/* Mockup */}
        <div className="group-hover:scale-105 transition-transform duration-500">
          <StabilizerMock a1={product.needleAngle1} a2={product.needleAngle2} />
        </div>

        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span className={`badge ${product.tagColor} badge-sm font-bold uppercase tracking-widest px-3 py-3 text-[10px]`}>
            {product.tag}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="card-body p-6 flex-1 gap-0">
        {/* Category */}
        <div className="flex items-center gap-2 text-orange-500 text-[10px] font-extrabold tracking-[0.25em] uppercase mb-2">
          <span className="text-xs">{product.icon}</span>
          {product.category}
        </div>

        {/* Title */}
        <h2 className="card-title text-[#110b08] text-xl font-black leading-tight tracking-tight mb-3">
          {product.title}
        </h2>

        {/* Spec badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.map(s => (
            <span key={s} className="badge badge-ghost badge-sm font-semibold text-[11px] border-base-300 rounded-full px-3 py-2.5">
              {s}
            </span>
          ))}
        </div>

        {/* Desc */}
        <p className="text-sm text-base-content/60 leading-relaxed">
          {product.desc}
        </p>
      </div>

      {/* Divider */}
      <div className="divider mx-6 my-0" />

      {/* Footer */}
      <div className="px-6 pb-6 flex items-center justify-between">
        <div>
          <span className="text-2xl font-black text-[#110b08]">{product.price}</span>
          <p className="text-[11px] text-base-content/40 font-semibold tracking-widest uppercase mt-0.5">Onwards</p>
        </div>
        <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl px-5 h-11 font-bold shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200">
          Enquire
          <FaArrowRight className="text-xs" />
        </button>
      </div>

      {/* Bottom hover line */}
      <div className="h-[3px] w-0 group-hover:w-full rounded-full transition-all duration-500" style={{ background: "linear-gradient(90deg, #f97316, #fb923c)" }} />
    </div>
  );
}

export default function Prod_header() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const gridRef    = useRef(null);

  const filtered = PRODUCTS.filter(p => p.type.includes(active));

  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 40, opacity: 0, duration: 0.85, stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.children);
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.07, ease: "power3.out", clearProps: "all" }
    );
  }, [active]);

  return (
    <div ref={sectionRef} className="w-full bg-base-200 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-14">
          <p className="text-orange-500 uppercase tracking-[4px] font-bold text-xs mb-5">
            Our Products
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#110b08] leading-tight tracking-tight mb-6">
            Complete Voltage <span className="text-orange-500">Management</span> Range
          </h1>
          <p className="text-base-content/60 text-lg lg:text-xl leading-relaxed">
            From small commercial setups to 320 KVA heavy industrial loads —
            every unit engineered for Indian grid conditions.
          </p>
        </div>

        {/* Filter bar */}
        <div className="bg-base-100/80 backdrop-blur border border-base-300 rounded-2xl p-1.5 flex flex-wrap gap-1.5 w-fit mb-12">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`btn btn-sm rounded-xl font-bold text-[13px] border-none transition-all duration-200 ${
                active === f
                  ? "bg-[#110b08] text-white shadow-md hover:bg-black"
                  : "bg-transparent text-base-content/50 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filtered.map(product => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}