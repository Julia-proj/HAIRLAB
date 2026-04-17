"use client";

import { useEffect, useCallback } from "react";

type PostHogCapture = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
};

function getPostHog(): PostHogCapture | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { posthog?: PostHogCapture }).posthog;
}

export function useLessonAnalytics() {
  useEffect(() => {
    getPostHog()?.capture("free_lesson_viewed");
  }, []);

  const trackCtaClick = useCallback(() => {
    getPostHog()?.capture("free_lesson_cta_clicked");
  }, []);

  return { trackCtaClick };
}
