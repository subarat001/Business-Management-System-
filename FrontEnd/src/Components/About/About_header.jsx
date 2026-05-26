import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  { year: "1996", title: "Founded in Delhi", desc: "2-engineer workshop. First 10 KVA single-phase unit shipped." },
  { year: "2001", title: "ISO 9001 Certified", desc: "25,000 sq. ft. facility. 3-phase range launched." },
  { year: "2015", title: "Pan-India Expansion", desc: "50+ city service network. 2,000+ units installed." },
  { year: "2024", title: "Digital & IoT Series", desc: "Smart stabilizers with remote monitoring launched." },
];

const STATS = [
  { number: "20+",  label: "Years" },
  { number: "4K+",  label: "Units" },
  { number: "50+",  label: "Cities" },
  { number: "500A", label: "Max Load" },
];

const TEAM = [
  { initials: "MP", name: "Maheshwar Pradhan",   role: "Founder & MD",       ring: "ring-orange-200",  bg: "bg-orange-50",  text: "text-orange-600" },
  { initials: "KK", name: "Kamal Kant", role: "Director, Ops",       ring: "ring-emerald-200", bg: "bg-emerald-50", text: "text-emerald-600" },
  { initials: "MP", name: "Manoj pradhan",  role: "Head, Engineering",   ring: "ring-blue-200",    bg: "bg-blue-50",    text: "text-blue-600" },
];

export default function About_header() {
  const sectionRef  = useRef(null);
  const leftRef     = useRef(null);
  const rightRef    = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;
    const ctx = gsap.context(() => {
      // Left column
      gsap.from(Array.from(leftRef.current.children), {
        y: 35, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 82%", toggleActions: "play none none reverse" },
      });
      // Timeline items
      if (timelineRef.current) {
        gsap.from(Array.from(timelineRef.current.children), {
          x: -24, opacity: 0, duration: 0.7, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        });
      }
      // Right column
      gsap.from(Array.from(rightRef.current.children), {
        y: 30, opacity: 0, duration: 0.75, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 82%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#f6f3f0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div ref={leftRef} className="flex flex-col gap-0">

            {/* Label */}
            <p className="text-orange-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
              Our Story
            </p>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-black text-[#130e0b] leading-[1.08] tracking-tight mb-5">
              20+ Years of<br />
              <span className="text-orange-500">Voltage Excellence</span>
            </h1>

            {/* Body */}
            <p className="text-[#9a8878] text-base leading-relaxed max-w-lg mb-10">
              Started as a small Delhi workshop in 2004. Today a pan-India manufacturer
              with 4,000+ units protecting hospitals, factories, and critical infrastructure.
            </p>

            {/* ── TIMELINE ── */}
            <div ref={timelineRef} className="flex flex-col gap-0">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-5 group relative">
                  {/* Left: year + connector */}
                  <div className="flex flex-col items-center" style={{ width: "52px", flexShrink: 0 }}>
                    <div className="w-[52px] h-[52px] rounded-full bg-white border border-[#e8e0d8] group-hover:border-orange-400 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300 z-10 shadow-sm">
                      <span className="text-[11px] font-black text-[#130e0b] group-hover:text-white tracking-tight transition-colors duration-300">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-[#e0d8d0] mt-1 mb-1" style={{ minHeight: "28px" }} />
                    )}
                  </div>
                  {/* Right: content */}
                  <div className={`pb-8 ${i === TIMELINE.length - 1 ? "pb-0" : ""}`}>
                    <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase">{item.year}</span>
                    <h3 className="text-base font-black text-[#130e0b] mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-sm text-[#9a8878] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div ref={rightRef} className="flex flex-col gap-5">

            {/* Stats row */}
            <div className="bg-white rounded-2xl border border-[#ede8e2] p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-5">At a Glance</p>
              <div className="grid grid-cols-4 gap-3">
                {STATS.map(s => (
                  <div key={s.label} className="flex flex-col items-center text-center py-4 px-2 rounded-xl bg-[#faf8f5] border border-[#ede8e2] hover:border-orange-300 hover:-translate-y-0.5 transition-all duration-200">
                    <span className="text-2xl font-black text-[#130e0b] leading-none">{s.number}</span>
                    <span className="text-[11px] text-[#9a8878] font-semibold mt-1.5 tracking-wide">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#9a8878] leading-relaxed mt-5">
                25,000 sq. ft. ISO-certified manufacturing facility in Okhla Industrial Area, New Delhi.
                Full in-house winding, assembly, and testing lines.
              </p>
            </div>

            {/* Team row */}
            <div className="grid grid-cols-3 gap-4">
              {TEAM.map(m => (
                <div key={m.name} className="bg-white border border-[#ede8e2] rounded-2xl p-5 text-center hover:-translate-y-1 hover:border-orange-200 hover:shadow-md transition-all duration-300 group">
                  <div className={`w-14 h-14 mx-auto rounded-full ${m.bg} ${m.ring} ring-2 flex items-center justify-center text-xl font-black ${m.text} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    {m.initials}
                  </div>
                  <p className="text-sm font-black text-[#130e0b] leading-tight">{m.name}</p>
                  <p className="text-[11px] text-[#b0a090] font-semibold mt-0.5">{m.role}</p>
                </div>
              ))}
            </div>

            {/* Dark CTA card */}
            <div className="rounded-2xl overflow-hidden relative" style={{ background: "#130e0b" }}>
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />

              <div className="relative z-10 p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400 mb-3">
                  Trusted Nationwide
                </p>
                <h2 className="text-xl font-black text-white leading-tight tracking-tight mb-3">
                  Powering Industries<br />Across India
                </h2>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  Hospitals, textile mills, data centers, and rolling plants — our stabilizers protect mission-critical equipment around the clock.
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl px-5 h-10 font-bold text-xs tracking-wide shadow-md shadow-orange-500/20">
                    Explore Products
                  </button>
                  <button className="btn btn-sm bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white/80 hover:text-white rounded-xl px-5 h-10 font-bold text-xs tracking-wide">
                    Contact Team
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}