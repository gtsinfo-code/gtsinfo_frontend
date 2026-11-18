import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Info,
  Server,
  Cpu,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';
import { SERVICES_DATA } from '../../../data/servicesData';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../data/companyGalleryData';
import ContactCTA from '../home/components/ContactCTA';
import PageSEO from '../../../components/common/PageSEO';
import ScrollReveal from '../../../components/motion/ScrollReveal';

const iconMap = {
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Compass,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const bannerImg = COMPANY_AUTHENTIC_IMAGES.servicesArchitecture;
  const location = useLocation();

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Enterprise Software Engineering & Cloud Infrastructure",
    "provider": {
      "@type": "Corporation",
      "name": "GTSInfo",
      "url": "https://gtsinfo.vercel.app/"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GTSInfo Technology Services Catalog",
      "itemListElement": SERVICES_DATA.map((s, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.shortDescription
        }
      }))
    }
  };

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="w-full overflow-hidden">
      <PageSEO
        title="Software Engineering & Cloud Services Catalog"
        description="Explore GTSInfo software services: full-stack enterprise web development, cloud DevOps automation, data engineering pipelines, and automated QA testing."
        canonicalPath="/services"
        schema={servicesSchema}
      />
      
      {/* 1. Services Hero */}
      <section className="bg-navy-950 text-white pt-36 pb-20 lg:pt-44 lg:pb-24 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-primary/20 rounded-full blur-[140px] animate-glow-pulse" />
          <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-cyan-accent/15 rounded-full blur-[120px]" />
          
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-accent/25">
                <Layers className="w-3.5 h-3.5" />
                <span>CAPABILITIES & ARCHITECTURE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Enterprise Software Services.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent block sm:inline">
                  Engineered for Impact.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Explore GTSInfo's software capabilities across full-stack engineering, cloud architecture, data pipelines, and quality assurance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Cloud Architecture Highlight (Licensed Single Visual) */}
      <section className="bg-softblue-50/70 py-12 border-b border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <div className="relative rounded-3xl overflow-hidden border border-brandBorder shadow-card max-h-80 bg-navy-950">
              <img
                src={bannerImg.src}
                alt={bannerImg.alt}
                className="w-full h-80 object-cover object-center opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent flex items-center p-8 sm:p-14 text-white">
                <div className="max-w-xl space-y-3">
                  <span className="text-xs font-mono font-bold text-cyan-accent uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 backdrop-blur-md inline-block">
                    Architectural Excellence
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Distributed, Resilient Software Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed with modular separation of concerns, containerized microservices, and high-performance database indexing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Catalog Filter & Capabilities Explorer */}
      <section className="py-16 lg:py-20 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal variant="fade-up">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brandText-secondary mr-2">
                Domain Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-softblue-50 text-brandText-primary hover:bg-softblue-100 border border-brandBorder'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 4. Alternating Service Storytelling Sections */}
          <div className="space-y-20 lg:space-y-28">
            {filteredServices.map((service, index) => {
              const Icon = iconMap[service.iconName] || Code2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-28"
                  style={{ scrollMarginTop: '7rem' }}
                >
                  <ScrollReveal variant={isEven ? 'fade-up' : 'fade-up'} delay={100}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      
                      {/* Column 1: Narrative & Details */}
                      <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-softblue-100 text-primary text-xs font-bold uppercase tracking-wider">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{service.category}</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brandText-primary leading-tight">
                          {service.title}
                        </h2>

                        <p className="text-base text-brandText-secondary leading-relaxed">
                          {service.fullDescription || service.shortDescription}
                        </p>

                        {/* Capabilities Checklist */}
                        <div className="space-y-2.5 pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-brandText-primary">
                            Core Deliverables & Capabilities:
                          </h4>
                          {service.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Stack Tags */}
                        <div className="pt-4 border-t border-brandBorder">
                          <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                            Technologies & Tools:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-softblue-50 text-brandText-secondary border border-softblue-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-electric uppercase tracking-wider group"
                          >
                            <span>Discuss {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Distinctive Technical Visualization Card */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="rounded-3xl p-7 sm:p-9 bg-navy-950 text-white border border-navy-800 shadow-card relative overflow-hidden">
                          {/* Ambient glow inside card */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                          <div className="relative z-10 space-y-5">
                            <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                              <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-cyan-accent" />
                                <span className="font-mono text-xs text-slate-300">Architecture Spec</span>
                              </div>
                              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                Verified
                              </span>
                            </div>

                            <div className="space-y-3 font-mono text-xs text-slate-300">
                              <div className="p-3 bg-navy-900 rounded-xl border border-white/10 flex items-center justify-between">
                                <span className="text-slate-400">Target Framework</span>
                                <span className="text-white font-bold">{service.technologies[0]}</span>
                              </div>
                              <div className="p-3 bg-navy-900 rounded-xl border border-white/10 flex items-center justify-between">
                                <span className="text-slate-400">Architecture Pattern</span>
                                <span className="text-cyan-accent font-bold">Microservices & REST</span>
                              </div>
                              <div className="p-3 bg-navy-900 rounded-xl border border-white/10 flex items-center justify-between">
                                <span className="text-slate-400">Quality Standard</span>
                                <span className="text-white font-bold">Automated CI/CD Validation</span>
                              </div>
                            </div>

                            <div className="p-4 bg-navy-900/60 rounded-xl border border-white/10 text-xs text-slate-300 leading-relaxed">
                              <strong className="text-white block mb-1">Engineering Commitment:</strong>
                              Each project module is verified against enterprise performance, response latency, and role-based data protection criteria.
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Contact CTA */}
      <ContactCTA />

    </div>
  );
}
