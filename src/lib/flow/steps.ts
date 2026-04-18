export const FLOW_STEPS = {
  "/flow/recognition": { number: 1, total: 10 },
  "/flow/understanding": { number: 2, total: 10 },
  "/flow/why-chaos": { number: 3, total: 10 },
  "/flow/meet-elena": { number: 4, total: 10 },
  "/flow/quiz": { number: 5, total: 10 },
  "/flow/quiz/result": { number: 6, total: 10 },
  "/flow/lesson": { number: 7, total: 10 },
  "/flow/course": { number: 8, total: 10 },
  "/flow/for-whom": { number: 9, total: 10 },
  "/flow/offer": { number: 10, total: 10 },
} as const;

export type FlowPath = keyof typeof FLOW_STEPS;

const ORDERED_PATHS = Object.keys(FLOW_STEPS) as FlowPath[];

export function getNextPath(current: string): FlowPath | null {
  const idx = ORDERED_PATHS.indexOf(current as FlowPath);
  if (idx === -1 || idx === ORDERED_PATHS.length - 1) return null;
  return ORDERED_PATHS[idx + 1];
}

export function getPrevPath(current: string): FlowPath | null {
  const idx = ORDERED_PATHS.indexOf(current as FlowPath);
  if (idx <= 0) return null;
  return ORDERED_PATHS[idx - 1];
}
