import { useCallback, useEffect, useState } from "react";

interface UseCounterOptions {
  duration?: number;
  startOnMount?: boolean;
}

export const useCounter = (
  target: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, startOnMount = false } = options;
  const [count, setCount] = useState(startOnMount ? target : 0);
  const [isAnimating, setIsAnimating] = useState(false);

  const start = useCallback(() => {
    setIsAnimating(true);
    setCount(0);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, target]);

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount, start]);

  return { count, start, isAnimating };
};

