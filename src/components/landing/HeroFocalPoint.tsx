"use client";

import { motion } from "framer-motion";

export default function HeroFocalPoint() {
  return (
    <div
      className="absolute pointer-events-none"
      aria-hidden="true"
      style={{
        top: "44%",
        left: "50%",
        width: 0,
        height: 0,
        zIndex: 3,
      }}
    >
      {/* Outer glow — soft amber halo */}
      <motion.div
        style={{
          position: "absolute",
          width: 360,
          height: 460,
          top: "50%",
          left: "50%",
          borderRadius: "45% 55% 50% 50% / 48% 48% 52% 52%",
          background: "radial-gradient(ellipse at 48% 42%, rgba(200,194,188,0.20) 0%, rgba(184,178,172,0.08) 50%, transparent 72%)",
          filter: "blur(24px)",
        }}
        animate={{
          scale: [1, 1.06, 0.97, 1.03, 1],
          opacity: [0.6, 0.75, 0.6, 0.72, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.5, 0.75, 1],
        }}
        // CSS handles the centering translation
        className="[transform:translate(-50%,-50%)]"
      />

      {/* Main focal oval — glass body */}
      <motion.div
        style={{
          position: "absolute",
          width: 280,
          height: 360,
          top: "50%",
          left: "50%",
          borderRadius: "45% 55% 50% 50% / 48% 48% 52% 52%",
          background: `
            radial-gradient(ellipse at 35% 30%, rgba(255,253,251,0.55) 0%, transparent 50%),
            radial-gradient(ellipse at 65% 70%, rgba(200,194,188,0.18) 0%, transparent 50%),
            linear-gradient(160deg, rgba(244,242,238,0.36) 0%, rgba(228,224,218,0.20) 60%, rgba(204,198,192,0.10) 100%)
          `,
          backdropFilter: "blur(1px)",
          border: "1px solid rgba(255, 253, 251, 0.32)",
          boxShadow: `
            inset 0 1px 0 rgba(255,253,251,0.48),
            inset 0 -1px 0 rgba(196,190,184,0.12),
            0 8px 40px rgba(180,174,168,0.10),
            0 2px 12px rgba(44,40,37,0.04)
          `,
        }}
        animate={{
          scale: [1, 1.04, 0.97, 1.03, 1],
          opacity: [0.72, 0.82, 0.72, 0.80, 0.72],
          borderRadius: [
            "45% 55% 50% 50% / 48% 48% 52% 52%",
            "50% 50% 54% 46% / 44% 52% 48% 56%",
            "42% 58% 48% 52% / 52% 44% 56% 44%",
            "48% 52% 50% 50% / 50% 50% 50% 50%",
            "45% 55% 50% 50% / 48% 48% 52% 52%",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        className="[transform:translate(-50%,-50%)]"
      />

      {/* SVG ring — outer, slow clockwise */}
      <svg
        width={380}
        height={480}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "visible",
          opacity: 0.18,
        }}
      >
        <ellipse
          cx={190}
          cy={240}
          rx={188}
          ry={238}
          fill="none"
          stroke="rgba(196,190,184,1)"
          strokeWidth={0.8}
          strokeDasharray="6 18"
          style={{
            transformOrigin: "190px 240px",
            animation: "ring-spin 90s linear infinite",
          }}
        />
      </svg>

      {/* SVG ring — inner, counter-clockwise, white */}
      <svg
        width={310}
        height={400}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "visible",
          opacity: 0.12,
        }}
      >
        <ellipse
          cx={155}
          cy={200}
          rx={153}
          ry={198}
          fill="none"
          stroke="rgba(255,252,248,1)"
          strokeWidth={0.6}
          strokeDasharray="3 24"
          style={{
            transformOrigin: "155px 200px",
            animation: "ring-spin-rev 120s linear infinite",
          }}
        />
      </svg>

      {/* Inner highlight — specular pearl spot */}
      <motion.div
        style={{
          position: "absolute",
          width: 80,
          height: 60,
          top: "50%",
          left: "50%",
          marginTop: -110,
          marginLeft: -28,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,252,250,0.7) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="[transform:translate(-50%,-50%)]"
      />
    </div>
  );
}
