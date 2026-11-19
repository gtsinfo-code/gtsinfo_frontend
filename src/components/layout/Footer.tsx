import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight, Globe, ExternalLink } from 'lucide-react';
import Logo from '../common/Logo';
import { COMPANY_INFO, NAV_LINKS } from '../../constants/companyInfo';
import { SERVICES_DATA } from '../../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapsUrl = COMPANY_INFO.mapsUrl;

  return (
    <footer
      className="text-white border-t border-navy-800/80 relative overflow-hidden"
      style={{ backgroundColor: '#071B36' }}
      aria-label="Corporate Footer"
    >
      {/* Ambient background lighting */}
      <div
        className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ backgroundColor: '#0878E8' }}
      />
      <div
        className="absolute -bottom-24 left-10 w-[380px] h-[380px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ backgroundColor: '#00A6D6' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 relative z-10">

        {/* ── 4-COLUMN BALANCED DESKTOP GRID (2-col tablet, 1-col mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand & Introduction (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Logo asLink={true} size="md" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              At GTSInfo, we bring technology and ideas together to create meaningful digital
              solutions for businesses. Headquartered in Bengaluru, delivering scalable software
              engineering and cloud infrastructure.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-navy-900/90 text-cyan-accent border border-cyan-accent/25">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
                Software Services &amp; Technology
              </span>
            </div>
          </div>

          {/* Column 2: Company Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1 h-3.5 bg-primary rounded-full inline-block" />
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-cyan-accent transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-primary/70 group-hover:text-cyan-accent transition-colors">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-cyan-accent transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="text-primary/70 group-hover:text-cyan-accent transition-colors">›</span>
                  <span>Job Listings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Approved Services (lg:col-span-3) — Labelled Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1 h-3.5 bg-electric rounded-full inline-block" />
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-cyan-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-electric/70 group-hover:text-cyan-accent transition-colors">›</span>
                    <span className="line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/services"
                  className="text-primary hover:text-cyan-accent inline-flex items-center gap-1 font-bold text-xs group transition-colors"
                >
                  <span>Explore all offerings</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Corporate Office & Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1 h-3.5 bg-cyan-accent rounded-full inline-block" />
              Corporate Locations
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-cyan-accent uppercase tracking-wider block">Corporate Headquarters</span>
                  <address className="not-italic leading-relaxed text-slate-300">
                    {COMPANY_INFO.address.line1},<br />
                    {COMPANY_INFO.address.line2},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                  </address>
                </div>
              </div>

              {COMPANY_INFO.secondaryAddress && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-cyan-accent uppercase tracking-wider block">Whitefield Technology Center</span>
                    <address className="not-italic leading-relaxed text-slate-300">
                      {COMPANY_INFO.secondaryAddress.line1},<br />
                      {COMPANY_INFO.secondaryAddress.line2},<br />
                      {COMPANY_INFO.secondaryAddress.city}, {COMPANY_INFO.secondaryAddress.state} - {COMPANY_INFO.secondaryAddress.pincode}
                    </address>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2.5 pt-0.5">
                <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-200 hover:text-cyan-accent transition-colors font-semibold"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-1.5 flex flex-wrap gap-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-white/15 transition-all hover:border-cyan-accent/50 shadow-sm"
                >
                  <Globe className="w-3 h-3 text-cyan-accent" />
                  <span>HQ Map</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                {COMPANY_INFO.secondaryAddress?.mapsUrl && (
                  <a
                    href={COMPANY_INFO.secondaryAddress.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-white/15 transition-all hover:border-cyan-accent/50 shadow-sm"
                  >
                    <Globe className="w-3 h-3 text-cyan-accent" />
                    <span>Whitefield Map</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* ── THIN DIVIDER & PROPERLY ALIGNED LEGAL BAR ── */}
        <div className="pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Data Protection &amp; Privacy
            </span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
