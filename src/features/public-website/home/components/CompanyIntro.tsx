'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2, MapPin, Sparkles, ZoomIn, X } from 'lucide-react';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../../data/companyGalleryData';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function CompanyIntro() {
  const introImg = COMPANY_AUTHENTIC_IMAGES.homeIntro;
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const imageSrc = introImg.src?.src || introImg.src;

  return (
    <section id="company-intro" className="py-20 lg:py-28 bg-white text-brandText-primary relative overflow-hidden scroll-mt-24 border-t border-brandBorder/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-softblue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pale-bg rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Company Narrative */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>About GTSInfo</span>
              </div>
            </ScrollReveal>

            {/* Section Heading per Creative Direction */}
            <ScrollReveal variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brandText-primary leading-[1.18]">
                Building Tomorrow{' '}
                <span className="text-primary block mt-1">Through Technology.</span>
              </h2>
            </ScrollReveal>

            {/* Company Description & Supporting Content */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="space-y-4 text-base sm:text-lg text-brandText-secondary leading-relaxed font-normal">
                <p>
                  At <strong className="text-brandText-primary font-semibold">GTSInfo</strong>, we engineer mission-critical digital systems and software services designed for modern enterprise agility, security, and sustained growth.
                </p>
                <p className="text-base text-slate-600">
                  Headquartered in Bengaluru, Karnataka, our engineering center focuses on clean code delivery, structured database schemas, and resilient cloud architectures that solve complex operational problems.
                </p>
              </div>
            </ScrollReveal>

            {/* Confirmed Company Strengths */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brandText-primary">Full-Stack Engineering</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brandText-primary">Cloud Infrastructure</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brandText-primary">Rigorous Quality QA</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-brandText-primary">Agile Project Delivery</span>
                </div>
              </div>
            </ScrollReveal>

            {/* About Us CTA */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-navy-900 hover:bg-navy-800 text-white shadow-card transition-all duration-300 hover:gap-3.5 hover:shadow-glow group"
                >
                  <span>Discover Our Story & Culture</span>
                  <ArrowRight className="w-4 h-4 text-cyan-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Authentic GTSInfo Workplace Visual (02-open-office-wide-view.jpg used strictly once) */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-left" delay={200}>
              <div className="relative">
                {/* Layered decorative ambient borders & glow */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-electric/10 to-cyan-accent/20 blur-xl -z-10" />
                
                {/* Main Image Frame with Soft Radius, Subtle Blue Border & Layered Decoration */}
                <div 
                  className="relative rounded-3xl overflow-hidden border border-brandBorder shadow-card bg-white group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:border-primary/50"
                  onClick={() => setIntroModalOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setIntroModalOpen(true)}
                  aria-label="Inspect engineering floor photo"
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-900/5">
                    <img
                      src={imageSrc}
                      alt={introImg.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                    {/* Hover Inspection Badge */}
                    <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                        <ZoomIn className="w-3.5 h-3.5 text-cyan-accent" />
                        <span>Inspect Full Photograph</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption & Location Indicator */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-[11px] font-semibold text-cyan-accent uppercase tracking-wider mb-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Bengaluru Engineering Facility</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white">
                        {introImg.title}
                      </p>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 hidden sm:block">
                        {introImg.caption}
                      </p>
                    </div>

                    <span className="flex-shrink-0 text-[10px] font-mono uppercase tracking-wider bg-primary/80 border border-white/20 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                      Authentic Facility
                    </span>
                  </div>
                </div>

                {/* Floating Architectural Badge */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-card border border-brandBorder animate-float-slow">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-brandText-primary">Engineering Floor</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Lightbox Modal: 100% Uncompressed Complete View of Engineering Floor */}
      {introModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setIntroModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Engineering Floor Image Modal"
        >
          <div
            className="relative max-w-5xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-cyan-accent" />
                <span className="text-sm font-bold text-white">{introImg.title}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• GTS Bengaluru Facility</span>
              </div>
              <button
                onClick={() => setIntroModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-grow bg-navy-950 flex items-center justify-center p-4 overflow-hidden min-h-[50vh]">
              <img
                src={imageSrc}
                alt={introImg.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="px-6 py-4 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-shrink-0">
              <p className="text-xs text-slate-300 leading-relaxed">
                {introImg.caption}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent flex-shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Facility Floor • Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
