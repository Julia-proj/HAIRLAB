"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type QuizAnswers = Record<string, string | string[]>;

interface FlowState {
  direction: "forward" | "backward";
  quizAnswers: QuizAnswers;
  quizResult: string | null;
  setDirection: (d: "forward" | "backward") => void;
  setQuizAnswers: (answers: QuizAnswers) => void;
  setQuizResult: (result: string) => void;
}

export const useFlowStore = create<FlowState>()(
  persist(
    (set) => ({
      direction: "forward",
      quizAnswers: {},
      quizResult: null,
      setDirection: (direction) => set({ direction }),
      setQuizAnswers: (quizAnswers) => set({ quizAnswers }),
      setQuizResult: (quizResult) => set({ quizResult }),
    }),
    {
      name: "km-flow",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        quizAnswers: state.quizAnswers,
        quizResult: state.quizResult,
      }),
    }
  )
);
