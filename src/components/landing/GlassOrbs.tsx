"use client";

import { motion } from "framer-motion";

interface PanelConfig {
  w: string; h: string;
  top: string; left: string;
  rotate: number;
  duration: number; delay: number;
  gradient: string;
  opacity: number; blurMobile: number; blurDesktop: number; borderOpacity: number;
}

// widths use min() so they never exceed the viewport on mobile
const PANELS: PanelConfig[] = [
  {
    w: "min(380px, 95vw)", h: "min(220px, 28vw)",
    top: "-6%", left: "-5%",
    rotate: -22,
    duration: 30, delay: 0,
    gradient: "linear-gradient(135deg, rgba(248,246,242,0.85) 0%, rgba(232,228,222,0.55) 60%, transparent 100%)",
    opacity: 0.55, blurMobile: 18, blurDesktop: 30, borderOpacity: 0.16,
  },
  {
    w: "min(320px, 85vw)", h: "min(180px, 22vw)",
    top: "60%", left: "-8%",
    rotate: 18,
    duration: 36, delay: -14,
    gradient: "linear-gradient(120deg, rgba(212,206,198,0.8) 0%, rgba(200,194,186,0.5) 55%, transparent 100%)",
    opacity: 0.45, blurMobile: 24, blurDesktop: 38, borderOpacity: 0.1,
  },
  {
    w: "min(180px, 45vw)", h: "min(260px, 34vw)",
    top: "25%", left: "68%",
    rotate: -35,
    duration: 28, delay: -9,
    gradient: "linear-gradient(160deg, rgba(208,202,196,0.75) 0%, rgba(192,186,180,0.45) 50%, transparent 100%)",
    opacity: 0.4, blurMobile: 28, blurDesktop: 42, borderOpacity: 0.09,
  },
  {
    w: "min(160px, 42vw)", h: "min(110px, 14vw)",
    top: "10%", left: "8%",
    rotate: 12,
    duration: 22, delay: -5,
    gradient: "linear-gradient(90deg, rgba(255,252,250,0.92) 0%, rgba(244,240,236,0.6) 60%, transparent 100%)",
    opacity: 0.6, blurMobile: 14, blurDesktop: 22, borderOpacity: 0.2,
  },
  {
    w: "min(240px, 62vw)", h: "min(140px, 18vw)",
    top: "76%", left: "50%",
    rotate: -14,
    duration: 34, delay: -20,
    gradient: "linear-gradient(110deg, rgba(196,190,184,0.65) 0%, rgba(180,174,168,0.35) 55%, transparent 100%)",
    opacity: 0.32, blurMobile: 30, blurDesktop: 52, borderOpacity: 0.07,
  },
];

const Panel = ({ w, h, top, left, rotate, duration, delay, gradient, opacity, blurMobile, borderOpacity }: PanelConfig) => (
  <motion.div
    className="absolute pointer-events-none will-change-transform"
    style={{
      width: w,
      height: h,
      top, left, rotate,
      background: gradient,
      opacity,
      filter: `blur(${blurMobile}px)`,
      borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
      border: `1px solid rgba(255, 252, 250, ${borderOpacity})`,
      mixBlendMode: "soft-light",
    }}
    animate={{
      y: ["0px", "-10px", "7px", "-4px", "0px"],
      opacity: [opacity, opacity * 1.2, opacity * 0.82, opacity * 1.1, opacity],
      scale: [1, 1.05, 0.97, 1.02, 1],
      borderRadius: [
        "40% 60% 55% 45% / 50% 45% 55% 50%",
        "52% 48% 44% 56% / 42% 58% 46% 54%",
        "44% 56% 62% 38% / 56% 44% 52% 48%",
        "48% 52% 50% 50% / 50% 50% 48% 52%",
        "40% 60% 55% 45% / 50% 45% 55% 50%",
      ],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay, times: [0, 0.25, 0.5, 0.75, 1] }}
  />
);

export default function GlassOrbs() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {PANELS.map((cfg, i) => <Panel key={i} {...cfg} />)}
    </div>
  );
}
