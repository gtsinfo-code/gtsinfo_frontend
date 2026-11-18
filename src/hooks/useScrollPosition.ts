'use client';

import { useState, useEffect } from 'react';

export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}
