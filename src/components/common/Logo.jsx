import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/branding/gtsinfo-logo.png';

/**
 * Reusable GTSInfo Logo Component
 * - Preserves authentic original proportions and crisp resolution.
 * - Integrates seamlessly into light surfaces without any artificial white patch or box.
 * - Supports size="sm" | "md" | "lg"
 */
export default function Logo({
  size = 'md',
  className = '',
  asLink = true,
}) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  const content = (
    <div className={`inline-flex items-center transition-opacity hover:opacity-95 ${className}`}>
      <img
        src={logoImg}
        alt="GTSInfo - Software Services & Technology"
        className={`${selectedSize} w-auto object-contain block select-none`}
        loading="eager"
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        aria-label="GTSInfo Home"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        {content}
      </Link>
    );
  }

  return content;
}
