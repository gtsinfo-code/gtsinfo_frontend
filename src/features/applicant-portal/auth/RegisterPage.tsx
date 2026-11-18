'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Eye, 
  EyeOff, 
  UserPlus, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ShieldCheck
} from 'lucide-react';
import Logo from '../../../components/common/Logo';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      errs.mobileNumber = 'Please provide a valid 10-digit mobile number.';
    }
    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'Please acknowledge the privacy policy.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-accent/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-xl w-full relative z-10 animate-fade-in">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-4 py-2 rounded-2xl shadow-subtle mb-4">
            <Logo asLink={true} size="md" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Create Candidate Account
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Register to apply for engineering vacancies and manage your recruitment profile.
          </p>
        </div>

        {/* Clean Form Surface with subtle glassmorphic elements */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
          
          {isSuccess ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
              <h2 className="text-xl font-bold text-brandText-primary">Candidate Profile Validated!</h2>
              <p className="text-xs text-brandText-secondary leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. In Phase 2, a verification email is dispatched to <strong>{formData.email}</strong> to activate your portal credentials.
              </p>
              <div className="pt-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider"
                >
                  Proceed to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full pl-11 pr-4 py-2.5 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      errors.fullName ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full pl-11 pr-4 py-2.5 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      errors.email ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-11 pr-4 py-2.5 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      errors.mobileNumber ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                </div>
                {errors.mobileNumber && <p className="text-[11px] text-red-500 mt-1">{errors.mobileNumber}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                  Password (min 8 characters) *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-11 py-2.5 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      errors.password ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1.5 text-slate-400 hover:text-brandText-primary absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-11 py-2.5 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      errors.confirmPassword ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="p-1.5 text-slate-400 hover:text-brandText-primary absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-[11px] text-red-500 mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Agree Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-0.5 rounded border-brandBorder text-primary focus:ring-primary"
                  />
                  <span className="text-[11px] text-brandText-secondary leading-normal">
                    I acknowledge that submitted candidate information will be handled in accordance with GTSInfo Data Protection principles.
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-[11px] text-red-500 mt-1">{errors.agreeTerms}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <span>Validating Account...</span> : <span>Create Candidate Account</span>}
                </button>
              </div>

            </form>
          )}

          {/* Navigation to Login */}
          <div className="mt-6 pt-6 border-t border-brandBorder text-center">
            <p className="text-xs text-brandText-secondary">
              Already registered?{' '}
              <Link href="/login" className="font-bold text-primary hover:text-electric transition-colors">
                Sign in to your account
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}