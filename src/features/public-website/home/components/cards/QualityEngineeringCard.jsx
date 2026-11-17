import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FloatingServiceCard from './FloatingServiceCard';

export default function QualityEngineeringCard({ className = '', style = {}, isMobile = false }) {
  return (
    <FloatingServiceCard
      id="hero-card-quality-engineering"
      to="/services#quality-engineering-assurance"
      titleLine1="Quality"
      titleLine2="Engineering"
      icon={ShieldCheck}
      width="150px"
      height="125px"
      rotation="2deg"
      animationClass="animate-hero-float-5"
      className={className}
      style={style}
      isMobile={isMobile}
    />
  );
}