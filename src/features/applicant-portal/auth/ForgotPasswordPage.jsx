import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Info, KeyRound } from 'lucide-react';
import Logo from '../../../components/common/Logo';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email address is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email format.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-cyan-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10 animate-fade-in">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-4 py-2 rounded-2xl shadow-subtle mb-4">
            <Logo asLink={true} size="md" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Reset Candidate Password
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Enter your registered email address to receive password recovery instructions.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
          
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h2 className="text-lg font-bold text-brandText-primary">Recovery Instructions Simulated</h2>
              <p className="text-xs text-brandText-secondary leading-relaxed">
                If an account exists for <strong>{email}</strong>, a recovery link has been simulated.
              </p>
              <div className="pt-2">
                <Link
                  to="/reset-password"
                  className="inline-block text-xs font-bold text-primary hover:text-electric underline mb-3"
                >
                  Proceed to Reset Screen (Demo)
                </Link>
                <div>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brandText-primary"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Sign In</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full pl-11 pr-4 py-3 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
                      error ? 'border-red-400' : 'border-brandBorder'
                    }`}
                  />
                </div>
                {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <span>Validating...</span> : <span>Send Recovery Instructions</span>}
                </button>
              </div>

              <div className="pt-4 border-t border-brandBorder text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
