import React, { ElementType, CSSProperties } from 'react';
import Link from 'next/link';

export interface FloatingServiceCardProps {
  id?: string;
  to?: string;
  href?: string;
  titleLine1: string;
  titleLine2: string;
  icon: ElementType;
  width?: string;
  height?: string;
  rotation?: string;
  animationClass?: string;
  className?: string;
  style?: CSSProperties;
  isMobile?: boolean;
}

/**
 * FloatingServiceCard
 * Premium Glassmorphism Service Card
 */
export default function FloatingServiceCard({
  id,
  to,
  href,
  titleLine1,
  titleLine2,
  icon: Icon,
  width = '145px',
  height = '125px',
  rotation = '0deg',
  animationClass = 'animate-hero-float-1',
  className = '',
  style = {},
  isMobile = false,
}: FloatingServiceCardProps) {
  const targetHref = href || to || '/services';

  return (
    <Link
      href={targetHref}
      id={id}
      aria-label={`${titleLine1} ${titleLine2}`}
      className={`group cursor-pointer block select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF] rounded-[18px] transition-all duration-300 ${className}`}
      style={style}
    >
      <div
        className={`relative rounded-[18px] p-2.5 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1 ${animationClass}`}
        style={{
          width: isMobile ? '135px' : width,
          height: isMobile ? '120px' : height,
          boxSizing: 'border-box',
          transform: isMobile ? 'none' : `rotate(${rotation})`,
          background: 'linear-gradient(135deg, rgba(8, 52, 124, 0.65) 0%, rgba(4, 20, 56, 0.82) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(0, 140, 255, 0.85)',
          boxShadow:
            '0 0 16px rgba(0, 140, 255, 0.45), 0 8px 24px rgba(4, 21, 47, 0.6), inset 0 1px 1.5px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(0, 140, 255, 0.22)',
        }}
      >
        {/* Top-edge specular reflection highlight */}
        <div
          className="absolute inset-x-3 top-1 h-[1px] rounded-full pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
          }}
        />

        {/* Diagonal glassy sheen */}
        <div
          className="absolute inset-0 rounded-[18px] pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(0, 140, 255, 0.2) 100%)',
          }}
        />

        {/* Subtle outer neon halo on hover */}
        <div
          className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-sm"
          style={{
            background: 'radial-gradient(circle, rgba(0, 140, 255, 0.7) 0%, transparent 75%)',
          }}
        />

        {/* Crisp White Line Icon (28-32px) */}
        <div className="relative mb-1.5 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-[30px] h-[30px] text-white stroke-[2] drop-shadow-[0_0_8px_rgba(0,140,255,0.7)]" />
        </div>

        {/* Bold 2-Line White Label (14-15px) */}
        <div className="relative text-[14px] font-bold text-white tracking-tight leading-[1.18] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <span className="block">{titleLine1}</span>
          <span className="block">{titleLine2}</span>
        </div>
      </div>
    </Link>
  );
}
