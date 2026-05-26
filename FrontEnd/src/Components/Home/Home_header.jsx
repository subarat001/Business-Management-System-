import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home_header() {
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const textRef    = useRef(null);
  const btnRef     = useRef(null);
  const dividerRef = useRef(null);
  const statsRef   = useRef(null);
  const cardRef    = useRef(null);

  useEffect(() => {
    if (
      !badgeRef.current || !headingRef.current ||
      !textRef.current  || !btnRef.current     ||
      !dividerRef.current || !statsRef.current || !cardRef.current
    ) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(badgeRef.current,   { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(2)" })
        .from(headingRef.current, { y: 70, opacity: 0, duration: 1.1, ease: "power4.out" }, "-=0.3")
        .from(textRef.current,    { y: 35, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(Array.from(btnRef.current.children), { y: 25, opacity: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.6")
        .from(dividerRef.current, { scaleX: 0, opacity: 0, duration: 0.6, transformOrigin: "left center" }, "-=0.4")
        .from(Array.from(statsRef.current.children), { y: 30, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.3")
        .from(cardRef.current, { x: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, 0.3);
    });
    return () => ctx.revert();
  }, []);

  const specs = ["12A – 500A", "4 – 32 KVA", "Oil / Air Cooled", "±1% Regulation"];
  const stats = [
    { value: "20+",  label: "Years Experience", accent: false },
    { value: "4K+",  label: "Units Installed",  accent: true  },
    { value: "500A", label: "Max Capacity",      accent: false },
    { value: "24/7", label: "Support",           accent: true  },
  ];

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full min-h-screen bg-[#0e0a09] text-white overflow-hidden relative"
    >
      {/* Glow blobs */}
      <div className="absolute top-[-80px] right-[8%] w-[520px] h-[520px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT */}
          <div className="flex flex-col">
            <div ref={badgeRef} className="inline-flex self-start items-center gap-2.5 rounded-full px-4 py-2 mb-9"
                 style={{ border: "1px solid rgba(249,115,22,0.3)", background: "rgba(249,115,22,0.1)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="uppercase tracking-widest text-orange-400 text-xs font-semibold">
                ISO 9001 Certified · Est. 2004
              </span>
            </div>

            <h1 ref={headingRef} className="text-5xl sm:text-6xl lg:text-[68px] font-black leading-[1.08] tracking-tight">
              Precision<br />
              <span className="text-orange-500">Voltage</span><br />
              Stabilizers
            </h1>

            <p ref={textRef} className="text-[17px] leading-[1.85] mt-7 max-w-[480px]"
               style={{ color: "#9a8878" }}>
              Konark Enterprises manufactures servo voltage stabilizers and variacs
              trusted by India's leading industries — from 12A to 500A, 4 KVA to 32 KVA.
            </p>

            <div ref={btnRef} className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl text-[15px] font-semibold text-white transition-all duration-200 active:scale-[0.98]"
                      style={{ background: "#f97316" }}
                      onMouseEnter={e => e.currentTarget.style.background = "#ea6c0a"}
                      onMouseLeave={e => e.currentTarget.style.background = "#f97316"}>
                View Products
              </button>
              <button className="h-14 px-8 rounded-2xl text-[15px] font-semibold transition-all duration-200 active:scale-[0.98]"
                      style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
                Download Catalogue
              </button>
            </div>

            <div ref={dividerRef} className="w-full h-px my-12"
                 style={{ background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)" }} />

            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
              {stats.map(({ value, label, accent }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-4xl lg:text-5xl font-black leading-none tabular-nums"
                        style={{ color: accent ? "#f97316" : "#ffffff" }}>
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest uppercase"
                        style={{ color: "#5e5048" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CARD */}
          <div className="flex justify-center lg:justify-end">
            {/* Gradient border wrapper */}
            <div ref={cardRef} className="w-full max-w-[500px] rounded-[30px] p-[1.5px]"
                 style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.5) 0%, rgba(255,255,255,0.08) 40%, rgba(249,115,22,0.2) 100%)" }}>
              {/* Inner */}
              <div className="rounded-[28px] p-6" style={{ background: "#201610" }}>

                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-400"
                        style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.3)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Best Seller
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#4a3e36" }}>
                    3-Phase
                  </span>
                </div>

                {/* Product illustration area */}
                <div className="rounded-[20px] h-[260px] flex items-center justify-center relative overflow-hidden"
                     style={{ background: "#130d08" }}>
                  {/* Grid bg */}
                  <div className="absolute inset-0"
                       style={{
                         backgroundImage: "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
                         backgroundSize: "36px 36px",
                       }} />
                  {/* Centre glow */}
                  <div className="absolute w-52 h-52 rounded-full"
                       style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />

                  {/* ── STABILIZER ILLUSTRATION ── */}
                  <div className="relative z-10 flex flex-col items-center select-none">
                    {/* Carry handle */}
                    <div className="w-16 h-3.5 rounded-t-lg" style={{ background: "#2e2016", border: "1px solid #4a3020", borderBottom: "none" }} />

                    {/* Main cabinet */}
                    <div className="w-[220px] rounded-2xl overflow-hidden" style={{ background: "#2a1c10", border: "1px solid #4a3020" }}>
                      {/* Top accent bar */}
                      <div className="h-[5px]" style={{ background: "linear-gradient(90deg, #92400e, #f97316, #f59e0b, #f97316, #92400e)" }} />

                      <div className="px-5 pt-4 pb-3">
                        {/* Brand + status row */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-[9px] font-black tracking-[0.35em] uppercase" style={{ color: "#f97316" }}>KONARK</div>
                            <div className="text-[7px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "#5a4030" }}>Enterprises</div>
                          </div>
                          <div className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
                               style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[8px] font-semibold" style={{ color: "#4ade80" }}>ONLINE</span>
                          </div>
                        </div>

                        {/* Two analog gauges */}
                        <div className="flex justify-center gap-10">
                          {[
                            { label: "VOLTAGE", reading: "220V", angle: -18, color: "#f97316", glow: "rgba(249,115,22,0.6)" },
                            { label: "CURRENT", reading: "18A",  angle:  22, color: "#94a3b8", glow: "rgba(148,163,184,0.4)" },
                          ].map(({ label, reading, angle, color, glow }) => (
                            <div key={label} className="flex flex-col items-center gap-2">
                              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center relative"
                                   style={{ background: "#150e08", border: `2px solid #3a2416`, boxShadow: `inset 0 0 12px rgba(0,0,0,0.6)` }}>
                                {/* Arc tick marks */}
                                {[...Array(9)].map((_, i) => (
                                  <div key={i} className="absolute rounded-full"
                                       style={{
                                         width: i % 3 === 0 ? "2px" : "1px",
                                         height: i % 3 === 0 ? "7px" : "5px",
                                         background: i % 3 === 0 ? "#4a3020" : "#2e1e10",
                                         top: "3px", left: "50%",
                                         transformOrigin: "50% 23px",
                                         transform: `translateX(-50%) rotate(${-90 + i * 22.5}deg)`,
                                       }} />
                                ))}
                                {/* Needle */}
                                <div className="absolute rounded-full origin-bottom"
                                     style={{
                                       width: "2px", height: "20px",
                                       background: `linear-gradient(to top, ${color}, ${color}88)`,
                                       bottom: "50%", left: "50%",
                                       transform: `translateX(-50%) rotate(${angle}deg)`,
                                       boxShadow: `0 0 5px ${glow}`,
                                     }} />
                                {/* Pivot */}
                                <div className="w-2.5 h-2.5 rounded-full z-10"
                                     style={{ background: "#1e1408", border: `1.5px solid ${color}`, boxShadow: `0 0 4px ${glow}` }} />
                                {/* Value */}
                                <span className="absolute text-[8px] font-black" style={{ bottom: "5px", color, textShadow: `0 0 6px ${glow}` }}>
                                  {reading}
                                </span>
                              </div>
                              <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#5a4030" }}>{label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Control panel row */}
                        <div className="flex items-center justify-between mt-5">
                          {/* Toggle buttons */}
                          <div className="flex gap-1.5">
                            <div className="h-6 px-2.5 rounded flex items-center justify-center text-[8px] font-black text-white"
                                 style={{ background: "#f97316", boxShadow: "0 0 8px rgba(249,115,22,0.4)" }}>ON</div>
                            <div className="h-6 px-2.5 rounded flex items-center justify-center text-[8px] font-bold"
                                 style={{ background: "#1a100a", border: "1px solid #3a2416", color: "#5a4030" }}>OFF</div>
                          </div>
                          {/* LED indicators */}
                          <div className="flex gap-3">
                            {[
                              { label: "PWR", color: "#4ade80", glow: "rgba(74,222,128,0.6)", delay: "0s"   },
                              { label: "REG", color: "#f97316", glow: "rgba(249,115,22,0.6)", delay: "0.4s" },
                              { label: "OUT", color: "#38bdf8", glow: "rgba(56,189,248,0.6)", delay: "0.8s" },
                            ].map(({ label, color, glow, delay }) => (
                              <div key={label} className="flex flex-col items-center gap-1">
                                <div className="w-2 h-2 rounded-full animate-pulse"
                                     style={{ background: color, boxShadow: `0 0 6px ${glow}`, animationDelay: delay }} />
                                <span className="text-[7px] font-bold" style={{ color: "#3a2a1e" }}>{label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Vent slots */}
                        <div className="flex justify-end gap-1 mt-3.5">
                          {[...Array(7)].map((_, i) => (
                            <div key={i} className="h-1 rounded-full"
                                 style={{ width: "12px", background: "#150e08", border: "0.5px solid #3a2416" }} />
                          ))}
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }} />
                    </div>

                    {/* Rubber feet */}
                    <div className="flex justify-between w-44 px-3">
                      {[0,1,2,3].map(i => (
                        <div key={i} className="w-3 h-2 rounded-b-sm"
                             style={{ background: "#150e08", border: "1px solid #2e1e10", borderTop: "none" }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="mt-6">
                  <h2 className="text-[26px] lg:text-[30px] font-black leading-tight tracking-tight text-white">
                    3-Phase Servo Stabilizer
                  </h2>

                  {/* Spec chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {specs.map(tag => (
                      <span key={tag} className="px-3.5 py-1.5 rounded-full text-[13px] font-medium"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#8b7868" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-7 gap-4">
                    <div>
                      <div className="text-[34px] font-black text-white leading-none">₹18,500</div>
                      <div className="text-[11px] font-semibold tracking-wider uppercase mt-1" style={{ color: "#5a4030" }}>
                        Onwards · Ex-Factory
                      </div>
                    </div>
                    <button className="h-12 px-7 rounded-xl text-[14px] font-bold tracking-wide text-white whitespace-nowrap transition-all duration-200 active:scale-[0.97]"
                            style={{ background: "#f97316" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#ea6c0a"}
                            onMouseLeave={e => e.currentTarget.style.background = "#f97316"}>
                      Get a Quote
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}