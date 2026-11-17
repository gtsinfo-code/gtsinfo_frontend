import { useState, useEffect } from 'react';

/**
 * Custom Hook: useScrollPosition
 * Returns current window scroll Y position and scrolled threshold boolean
 */
export function useScrollPosition(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
