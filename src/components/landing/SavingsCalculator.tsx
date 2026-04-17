"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const COURSE_PRICE = 39;
const SESSION_PRICE = 120;

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { duration: 300 });
  const display = useTransform(spring, (v) => `${Math.round(v)} \u20AC`);

  return <motion.span>{display}</motion.span>;
}

type SavingsCalculatorProps = {
  onFirstInteraction?: (sessions: number, savings: number) => void;
};

export default function SavingsCalculator({
  onFirstInteraction,
}: SavingsCalculatorProps) {
  const [sessions, setSessions] = useState(4);
  const interactedRef = useRef(false);

  const salonTotal = sessions * SESSION_PRICE;
  const savings = salonTotal - COURSE_PRICE;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setSessions(val);
    if (!interactedRef.current) {
      interactedRef.current = true;
      onFirstInteraction?.(val, val * SESSION_PRICE - COURSE_PRICE);
    }
  };

  return (
    <div className="bg-cream-100 border border-cream-300 rounded-card p-5">
      {/* Slider */}
      <div className="flex items-center justify-between mb-4">
        <label
          htmlFor="sessions-slider"
          className="font-sans text-sm text-charcoal-light"
        >
          Процедур в год
        </label>
        <span className="font-sans text-[15px] font-medium text-charcoal">
          {sessions}
        </span>
      </div>
      <input
        id="sessions-slider"
        type="range"
        min={1}
        max={12}
        step={1}
        value={sessions}
        onChange={handleChange}
        className="w-full accent-sage"
        style={{
          height: 4,
          borderRadius: 2,
        }}
      />

      {/* Result grid */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Without course */}
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted">
            Процедуры в салоне
          </p>
          <p className="font-serif text-[28px] text-error">
            <AnimatedNumber value={salonTotal} />
          </p>
          <p className="font-sans text-xs text-charcoal-muted">
            ~120 &euro; за процедуру
          </p>
        </div>

        {/* With course */}
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted">
            Курс + самостоятельный уход
          </p>
          <p className="font-serif text-[28px] text-sage">39 &euro;</p>
          <p className="font-sans text-xs text-charcoal-muted">
            один раз, навсегда
          </p>
        </div>
      </div>

      {/* Savings row */}
      <div className="mt-3.5 flex items-center justify-between border-t border-cream-300 pt-3">
        <span className="font-sans text-[13px] text-charcoal-light">
          Экономия за год
        </span>
        <span className="font-sans text-[15px] font-medium text-sage">
          <AnimatedNumber value={savings} />
        </span>
      </div>
    </div>
  );
}
