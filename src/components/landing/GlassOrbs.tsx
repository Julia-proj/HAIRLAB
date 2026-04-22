"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

interface OrbProps {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  parallaxFactor: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  blur: string;
}

const Orb = ({ size, top, left, duration, delay, parallaxFactor, smoothX, smoothY, blur }: OrbProps) => {
  // Map mouse coordinate (0 to 1) to parallax pixel shift
  const x = useTransform(smoothX, [0, 1], [-parallaxFactor, parallaxFactor]);
  const y = useTransform(smoothY, [0, 1], [-parallaxFactor, parallaxFactor]);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none will-change-transform overflow-hidden"
      style={{
        width: size,
        height: size,
        top,
        left,
        x,
        y,
        // Оставляем фон максимально прозрачным, чтобы работал backdrop-filter
        background: "radial-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.0) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        // Многослойная тень для объема: верхний светлый край, темный нижний край, и падающая мягкая тень
        boxShadow: "inset 0 4px 12px rgba(255, 255, 255, 0.6), inset 0 -10px 24px rgba(124, 140, 110, 0.15), 0 10px 30px rgba(44, 40, 37, 0.05)",
        backdropFilter: `blur(${blur}) saturate(120%)`,
        WebkitBackdropFilter: `blur(${blur}) saturate(120%)`,
        transform: "translateZ(0)",
      }}
      animate={{
        y: ["0%", "-20%", "15%", "0%"],
        x: ["0%", "15%", "-10%", "0%"],
        scale: [1, 1.04, 0.96, 1], // Эффект дыхания / пульсации в 3D
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Резкий блик (Reflection/Highlight) для создания выраженного 3D-объема */}
      <div 
        className="absolute rounded-[50%]"
        style={{
          top: "6%",
          left: "12%",
          width: "40%",
          height: "18%",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
          transform: "rotate(-30deg)",
          filter: "blur(1px)",
        }}
      />
    </motion.div>
  );
};

export default function GlassOrbs() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 50, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only add mouse listener on desktop to avoid overhead on touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX / window.innerWidth);
        mouseY.set(e.clientY / window.innerHeight);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" style={{ contain: "strict" }}>
      {/* Orb 1: Large top right */}
      <Orb size={160} top="5%" left="75%" duration={16} delay={0} parallaxFactor={50} smoothX={smoothX} smoothY={smoothY} blur="12px" />
      {/* Orb 2: Medium bottom left */}
      <Orb size={120} top="65%" left="15%" duration={18} delay={2} parallaxFactor={-40} smoothX={smoothX} smoothY={smoothY} blur="8px" />
      {/* Orb 3: Small middle */}
      <Orb size={80} top="40%" left="50%" duration={14} delay={5} parallaxFactor={30} smoothX={smoothX} smoothY={smoothY} blur="6px" />
      {/* Orb 4: Extra small top left */}
      <Orb size={50} top="25%" left="25%" duration={12} delay={1} parallaxFactor={-20} smoothX={smoothX} smoothY={smoothY} blur="4px" />
    </div>
  );
}