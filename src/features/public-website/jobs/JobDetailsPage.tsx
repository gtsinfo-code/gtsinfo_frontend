'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  LogIn, 
  ExternalLink 
} from 'lucide-react';
import { JOBS_DATA } from '../../../data/jobsData';
import { JOB_APPLICATION_FORM_URL } from '../../../config/integrations';
import PageSEO from '../../../components/common/PageSEO';

export interface JobDetailsPageProps {
  id?: string;
}

export default function JobDetailsPage({ id: propId }: JobDetailsPageProps) {
  const routerParams = useParams();
  const id = propId || (routerParams?.id as string);

  const job = JOBS_DATA.find((j) => j.id === id) || JOBS_DATA[0];
  const isOpen = job.status === 'open';

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.summary,
    "datePosted": "2026-11-01",
    "validThrough": job.deadline,
    "employmentType": job.employmentType === 'Full-time' ? 'FULL_TIME' : 'INTERN',
    "hiringOrganization": {
      "@type": "Organization",
      "name": "GTSInfo",
      "sameAs": "https://gtsinfo.in/",
      "logo": "https://gtsinfo.in/favlogo-share.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, 7, 1st Main Road, Mahalakshmipuram Layout",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560086",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <PageSEO
        title={`${job.title} | Career Openings`}
        description={`${job.title} in Bengaluru at GTSInfo. ${job.summary}`}
        canonicalPath={`/jobs/${job.id}`}
        schema={jobPostingSchema}
      />
      
      {/* 1. Job Header Banner */}
      <section className="bg-navy-950 text-white pt-32 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            href="/jobs"
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
                <a
                  href={JOB_APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-primary hover:bg-electric text-white shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Apply for this Role</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
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
                  Candidate Qualifications &amp; Experience
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
                  <p className="text-xs text-brandText-secondary mt-1">Submit your details via the official job application form.</p>
                </div>
                {isOpen ? (
                  <a
                    href={JOB_APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white shadow-sm transition-all flex-shrink-0 inline-flex items-center justify-center gap-2"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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
                      <a
                        href={JOB_APPLICATION_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white shadow-sm transition-all text-center inline-flex items-center justify-center gap-2"
                      >
                        <span>Apply for this Role</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
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
                    href="/login"
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

    </div>
  );
}
