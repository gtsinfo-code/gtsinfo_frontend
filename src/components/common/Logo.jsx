import React from 'react';
import { Link } from 'react-router-dom';
import officialLogoImg from '../../assets/branding/GTS_Software_Services_Logo_Transparent.png';
/**

/**
 * Reusable GTSInfo Logo Component
 * - Single authentic logo used consistently across Navbar, Footer, and Portals.
 * - Crisp, high-contrast, glowing neon-blue/white styling matching the reference design.
 * - Supports size="sm" | "md" | "lg" | "hero"
 */
export default function Logo({
  variant = 'light',
  size = 'md',
  className = '',
  asLink = true,
}) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-11 sm:h-13',
    hero: 'h-13 sm:h-16',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`inline-flex items-center transition-opacity hover:opacity-95 ${className}`}>
      <img
        src={officialLogoImg}
        alt="GTSInfo - Software Services & Technology"
        className={`${selectedSize} w-auto object-contain block select-none drop-shadow-[0_2px_12px_rgba(0,140,255,0.35)]`}
        loading="eager"
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        aria-label="GTSInfo Home"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.99] inline-block"
      >
        {content}
      </Link>
    );
  }

  return content;
}

