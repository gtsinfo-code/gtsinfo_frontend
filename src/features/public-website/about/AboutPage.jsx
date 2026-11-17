import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  Users, 
  CheckCircle2, 
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ZoomIn,
  X
} from 'lucide-react';
import WorkplaceGallery from './components/WorkplaceGallery';
import ContactCTA from '../home/components/ContactCTA';
import { COMPANY_INFO } from '../../../constants/companyInfo';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../data/companyGalleryData';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function AboutPage() {
  const collaborationImg = COMPANY_AUTHENTIC_IMAGES.aboutCollaboration;
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. Page Hero: "People. Purpose. Technology." */}
      <section className="bg-navy-950 text-white pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/18 rounded-full blur-[130px] animate-glow-pulse" />
          <div className="absolute bottom-0 left-10 w-[320px] h-[320px] bg-cyan-accent/12 rounded-full blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-5 border border-cyan-accent/25">
                <Building2 className="w-3.5 h-3.5" />
                <span>ABOUT GTSINFO</span>
              </div>
            </ScrollReveal>

            {/* Headline — reduced from text-6xl to text-4xl sm:text-5xl */}
            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
                People. Purpose.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent">
                  Technology.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Get to know GTSInfo — our workplace, our purpose, and the people behind our work.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Editorial Company Overview Section */}
      <section className="py-14 lg:py-18 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-6 space-y-5 lg:pt-2">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 text-primary text-xs font-bold uppercase tracking-wider">
                  <span>Organization Overview</span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={100}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary leading-tight">
                  Rooted in Engineering Rigor and Technological Discipline.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="space-y-3 text-sm sm:text-base text-brandText-secondary leading-relaxed">
                  <p>
                    Established in Bengaluru, India's premier technology capital, GTSInfo is a specialized software services company focused on solving core enterprise engineering challenges.
                  </p>
                  <p>
                    Our multidisciplinary engineers collaborate across modern software architecture, scalable API layers, distributed databases, and automated testing to ensure business software remains stable, scalable, and secure.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <div className="p-4 bg-softblue-50 border border-softblue-200 rounded-2xl flex items-start gap-3 text-xs text-brandText-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-brandText-primary">Software Services & Technology:</strong> Operating in strict compliance with verified corporate guidelines and data confidentiality standards.
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Collaboration Feature Visual: 03-meeting-room.jpg */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="fade-left" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-cyan-accent/15 to-transparent blur-xl -z-10" />

                  <div 
                    className="rounded-2xl overflow-hidden border border-brandBorder shadow-card bg-white group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:border-primary/40"
                    onClick={() => setMeetingModalOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setMeetingModalOpen(true)}
                    aria-label="Inspect collaboration room photo"
                  >
                    {/* Fixed height so meeting room image is visible in full */}
                    <div className="relative overflow-hidden bg-slate-100" style={{ height: '340px' }}>
                      <img
                        src={collaborationImg.src}
                        alt={collaborationImg.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

                      {/* Hover Zoom Prompt */}
                      <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                          <ZoomIn className="w-3.5 h-3.5 text-cyan-accent" />
                          <span>View Full Photograph</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-5 bg-white border-t border-brandBorder">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Collaboration Room</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">GTS Bengaluru</span>
                      </div>
                      <p className="text-xs text-brandText-secondary mt-1">
                        {collaborationImg.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision — Distinctive Layout (Not Two Ordinary Cards) */}
      <section className="py-16 lg:py-20 bg-softblue-50/70 text-brandText-primary relative border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="max-w-3xl mb-10">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  <Target className="w-3.5 h-3.5" />
                  <span>Direction &amp; Purpose</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={80}>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brandText-primary leading-tight">
                  Our Mission &amp; Vision.
                </h2>
              </ScrollReveal>
            </div>

          {/* Asymmetric Split Layout with Oversized Typography, Gradients, and Divider Lines */}
          <div className="relative rounded-3xl overflow-hidden border border-brandBorder bg-white shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-brandBorder">
              
              {/* Mission Half */}
              <div className="p-8 sm:p-12 lg:p-14 relative overflow-hidden bg-gradient-to-br from-white via-softblue-50/40 to-white">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded bg-softblue-100 text-primary border border-softblue-200">
                    Mission Statement
                  </span>
                  <Target className="w-6 h-6 text-primary" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono text-slate-400">01 / PURPOSE</span>
                  <blockquote className="text-xl sm:text-2xl font-bold text-brandText-primary leading-snug">
                    "{COMPANY_INFO.mission}"
                  </blockquote>
                  <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed pt-2">
                    We maintain an uncompromising dedication to software resilience, ensuring every system delivers sustainable long-term business value.
                  </p>
                </div>
              </div>

              {/* Vision Half */}
              <div className="p-8 sm:p-12 lg:p-14 relative overflow-hidden bg-gradient-to-bl from-softblue-50/50 via-white to-softblue-50/30">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded bg-softblue-100 text-cyan-accent border border-softblue-200">
                    Vision Statement
                  </span>
                  <Compass className="w-6 h-6 text-cyan-accent" />
                </div>

                <div className="space-y-4">
                  <span className="text-xs font-mono text-slate-400">02 / HORIZON</span>
                  <blockquote className="text-xl sm:text-2xl font-bold text-brandText-primary leading-snug">
                    "{COMPANY_INFO.vision}"
                  </blockquote>
                  <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed pt-2">
                    Positioned as an engineering-led partner known for integrity, transparency, and scalable digital systems.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Workplace Section with Authentic Photographs (01, 04, 06) */}
      <section id="workplace-gallery" className="py-16 lg:py-20 bg-white text-brandText-primary relative border-t border-brandBorder scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Workplace & Facility</span>
              </div>
            </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={100}>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brandText-primary leading-tight">
                  Authentic Bengaluru Workspace.
                </h2>
              </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-brandText-secondary mt-3 leading-relaxed font-normal">
                A look inside our development desks, focus pods, and interior architecture at Mahalakshmi Layout, Bengaluru.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Lightbox-Supported Gallery */}
          <WorkplaceGallery />

        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 lg:py-20 bg-softblue-50/70 text-brandText-primary border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded">
              Ethos & Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary mt-3">
              Core Principles Guiding Every Project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                <div className="bg-white p-7 rounded-2xl border border-brandBorder shadow-subtle hover:border-primary transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
                    <h3 className="text-base font-bold text-brandText-primary mt-2 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-brandText-secondary leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <ContactCTA />

      {/* Collaboration Room Lightbox Modal: 100% Uncompressed Complete View */}
      {meetingModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setMeetingModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Collaboration Room Image Modal"
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-cyan-accent" />
                <span className="text-sm font-bold text-white">{collaborationImg.title}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• GTS Bengaluru Facility</span>
              </div>
              <button
                onClick={() => setMeetingModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-grow bg-navy-950 flex items-center justify-center p-3 overflow-hidden min-h-[50vh]">
              <img
                src={collaborationImg.src}
                alt={collaborationImg.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="px-6 py-4 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-shrink-0">
              <p className="text-xs text-slate-300 leading-relaxed">
                {collaborationImg.caption}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent flex-shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Facility Space • Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
