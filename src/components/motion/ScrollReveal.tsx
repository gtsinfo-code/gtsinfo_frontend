'use client';

import React, { ElementType, ReactNode, useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

/**
 * ScrollReveal
 * High-performance IntersectionObserver scroll animation wrapper.
 */
export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  as = 'div',
  once = true,
}: ScrollRevealProps) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

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

  const Component = as as any;

  return (
    <Component ref={elementRef} style={style} className={className}>
      {children}
    </Component>
  );
}
