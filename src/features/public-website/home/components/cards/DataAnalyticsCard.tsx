import React, { CSSProperties } from 'react';
import { Layers } from 'lucide-react';
import FloatingServiceCard from './FloatingServiceCard';

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  isMobile?: boolean;
}

export default function DataAnalyticsCard({ className = '', style = {}, isMobile = false }: CardProps) {
  return (
    <FloatingServiceCard
      id="hero-card-data-analytics"
      to="/services#data-engineering-analytics"
      titleLine1="Data &"
      titleLine2="Analytics"
      icon={Layers}
      width="145px"
      height="125px"
      rotation="1deg"
      animationClass="animate-hero-float-3"
      className={className}
      style={style}
      isMobile={isMobile}
    />
  );
}
