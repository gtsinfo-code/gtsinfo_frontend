import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Users, 
  Code, 
  Award,
  CheckCircle2,
  Info,
  ChevronRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { JOBS_DATA } from '../../../data/jobsData';
import { COMPANY_AUTHENTIC_IMAGES } from '../../../data/companyGalleryData';
import ContactCTA from '../home/components/ContactCTA';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const cultureImg = COMPANY_AUTHENTIC_IMAGES.careersCulture;

  const openJobs = JOBS_DATA.filter(job => job.status === 'open');

  const filteredJobs = openJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.technicalSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || job.employmentType === selectedType;
    return matchesSearch && matchesType;
  });

  const recruitmentSteps = [
    {
      step: "01",
      title: "Online Application",
      desc: "Explore current openings and submit your candidate profile with your contact details and resume."
    },
    {
      step: "02",
      title: "Technical Review",
      desc: "Our engineering leads evaluate qualifications, practical code samples, and architectural problem-solving."
    },
    {
      step: "03",
      title: "Architecture Discussions",
      desc: "Engage in structured system design discussions and pair-programming reviews at our Bengaluru facility or online."
    },
    {
      step: "04",
      title: "Formal Offer Issuance",
      desc: "Selected candidates receive a verified, tamper-proof corporate PDF offer letter accessible in the candidate portal."
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. Careers Hero */}
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
                <Briefcase className="w-3.5 h-3.5" />
                <span>CAREERS AT GTSINFO</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Build Your Career with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent block sm:inline">
                  Engineering Discipline.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                Join our software engineering and technology teams in Bengaluru. Work on high-performance full-stack applications, distributed databases, and automated cloud systems.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Workplace Culture (Licensed High-Res Visual - Not repeating company photos) */}
      <section className="py-24 bg-white text-brandText-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal variant="fade-up">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1.5 bg-softblue-100 rounded-lg inline-block">
                  Culture & Mentorship
                </span>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={100}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brandText-primary leading-tight">
                  An Environment Engineered for Technical Growth.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <p className="text-base text-brandText-secondary leading-relaxed">
                  At GTSInfo, we believe in giving developers and technology specialists the space, tools, and peer reviews needed to craft resilient software systems.
                </p>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-up" delay={300}>
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brandText-primary">Clean Architecture Focus</h4>
                      <p className="text-xs text-brandText-secondary mt-0.5">Maintainable code, modular components, and test-driven development.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-softblue-100 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brandText-primary">Collaborative Code Reviews</h4>
                      <p className="text-xs text-brandText-secondary mt-0.5">Constructive feedback, pair programming, and continuous technical mentoring.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Licensed Recruitment Visual */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="fade-left" delay={200}>
                <div className="relative rounded-2xl overflow-hidden border-2 border-brandBorder shadow-card bg-white group">
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={cultureImg.src}
                      alt={cultureImg.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 bg-white border-t border-brandBorder">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      {cultureImg.title}
                    </p>
                    <p className="text-xs text-brandText-secondary mt-0.5">
                      {cultureImg.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 3. Transparent Recruitment Journey */}
          <div className="pt-8 border-t border-brandBorder">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded">
                The Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary mt-3">
                Our Transparent Recruitment Process.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recruitmentSteps.map((step, idx) => (
                <ScrollReveal key={step.step} variant="fade-up" delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-softblue-50/70 border border-brandBorder h-full flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xl font-extrabold text-primary block mb-3">
                        {step.step}
                      </span>
                      <h3 className="text-base font-bold text-brandText-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-brandText-secondary leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Open Vacancies Section */}
      <section className="py-24 bg-softblue-50/70 text-brandText-primary border-t border-brandBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 bg-softblue-100 rounded">
                Open Positions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brandText-primary mt-3">
                Available Career Opportunities.
              </h2>
            </div>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white transition-all shadow-sm"
            >
              <span>View All Vacancies & Filters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openJobs.slice(0, 6).map((job, idx) => (
              <ScrollReveal key={job.id} variant="fade-up" delay={idx * 80}>
                <div className="p-6 bg-white rounded-2xl border border-brandBorder shadow-subtle hover:border-primary hover:shadow-card transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-softblue-100 text-primary">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {job.employmentType}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brandText-primary mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs text-brandText-secondary mb-4 line-clamp-2">
                      {job.summary}
                    </p>

                    <div className="text-xs text-slate-600 space-y-1 mb-4 font-medium">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{job.location} ({job.workMode})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Exp: {job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brandBorder flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Due: {job.deadline}
                    </span>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-xs font-bold text-primary hover:text-electric inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Contact CTA */}
      <ContactCTA />

    </div>
  );
}
