import React from 'react';

/**
 * GlassCard
 * Sophisticated glassmorphism card supporting light, dark, and glowing accents.
 */
export default function GlassCard({
  children,
  variant = 'light', // 'light' | 'dark' | 'glow' | 'accent'
  hoverEffect = true,
  className = '',
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return 'bg-navy-900/80 backdrop-blur-md border border-white/10 text-white shadow-glass-dark';
      case 'glow':
        return 'bg-navy-900/90 backdrop-blur-lg border border-primary/40 text-white shadow-[0_0_30px_rgba(8,120,232,0.25)]';
      case 'accent':
        return 'bg-gradient-to-br from-softblue-50/90 to-white/90 backdrop-blur-md border border-softblue-200 text-brandText-primary shadow-card';
      case 'light':
      default:
        return 'bg-white/85 backdrop-blur-md border border-brandBorder text-brandText-primary shadow-subtle';
    }
  };

  const hoverClasses = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/50'
    : '';

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 ${getVariantStyles()} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
