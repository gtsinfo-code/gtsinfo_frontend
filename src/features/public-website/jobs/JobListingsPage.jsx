import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Info,
  ChevronRight,
  Filter,
  ExternalLink
} from 'lucide-react';
import { JOBS_DATA } from '../../../data/jobsData';
import { JOB_APPLICATION_FORM_URL } from '../../../config/integrations';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [modeFilter, setModeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('open');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const departments = ['All', ...new Set(JOBS_DATA.map(j => j.department))];
  const employmentTypes = ['All', 'Full-time', 'Internship'];
  const workModes = ['All', 'Hybrid', 'On-site', 'Remote'];

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      if (statusFilter === 'open' && job.status !== 'open') return false;
      if (statusFilter === 'closed' && job.status !== 'closed') return false;
      if (departmentFilter !== 'All' && job.department !== departmentFilter) return false;
      if (typeFilter !== 'All' && job.employmentType !== typeFilter) return false;
      if (modeFilter !== 'All' && job.workMode !== modeFilter) return false;

      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesSummary = job.summary.toLowerCase().includes(query);
        const matchesSkills = job.technicalSkills.some(s => s.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSummary && !matchesSkills) return false;
      }

      return true;
    });
  }, [searchTerm, departmentFilter, typeFilter, modeFilter, statusFilter]);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage) || 1;
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => {
    setSearchTerm('');
    setDepartmentFilter('All');
    setTypeFilter('All');
    setModeFilter('All');
    setStatusFilter('open');
    setCurrentPage(1);
  };

  return (
    <div className="w-full overflow-hidden">

      {/* 1. Page Header */}
      <section className="bg-navy-950 text-white pt-32 pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden border-b border-navy-800">
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
                <Briefcase className="w-3.5 h-3.5" />
                <span>JOB DISCOVERY PORTAL</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Explore Available Vacancies.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent block sm:inline">
                  Find Your Next Role.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Filter open engineering, architecture, and technology roles. Apply directly or review role requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="py-16 lg:py-20 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Panel */}
          <ScrollReveal variant="fade-up">
            <div className="bg-softblue-50/80 p-6 sm:p-8 rounded-3xl border border-brandBorder shadow-subtle mb-12">
              {/* Search Keyword Input */}
              <div className="relative mb-6">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by role title or skill (e.g. React, Node, Cloud, Quality, Intern)..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-brandBorder rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-xs"
                />
              </div>

              {/* Filter Select Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                    Department
                  </label>
                  <select
                    value={departmentFilter}
                    onChange={(e) => {
                      setDepartmentFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-brandBorder rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  >
                    {departments.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                    Employment Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => {
                      setTypeFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-brandBorder rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  >
                    {employmentTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                    Work Mode
                  </label>
                  <select
                    value={modeFilter}
                    onChange={(e) => {
                      setModeFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-brandBorder rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  >
                    {workModes.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                    Listing Status
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-brandBorder rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary text-brandText-primary"
                  >
                    <option value="all">All Vacancies</option>
                    <option value="open">Open (Accepting Applications)</option>
                    <option value="closed">Closed (Expired)</option>
                  </select>
                </div>
              </div>

              {/* Filter Reset Button */}
              <div className="mt-5 pt-4 border-t border-brandBorder/80 flex items-center justify-between">
                <span className="text-xs text-brandText-secondary font-medium">
                  Showing <strong>{filteredJobs.length}</strong> matching vacancies
                </span>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-electric transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Job Cards Grid */}
          {paginatedJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {paginatedJobs.map((job, idx) => {
                const isOpen = job.status === 'open';

                return (
                  <ScrollReveal key={job.id} variant="fade-up" delay={idx * 80}>
                    <div className="group h-full rounded-2xl p-7 bg-white border border-brandBorder transition-all duration-300 hover:border-primary hover:shadow-card hover:translate-y-[-4px] flex flex-col justify-between">
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold px-2.5 py-1 rounded bg-softblue-100 text-primary border border-softblue-200">
                            {job.department}
                          </span>

                          {isOpen ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle className="w-3 h-3" />
                              <span>Active</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                              <XCircle className="w-3 h-3" />
                              <span>Closed</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-brandText-primary mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-xs text-brandText-secondary mb-5 line-clamp-3 leading-relaxed">
                          {job.summary}
                        </p>

                        {/* Key Info */}
                        <div className="space-y-2 mb-5 text-xs text-slate-600 font-medium">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{job.location} ({job.workMode})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>Experience: {job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>Deadline: {job.deadline}</span>
                          </div>
                        </div>

                        {/* Required Technical Skills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {job.technicalSkills.slice(0, 3).map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-softblue-50 text-slate-600 border border-softblue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-brandBorder flex items-center justify-between gap-2">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-primary transition-colors"
                        >
                          <span>View Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={JOB_APPLICATION_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white transition-all shadow-xs"
                        >
                          <span>Apply Now</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            /* No Results Empty State */
            <div className="text-center py-16 px-4 bg-softblue-50 rounded-3xl border border-brandBorder max-w-xl mx-auto">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brandText-primary">No Matching Vacancies Found</h3>
              <p className="text-xs text-brandText-secondary mt-1 max-w-sm mx-auto">
                No vacancies matched your current search filters. You can clear filters or submit a general application directly.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-brandBorder text-brandText-primary hover:bg-softblue-100 shadow-xs transition-all"
                >
                  Clear All Filters
                </button>
                <a
                  href={JOB_APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primary-hover shadow-sm transition-all inline-flex items-center gap-1.5"
                >
                  <span>Apply with Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* 4. Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              {Array.from({ length: totalPages }).map((_, pIdx) => {
                const pageNum = pIdx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${currentPage === pageNum
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white border border-brandBorder text-brandText-primary hover:bg-softblue-50'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
