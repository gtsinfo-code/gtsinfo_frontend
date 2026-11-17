import React, { useEffect, useRef, useState } from 'react';

/**
 * ImageReveal
 * Cinematic curtain/clip-path reveal with soft scale settling.
 * Perfect for authentic corporate office photographs.
 */
export default function ImageReveal({
  src,
  alt,
  caption,
  title,
  className = '',
  imageClassName = '',
  aspectRatio = 'aspect-[16/10]',
  delay = 0,
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border border-brandBorder shadow-card bg-slate-100 group ${className}`}
    >
      <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105 ${imageClassName}`}
          style={{
            clipPath: isRevealed ? 'inset(0 0 0% 0)' : 'inset(10% 0 90% 0)',
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? 'scale(1)' : 'scale(1.08)',
            transition: `clip-path 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 800ms ease-out ${delay}ms`,
          }}
          loading="lazy"
        />

        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {(title || caption) && (
        <div className="p-4 sm:p-5 bg-white border-t border-brandBorder">
          {title && (
            <h4 className="text-sm font-bold text-brandText-primary">
              {title}
            </h4>
          )}
          {caption && (
            <p className="text-xs text-brandText-secondary mt-1 leading-relaxed">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
