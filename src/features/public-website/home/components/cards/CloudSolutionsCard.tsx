import React, { CSSProperties } from 'react';
import FloatingServiceCard from './FloatingServiceCard';

const CloudUploadIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="M12 12v6" />
    <path d="m9 14.5 3-2.5 3 2.5" />
  </svg>
);

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  isMobile?: boolean;
}

export default function CloudSolutionsCard({ className = '', style = {}, isMobile = false }: CardProps) {
  return (
    <FloatingServiceCard
      id="hero-card-cloud-solutions"
      to="/services#cloud-infrastructure-devops"
      titleLine1="Cloud"
      titleLine2="Solutions"
      icon={CloudUploadIcon}
      width="135px"
      height="125px"
      rotation="-3deg"
      animationClass="animate-hero-float-1"
      className={className}
      style={style}
      isMobile={isMobile}
    />
  );
}
