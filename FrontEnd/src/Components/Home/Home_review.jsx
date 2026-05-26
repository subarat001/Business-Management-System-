// Home_review.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    role: "MD, Sunrise Textiles",
    location: "Surat",
    rating: 5,
    review:
      "Konark's 3-phase 150 KVA stabilizer has been running our textile plant for 3 years without a single issue. Excellent build quality and after-sales support.",
  },
  {
    initials: "SP",
    name: "Sneha Patel",
    role: "Sr. Engineer, BEL",
    location: "Bengaluru",
    rating: 5,
    review:
      "We bought a 500A variac for our testing lab. Smooth control, accurate output. Konark team provided excellent installation support.",
  },
  {
    initials: "DM",
    name: "Dr. Dinesh Mehra",
    role: "Director, City Care Hospital",
    location: "Delhi",
    rating: 5,
    review:
      "Our CT scan machine was getting damaged due to voltage issues. After Konark installation — zero problems in 18 months. Absolutely reliable.",
  },
  {
    initials: "AV",
    name: "Anand Verma",
    role: "Plant Head, Tata AutoComp",
    location: "Pune",
    rating: 5,
    review:
      "Installed 12 units across our assembly lines. Not a single breakdown in two years. Konark stabilizers are built tough for industrial loads.",
  },
  {
    initials: "NJ",
    name: "Neeraj Joshi",
    role: "Owner, Joshi Cold Storage",
    location: "Nagpur",
    rating: 5,
    review:
      "Voltage fluctuations were destroying our compressors every season. Since switching to Konark, our maintenance cost has dropped by 70%.",
  },
  {
    initials: "PR",
    name: "Priya Rajan",
    role: "Electrical Consultant",
    location: "Chennai",
    rating: 5,
    review:
      "I specify Konark stabilizers in all my industrial projects. Their custom builds and reliable delivery make them my first recommendation.",
  },
];

// Duplicate for seamless infinite loop
const TRACK = [...reviews, ...reviews];

export default function Home_review() {
  const sectionRef  = useRef(null);
  const labelRef    = useRef(null);
  const headingRef  = useRef(null);
  const trackRef    = useRef(null);
  const tweenRef    = useRef(null);
  const wrapperRef  = useRef(null);

  // ── ScrollTrigger: reveal header on scroll ──
  useEffect(() => {
    if (!labelRef.current || !headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from([labelRef.current, headingRef.current], {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: labelRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Infinite marquee via GSAP ──
  useEffect(() => {
    if (!trackRef.current) return;

    const cardWidth  = 420; // px — must match card width below
    const gap        = 28;  // px — gap between cards
    const totalCards = reviews.length;
    const loopWidth  = (cardWidth + gap) * totalCards;

    // Start tween
    tweenRef.current = gsap.to(trackRef.current, {
      x: `-=${loopWidth}`,
      duration: totalCards * 6,   // speed: 6s per card
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % loopWidth),
      },
    });

    // Pause on hover
    const el = wrapperRef.current;
    const pause   = () => tweenRef.current?.pause();
    const resume  = () => tweenRef.current?.resume();
    el?.addEventListener("mouseenter", pause);
    el?.addEventListener("mouseleave", resume);

    return () => {
      tweenRef.current?.kill();
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, []);

  const StarRow = ({ count }) => (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      ref={sectionRef}
      style={{ fontFamily: "'Inter', sans-serif", background: "#0c0806" }}
      className="w-full overflow-hidden"
    >
      {/* ══════════════════════════════════
          REVIEW SECTION
      ══════════════════════════════════ */}
      <div style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>

        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p
                ref={labelRef}
                style={{
                  color: "#f97316",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Client Reviews
              </p>
              <h2
                ref={headingRef}
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Trusted by India's{" "}
                <span style={{ color: "#f97316" }}>Leading</span>
                <br />
                Industries
              </h2>
            </div>

            {/* Rating summary pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                background: "rgba(249,115,22,0.08)",
                border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: "100px",
                padding: "14px 24px",
                flexShrink: 0,
              }}
            >
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>4.9</div>
                <div style={{ fontSize: "11px", color: "#6b5040", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
                  Avg Rating
                </div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.08)" }} />
              <div>
                <StarRow count={5} />
                <div style={{ fontSize: "11px", color: "#6b5040", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>
                  200+ Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Marquee strip ── */}
        <div
          ref={wrapperRef}
          style={{
            position: "relative",
            overflow: "hidden",
            cursor: "default",
          }}
        >
          {/* Left fade */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to right, #0c0806, transparent)",
            pointerEvents: "none",
          }} />
          {/* Right fade */}
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to left, #0c0806, transparent)",
            pointerEvents: "none",
          }} />

          {/* Track */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "28px",
              paddingLeft: "28px",
              paddingBottom: "8px",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {TRACK.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "420px",
                  flexShrink: 0,
                  background: "linear-gradient(145deg, #1e1510 0%, #181210 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(249,115,22,0.35)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Large quote mark watermark */}
                <div style={{
                  position: "absolute", top: "16px", right: "24px",
                  fontSize: "80px", fontWeight: 900, lineHeight: 1,
                  color: "rgba(249,115,22,0.06)",
                  fontFamily: "Georgia, serif",
                  pointerEvents: "none",
                  userSelect: "none",
                }}>
                  "
                </div>

                {/* Stars */}
                <StarRow count={item.rating} />

                {/* Review text */}
                <p style={{
                  color: "#c4b5a8",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  margin: "20px 0 28px",
                  fontStyle: "italic",
                }}>
                  "{item.review}"
                </p>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />

                {/* User row */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  {/* Avatar */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "rgba(249,115,22,0.15)",
                    border: "1.5px solid rgba(249,115,22,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#f97316", fontWeight: 900, fontSize: "14px",
                    letterSpacing: "0.05em", flexShrink: 0,
                  }}>
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", lineHeight: 1.3 }}>
                      {item.name}
                    </div>
                    <div style={{ color: "#5a4538", fontSize: "12px", fontWeight: 500, marginTop: "3px", letterSpacing: "0.03em" }}>
                      {item.role} · {item.location}
                    </div>
                  </div>

                  {/* Verified badge */}
                  <div style={{ marginLeft: "auto", flexShrink: 0 }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      background: "rgba(74,222,128,0.08)",
                      border: "1px solid rgba(74,222,128,0.2)",
                      borderRadius: "100px", padding: "4px 10px",
                    }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "#4ade80", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          CTA SECTION
      ══════════════════════════════════ */}
      <div style={{ position: "relative", overflow: "hidden" }}>

        {/* Orange gradient bg */}
        <div style={{
          background: "linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%)",
          padding: "6rem 1.25rem",
          position: "relative",
        }}>
          {/* Subtle pattern overlay */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }} />
          {/* Dark vignette edges */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

            {/* Tag */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.15)", borderRadius: "100px",
              padding: "8px 18px", marginBottom: "2rem",
            }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Free Consultation
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 1.5rem",
            }}>
              Get a Free Site Survey
              <br />& Stabilizer Quote
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}>
              Our engineers will assess your load and recommend the
              perfect stabilizer — free of cost, no obligation.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <button
                style={{
                  height: "60px", padding: "0 36px",
                  background: "#ffffff", border: "none",
                  borderRadius: "16px", cursor: "pointer",
                  fontSize: "15px", fontWeight: 800,
                  color: "#c2410c", letterSpacing: "0.02em",
                  display: "flex", alignItems: "center", gap: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)"; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Call: +91 98182 59793
              </button>

              <button
                style={{
                  height: "60px", padding: "0 36px",
                  background: "transparent",
                  border: "2px solid rgba(255,255,255,0.5)",
                  borderRadius: "16px", cursor: "pointer",
                  fontSize: "15px", fontWeight: 700,
                  color: "#ffffff", letterSpacing: "0.02em",
                  display: "flex", alignItems: "center", gap: "10px",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Send Enquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Trust row */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "28px", marginTop: "3rem" }}>
              {["No Charges", "Same-Day Response", "Pan-India Service", "20+ Years Experience"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}