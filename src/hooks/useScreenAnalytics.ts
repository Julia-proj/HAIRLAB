"use client";

import { useEffect, useRef, useCallback } from "react";

type PostHogCapture = {
  capture: (event: string, properties?: Record<string, unknown>) => void;
};

function getPostHog(): PostHogCapture | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { posthog?: PostHogCapture }).posthog;
}

export function useScreenAnalytics(screenEvent: string) {
  const firedRef = useRef(new Set<string>());

  useEffect(() => {
    getPostHog()?.capture(screenEvent);
  }, [screenEvent]);

  const trackEvent = useCallback(
    (event: string, properties?: Record<string, unknown>) => {
      getPostHog()?.capture(event, properties);
    },
    [],
  );

  const observeOnce = useCallback(
    (
      element: HTMLElement | null,
      event: string,
      properties?: Record<string, unknown>,
      threshold = 0.8,
    ) => {
      if (!element || firedRef.current.has(event)) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !firedRef.current.has(event)) {
            firedRef.current.add(event);
            getPostHog()?.capture(event, properties);
            observer.disconnect();
          }
        },
        { threshold },
      );
      observer.observe(element);

      return () => observer.disconnect();
    },
    [],
  );

  return { trackEvent, observeOnce };
}
