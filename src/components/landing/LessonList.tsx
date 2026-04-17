"use client";

import { COURSE_LESSONS } from "@/lib/content/course";
import LessonCard from "./LessonCard";

export default function LessonList() {
  return (
    <section className="px-5 pt-6 pb-2">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-muted mb-4">
        Что внутри
      </p>
      <div className="flex flex-col gap-2.5">
        {COURSE_LESSONS.map((lesson, i) => (
          <LessonCard key={lesson.slug} lesson={lesson} index={i} />
        ))}
      </div>
    </section>
  );
}
