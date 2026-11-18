import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Info,
  ExternalLink,
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
import { sendContactEmail, validateContactForm, CONTACT_RECIPIENT_EMAIL } from '../../../services/contactService';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function ContactPage() {
  const entranceImg = COMPANY_AUTHENTIC_IMAGES.contactEntrance;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Universal cross-platform Google Maps verified link (opens exact Mahalakshmipuram location on mobile & laptop)
  const exactMapsUrl = COMPANY_INFO.mapsUrl;

  const handleSubmit = async (e) => {
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
                <span>COMMUNICATION &amp; ENQUIRIES</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Connect with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent">
                  GTSInfo.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Have an enquiry regarding our software services, technology capabilities, or employment opportunities? Connect directly with our Bengaluru team.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Main 2-Column Contact Section: Perfectly Aligned Heights */}
      <section className="py-20 lg:py-24 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Column: Official Headquarters Details Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <ScrollReveal variant="fade-right" className="h-full">
                <div className="h-full bg-softblue-50/70 p-8 sm:p-9 rounded-3xl border border-brandBorder shadow-card flex flex-col justify-between space-y-6">
                  
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded-lg inline-block mb-3">
                      Corporate Office
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary mb-3">
                      GTSInfo Headquarters
                    </h2>
                    <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                      We welcome client technology enquiries, candidate queries, and strategic discussions. All submissions are reviewed promptly by our engineering and HR teams.
                    </p>
                  </div>

                  {/* Contact Channels */}
                  <div className="space-y-4 pt-2">
                    {/* Address */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brandBorder/80">
                      <div className="w-10 h-10 rounded-xl bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-softblue-200">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brandText-primary mb-0.5">
                          Registered Corporate Address
                        </h3>
                        <address className="not-italic text-xs text-brandText-secondary leading-relaxed font-medium">
                          {COMPANY_INFO.address.line1},<br />
                          {COMPANY_INFO.address.line2},<br />
                          {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode},<br />
                          {COMPANY_INFO.address.country}
                        </address>
                      </div>
                    </div>

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
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Premium Enquiry Form (Aligned Top to Bottom) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <ScrollReveal variant="fade-left" className="h-full">
                <div className="h-full bg-white p-8 sm:p-10 rounded-3xl border border-brandBorder shadow-card flex flex-col justify-between">
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-extrabold text-brandText-primary">
                        Send an Enquiry
                      </h3>
                      <p className="text-xs text-brandText-secondary mt-1">
                        Please provide your contact information and details regarding your message.
                      </p>
                    </div>

                    {/* Direct Success / Submission State */}
                    {isSuccess ? (
                      <div className="p-7 sm:p-8 bg-emerald-50/70 border border-emerald-200 rounded-3xl text-center space-y-4 animate-fade-in my-4">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                        <p className="text-sm font-medium text-slate-700 leading-relaxed max-w-md mx-auto">
                          Thank you for reaching out to GTSInfo. Our team has received your enquiry and will contact you shortly.
                        </p>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={handleResetForm}
                            className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-navy-900 hover:bg-navy-800 text-white transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Send Another Message</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                              errors.name ? 'border-red-400' : 'border-brandBorder'
                            }`}
                          />
                          {errors.name && (
                            <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                            Your Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                              errors.email ? 'border-red-400' : 'border-brandBorder'
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
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                              errors.phone ? 'border-red-400' : 'border-brandBorder'
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
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                              errors.subject ? 'border-red-400' : 'border-brandBorder'
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
                            className={`w-full px-4 py-3 bg-softblue-50/70 border rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                              errors.message ? 'border-red-400' : 'border-brandBorder'
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
                  Mahalakshmipuram Corporate Entrance & Reception.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <div className="space-y-4 text-sm sm:text-base text-brandText-secondary leading-relaxed">
                  <p>
                    GTSInfo operates its primary technology center on the 2nd Floor at 7, 1st Main Road, Mahalakshmipuram Layout, Bengaluru.
                  </p>
                  <p>
                    The official entrance signage and directory board confirm GTSInfo’s established on-site facility, featuring modern collaborative workspaces, agile engineering bays, and executive conference spaces.
                  </p>
                </div>
              </ScrollReveal>

              {/* Facility Highlights */}
              <ScrollReveal variant="fade-up" delay={300}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brandBorder/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brandText-primary font-medium">
                      Official building directory board featuring GTSInfo registration at 2nd Floor.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brandBorder/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brandText-primary font-medium">
                      Secure biometric and electronic keycard facility access control for employees and scheduled visitors.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-brandBorder/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brandText-primary font-medium">
                      Prime Mahalakshmipuram Layout connectivity in Bengaluru with close proximity to key transit hubs.
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Inspect Button */}
              <ScrollReveal variant="fade-up" delay={400}>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-electric text-white shadow-sm hover:shadow-glow transition-all cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>Inspect Full-Resolution Signage</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Authentic Uncropped Portrait Entrance Photo (05-office-entrance-signage.jpg) */}
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
                      src={entranceImg.src}
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
                        <p className="text-xs font-semibold text-slate-200">GTSInfo Corporate Entrance & Signage</p>
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
                Location & Accessibility
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
                  allowFullScreen=""
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
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-white/70" />
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
          aria-label="Entrance Signage Lightbox Modal"
        >
          <div
            className="relative max-w-3xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-slide-up flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-cyan-accent" />
                <span className="text-sm font-bold text-white">Official Facility Entrance Signage</span>
                <span className="text-xs text-slate-400 hidden sm:inline">• DeskHub Directory (2nd Floor)</span>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View: 100% Complete Image, Zero Cropping */}
            <div className="relative flex-grow bg-navy-950 flex items-center justify-center p-3 overflow-hidden min-h-[50vh]">
              <img
                src={entranceImg.src}
                alt={entranceImg.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-shrink-0">
              <p className="text-xs text-slate-300 leading-relaxed">
                {entranceImg.caption}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-accent flex-shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>Verified Facility Access • Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
