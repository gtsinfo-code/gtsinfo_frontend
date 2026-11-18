import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'navy' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '', ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-softblue-100 text-primary border-softblue-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    navy: 'bg-navy-800 text-cyan-accent border-cyan-accent/20',
    neutral: 'bg-softblue-50 text-brandText-secondary border-brandBorder',
  };

  const selected = variantStyles[variant] || variantStyles.primary;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold border ${selected} ${className}`} {...props}>
      {children}
    </span>
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'navy' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow-glow active:scale-[0.98]',
    navy: 'bg-navy-900 hover:bg-navy-800 text-white shadow-subtle',
    secondary: 'bg-white hover:bg-softblue-50 text-brandText-primary border border-brandBorder',
    ghost: 'bg-transparent hover:bg-softblue-100 text-brandText-primary',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <div className={`rounded-xl border border-brandBorder bg-white p-6 shadow-subtle ${hover ? 'hover:border-primary hover:shadow-card transition-all duration-300' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
}
