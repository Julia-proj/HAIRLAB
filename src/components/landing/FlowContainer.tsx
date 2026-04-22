"use client";

import { useCallback } from "react";
import { useFlowNavigation } from "@/hooks/useFlowNavigation";
import type { QuizAnswers } from "@/lib/quiz/scoring";
import ProgressBar from "@/components/ui/ProgressBar";
import ScreenHero from "./ScreenHero";
import ScreenDamageTypes from "./ScreenDamageTypes";
import ScreenChaos from "./ScreenChaos";
import ScreenExpert from "./ScreenExpert";
import QuizContainer from "./QuizContainer";
import ScreenQuizResult from "./ScreenQuizResult";
import ScreenFreeLesson from "./ScreenFreeLesson";
import ScreenCourseContent from "./ScreenCourseContent";
import ScreenProof from "./ScreenProof";
import ScreenPayment from "./ScreenPayment";

const TOTAL = 10;

export default function FlowContainer() {
  const {
    current,
    direction,
    animKey,
    quizAnswers,
    mounted,
    goNext,
    goBack,
    goTo,
    saveQuizAnswers,
  } = useFlowNavigation();

  const handleQuizComplete = useCallback(
    (answers: QuizAnswers) => {
      saveQuizAnswers(answers);
      goNext();
    },
    [saveQuizAnswers, goNext]
  );

  if (!mounted) return null;

  const animClass = animKey === 0 ? "" : direction === "forward" ? "slide-from-right" : "slide-from-left";

  const screens = [
    <ScreenHero key={0} onNext={goNext} />,
    <ScreenDamageTypes key={1} onNext={goNext} />,
    <ScreenChaos key={2} onNext={goNext} />,
    <ScreenExpert key={3} onNext={goNext} />,
    <QuizContainer key={4} onComplete={handleQuizComplete} />,
    <ScreenQuizResult key={5} answers={quizAnswers} onNext={goNext} />,
    <ScreenFreeLesson key={6} onNext={goNext} />,
    <ScreenCourseContent key={7} onNext={goNext} />,
    <ScreenProof key={8} onNext={goNext} />,
    <ScreenPayment key={9} />,
  ];

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <ProgressBar current={current} total={TOTAL} />

      <div 
        className={`fixed top-[3px] left-0 right-0 h-12 z-40 flex items-center px-5 transition-colors duration-300 ${
          current > 0 ? "bg-cream-50/90 backdrop-blur-[8px]" : "bg-transparent pointer-events-none"
        }`}
      >
        {current > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="font-sans text-[13px] font-medium text-sage hover:text-sage-dark transition-colors duration-150 pointer-events-auto"
          >
            ← Назад
          </button>
        ) : null}
      </div>

      <div key={animKey} className={`pt-[51px] ${animClass}`}>
        {screens[current]}
      </div>
    </div>
  );
}
