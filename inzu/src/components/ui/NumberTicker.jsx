import React, { useEffect, useRef, useState } from 'react';

/**
 * NumberTicker — Magic UI inspired rolling numeric counter
 * Animates numbers from 0 to target value smoothly when scrolled into view.
 */
export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  className = '',
  style = {},
}) {
  const [current, setCurrent] = useState(direction === 'down' ? value : 0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => {
            const startTime = performance.now();
            const duration = 1600; // ms

            const step = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const ease = 1 - Math.pow(1 - progress, 3);
              const nextVal = direction === 'down' ? value * (1 - ease) : value * ease;

              setCurrent(nextVal);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCurrent(value);
              }
            };

            requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, direction, delay]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', ...style }}
    >
      {prefix}
      {current.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}

export default NumberTicker;
