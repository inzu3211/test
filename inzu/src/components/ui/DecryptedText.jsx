import React, { useState, useEffect, useRef } from 'react';

const CYBER_GLYPHS = '01#_<>[]*!~%&@$§+±=';

/**
 * DecryptedText — React Bits inspired matrix character shuffle
 * Dynamically decrypts text into view with cyber glyphs upon viewport entry or hover.
 */
export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 12,
  revealDelay = 0,
  sequential = true,
  className = '',
  style = {},
  onHoverDecrypt = true,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const isScramblingRef = useRef(false);

  const startScramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    const originalChars = text.split('');
    const totalChars = originalChars.length;

    const interval = setInterval(() => {
      setDisplayText(() =>
        originalChars
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (sequential) {
              const progressRatio = iteration / maxIterations;
              const targetIndex = progressRatio * totalChars;
              if (index < targetIndex) return char;
            } else if (iteration >= maxIterations) {
              return char;
            }
            return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          })
          .join('')
      );

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      startScramble();
    }, revealDelay);
    return () => clearTimeout(timeout);
  }, [text, revealDelay]);

  return (
    <span
      className={className}
      style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', ...style }}
      onMouseEnter={() => {
        if (onHoverDecrypt) {
          setIsHovered(true);
          startScramble();
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
}

export default DecryptedText;
