"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CloudflarePlayer from "./CloudflarePlayer";
import LessonInsights from "./LessonInsights";
import LessonBridge from "./LessonBridge";
import { useLessonAnalytics } from "@/hooks/useLessonAnalytics";

export interface DamageLevelResult {
  damageLevel: number;
  diagnosis: string;
}

interface Props {
  videoId: string;
  quizResult?: DamageLevelResult;
}

const EASE = [0.4, 0, 0.2, 1] as const;

export default function FreeLessonScreen({ videoId, quizResult: propResult }: Props) {
  const { trackCtaClick } = useLessonAnalytics();
  const [, setQuizResult] = useState<DamageLevelResult | undefined>(propResult);

  useEffect(() => {
    if (propResult) return;
    try {
      const raw = sessionStorage.getItem("km_quiz_result");
      if (raw) setQuizResult(JSON.parse(raw) as DamageLevelResult);
    } catch { /* sessionStorage unavailable */ }
  }, [propResult]);

  return (
    <div className="bg-cream-50 min-h-screen">

      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 h-12 z-50 bg-cream-50 border-b border-cream-200 flex items-center justify-between px-5">
        <span className="font-serif text-[18px] tracking-[0.1em] text-charcoal">
          KM
        </span>
        <Link
          href="/quiz/result"
          className="font-sans text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors duration-150"
        >
          ← Назад
        </Link>
      </header>

      {/* Scrollable content */}
      <div className="pt-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          className="font-sans font-medium uppercase text-charcoal-muted px-5 pt-5 pb-2 text-[11px] tracking-[0.1em]"
        >
          Бесплатный урок
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          className="font-serif font-normal text-[24px] md:text-[28px] leading-[1.3] tracking-[-0.01em] text-charcoal px-5 pb-5"
        >
          Почему твои волосы не восстанавливаются: три ошибки, которые всё усложняют
        </motion.h1>

        {/* Video — edge-to-edge, no animation */}
        <CloudflarePlayer videoId={videoId} />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
        >
          <LessonInsights />
        </motion.div>

        <hr className="mx-5 border-t border-cream-300 border-b-0 border-l-0 border-r-0" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
        >
          <LessonBridge />
        </motion.div>
      </div>

      {/* Sticky CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: EASE }}
        className="fixed bottom-0 left-0 right-0 pointer-events-none"
      >
        <div className="h-14 bg-gradient-to-t from-cream-50 to-transparent" />
        <div
          className="bg-cream-50 px-5 pt-[14px] pointer-events-auto"
          style={{ paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
        >
          <Link
            href="/offer"
            onClick={trackCtaClick}
            className="flex items-center justify-center w-full min-h-[52px] bg-sage hover:bg-sage-dark active:scale-[0.98] text-cream-50 font-sans text-base font-medium rounded-[8px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,140,110,0.4)]"
          >
            Что внутри полного курса?
          </Link>
          <p className="mt-[7px] font-sans text-xs text-charcoal-muted text-center">
            39 евро. Один раз. Доступ навсегда.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
