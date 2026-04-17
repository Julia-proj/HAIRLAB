"use client";

import { motion } from "framer-motion";
import type { CourseLesson } from "@/lib/content/course";
import FormatBadge from "./FormatBadge";

type LessonCardProps = {
  lesson: CourseLesson;
  index: number;
};

export default function LessonCard({ lesson, index }: LessonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.35, ease: "easeOut" }}
      className={`bg-cream-100 border border-cream-300 rounded-card p-4 ${
        lesson.isFree ? "border-l-[3px] border-l-sage" : ""
      }`}
    >
      {/* Row 1: lesson number + duration */}
      <div className="flex items-start justify-between">
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-muted">
          Урок {lesson.number}
        </span>
        <span className="font-sans text-[11px] text-charcoal-muted">
          {lesson.duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-1.5 font-sans text-[15px] font-medium leading-[1.35] text-charcoal">
        {lesson.title}
      </h3>

      {/* Description */}
      <p className="mt-2 font-sans text-[13px] font-normal leading-[1.55] text-charcoal-light">
        {lesson.description}
      </p>

      {/* Format badges */}
      <div className="mt-3 flex flex-row flex-wrap gap-1.5">
        {lesson.formats.map((fmt) => (
          <FormatBadge key={fmt} format={fmt} />
        ))}
        {lesson.isFree && lesson.freeLabel && (
          <FormatBadge format="free" label={lesson.freeLabel} />
        )}
      </div>
    </motion.div>
  );
}
