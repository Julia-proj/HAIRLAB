"use client";

import { motion } from "framer-motion";

interface StrandConfig {
  top: string; left: string;
  width: string;
  heightMobile: string; heightDesktop: string;
  rotate: number;
  duration: number; delay: number;
  color: string;
  opacity: number; blurMobile: number; blurDesktop: number;
}

const STRANDS: StrandConfig[] = [
  // Long dominant plane — upper
  {
    top: "6%", left: "-5%",
    width: "110%",
    heightMobile: "clamp(40px, 10vw, 70px)",
    heightDesktop: "90px",
    rotate: -22,
    duration: 20, delay: 0,
    color: "linear-gradient(90deg, transparent 0%, rgba(232,228,222,0.7) 20%, rgba(244,242,238,0.85) 52%, rgba(228,224,218,0.6) 78%, transparent 100%)",
    opacity: 0.5, blurMobile: 12, blurDesktop: 18,
  },
  // Narrow accent
  {
    top: "40%", left: "-5%",
    width: "90%",
    heightMobile: "clamp(16px, 5vw, 32px)",
    heightDesktop: "40px",
    rotate: -18,
    duration: 26, delay: -9,
    color: "linear-gradient(90deg, transparent 0%, rgba(216,210,204,0.6) 25%, rgba(236,232,226,0.75) 55%, rgba(208,202,196,0.5) 80%, transparent 100%)",
    opacity: 0.42, blurMobile: 10, blurDesktop: 14,
  },
  // Wide soft plane — lower
  {
    top: "62%", left: "-5%",
    width: "110%",
    heightMobile: "clamp(50px, 14vw, 100px)",
    heightDesktop: "130px",
    rotate: -14,
    duration: 32, delay: -15,
    color: "linear-gradient(90deg, transparent 0%, rgba(224,220,214,0.5) 18%, rgba(240,238,234,0.65) 48%, rgba(220,216,210,0.45) 82%, transparent 100%)",
    opacity: 0.38, blurMobile: 18, blurDesktop: 28,
  },
  // Thin highlight thread
  {
    top: "24%", left: "10%",
    width: "80%",
    heightMobile: "clamp(10px, 3vw, 20px)",
    heightDesktop: "24px",
    rotate: -30,
    duration: 18, delay: -6,
    color: "linear-gradient(90deg, transparent 0%, rgba(252,250,248,0.6) 30%, rgba(255,253,251,0.9) 50%, rgba(248,246,242,0.55) 70%, transparent 100%)",
    opacity: 0.48, blurMobile: 6, blurDesktop: 8,
  },
  // Bottom fade — hidden on very small screens to reduce clutter
  {
    top: "76%", left: "0%",
    width: "100%",
    heightMobile: "clamp(30px, 8vw, 60px)",
    heightDesktop: "70px",
    rotate: -16,
    duration: 28, delay: -21,
    color: "linear-gradient(90deg, transparent 0%, rgba(212,206,200,0.45) 22%, rgba(228,224,218,0.58) 52%, rgba(204,198,192,0.38) 80%, transparent 100%)",
    opacity: 0.35, blurMobile: 16, blurDesktop: 22,
  },
];

export default function HeroStrands() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 3 }}
      aria-hidden="true"
    >
      {STRANDS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute will-change-transform"
          style={{
            top: s.top,
            left: s.left,
            width: s.width,
            height: s.heightMobile,
            rotate: s.rotate,
            background: s.color,
            opacity: s.opacity,
            filter: `blur(${s.blurMobile}px)`,
            transformOrigin: "center center",
          }}
          animate={{
            y: ["0px", "-8px", "6px", "-3px", "0px"],
            opacity: [s.opacity, s.opacity * 1.22, s.opacity * 0.78, s.opacity * 1.1, s.opacity],
            scaleX: [1, 1.02, 0.98, 1.01, 1],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}
    </div>
  );
}
