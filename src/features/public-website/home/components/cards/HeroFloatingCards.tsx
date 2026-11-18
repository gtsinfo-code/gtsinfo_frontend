import React from 'react';
import CloudSolutionsCard from './CloudSolutionsCard';
import ProductEngineeringCard from './ProductEngineeringCard';
import DataAnalyticsCard from './DataAnalyticsCard';
import AIAutomationCard from './AIAutomationCard';
import QualityEngineeringCard from './QualityEngineeringCard';

export interface HeroFloatingCardsProps {
  mounted?: boolean;
}

export default function HeroFloatingCards({ mounted = true }: HeroFloatingCardsProps) {
  return (
    <>
      {/* ──────────────── 1. DESKTOP GLOBE CONTAINER ORBIT (lg and above) ──────────────── */}
      <div
        className={`hidden lg:block relative w-full h-[460px] sm:h-[490px] lg:h-[510px] select-none transition-opacity duration-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* Card 1: Cloud Solutions — Upper-Left, outside globe edge */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '10%',
            left: '3%',
          }}
        >
          <CloudSolutionsCard />
        </div>

        {/* Card 2: Product Engineering — Upper-Right, slightly above globe center */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '6%',
            right: '6%',
          }}
        >
          <ProductEngineeringCard />
        </div>

        {/* Card 3: Data & Analytics — Right-Middle, outside globe */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '40%',
            right: '1%',
          }}
        >
          <DataAnalyticsCard />
        </div>

        {/* Card 4: AI & Automation — Lower-Left, outside globe edge */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '58%',
            left: '5%',
          }}
        >
          <AIAutomationCard />
        </div>

        {/* Card 5: Quality Engineering — Lower-Right, below Data & Analytics */}
        <div
          className="absolute z-20 pointer-events-auto"
          style={{
            top: '68%',
            right: '7%',
          }}
        >
          <QualityEngineeringCard />
        </div>
      </div>

      {/* ──────────────── 2. MOBILE & TABLET RESPONSIVE STACK (below lg) ──────────────── */}
      <div
        className={`lg:hidden w-full pt-8 pb-4 transition-all duration-700 delay-200 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-sm sm:max-w-xl mx-auto justify-items-center">
          <CloudSolutionsCard isMobile={true} />
          <ProductEngineeringCard isMobile={true} />
          <DataAnalyticsCard isMobile={true} />
          <AIAutomationCard isMobile={true} />
          <div className="col-span-2 sm:col-span-1 justify-self-center">
            <QualityEngineeringCard isMobile={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export {
  CloudSolutionsCard,
  ProductEngineeringCard,
  DataAnalyticsCard,
  AIAutomationCard,
  QualityEngineeringCard,
};
