'use client';

import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Info,
  Navigation,
  Building,
  ShieldCheck,
  ZoomIn,
  X,
  Sparkles,
  PhoneCall,
  RotateCcw
} from 'lucide-react';
import {
  COMPANY_INFO
} from '../../../constants/companyInfo';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../data/companyGalleryData';
import { sendContactEmail, validateContactForm, CONTACT_RECIPIENT_EMAIL, ContactValidationErrors } from './services/contactService';
import PageSEO from '../../../components/common/PageSEO';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function ContactPage() {
  const entranceImg = COMPANY_AUTHENTIC_IMAGES.contactEntrance;
  const entranceSrc = entranceImg.src?.src || entranceImg.src;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Universal cross-platform Google Maps verified link (opens exact Mahalakshmipuram location on mobile & laptop)
  const exactMapsUrl = COMPANY_INFO.mapsUrl;
  const whitefieldMapsUrl = COMPANY_INFO.secondaryAddress?.mapsUrl || exactMapsUrl;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Failed to send contact enquiry:', err);
      setIsSubmitting(false);
      setErrors({
        form: `Unable to send message right now. Please verify your connection or email us directly at ${CONTACT_RECIPIENT_EMAIL}.`
      });
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="w-full overflow-hidden">
      <PageSEO
        title="Contact Us & Bengaluru Office Directions"
        description="Connect with GTSInfo Headquarters in Mahalakshmipuram Layout, Bengaluru. Contact us for software engineering solutions, enterprise partnerships, or hiring."
        canonicalPath="/contact"
      />

      {/* 1. Page Hero */}
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
                <Mail className="w-3.5 h-3.5" />
                <span>CONNECT WITH GTSINFO</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Get in Touch.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent block sm:inline">
                  Let&apos;s Build Together.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Reach out to our Bengaluru headquarters for enterprise technology consulting, software architecture reviews, or talent recruitment.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid: Verified Details + Functional Direct Message Form */}
      <section className="py-20 lg:py-24 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column: Official Corporate Premises Information */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal variant="fade-up">
                <div className="p-8 sm:p-9 rounded-3xl bg-softblue-50/80 border border-brandBorder shadow-subtle space-y-7">

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded-lg inline-block mb-3">
                      Verified Information
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary">
                      Official Corporate Office
                    </h2>
                    <p className="text-xs sm:text-sm text-brandText-secondary mt-1">
                      Registered premises in Bengaluru, India. Strictly verified per company records.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Facility Address 1: Corporate Headquarters */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brandBorder/80">
                      <div className="w-10 h-10 rounded-xl bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-softblue-200">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-brandText-primary mb-0.5">
                            Corporate Headquarters
                          </h3>
                          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-softblue-50 text-primary border border-softblue-200">
                            Registered Office
                          </span>
                        </div>
                        <address className="not-italic text-xs text-brandText-secondary leading-relaxed font-medium mt-1">
                          {COMPANY_INFO.address.line1},<br />
                          {COMPANY_INFO.address.line2},<br />
                          {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode},<br />
                          {COMPANY_INFO.address.country}
                        </address>
                        <a
                          href={exactMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-electric mt-2"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>View on Google Maps</span>
                        </a>
                      </div>
                    </div>

                    {/* Facility Address 2: Whitefield Campus */}
                    {COMPANY_INFO.secondaryAddress && (
                      <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brandBorder/80">
                        <div className="w-10 h-10 rounded-xl bg-cyan-accent/15 text-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-accent/30">
                          <Building className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-brandText-primary mb-0.5">
                              Whitefield Technology Center
                            </h3>
                            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Development Hub
                            </span>
                          </div>
                          <address className="not-italic text-xs text-brandText-secondary leading-relaxed font-medium mt-1">
                            {COMPANY_INFO.secondaryAddress.line1},<br />
                            {COMPANY_INFO.secondaryAddress.line2},<br />
                            {COMPANY_INFO.secondaryAddress.city}, {COMPANY_INFO.secondaryAddress.state} - {COMPANY_INFO.secondaryAddress.pincode},<br />
                            {COMPANY_INFO.secondaryAddress.country}
                          </address>
                          <a
                            href={whitefieldMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:text-electric mt-2"
                          >
                            <Navigation className="w-3 h-3" />
                            <span>View on Google Maps</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Official Email */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brandBorder/80">
                      <div className="w-10 h-10 rounded-xl bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-softblue-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brandText-primary mb-0.5">
                          Official Communications Email
                        </h3>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-xs font-bold text-primary hover:text-electric transition-colors break-all"
                        >
                          {COMPANY_INFO.email}
                        </a>
                        <p className="text-[11px] text-slate-500 mt-0.5">Primary intake for hiring, vendor, and client inquiries.</p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brandBorder/80">
                      <div className="w-10 h-10 rounded-xl bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-softblue-200">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brandText-primary mb-0.5">
                          Operating Hours
                        </h3>
                        <p className="text-xs text-brandText-secondary font-medium">
                          Monday – Friday: 9:30 AM – 6:30 PM IST
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Closed on Saturdays, Sundays, and public holidays.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Link */}
                  <div className="pt-2">
                    <a
                      href={exactMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-navy-900 hover:bg-navy-800 text-white shadow-sm transition-all duration-200 hover:shadow-glow"
                    >
                      <Navigation className="w-3.5 h-3.5 text-cyan-accent" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>

                </div>
              </ScrollReveal>

              {/* Data Confidentiality Notice */}
              <ScrollReveal variant="fade-up" delay={150}>
                <div className="p-5 rounded-2xl bg-white border border-brandBorder flex items-start gap-3 shadow-subtle">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-brandText-primary">Data Protection Notice</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      All messages dispatched through this form are treated with corporate confidentiality. Your contact data will not be shared or marketed to third parties.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Direct Background Message Transmission Form */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" delay={100}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brandBorder shadow-card">

                  <div className="mb-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-softblue-100 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>Direct Dispatch</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary">
                      Send a Direct Message
                    </h2>
                    <p className="text-xs sm:text-sm text-brandText-secondary mt-1">
                      Submissions are routed directly to <strong className="text-brandText-primary">{CONTACT_RECIPIENT_EMAIL}</strong> in the background.
                    </p>
                  </div>

                  <div>
                    {isSuccess ? (
                      <div className="py-12 px-6 text-center space-y-4 bg-emerald-50/70 border border-emerald-200 rounded-3xl animate-fade-in">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-9 h-9" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-emerald-950">
                          Message Dispatched Successfully!
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                          Thank you for contacting GTSInfo. Your enquiry has been delivered directly to our corporate inbox at <strong className="underline">{CONTACT_RECIPIENT_EMAIL}</strong>. Our team will review and reply promptly.
                        </p>
                        <div className="pt-4">
                          <button
                            type="button"
                            onClick={handleResetForm}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-all"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Send Another Message</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${errors.name ? 'border-red-400' : 'border-brandBorder'
                              }`}
                          />
                          {errors.name && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Corporate / Personal Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${errors.email ? 'border-red-400' : 'border-brandBorder'
                              }`}
                          />
                          {errors.email && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Number (Optional) */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary">
                              Phone Number
                            </label>
                            <span className="text-[11px] text-slate-400 font-medium">Optional</span>
                          </div>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +91 98765 43210"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${errors.phone ? 'border-red-400' : 'border-brandBorder'
                              }`}
                          />
                          {errors.phone && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Enquiry Subject *
                          </label>
                          <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. Enterprise Software Engineering Inquiry"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${errors.subject ? 'border-red-400' : 'border-brandBorder'
                              }`}
                          />
                          {errors.subject && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.subject}</span>
                            </p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Detailed Message *
                          </label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Please describe your requirements or inquiry in detail (minimum 10 characters)..."
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${errors.message ? 'border-red-400' : 'border-brandBorder'
                              }`}
                          />
                          {errors.message && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.message}</span>
                            </p>
                          )}
                        </div>

                        {errors.form && (
                          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{errors.form}</span>
                          </div>
                        )}

                        {/* Submit CTA */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-shimmer w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-electric text-white shadow-[0_4px_22px_rgba(8,120,232,0.45)] hover:shadow-[0_6px_28px_rgba(8,120,232,0.6)] disabled:opacity-50 cursor-pointer transition-all duration-200 hover:scale-[1.01]"
                          >
                            {isSubmitting ? (
                              <span className="inline-flex items-center gap-2">
                                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin inline-block" />
                                <span>Sending Message...</span>
                              </span>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>

                      </form>
                    )}
                  </div>

                  <div className="pt-4 mt-6 border-t border-brandBorder/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Response SLA: Within 1-2 business days</span>
                    <span>Confidential Transmission</span>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Dedicated Facility Entrance Showcase: 100% Complete Image, Zero Cropped Signage */}
      <section className="py-20 lg:py-24 bg-softblue-50/70 border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Narrative: Corporate Facility Overview */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal variant="fade-up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>AUTHENTIC PHYSICAL PREMISES</span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={100}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brandText-primary leading-tight">
                  Mahalakshmipuram Corporate Entrance &amp; Reception.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="space-y-4 text-sm sm:text-base text-brandText-secondary leading-relaxed">
                  <p>
                    GTSInfo operates from dedicated commercial premises located within the Mahalakshmipuram Layout corporate corridor in Bengaluru.
                  </p>
                  <p>
                    Our facility houses modern developer workstations, technical collaboration rooms, high-speed fiber infrastructure, and quiet architectural focus pods.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={300}>
                <div className="p-5 rounded-2xl bg-white border border-brandBorder shadow-subtle space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-brandText-primary">
                    <Info className="w-4 h-4 text-primary" />
                    <span>In-Person Visits by Appointment</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    To maintain strict candidate confidentiality and operational focus, in-person discussions and interviews are coordinated by appointment via our communications desk.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Dedicated Portrait Showcase Card: Zero Cropping of DeskHub Signage or Glass Entry */}
            <div className="lg:col-span-6 flex justify-center">
              <ScrollReveal variant="fade-left" delay={200} className="w-full max-w-md">
                <div
                  className="group relative rounded-3xl overflow-hidden bg-navy-950 border border-brandBorder shadow-card p-2.5 transition-all duration-300 hover:shadow-card-hover hover:border-primary/50 cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
                  aria-label="Click to view full uncropped entrance signage"
                >
                  {/* Portrait Container displaying full vertical image including top DeskHub signage and bottom door */}
                  <div className="relative aspect-[9/16] max-h-[620px] w-full rounded-2xl overflow-hidden bg-navy-950 flex items-center justify-center">
                    <img
                      src={entranceSrc}
                      alt={entranceImg.alt}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-white text-center backdrop-blur-[2px]">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                          <ZoomIn className="w-3.5 h-3.5 text-cyan-accent" />
                          <span>Click to View Full Resolution</span>
                        </span>
                        <p className="text-xs font-semibold text-slate-200">GTSInfo Corporate Entrance &amp; Signage</p>
                      </div>
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-4 bg-navy-900 rounded-b-2xl border-t border-white/10 mt-2 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">GTSInfo Facility Entrance</p>
                      <p className="text-[11px] text-slate-400">DeskHub Facility • 2nd Floor, Mahalakshmipuram</p>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-primary/80 px-2.5 py-1 rounded text-white font-semibold">
                      Authentic
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Full-Width Aligned Bengaluru Location & Interactive Google Maps Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal variant="fade-up">
            <div className="max-w-3xl mb-10 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded-lg inline-block mb-3">
                Location &amp; Accessibility
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary">
                Visit Our Bengaluru Headquarters
              </h2>
              <p className="text-xs sm:text-sm text-brandText-secondary mt-1">
                2nd Floor, 7, 1st Main Road, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086, India.
              </p>
            </div>
          </ScrollReveal>

          {/* Large Aligned Map Card */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="rounded-3xl overflow-hidden border border-brandBorder shadow-card bg-white">
              <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                <iframe
                  title="GTSInfo Headquarters Location Map"
                  src="https://maps.google.com/maps?q=13.0079767,77.5426662&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-6 bg-white border-t border-brandBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    <p className="text-sm font-bold text-brandText-primary">GTSInfo Technology Facility</p>
                  </div>
                  <p className="text-xs text-brandText-secondary">Mahalakshmi Layout, Bengaluru 560086 • Open Mon–Fri, 9:30 AM – 6:30 PM IST</p>
                </div>

                <a
                  href={exactMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-electric text-white shadow-sm flex-shrink-0 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Lightbox Modal: 100% Uncompressed Complete View of Entrance Signage */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Facility Entrance Image Modal"
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-cyan-accent" />
                <span className="text-sm font-bold text-white">{entranceImg.title}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• DeskHub 2nd Floor</span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-grow bg-navy-950 flex items-center justify-center p-3 overflow-hidden min-h-[50vh]">
              <img
                src={entranceSrc}
                alt={entranceImg.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="px-6 py-4 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-shrink-0">
              <p className="text-xs text-slate-300 leading-relaxed">
                {entranceImg.caption}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent flex-shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Premises • Mahalakshmipuram</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
