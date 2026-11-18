import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../../../../data/servicesData';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = {
    Code2,
    Cloud,
    Database,
    ShieldCheck,
  };

  const capabilities = SERVICES_DATA.slice(0, 4);

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-softblue-50/80 text-brandText-primary relative border-t border-brandBorder overflow-hidden scroll-mt-24">
      {/* Decorative ambient curves */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Engineering Pillars</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brandText-primary leading-tight">
              Enterprise Capabilities.{' '}
              <span className="text-primary block mt-1">Engineered for Performance.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-base sm:text-lg text-brandText-secondary mt-4 leading-relaxed font-normal">
              We architect, implement, and maintain resilient technology solutions across the software development lifecycle.
            </p>
          </ScrollReveal>
        </div>

        {/* Asymmetric Capabilities Grid with Oversized Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {capabilities.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Code2;
            const numeral = `0${idx + 1}`;
            const isHovered = activeTab === idx;

            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                delay={idx * 120}
              >
                <div
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`group relative rounded-2xl p-7 sm:p-9 bg-white border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isHovered
                      ? 'border-primary shadow-card-hover translate-y-[-4px]'
                      : 'border-brandBorder shadow-subtle hover:border-softblue-300'
                  }`}
                >
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-13 h-13 rounded-xl bg-softblue-100 text-primary flex items-center justify-center p-3 border border-softblue-200 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-brandText-primary mb-3 relative z-10 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brandText-secondary leading-relaxed mb-6 relative z-10">
                    {item.shortDescription}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-2 mb-6 relative z-10">
                    {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Pill Row & Action Link */}
                  <div className="pt-4 border-t border-softblue-200/80 flex items-center justify-between relative z-10">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {item.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-softblue-50 text-brandText-secondary border border-softblue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services#${item.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-electric transition-colors"
                      aria-label={`View details for ${item.title}`}
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Comprehensive CTA */}
        <ScrollReveal variant="fade-up" delay={400}>
          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-navy-900 hover:bg-navy-800 text-white shadow-card transition-all duration-300 hover:gap-3.5 hover:shadow-glow"
            >
              <span>View Full Service Catalog & Architecture</span>
              <ArrowRight className="w-4 h-4 text-cyan-accent" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
