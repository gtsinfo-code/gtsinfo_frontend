import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal
 * High-performance IntersectionObserver scroll animation wrapper.
 * Variants:
 *  - 'fade-up' (default)
 *  - 'fade-down'
 *  - 'fade-left'
 *  - 'fade-right'
 *  - 'scale'
 *  - 'fade'
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0, // delay in ms
  duration = 650, // duration in ms
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  as = 'div',
  once = true,
}) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin, once]);

  // Determine initial and in-view styles based on variant
  const getTransform = () => {
    if (isInView) return 'none';
    switch (variant) {
      case 'fade-up':
        return 'translate3d(0, 32px, 0)';
      case 'fade-down':
        return 'translate3d(0, -28px, 0)';
      case 'fade-right':
        return 'translate3d(-32px, 0, 0)';
      case 'fade-left':
        return 'translate3d(32px, 0, 0)';
      case 'scale':
        return 'scale3d(0.92, 0.92, 1)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const style = {
    opacity: isInView ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: isInView ? 'auto' : 'opacity, transform',
  };

  const Component = as;

  return (
    <Component ref={elementRef} style={style} className={className}>
      {children}
    </Component>
  );
}
