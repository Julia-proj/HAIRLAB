"use client";

import { useState, useEffect, useCallback } from "react";
import type { QuizAnswers } from "@/lib/quiz/scoring";

const SCREEN_KEY = "km_flow_screen";
const ANSWERS_KEY = "km_quiz_answers";
const TOTAL = 10;

export function useFlowNavigation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [animKey, setAnimKey] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedScreen = localStorage.getItem(SCREEN_KEY);
    const savedAnswers = localStorage.getItem(ANSWERS_KEY);
    if (savedScreen) {
      const n = parseInt(savedScreen, 10);
      if (!isNaN(n) && n >= 0 && n < TOTAL) setCurrent(n);
    }
    if (savedAnswers) {
      try {
        setQuizAnswers(JSON.parse(savedAnswers) as QuizAnswers);
      } catch {
        // ignore corrupt data
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem(SCREEN_KEY, String(current));
  }, [current, mounted]);

  const goNext = useCallback(() => {
    setDirection("forward");
    setAnimKey((k) => k + 1);
    setCurrent((c) => Math.min(c + 1, TOTAL - 1));
  }, []);

  const goBack = useCallback(() => {
    setDirection("backward");
    setAnimKey((k) => k + 1);
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  const goTo = useCallback((n: number) => {
    setDirection("forward");
    setAnimKey((k) => k + 1);
    setCurrent(n);
  }, []);

  const saveQuizAnswers = useCallback((answers: QuizAnswers) => {
    setQuizAnswers(answers);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
  }, []);

  return {
    current,
    direction,
    animKey,
    quizAnswers,
    mounted,
    goNext,
    goBack,
    goTo,
    saveQuizAnswers,
  };
}
