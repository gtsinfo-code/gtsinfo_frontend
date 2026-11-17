import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  Rocket,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';
import heroBgImage from '../../../../assets/images/hero-globe-bg.jpg';
import HeroFloatingCards from './cards/HeroFloatingCards';

/* ─────────────────────────────────────────────────────────────────────────────
   GTSInfo Hero Component — FAITHFUL RECREATION OF REFERENCE ARTWORK
   
   Strictly complies with user requirements:
     • Digital globe background artwork preserved
     • Left-side typography and CTA buttons preserved
     • 5 Floating Service Cards positioned inside the dedicated globe container:
         1. Cloud Solutions (135 × 125px) — upper-left, outside globe edge
         2. Product Engineering (145 × 125px) — upper-right, slightly above globe center
         3. Data & Analytics (145 × 125px) — right-middle, outside globe edge
         4. AI & Automation (145 × 125px) — lower-left, outside globe edge
         5. Quality Engineering (150 × 125px) — lower-right, below Data & Analytics
     • Zero collision with headline, eyebrow, supporting text or CTA buttons
     • Bottom Feature Strip:
         🚀 Innovate Faster | 📊 Build for Scale | 🛡️ Deliver with Quality
     • 100% Blue-only palette: #071B36, #04152F, #006BFF, #0878E8, #008CFF, #DCEEFF, #FFFFFF
     • Fits within 16:9 desktop viewport without scrolling
───────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[1020px] flex flex-col justify-between overflow-hidden bg-[#071B36] text-white select-none"
      aria-label="GTSInfo — Transforming Businesses with Technology"
    >
      {/* ──────────────── 1. FULL-WIDTH 3D GLOBE BACKGROUND ARTWORK ──────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Supplied authentic 3D globe background: full brightness & contrast */}
        <img
          src={heroBgImage}
          alt="GTSInfo Digital Globe Horizon"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.03] contrast-[1.04]"
          loading="eager"
        />

        {/* Localized soft vignette strictly behind the headline on the left for WCAG readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 70% at 20% 48%, rgba(7, 27, 54, 0.78) 0%, rgba(7, 27, 54, 0.45) 45%, transparent 75%)',
          }}
        />

        {/* Deep navy top gradient preventing any merging under the navbar */}
        <div
          className="absolute top-0 inset-x-0 h-36 sm:h-44 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, #04152F 0%, rgba(4, 21, 47, 0.95) 45%, rgba(4, 21, 47, 0.5) 75%, transparent 100%)',
          }}
        />

        {/* Ambient electric blue highlights (Strictly #006BFF, #008CFF) */}
        <div
          className="absolute top-[20%] right-[22%] w-[28rem] h-[28rem] rounded-full blur-[140px] opacity-35 pointer-events-none"
          style={{ backgroundColor: '#008CFF' }}
        />
        <div
          className="absolute bottom-6 right-[12%] w-[32rem] h-[16rem] rounded-full blur-[110px] opacity-30 pointer-events-none"
          style={{ backgroundColor: '#006BFF' }}
        />
      </div>

      {/* ──────────────── 2. HERO MAIN CONTENT & GLOBE ORBIT ──────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-36 lg:pt-40 pb-4 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">

          {/* ════════════ LEFT COLUMN: Editorial Brand Headline & CTAs ════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 lg:space-y-6 text-left">

            {/* Eyebrow Line */}
            <div
              className={`inline-flex items-center gap-3 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="w-8 h-[2px] bg-[#008CFF] inline-block shadow-[0_0_10px_#008CFF]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#DCEEFF] font-mono">
                GTSINFO — SOFTWARE SERVICES &amp; TECHNOLOGY
              </span>
            </div>

            {/* Main Headline */}
            <div
              className={`space-y-1 transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h1
                className="font-extrabold text-white tracking-[-0.03em] leading-[1.08]"
                style={{
                  fontFamily: "'Manrope', 'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: 'clamp(2.5rem, 4.8vw + 0.5rem, 4.5rem)',
                }}
              >
                <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Transforming</span>
                <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">Businesses with</span>
                <span
                  className="inline-block pb-3 pr-2 leading-[1.18]"
                  style={{
                    background: 'linear-gradient(90deg, #00D2FF 0%, #008CFF 50%, #60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 28px rgba(0, 140, 255, 0.6))',
                  }}
                >
                  Technology
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p
              className={`text-base sm:text-lg text-slate-200/90 max-w-lg leading-relaxed font-normal transition-all duration-700 delay-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              End-to-end digital solutions that help businesses innovate, scale and stay ahead.
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Primary: Explore Our Services → */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_30px_rgba(0,107,255,0.6)] hover:shadow-[0_6px_40px_rgba(0,107,255,0.85)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-200 group cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #006BFF 0%, #0878E8 100%)',
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>

              {/* Secondary: Let's Connect */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-[#008CFF] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.99] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#008CFF]" />
                <span>Let&apos;s Connect</span>
              </Link>
            </div>

          </div>

          {/* ════════════ RIGHT COLUMN: DEDICATED GLOBE VISUAL CONTAINER ════════════ */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-[510px]">
            <HeroFloatingCards mounted={mounted} />
          </div>

        </div>
      </div>

      {/* ──────────────── 3. BOTTOM FEATURE STRIP ──────────────── */}
      {/* Exact match to reference image: Innovate Faster | Build for Scale | Deliver with Quality */}
      <div className="relative z-20 pb-12 sm:pb-16 lg:pb-20 pt-2 lg:pt-3 mb-2 lg:mb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 text-sm sm:text-base font-semibold text-white transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {/* Pillar 1: Innovate Faster */}
            <div className="flex items-center gap-3 group cursor-default">
              <Rocket className="w-5 h-5 text-[#00E5FF] flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(0,229,255,0.85)]" />
              <span className="tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Innovate Faster</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline-block w-[1.5px] h-5 bg-[#00A6D6]/40" />

            {/* Pillar 2: Build for Scale */}
            <div className="flex items-center gap-3 group cursor-default">
              <BarChart3 className="w-5 h-5 text-[#00E5FF] flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(0,229,255,0.85)]" />
              <span className="tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Build for Scale</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline-block w-[1.5px] h-5 bg-[#00A6D6]/40" />

            {/* Pillar 3: Deliver with Quality */}
            <div className="flex items-center gap-3 group cursor-default">
              <ShieldCheck className="w-5 h-5 text-[#00E5FF] flex-shrink-0 group-hover:scale-110 transition-transform drop-shadow-[0_0_12px_rgba(0,229,255,0.85)]" />
              <span className="tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">Deliver with Quality</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}