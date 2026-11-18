import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  User,
  LogIn,
  UserPlus,
  ChevronDown,
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Logo from '../common/Logo';
import { NAV_LINKS } from '../../constants/companyInfo';

const SERVICES_NAV_ITEMS = [
  {
    name: 'Enterprise Application Development',
    desc: 'Scalable web applications, microservices & modern stack architecture',
    path: '/services#enterprise-application-development',
    icon: Code2,
  },
  {
    name: 'Cloud & Infrastructure Solutions',
    desc: 'Resilient cloud migrations, DevOps, CI/CD & container automation',
    path: '/services#cloud-infrastructure-devops',
    icon: Cloud,
  },
  {
    name: 'Data Engineering & Analytics',
    desc: 'ETL pipelines, relational data models & actionable business dashboards',
    path: '/services#data-engineering-analytics',
    icon: Database,
  },
  {
    name: 'Quality Engineering & Testing',
    desc: 'Automated test frameworks, API validation & rigorous security protocols',
    path: '/services#quality-engineering-assurance',
    icon: ShieldCheck,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Scroll detection for compact sticky state
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or hash navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setAuthDropdownOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAuthDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setAuthDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hover handlers for services dropdown
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHomePage
          ? 'bg-[#04152F]/95 backdrop-blur-xl shadow-[0_6px_30px_rgba(4,21,47,0.7)] border-b border-[#0B3D70]/60 py-3 sm:py-3.5'
          : 'bg-[#04152F]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(4,21,47,0.5)] border-b border-[#0B3D70]/40 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* 1. Official GTSInfo Transparent Logo — Uses image.png (light text on dark background) */}
          <div className="flex-shrink-0 flex items-center">
            <Logo variant="light" size={scrolled ? 'sm' : 'md'} />
          </div>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isServices = link.name === 'Services';

              if (isServices) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    ref={servicesDropdownRef}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={({ isActive }) =>
                        `relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 group ${
                          isActive
                            ? 'text-white font-bold'
                            : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">{link.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setServicesDropdownOpen(!servicesDropdownOpen);
                            }}
                            className="p-0.5 focus:outline-none"
                            aria-label="Toggle Services Menu"
                            aria-expanded={servicesDropdownOpen}
                          >
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-white/70 transition-transform duration-250 ${
                                servicesDropdownOpen ? 'rotate-180 text-[#008CFF]' : 'group-hover:translate-y-0.5'
                              }`}
                            />
                          </button>
                          {isActive ? (
                            <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#008CFF] rounded-full shadow-[0_0_12px_#008CFF]" />
                          ) : (
                            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#008CFF] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-center" />
                          )}
                        </>
                      )}
                    </NavLink>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] rounded-2xl bg-[#071B36]/95 backdrop-blur-2xl border border-[#008CFF]/40 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(0,140,255,0.25)] p-3 text-white z-50 animate-fade-in"
                        role="menu"
                        aria-label="Services Submenu"
                      >
                        <div className="px-3 py-2 border-b border-[#0B3D70]/80 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#008CFF] font-mono flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#008CFF]" />
                            Engineering Capabilities
                          </span>
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-[11px] text-slate-300 hover:text-white transition-colors"
                          >
                            Overview →
                          </Link>
                        </div>

                        <div className="p-1 space-y-1 mt-1">
                          {SERVICES_NAV_ITEMS.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                role="menuitem"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group hover:bg-[#0B3D70]/60 hover:border-[#008CFF]/40 border border-transparent"
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#006BFF]/20 border border-[#008CFF]/30 flex items-center justify-center text-[#008CFF] group-hover:scale-110 group-hover:bg-[#006BFF]/30 transition-all flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,140,255,0.3)]">
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold text-white group-hover:text-[#DCEEFF] transition-colors leading-snug">
                                    {item.name}
                                  </p>
                                  <p className="text-[11px] text-slate-300/80 group-hover:text-slate-200 transition-colors leading-tight line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2 pt-2 border-t border-[#0B3D70]/80 px-2 py-1 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">Enterprise-grade architecture</span>
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="font-semibold text-[#008CFF] hover:text-white flex items-center gap-1 transition-colors"
                          >
                            Explore all offerings <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 group ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 transition-colors duration-200">{link.name}</span>
                      {isActive ? (
                        <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#008CFF] rounded-full shadow-[0_0_12px_#008CFF]" />
                      ) : (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#008CFF] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-center" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* 3. Right Action Buttons (Pill-shaped Portal button + Electric Blue CTA) */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* Applicant Access Dropdown Pill */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-200 cursor-pointer ${
                  authDropdownOpen
                    ? 'border-[#008CFF] text-white bg-white/10 shadow-[0_0_14px_rgba(0,140,255,0.3)]'
                    : 'border-white/25 text-white/90 hover:border-white/50 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-md'
                }`}
                aria-expanded={authDropdownOpen}
                aria-haspopup="true"
              >
                <User className="w-3.5 h-3.5 text-white" />
                <span>Portal Access</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    authDropdownOpen ? 'rotate-180 text-white' : 'text-white/60'
                  }`}
                />
              </button>

              {authDropdownOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 bg-[#071B36] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] border border-[#0B3D70] py-2 text-white z-50 animate-fade-in backdrop-blur-xl"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-[#0B3D70] bg-[#04152F]/50">
                    <p className="text-[11px] font-bold text-[#DCEEFF] uppercase tracking-wider">Candidate Portal</p>
                    <p className="text-[11px] text-slate-400">Manage applications &amp; status</p>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    <Link
                      to="/login"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-[#0B3D70]/60 hover:text-white transition-colors text-slate-200"
                    >
                      <LogIn className="w-4 h-4 text-[#008CFF] flex-shrink-0" />
                      <span>Applicant Sign In</span>
                    </Link>
                    <Link
                      to="/register"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl hover:bg-[#0B3D70]/60 hover:text-white transition-colors text-slate-200"
                    >
                      <UserPlus className="w-4 h-4 text-[#008CFF] flex-shrink-0" />
                      <span>Create Candidate Account</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Main Primary CTA: Electric Blue Pill Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_22px_rgba(0,107,255,0.45)] hover:shadow-[0_6px_30px_rgba(0,107,255,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #006BFF 0%, #0878E8 100%)',
              }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => {
                const next = !mobileMenuOpen;
                setMobileMenuOpen(next);
                if (!next) {
                  setMobileServicesOpen(false);
                }
              }}
              className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#008CFF]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071B36]/98 backdrop-blur-2xl border-b border-[#0B3D70] shadow-2xl animate-slide-up text-white max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-3 pb-6 space-y-1 max-w-lg mx-auto">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.path} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                        location.pathname.startsWith('/services') || mobileServicesOpen
                          ? 'bg-[#0B3D70] text-white font-bold'
                          : 'text-white/80 hover:bg-white/5 hover:text-white font-semibold'
                      }`}
                      aria-expanded={mobileServicesOpen}
                    >
                      <span className="text-sm">Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180 text-[#008CFF]' : 'text-white/60'
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#008CFF]/50 ml-4 animate-fade-in">
                        <Link
                          to="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#008CFF] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <span>All Services Overview</span>
                          <span>→</span>
                        </Link>
                        {SERVICES_NAV_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#0B3D70] text-white font-bold'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#008CFF] font-mono">→</span>
                </NavLink>
              );
            })}

            <div className="pt-4 border-t border-white/10 my-3 space-y-2.5">
              <p className="px-4 text-[11px] font-bold text-[#DCEEFF] uppercase tracking-wider">Candidate Portal Access</p>
              <div className="grid grid-cols-2 gap-2.5 px-1">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold border border-white/20 rounded-xl hover:border-[#008CFF] text-white bg-white/5 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#008CFF]" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold border border-white/20 rounded-xl hover:border-[#008CFF] text-white bg-white/5 transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5 text-[#008CFF]" />
                  <span>Register</span>
                </Link>
              </div>
            </div>

            <div className="pt-3 px-1">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
                style={{
                  background: 'linear-gradient(90deg, #006BFF 0%, #0878E8 100%)',
                }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}