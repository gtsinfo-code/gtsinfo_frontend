import React from 'react';
import { Layers } from 'lucide-react';
import FloatingServiceCard from './FloatingServiceCard';

export default function DataAnalyticsCard({ className = '', style = {}, isMobile = false }) {
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