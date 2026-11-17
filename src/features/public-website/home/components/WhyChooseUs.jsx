import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Compass,
  ShieldCheck,
  Lock,
  Users,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Architecture-First Engineering",
      desc: "We prioritize structured system design, clean separation of concerns, and scalable database schemas before writing code, ensuring long-term software stability.",
      icon: Compass,
      tag: "System Design"
    },
    {
      title: "Rigorous Quality Assurance",
      desc: "Every release undergoes comprehensive functional verification, cross-browser audits, and automated testing to prevent regressions and security vulnerabilities.",
      icon: ShieldCheck,
      tag: "Zero-Defect QA"
    },
    {
      title: "Data Confidentiality & Privacy",
      desc: "We enforce strict role-based access control, input validation, and secure handling for candidate records, system credentials, and enterprise proprietary assets.",
      icon: Lock,
      tag: "Data Security"
    },
    {
      title: "Agile & Collaborative Delivery",
      desc: "Transparent sprint cycles, clear milestone tracking, and responsive technical communication keep projects aligned with strategic business timelines.",
      icon: Users,
      tag: "Agile Alignment"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-brandText-primary relative border-t border-brandBorder overflow-hidden">
      {/* Decorative ambient subtle background gradients */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-softblue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-pale-bg rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8 space-y-4">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-softblue-100 border border-softblue-200 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The GTSInfo Advantage</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brandText-primary leading-tight">
                Engineering Discipline.{' '}
                <span className="text-primary block mt-1">Predictable Execution.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-brandText-secondary leading-relaxed font-normal max-w-2xl">
                We believe that modern technology success is driven by architectural rigor, complete transparency, and relentless focus on software maintainability.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <ScrollReveal variant="fade-left" delay={300}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-electric transition-colors group"
              >
                <span>Read our engineering philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Asymmetric Differentiator Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;

            return (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 120}
              >
                <div className="group h-full rounded-2xl p-7 bg-softblue-50/70 border border-brandBorder transition-all duration-300 hover:bg-white hover:border-primary hover:shadow-card hover:translate-y-[-4px] flex flex-col justify-between">
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white text-primary border border-brandBorder flex items-center justify-center p-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {diff.tag}
                      </span>
                    </div>

                    {/* Differentiator Title */}
                    <h3 className="text-lg font-bold text-brandText-primary mb-3 group-hover:text-primary transition-colors">
                      {diff.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brandBorder/60 flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Verified Core Practice</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
