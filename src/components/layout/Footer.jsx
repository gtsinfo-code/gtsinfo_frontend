import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ShieldCheck, ExternalLink, Globe } from 'lucide-react';
import Logo from '../common/Logo';
import { COMPANY_INFO, NAV_LINKS } from '../../constants/companyInfo';
import { SERVICES_DATA } from '../../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapsUrl = "https://www.google.com/maps/place/2nd+Floor,+7,+1st+Main+Rd,+Bovipalya,+Mahalakshmipuram,+Bengaluru,+Karnataka+560086/@13.0079767,77.5426662,859m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3bae3d9e45994e5f:0xe2c814ff1997f136!8m2!3d13.0079767!4d77.5426662?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-700/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-cyan-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1 & 2: Brand Identity & Introduction */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white px-3.5 py-1.5 rounded-xl shadow-subtle">
              <Logo asLink={true} size="sm" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              At GTSInfo, we bring technology and ideas together to create meaningful digital solutions for businesses. Headquartered in Bengaluru, delivering scalable software engineering and cloud infrastructure.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-navy-900 text-cyan-accent border border-cyan-accent/25">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse" />
                Software Services & Technology
              </span>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-primary rounded-xs inline-block" />
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-accent transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-primary/70 group-hover:text-cyan-accent transition-colors">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/jobs"
                  className="hover:text-cyan-accent transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="text-primary/70 group-hover:text-cyan-accent transition-colors">›</span>
                  <span>Job Listings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-electric rounded-xs inline-block" />
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="hover:text-cyan-accent transition-colors duration-200 line-clamp-1 flex items-center gap-1.5 group"
                  >
                    <span className="text-electric/70 group-hover:text-cyan-accent transition-colors">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-primary hover:text-cyan-accent inline-flex items-center gap-1 font-bold text-xs group"
                >
                  <span>Explore all offerings</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Corporate Office Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-cyan-accent rounded-xs inline-block" />
              Corporate Office
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-slate-300">
                  {COMPANY_INFO.address.line1},<br />
                  {COMPANY_INFO.address.line2},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode},<br />
                  {COMPANY_INFO.address.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-200 hover:text-cyan-accent transition-colors font-semibold"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-white/15 transition-all hover:border-cyan-accent/50 shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Privacy & Compliance Bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-accent" />
              <span>Data Protection & Privacy</span>
            </span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span className="font-mono text-[11px] text-slate-500">SRS v1.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
