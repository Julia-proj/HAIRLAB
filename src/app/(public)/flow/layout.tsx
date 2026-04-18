"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FLOW_STEPS, type FlowPath } from "@/lib/flow/steps";
import { useFlowStore } from "@/lib/store/flow-store";

const variants = {
  enter: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function FlowLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const direction = useFlowStore((s) => s.direction);
  const step = FLOW_STEPS[pathname as FlowPath];
  const progress = step ? step.number / step.total : 0;

  return (
    <div className="relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-cream-200">
        <div
          className="h-full bg-sage transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
