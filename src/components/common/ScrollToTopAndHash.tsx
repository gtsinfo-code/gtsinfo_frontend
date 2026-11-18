'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTopAndHash
 * Ensures seamless, intuitive scroll and redirection behavior across all routes:
 * 1. When navigating to a new route without a hash, scrolls instantly to top: 0.
 * 2. When navigating or clicking an anchor with a hash (#elementId), smoothly scrolls to
 *    the exact target component with an offset to account for the sticky navbar.
 * 3. Prevents browser auto-restoration conflicts across route changes.
 */
export default function ScrollToTopAndHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable automatic browser scroll restoration on router navigation
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    if (hash) {
      const targetId = hash.replace('#', '');

      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarOffset = 95;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          // Subtle focus highlight
          element.classList.add('ring-2', 'ring-primary/40', 'rounded-3xl');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary/40', 'rounded-3xl');
          }, 2000);

          return true;
        }
        return false;
      };

      // Try immediate scroll, then retry after component paint
      if (!scrollToTarget()) {
        const timer1 = setTimeout(() => {
          if (!scrollToTarget()) {
            const timer2 = setTimeout(scrollToTarget, 200);
            return () => clearTimeout(timer2);
          }
        }, 80);
        return () => clearTimeout(timer1);
      }
    } else {
      // Immediate clean scroll to top
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  }, [pathname]);

  return null;
}
