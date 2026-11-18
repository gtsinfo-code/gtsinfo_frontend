import React, { CSSProperties } from 'react';
import { Cpu } from 'lucide-react';
import FloatingServiceCard from './FloatingServiceCard';

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  isMobile?: boolean;
}

export default function AIAutomationCard({ className = '', style = {}, isMobile = false }: CardProps) {
  return (
    <FloatingServiceCard
      id="hero-card-ai-automation"
      to="/services"
      titleLine1="AI &"
      titleLine2="Automation"
      icon={Cpu}
      width="145px"
      height="125px"
      rotation="-2deg"
      animationClass="animate-hero-float-4"
      className={className}
      style={style}
      isMobile={isMobile}
    />
  );
}
