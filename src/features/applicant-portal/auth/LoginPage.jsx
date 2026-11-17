import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  LogIn, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Building
} from 'lucide-react';
import Logo from '../../../components/common/Logo';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
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
    }, 600);
  };

  const handleDemoFill = () => {
    setFormData({
      email: 'candidate@gtsinfo.in',
      password: 'DemoPassword2026'
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-softblue-50/70 flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8">
      
      {/* Premium Split Layout Card */}
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl border border-brandBorder overflow-hidden grid grid-cols-1 lg:grid-cols-12 animate-fade-in">
        
        {/* Left Branding Panel */}
        <div className="lg:col-span-5 bg-navy-950 p-8 sm:p-12 text-white relative flex flex-col justify-between overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-accent/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-block bg-white px-3.5 py-1.5 rounded-xl shadow-sm">
              <Logo asLink={true} size="sm" />
            </div>

            <div className="pt-4">
              <span className="text-xs font-mono font-bold text-cyan-accent uppercase tracking-widest block mb-2">
                Candidate Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Welcome to the Candidate Portal.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Track your active job applications, interview schedules, and formal offer letters.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span>Real-time Application Milestones</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Encrypted Candidate Records</span>
              </div>
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                <span>Direct HR Alignment</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 border-t border-white/10 text-[11px] text-slate-400">
            <span>Bengaluru Headquarters • Mahalakshmi Layout</span>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-softblue-100 text-primary text-[11px] font-bold uppercase tracking-wider mb-2">
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brandText-primary">
              Applicant Sign In
            </h1>
            <p className="text-xs text-brandText-secondary mt-1">
              Enter your registered credentials to access your candidate dashboard.
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="mb-6 p-3 bg-softblue-50 border border-softblue-200 rounded-xl flex items-center justify-between gap-2 text-xs text-brandText-secondary">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Demonstration UI (SRS Phase 1)</span>
            </div>
            <button
              type="button"
              onClick={handleDemoFill}
              className="text-xs font-bold text-primary hover:text-electric underline flex-shrink-0"
            >
              Fill Demo Credentials
            </button>
          </div>

          {/* Success Demonstration Banner */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-xs text-emerald-800 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-emerald-900">Credentials Validated Successfully!</p>
                <p className="mt-0.5">
                  Frontend demonstration passed. In Phase 2, this issues an HTTP-only JWT and redirects to the full candidate dashboard.
                </p>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full pl-11 pr-4 py-3 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                    errors.email ? 'border-red-400' : 'border-brandBorder'
                  }`}
                />
              </div>
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-primary hover:text-electric transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-11 py-3 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                    errors.password ? 'border-red-400' : 'border-brandBorder'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-slate-400 hover:text-brandText-primary absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? <span>Authenticating...</span> : <span>Sign In to Portal</span>}
              </button>
            </div>

          </form>

          {/* Navigation to Registration */}
          <div className="mt-6 pt-6 border-t border-brandBorder text-center">
            <p className="text-xs text-brandText-secondary">
              Don't have a candidate account yet?{' '}
              <Link to="/register" className="font-bold text-primary hover:text-electric transition-colors">
                Register as an Applicant
              </Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
