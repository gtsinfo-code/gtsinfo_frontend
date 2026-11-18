import React, { CSSProperties } from 'react';
import FloatingServiceCard from './FloatingServiceCard';

const CodeBracketIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  isMobile?: boolean;
}

export default function ProductEngineeringCard({ className = '', style = {}, isMobile = false }: CardProps) {
  return (
    <FloatingServiceCard
      id="hero-card-product-engineering"
      to="/services#enterprise-application-development"
      titleLine1="Product"
      titleLine2="Engineering"
      icon={CodeBracketIcon}
      width="145px"
      height="125px"
      rotation="3deg"
      animationClass="animate-hero-float-2"
      className={className}
      style={style}
      isMobile={isMobile}
    />
  );
}
