import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mail, MessageSquare } from 'lucide-react';
import ScrollReveal from '../../../../components/motion/ScrollReveal';

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-28 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      {/* Restrained visually striking blue gradient background effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-electric/20 rounded-full blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-cyan-accent/15 rounded-full blur-[120px]" />
        
        {/* Subtle coordinate grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-cyan-accent/30 text-cyan-accent text-xs font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
            <span>START A DIALOGUE</span>
          </div>
        </ScrollReveal>

        {/* Mandatory Heading */}
        <ScrollReveal variant="fade-up" delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Let's Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-primary to-cyan-accent">
              What's Next.
            </span>
          </h2>
        </ScrollReveal>

        {/* Mandatory Supporting Text */}
        <ScrollReveal variant="fade-up" delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Connect with GTSInfo to explore technology-driven possibilities.
          </p>
        </ScrollReveal>

        {/* Mandatory CTA: "Start a Conversation" */}
        <ScrollReveal variant="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-primary hover:bg-electric text-white shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:hr@gtsinfo.in"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-accent" />
              <span>hr@gtsinfo.in</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
