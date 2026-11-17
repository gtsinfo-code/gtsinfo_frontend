import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle2, AlertCircle, Info, KeyRound } from 'lucide-react';
import Logo from '../../../components/common/Logo';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.password) {
      errs.password = 'New password is required.';
    } else if (formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
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
            Set New Password
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Choose a secure, strong password for your candidate account.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
          
          <div className="mb-6 p-3 bg-softblue-50 border border-softblue-200 rounded-xl flex items-center gap-2 text-xs text-brandText-secondary">
            <Info className="w-4 h-4 text-primary flex-shrink-0" />
            <span>
              <strong>Demonstration Mode:</strong> Client-side validation only. In Phase 2, token validation verifies reset eligibility.
            </span>
          </div>

          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h2 className="text-lg font-bold text-brandText-primary">Password Reset Validated!</h2>
              <p className="text-xs text-brandText-secondary leading-relaxed">
                Your new candidate password has been verified. You may now sign in using your updated credentials.
              </p>
              <div className="pt-3">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider"
                >
                  Proceed to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* New Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                  New Password (min 8 characters)
                </label>
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
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brandText-secondary mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-11 py-3 bg-softblue-50/70 border rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-brandText-primary ${
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

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <span>Updating Password...</span> : <span>Update Password</span>}
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
