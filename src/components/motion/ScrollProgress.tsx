'use client';

import React, { useEffect, useState } from 'react';

/**
 * ScrollProgress
 * Thin, high-performance reading progress indicator fixed at viewport top.
 * Gradient: Primary Blue (#0878E8) to Cyan Blue (#00A6D6) with subtle glow.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(Math.min(100, Math.max(0, currentProgress)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-electric to-cyan-accent shadow-[0_0_10px_rgba(0,166,214,0.6)] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
