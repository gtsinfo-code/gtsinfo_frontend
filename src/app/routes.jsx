import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Corporate Feature Pages
import HomePage from '../features/public-website/home/HomePage';
import AboutPage from '../features/public-website/about/AboutPage';
import ServicesPage from '../features/public-website/services/ServicesPage';
import CareersPage from '../features/public-website/careers/CareersPage';
import JobListingsPage from '../features/public-website/jobs/JobListingsPage';
import JobDetailsPage from '../features/public-website/jobs/JobDetailsPage';
import ContactPage from '../features/public-website/contact/ContactPage';
import NotFoundPage from '../features/public-website/not-found/NotFoundPage';

// Applicant Portal Authentication Screens (Frontend Demonstration)
import LoginPage from '../features/applicant-portal/auth/LoginPage';
import RegisterPage from '../features/applicant-portal/auth/RegisterPage';
import ForgotPasswordPage from '../features/applicant-portal/auth/ForgotPasswordPage';
import ResetPasswordPage from '../features/applicant-portal/auth/ResetPasswordPage';

/**
 * Global Application Routes
 * Strictly public-facing in Phase 1 per Master Project Brief.
 * Namespaces /applicant/* and /admin/* are reserved for Phase 2 & 3.
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* 1. Public Corporate Website Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/jobs" element={<JobListingsPage />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* 2. Candidate Portal Access & Authentication Screens */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* 3. Reserved Portal Namespaces (Deferred to Phase 2 & 3 per SRS) */}
      {/* <Route path="/applicant/*" element={<ApplicantPortalModule />} /> */}
      {/* <Route path="/admin/*" element={<AdminPortalModule />} /> */}

      {/* 4. Fallback 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
