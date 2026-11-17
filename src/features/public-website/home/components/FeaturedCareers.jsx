import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  ChevronRight,
  Info
} from 'lucide-react';
import { JOBS_DATA } from '../../../../data/jobsData';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function FeaturedCareers() {
  const featuredJobs = JOBS_DATA.filter(job => job.status === 'open').slice(0, 3);

  return (
    <section id="featured-careers" className="py-24 lg:py-32 bg-softblue-50/70 text-brandText-primary relative border-t border-brandBorder overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-8 space-y-4">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career Opportunities</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brandText-primary leading-tight">
                Engineering Careers.{' '}
                <span className="text-primary block mt-1">Grounded in Excellence.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-brandText-secondary leading-relaxed font-normal max-w-2xl">
                Join our Bengaluru engineering team. We collaborate on enterprise software systems, automated cloud architectures, and scalable full-stack applications.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <ScrollReveal variant="fade-left" delay={250}>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-primary hover:bg-primary-hover text-white shadow-sm transition-all duration-300 hover:shadow-glow group"
              >
                <span>Explore Careers & Culture</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Featured Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredJobs.map((job, idx) => (
            <ScrollReveal
              key={job.id}
              variant="fade-up"
              delay={idx * 120}
            >
              <div className="group h-full rounded-2xl p-7 bg-white border border-brandBorder transition-all duration-300 hover:border-primary hover:shadow-card hover:translate-y-[-4px] flex flex-col justify-between">
                <div>
                  {/* Top Department & Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-softblue-100 text-primary border border-softblue-200">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">
                      {job.employmentType}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-brandText-primary mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-brandText-secondary leading-relaxed mb-6 line-clamp-3">
                    {job.summary}
                  </p>

                  {/* Metadata Chips */}
                  <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{job.location} ({job.workMode})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>Experience: {job.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-softblue-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    ID: {job.id.slice(-6)}
                  </span>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-electric transition-colors"
                  >
                    <span>View Role</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
