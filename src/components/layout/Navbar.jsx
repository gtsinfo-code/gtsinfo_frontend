import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, User, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';
import { NAV_LINKS } from '../../constants/companyInfo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll detection for compact sticky state
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
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
  }, [location.pathname, location.hash]);

  // Click outside listener for auth dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAuthDropdownOpen(false);
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
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(7,27,54,0.06)] border-b border-softblue-200 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-softblue-200/80 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* 1. Official GTSInfo Logo - Naturally integrated on white surface */}
          <div className="flex-shrink-0 flex items-center">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </div>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link-refined relative px-4 py-2 text-sm font-semibold transition-all duration-200 group cursor-pointer ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-brandText-primary hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 transition-colors duration-200">{link.name}</span>
                    {isActive ? (
                      <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-primary to-cyan-accent rounded-full shadow-[0_0_8px_rgba(8,120,232,0.6)]" />
                    ) : (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* 3. Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3.5">
            {/* Applicant Access Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-lg border transition-all duration-200 cursor-pointer ${authDropdownOpen
                    ? 'border-primary text-primary bg-softblue-50 shadow-xs'
                    : 'border-softblue-200 text-brandText-primary hover:border-primary hover:text-primary hover:bg-softblue-50/50 bg-white'
                  }`}
                aria-expanded={authDropdownOpen}
                aria-haspopup="true"
              >
                <User className="w-3.5 h-3.5 text-primary" />
                <span>Portal Access</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${authDropdownOpen ? 'rotate-180 text-primary' : 'text-slate-400'
                    }`}
                />
              </button>

              {authDropdownOpen && (
                <div
                  className="absolute right-0 mt-2.5 w-52 bg-white rounded-xl shadow-[0_12px_36px_rgba(7,27,54,0.12)] border border-softblue-200 py-2 text-brandText-primary z-50 animate-fade-in"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-softblue-100 bg-softblue-50/50">
                    <p className="text-[11px] font-bold text-brandText-secondary uppercase tracking-wider">Candidate Portal</p>
                    <p className="text-[11px] text-slate-500">Manage applications & status</p>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    <Link
                      to="/login"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-lg hover:bg-softblue-50 hover:text-primary transition-colors text-brandText-primary"
                    >
                      <LogIn className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Applicant Sign In</span>
                    </Link>
                    <Link
                      to="/register"
                      role="menuitem"
                      className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold rounded-lg hover:bg-softblue-50 hover:text-primary transition-colors text-brandText-primary"
                    >
                      <UserPlus className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                      <span>Create Candidate Account</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Main Primary CTA: Get in Touch with Shimmer Effect */}
            <Link
              to="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-electric text-white shadow-[0_4px_16px_rgba(8,120,232,0.35)] hover:shadow-[0_6px_22px_rgba(8,120,232,0.55)] cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-brandText-primary hover:bg-softblue-100 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-softblue-200 shadow-2xl animate-slide-up">
          <div className="px-5 pt-3 pb-6 space-y-1 max-w-lg mx-auto">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                    ? 'bg-softblue-100 text-primary font-bold'
                    : 'text-brandText-primary hover:bg-softblue-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-primary font-mono opacity-60">→</span>
              </NavLink>
            ))}

            <div className="pt-4 border-t border-softblue-200 my-3 space-y-2.5">
              <p className="px-4 text-[11px] font-bold text-brandText-secondary uppercase tracking-wider">Candidate Portal Access</p>
              <div className="grid grid-cols-2 gap-2.5 px-1">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold border border-softblue-200 rounded-xl hover:border-primary hover:text-primary bg-softblue-50/50 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5 text-primary" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold border border-softblue-200 rounded-xl hover:border-primary hover:text-primary bg-softblue-50/50 transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5 text-cyan-accent" />
                  <span>Register</span>
                </Link>
              </div>
            </div>

            <div className="pt-3 px-1">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all text-center"
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
