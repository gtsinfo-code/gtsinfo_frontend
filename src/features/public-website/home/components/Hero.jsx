import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Activity,
  Code2, 
  Play, 
  Pause, 
  Maximize2,
  Zap,
  Globe2,
  Terminal,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);

  const videoSrc = "/videos/hero-bg.mp4";

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        if (bgVideoRef.current) bgVideoRef.current.pause();
      } else {
        videoRef.current.play();
        if (bgVideoRef.current) bgVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const systems = [
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      category: "Microservices & DevOps",
      metric: "99.99% Availability",
      latency: "14ms Edge",
      status: "Cluster Online",
      icon: Cloud,
      tags: ["Docker", "Kubernetes", "AWS / Hybrid", "CI/CD Gates"],
      summary: "High-concurrency microservices mesh with automated failover and zero-downtime rolling deployments."
    },
    {
      id: "fullstack",
      title: "Full-Stack Software",
      category: "Enterprise Systems",
      metric: "Sub-100ms API",
      latency: "28ms DB Query",
      status: "Production Ready",
      icon: Code2,
      tags: ["React 19", "Node.js", "PostgreSQL", "Clean Architecture"],
      summary: "Scalable transaction processing platforms engineered with strict separation of concerns and typed contracts."
    },
    {
      id: "data",
      title: "Data Engineering",
      category: "Analytics & Telemetry",
      metric: "Distributed ETL",
      latency: "Real-time Sync",
      status: "Pipeline Active",
      icon: Database,
      tags: ["PostgreSQL", "Pipeline ETL", "Data Warehousing", "BI Dashboards"],
      summary: "High-throughput operational data pipelines feeding structured warehouses and analytical dashboards."
    },
    {
      id: "qa",
      title: "Quality Engineering",
      category: "Automated QA & Security",
      metric: "Zero-Defect Standard",
      latency: "Automated Tests",
      status: "Passed 100%",
      icon: ShieldCheck,
      tags: ["End-to-End Tests", "Role-Based Access", "OWASP Gates", "Cross-Browser"],
      summary: "Comprehensive automated regression test gates and security validation safeguarding enterprise data."
    }
  ];

  const currentSystem = systems[activeTab];
  const CurrentIcon = currentSystem.icon;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-navy-950 text-white overflow-hidden pt-28 pb-16 lg:py-24">
      
      {/* 1. Cinematic Ambient Video & Lighting Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Full-bleed Ambient Background Video */}
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-[3px] scale-105 transition-opacity duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Gradient Scrim Overlays to guarantee 100% typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />

        {/* Glowing Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-[38rem] h-[38rem] rounded-full bg-electric/25 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-1/4 -right-20 w-[42rem] h-[42rem] rounded-full bg-primary/20 blur-[160px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-28 left-1/3 w-[34rem] h-[34rem] rounded-full bg-cyan-accent/15 blur-[130px] animate-glow-pulse" style={{ animationDelay: '4s' }} />

        {/* Technical Coordinate Matrix Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Bottom Fade to Next Section */}
        <div className="absolute -bottom-10 inset-x-0 h-40 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetric Two-Part Composition with Balanced Vertical Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: Editorial Brand Vision ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Eyebrow Chip with Active Video Telemetry */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-cyan-accent/30 text-cyan-accent text-xs font-bold tracking-widest uppercase shadow-sm backdrop-blur-md transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ENGINEERING • INNOVATION • DIGITAL SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] transition-all duration-700 delay-100 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-primary to-cyan-accent drop-shadow-sm">
                  What's Next.
                </span>
                <br />
                <span className="text-white">
                  Building{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-blue-200">
                    Digital Possibilities.
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              At <strong className="text-white font-semibold">GTSInfo</strong>, we bring technology and ideas together to create meaningful digital solutions for businesses.
            </p>

            {/* Primary & Secondary Action CTAs with Refined Hover */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link
                to="/services"
                className="btn-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-electric text-white shadow-[0_4px_25px_rgba(8,120,232,0.45)] hover:shadow-[0_8px_35px_rgba(8,120,232,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md hover:border-cyan-accent/60 hover:shadow-[0_0_20px_rgba(0,166,214,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Connect With Us</span>
              </Link>
            </div>

            {/* Architectural Trust Pillars */}
            <div
              className={`pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300 transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span className="font-medium text-slate-200">Scalable Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-slate-200">Cloud Resilient</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span className="font-medium text-slate-200">Data Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-slate-200">Strict Quality QA</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: High-Definition Video Showcase Console ================= */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glowing Cyber Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/35 via-cyan-accent/25 to-electric/25 blur-2xl opacity-80" />

              {/* Main Futuristic Holographic Shell */}
              <div className="relative rounded-3xl bg-navy-900/90 border border-white/20 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(4,14,30,0.85)] overflow-hidden">
                
                {/* Console Top Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="font-mono text-xs font-bold text-slate-200 tracking-wider uppercase">
                      GTS Vision Console
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-accent bg-cyan-accent/15 px-3 py-0.5 rounded-full border border-cyan-accent/30 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping" />
                    <span>Live Simulation</span>
                  </span>
                </div>

                {/* High-Tech Video Player Showcase Container */}
                <div className="relative rounded-2xl overflow-hidden my-4 border border-white/15 bg-black group shadow-inner">
                  {/* The Video Element */}
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-52 sm:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* High-Tech HUD Scanlines & Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30 pointer-events-none" />

                  {/* Corner Visual Cyber Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-accent/70 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-accent/70 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-accent/70 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-accent/70 pointer-events-none" />

                  {/* Video Playback Controls Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
                      <span>{currentSystem.title}</span>
                    </div>

                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg bg-navy-950/80 hover:bg-navy-900 backdrop-blur-md border border-white/20 text-white transition-all hover:border-cyan-accent cursor-pointer shadow-sm"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 text-cyan-accent" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-cyan-accent fill-cyan-accent" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Active System Focus Card */}
                <div className="p-3.5 rounded-2xl bg-navy-950/70 border border-white/10 mb-3.5 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-primary/20 text-cyan-accent flex items-center justify-center border border-cyan-accent/30">
                        <CurrentIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {currentSystem.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400">
                          {currentSystem.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      {currentSystem.status}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-2.5 line-clamp-2">
                    {currentSystem.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {currentSystem.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive System Tabs Selector */}
                <div className="grid grid-cols-4 gap-2 pt-1 border-t border-white/10">
                  {systems.map((s, idx) => {
                    const Icon = s.icon;
                    const isSelected = activeTab === idx;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`p-2 rounded-xl text-center border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white border-primary shadow-glow'
                            : 'bg-navy-950/50 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                        aria-label={`Select ${s.title}`}
                      >
                        <Icon className="w-3.5 h-3.5 mx-auto mb-1" />
                        <span className="text-[9px] font-bold block truncate">{s.title.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
