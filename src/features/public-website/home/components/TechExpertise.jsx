import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Network, 
  Code2, 
  Activity,
  ShieldCheck,
  Server,
  Zap,
  Lock,
  GitBranch,
  BarChart3,
  Sparkles
} from 'lucide-react';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function TechExpertise() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  // Exact 3-Tier Full-Stack Architecture as specified
  const architectureLayers = [
    {
      id: "presentation",
      tier: "Tier 1: Client Experience",
      name: "Presentation & Client Layer",
      icon: Code2,
      description: "Modern, reactive, and accessible user interfaces built with React.js, TypeScript, and responsive component systems.",
      standardsTitle: "Client Layer Standards & Practices",
      specs: [
        "Component-Driven UI with React 19 & Strict Types",
        "WCAG 2.1 AA Accessibility & Keyboard Navigation",
        "Zero Cumulative Layout Shift (CLS) Fluid Styling",
        "Sub-Second First Contentful Paint (FCP) Benchmarks",
        "Optimized Asset Bundling via Vite with Tree-Shaking"
      ],
      technologies: ["React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Vite", "WAI-ARIA"]
    },
    {
      id: "services",
      tier: "Tier 2: Business Logic",
      name: "API & Microservices Layer",
      icon: Network,
      description: "Scalable backend services, secure REST endpoints, and event-driven microservices designed for enterprise throughput.",
      standardsTitle: "Microservices & API Standards",
      specs: [
        "Stateless RESTful Contracts & Structured Endpoints",
        "Strict Input Validation, Sanitization & OWASP Mitigation",
        "Granular Role-Based Access Control (RBAC) & JWT Security",
        "Predictable Error Envelopes & Audit Logging Trails",
        "Rate Limiting & High-Concurrency Throughput Handling"
      ],
      technologies: ["Node.js", "Express.js", "REST Architecture", "JWT Auth", "Postman / OpenAPI", "JSON Schema"]
    },
    {
      id: "data",
      tier: "Tier 3: Persistence & DevOps",
      name: "Data & Cloud Infrastructure",
      icon: Database,
      description: "Resilient relational databases, automated container deployments, and continuous integration pipelines.",
      standardsTitle: "Persistence & Infrastructure Standards",
      specs: [
        "Normalized Relational Schemas & Foreign Key Constraints",
        "B-Tree Indexing & Query Plan Execution Optimization",
        "Docker Containerization with Multi-Stage Lightweight Builds",
        "Automated GitHub Actions CI/CD Pipeline Gates",
        "Continuous Automated Regression & Security Scans"
      ],
      technologies: ["PostgreSQL", "Docker", "Linux / Alpine", "GitHub Actions", "Vitest", "Jest"]
    }
  ];

  // Business Capabilities aligned with SRS Section 3.1
  const businessCapabilities = [
    {
      title: "Enterprise Systems Scalability",
      desc: "Modular software architecture engineered to handle concurrent workflows, multi-tenant operations, and scalable transaction loads without architectural degradation.",
      icon: Layers,
      highlight: "High Concurrency"
    },
    {
      title: "Cloud Resilience & High Availability",
      desc: "Containerized application delivery with zero-downtime rolling updates, automated container health probes, and dependable infrastructure uptime targets.",
      icon: Cloud,
      highlight: "99.99% Target"
    },
    {
      title: "Data Confidentiality & Governance",
      desc: "Enterprise-grade data security protocols ensuring complete role-based access control, encrypted transit, sanitized inputs, and adherence to privacy principles.",
      icon: Lock,
      highlight: "Strict Security"
    },
    {
      title: "Agile Engineering & QA Discipline",
      desc: "Predictable two-week sprint cadences, peer code reviews, continuous regression test gates, and transparent technical documentation across project lifecycles.",
      icon: GitBranch,
      highlight: "Predictable Delivery"
    }
  ];

  const currentLayer = architectureLayers[selectedLayer];
  const CurrentIcon = currentLayer.icon;

  return (
    <section id="technical-expertise" className="py-24 lg:py-32 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800 scroll-mt-24">
      {/* Background ambient gradient lighting & technical grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 right-10 w-[550px] h-[550px] bg-electric/15 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-accent/15 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Technical Coordinate Matrix */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SRS 3.1 Aligned Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-navy-900 border border-cyan-accent/25 text-cyan-accent text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Cpu className="w-3.5 h-3.5 text-cyan-accent animate-pulse" />
              <span>TECHNICAL EXPERTISE & BUSINESS CAPABILITIES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Architectural Discipline.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent block mt-1">
                Engineered for Enterprise Scale.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Explore how GTSInfo structures full-stack systems—ensuring high availability, strict security, and maintainable software codebases.
            </p>
          </ScrollReveal>
        </div>

        {/* 2. Interactive 3-Tier Architecture Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20 lg:mb-24">
          
          {/* Left Column: Select Architecture Layer Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-accent mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping" />
                <span>Select Architecture Layer</span>
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Click any tier to inspect our engineering standards, component boundaries, and verified technology stack:
              </p>
            </div>

            <div className="space-y-3 flex-grow flex flex-col justify-between">
              {architectureLayers.map((layer, idx) => {
                const Icon = layer.icon;
                const isSelected = selectedLayer === idx;

                return (
                  <ScrollReveal key={layer.id} variant="fade-right" delay={idx * 100}>
                    <button
                      type="button"
                      onClick={() => setSelectedLayer(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 group cursor-pointer ${
                        isSelected
                          ? 'bg-navy-900/95 border-cyan-accent shadow-[0_0_28px_rgba(0,166,214,0.25)] translate-x-1 ring-1 ring-cyan-accent/30'
                          : 'bg-navy-900/40 border-white/10 hover:border-white/25 hover:bg-navy-900/70 hover:translate-x-0.5'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-primary to-electric text-white shadow-glow' 
                          : 'bg-navy-800 text-slate-400 group-hover:text-cyan-accent group-hover:bg-navy-800/80'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                            isSelected ? 'text-cyan-accent' : 'text-slate-400'
                          }`}>
                            {layer.tier}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40">
                              Active
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-cyan-accent transition-colors">
                          {layer.name}
                        </h3>

                        <p className="text-xs text-slate-300/90 mt-1.5 leading-relaxed line-clamp-2">
                          {layer.description}
                        </p>
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Blueprint Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal variant="fade-left" delay={150} className="h-full">
              <div className="h-full rounded-3xl bg-navy-900/90 border border-white/15 backdrop-blur-xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                
                {/* Blueprint Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between pb-5 border-b border-white/10 gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 border border-white/10 text-cyan-accent text-[11px] font-mono uppercase tracking-wider mb-2">
                        <CurrentIcon className="w-3.5 h-3.5" />
                        <span>{currentLayer.tier}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {currentLayer.name}
                      </h3>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                      <Activity className="w-3 h-3 animate-pulse" />
                      <span>Verified Standard</span>
                    </span>
                  </div>

                  {/* Blueprint Narrative */}
                  <p className="text-sm text-slate-200 mt-5 leading-relaxed font-normal">
                    {currentLayer.description}
                  </p>

                  {/* Architectural Standards Checklist */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-accent mb-3.5 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-accent" />
                      <span>{currentLayer.standardsTitle}</span>
                    </h4>
                    <div className="space-y-2.5">
                      {currentLayer.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Utilized */}
                <div className="mt-7 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Technologies & Frameworks Utilized:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLayer.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-navy-800/90 border border-white/15 text-slate-200 hover:border-cyan-accent hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 3. Business Capabilities Grid (SRS 3.1) */}
        <div>
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-navy-800">
              <div>
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                  Enterprise Value Creation
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Core Business Capabilities
                </h3>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                Translating software engineering discipline into measurable business agility, stability, and digital outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessCapabilities.map((cap, cIdx) => {
              const CapIcon = cap.icon;
              return (
                <ScrollReveal key={cIdx} variant="fade-up" delay={cIdx * 100}>
                  <div className="h-full rounded-2xl p-6 bg-navy-900/60 border border-white/10 hover:border-cyan-accent/50 hover:bg-navy-900/90 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-navy-800 text-cyan-accent flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                          <CapIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          {cap.highlight}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors">
                        {cap.title}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-accent">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>SRS Aligned Practice</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
