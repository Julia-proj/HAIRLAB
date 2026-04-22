"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/components/ui/AuroraBackground";
import GlassOrbs from "./GlassOrbs";
import HeroStrands from "./HeroStrands";
import HeroParticles from "./HeroParticles";
import FlowButton from "@/components/ui/FlowButton";

interface Props {
  onNext: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 70, damping: 22, mass: 1 },
  },
};

export default function ScreenHero({ onNext }: Props) {
  return (
    <div className="relative min-h-[calc(100vh-51px)] flex flex-col overflow-hidden">
      {/* Aurora z-0 — живой переливающийся фон */}
      <AuroraBackground className="absolute inset-0 z-0" showRadialGradient />
      {/* z-1 */}
      <GlassOrbs />
      {/* z-2 */}
      <HeroParticles />
      {/* z-3 */}
      <HeroStrands />

      {/* z-4 — grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          zIndex: 4,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
          opacity: 0.038,
          mixBlendMode: "overlay",
        }}
      />

      {/* z-10 — content: текст по центру экрана */}
      <motion.div
        className="relative flex flex-col flex-1 justify-center px-5 pt-8 pb-[140px]"
        style={{ zIndex: 10 }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sand shrink-0" aria-hidden="true" />
          <span className="font-sans text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-light">
            Курс восстановления от практикующего мастера
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif font-normal text-[28px] xs:text-[32px] sm:text-[36px] leading-[1.15] tracking-[-0.02em] text-charcoal mb-4 sm:mb-6"
        >
          Твои волосы не плохие.
          <br />
          Им нужна система, а&nbsp;не ещё одна баночка.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-charcoal-light max-w-[480px]"
        >
          Ты перепробовала маски, масла, кератин и советы из TikTok. Разберёмся,
          что подходит именно твоим волосам и почему до этого ничего не держалось.
        </motion.p>
      </motion.div>

      {/* CTA bar */}
      <motion.div
        className="flow-bottom-bar fixed bottom-0 left-0 right-0 z-30"
        style={{ background: "linear-gradient(to top, #F7F4F0 85%, transparent)" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 65, damping: 22 }}
      >
        <div
          className="px-5 pt-[14px]"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <FlowButton onClick={onNext}>Узнать, почему</FlowButton>
        </div>
      </motion.div>
    </div>
  );
}
