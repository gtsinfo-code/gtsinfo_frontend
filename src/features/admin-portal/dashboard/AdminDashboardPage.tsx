'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  FileCheck2,
  MailCheck,
  TrendingUp,
  AlertCircle,
  PlusCircle,
  Clock,
  ArrowUpRight,
  Filter,
  ShieldAlert,
  Search,
} from 'lucide-react';
import { Badge } from '@/components/ui';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Candidates', value: '148', delta: '+12% this month', icon: Users, color: 'text-primary bg-softblue-100' },
    { label: 'Active Job Postings', value: '6', delta: 'All positions live', icon: Briefcase, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Interviews Pipeline', value: '18', delta: '4 scheduled today', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Pending Enquiries', value: '5', delta: '3 unread messages', icon: MailCheck, color: 'text-cyan-600 bg-cyan-50' },
  ];

  const recentApplicants = [
    {
      id: 'APP-2026-00142',
      name: 'Aditya Sharma',
      role: 'Senior Full Stack TypeScript Engineer',
      applied: '2 hours ago',
      experience: '5.5 Years',
      status: 'Interview Scheduled',
      statusVariant: 'navy' as const,
    },
    {
      id: 'APP-2026-00141',
      name: 'Priyanka Rao',
      role: 'Quality Assurance & Automation Engineer',
      applied: '5 hours ago',
      experience: '3.0 Years',
      status: 'Under Review',
      statusVariant: 'warning' as const,
    },
    {
      id: 'APP-2026-00140',
      name: 'Vikram Joshi',
      role: 'Cloud Solutions & DevOps Architect',
      applied: '1 day ago',
      experience: '7.0 Years',
      status: 'Shortlisted',
      statusVariant: 'success' as const,
    },
    {
      id: 'APP-2026-00139',
      name: 'Sneha Patil',
      role: 'Junior Full Stack Engineer (Intern/Entry)',
      applied: '2 days ago',
      experience: 'Fresher / 2026',
      status: 'Submitted',
      statusVariant: 'neutral' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Recruitment &amp; Operations Command Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            GTSInfo Enterprise Management Console (SRS Phase 3 Administration Module)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create Job Requisition</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-3">{stat.value}</p>
              <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>{stat.delta}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Split: Applicants Table & Action Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applicants Table (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-200/80 flex items-center justify-between">
            <div>
              <h2 className="text-base font-extrabold text-slate-900">Recent Candidate Applications</h2>
              <p className="text-xs text-slate-500 mt-0.5">Live applications across active vacancies</p>
            </div>
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              <span>View All 148</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase font-mono tracking-wider text-[11px] border-b border-slate-200/80">
                <tr>
                  <th className="py-3 px-4">Applicant</th>
                  <th className="py-3 px-4">Job Role</th>
                  <th className="py-3 px-4">Experience</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentApplicants.map((applicant) => (
                  <tr key={applicant.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900">{applicant.name}</p>
                      <span className="text-[11px] font-mono text-slate-400">{applicant.id}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      {applicant.role}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      {applicant.experience}
                    </td>
                    <td className="py-3.5 px-4">
                      <Badge variant={applicant.statusVariant}>{applicant.status}</Badge>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="text-primary hover:text-electric font-bold text-xs">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Administration Modules (1 col) */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              System Health &amp; Audits
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600 font-medium">Database Node</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Operational
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600 font-medium">Email Dispatcher</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                <span className="text-slate-600 font-medium">Storage Quota</span>
                <span className="font-bold text-slate-900">1.2 GB / 50 GB</span>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-cyan-accent text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Phase 3 Roadmap Note</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full backend synchronization with MongoDB, Multer upload pipeline, and candidate status webhooks is scheduled in SRS Phase 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
