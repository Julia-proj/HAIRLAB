"use client";

import { motion } from "framer-motion";

type ScenarioCardProps = {
  title: string;
  text: string;
  index: number;
};

export default function ScenarioCard({ title, text, index }: ScenarioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
      className="bg-cream-100 border border-cream-300 rounded-card p-[18px_16px]"
    >
      <div className="flex items-start gap-2.5">
        <span
          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage"
          aria-hidden="true"
        />
        <div>
          <h3 className="font-sans text-[15px] font-medium text-charcoal mb-2">
            {title}
          </h3>
          <p className="font-sans text-sm font-normal leading-[1.6] text-charcoal-light">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
