import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  durationMs = 1800,
): [number, React.RefObject<HTMLDivElement | null>] {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 },
    );

    const currentElem = ref.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [target, durationMs]);

  return [count, ref];
}
