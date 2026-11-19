import React from 'react';
import Link from 'next/link';
import { ShieldCheck, LogOut, ExternalLink, LayoutDashboard, Users, Briefcase, Settings } from 'lucide-react';
import Logo from '@/components/common/Logo';

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-900 font-sans flex flex-col">
      {/* Admin Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="bg-white px-2.5 py-1 rounded-xl">
              <Logo asLink={false} size="sm" />
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Admin Console</span>
            </div>
          </div>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/admin"
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4 text-cyan-accent" />
              <span className="hidden sm:inline">View Public Website</span>
            </Link>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Admin Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 text-center text-xs text-slate-500">
        GTSInfo Technologies Private Limited • Enterprise Administration Console • Bengaluru Technology Center
      </footer>
    </div>
  );
}
