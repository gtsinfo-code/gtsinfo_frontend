import React from 'react';
import PageSEO from '../../../components/common/PageSEO';
import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import ServicesOverview from './components/ServicesOverview';
import TechExpertise from './components/TechExpertise';
import FeaturedCareers from './components/FeaturedCareers';
import ContactCTA from './components/ContactCTA';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <PageSEO
        title="Enterprise Software Services & Engineering"
        description="GTSInfo is a software services and technology firm in Bengaluru, architecting full-stack web applications, cloud DevOps, data pipelines, and quality assurance."
        canonicalPath="/"
      />

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
