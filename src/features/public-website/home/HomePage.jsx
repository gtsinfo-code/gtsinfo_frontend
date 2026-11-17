import React from 'react';
import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import ServicesOverview from './components/ServicesOverview';
import TechExpertise from './components/TechExpertise';
import FeaturedCareers from './components/FeaturedCareers';
import ContactCTA from './components/ContactCTA';

/**
 * GTSInfo Public Home Page
 * Implements strict compliance with SRS Version 1.2 Section 3.1:
 * - Company name and logo
 * - Company introduction (featuring authentic facility photograph 02-open-office-wide-view.jpg)
 * - Overview of major services (Enterprise Dev, Cloud, Data, QA)
 * - Technical expertise and business capabilities (3-tier architecture & core capabilities)
 * - Featured job opportunities (verified active vacancies from jobs catalog)
 * - Contact information (corporate office details, direct email, location)
 * - Navigation to main website sections
 */
export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. SRS 3.1: Hero Experience & Core Navigation */}
      <Hero />

      {/* 2. SRS 3.1: Company Introduction (02-open-office-wide-view.jpg used strictly once) */}
      <CompanyIntro />

      {/* 3. SRS 3.1: Overview of Major Services */}
      <ServicesOverview />

      {/* 4. SRS 3.1: Technical Expertise and Business Capabilities */}
      <TechExpertise />

      {/* 5. SRS 3.1: Featured Job Opportunities */}
      <FeaturedCareers />

      {/* 6. SRS 3.1: Contact Information & Dialogue CTA */}
      <ContactCTA />
    </div>
  );
}
