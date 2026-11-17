import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  AlertCircle,
  Info,
  LogIn,
  UserPlus,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  X,
  Send,
  Upload
} from 'lucide-react';
import { JOBS_DATA } from '../../../data/jobsData';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function JobDetailsPage() {
  const { id } = useParams();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    notes: ''
  });
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [applyErrors, setApplyErrors] = useState({});

  const job = JOBS_DATA.find((j) => j.id === id) || JOBS_DATA[0];
  const isOpen = job.status === 'open';

  const relatedJobs = JOBS_DATA.filter((j) => j.id !== job.id && j.status === 'open').slice(0, 3);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!applyForm.name.trim()) errs.name = 'Full name is required.';
    if (!applyForm.email.trim() || !applyForm.email.includes('@')) errs.email = 'Valid email is required.';
    if (!applyForm.phone.trim()) errs.phone = 'Phone number is required.';

    if (Object.keys(errs).length > 0) {
      setApplyErrors(errs);
      return;
    }

    setApplyErrors({});
    setApplySubmitted(true);
  };

  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. Job Header Banner */}
      <section className="bg-navy-950 text-white pt-32 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Openings</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-navy-900 text-cyan-accent border border-cyan-accent/25">
                  {job.department}
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-lg bg-white/10 text-slate-200">
                  {job.employmentType}
                </span>

                {isOpen ? (
                  <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Accepting Applications
                  </span>
                ) : (
                  <span className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Applications Closed
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-accent" />
                  <span>{job.location} ({job.workMode})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-accent" />
                  <span>Experience: {job.experience}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-accent" />
                  <span>Deadline: {job.deadline}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="flex-shrink-0">
              {isOpen ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowApplyModal(true);
                    setApplySubmitted(false);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-primary hover:bg-electric text-white shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Apply for this Role</span>
                </button>
              ) : (
                <button
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700"
                >
                  <Lock className="w-4 h-4" />
                  <span>Listing Closed</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Two-Column Editorial Layout */}
      <section className="py-20 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Column: Job Description & Responsibilities */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Role Summary */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-brandText-primary mb-4">
                  About the Role
                </h2>
                <p className="text-sm sm:text-base text-brandText-secondary leading-relaxed">
                  {job.summary}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brandText-primary mb-4">
                  Key Responsibilities
                </h3>
                <div className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brandText-primary mb-4">
                  Candidate Qualifications & Experience
                </h3>
                <div className="space-y-3">
                  {job.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                      <span>{qual}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Required */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-brandText-primary mb-4">
                  Required Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.technicalSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-softblue-50 text-brandText-primary border border-softblue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Apply CTA Card */}
              <div className="p-8 rounded-3xl bg-softblue-50/80 border border-brandBorder flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-brandText-primary">Ready to apply?</h4>
                  <p className="text-xs text-brandText-secondary mt-1">Submit your details to start your application process.</p>
                </div>
                {isOpen ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplyModal(true);
                      setApplySubmitted(false);
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white shadow-sm transition-all flex-shrink-0"
                  >
                    Apply Now
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-slate-400">Applications Closed</span>
                )}
              </div>

            </div>

            {/* Side Column: Job Summary & Metadata */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="sticky top-28 space-y-6">
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-brandBorder shadow-card space-y-5">
                  <h3 className="text-base font-bold text-brandText-primary pb-3 border-b border-brandBorder">
                    Job Overview
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Department</span>
                      <span className="font-semibold text-brandText-primary">{job.department}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Location</span>
                      <span className="font-semibold text-brandText-primary">{job.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Work Mode</span>
                      <span className="font-semibold text-brandText-primary">{job.workMode}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Employment Type</span>
                      <span className="font-semibold text-brandText-primary">{job.employmentType}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Experience</span>
                      <span className="font-semibold text-brandText-primary">{job.experience}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Compensation</span>
                      <span className="font-semibold text-brandText-primary">{job.salaryRange}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[11px] uppercase">Deadline</span>
                      <span className="font-semibold text-red-600 font-mono">{job.deadline}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brandBorder">
                    {isOpen ? (
                      <button
                        type="button"
                        onClick={() => {
                          setShowApplyModal(true);
                          setApplySubmitted(false);
                        }}
                        className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white shadow-sm transition-all text-center"
                      >
                        Apply for this Role
                      </button>
                    ) : (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center font-medium">
                        This position has expired.
                      </div>
                    )}
                  </div>
                </div>

                {/* Candidate Portal Nav */}
                <div className="p-5 rounded-2xl bg-softblue-50 border border-softblue-200 text-center text-xs space-y-2">
                  <p className="font-bold text-brandText-primary">Already applied?</p>
                  <p className="text-brandText-secondary text-[11px]">Sign in to your candidate portal account to track submission status.</p>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-1 font-bold text-primary hover:text-electric pt-1"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Candidate Sign In</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Demonstration Apply Modal */}
      {showApplyModal && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setShowApplyModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-brandBorder animate-slide-up p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-brandBorder mb-6">
              <div>
                <h3 className="text-lg font-bold text-brandText-primary">Apply for Position</h3>
                <p className="text-xs text-brandText-secondary line-clamp-1">{job.title}</p>
              </div>
              <button
                onClick={() => setShowApplyModal(false)}
                className="p-1 rounded-lg hover:bg-softblue-50 text-slate-400 hover:text-brandText-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applySubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-brandText-primary">Application Validated!</h4>
                <p className="text-xs text-brandText-secondary leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{applyForm.name}</strong>. In Phase 2, your application, resume, and credentials will be saved directly into PostgreSQL and routed to HR.
                </p>
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applyForm.name}
                    onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-softblue-50 border border-brandBorder rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  />
                  {applyErrors.name && <p className="text-[11px] text-red-500 mt-1">{applyErrors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applyForm.email}
                    onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-softblue-50 border border-brandBorder rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  />
                  {applyErrors.email && <p className="text-[11px] text-red-500 mt-1">{applyErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applyForm.phone}
                    onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 bg-softblue-50 border border-brandBorder rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  />
                  {applyErrors.phone && <p className="text-[11px] text-red-500 mt-1">{applyErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                    Resume / CV Document
                  </label>
                  <div className="border border-dashed border-brandBorder p-3 rounded-xl text-center bg-softblue-50/50">
                    <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <span className="text-[11px] text-slate-500">PDF, DOCX up to 5MB</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
