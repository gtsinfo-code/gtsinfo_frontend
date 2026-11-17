import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=== RUNNING GTSINFO MODULAR ARCHITECTURE AUDIT ===");

// 1. Verify required company images & logo
const requiredAssets = [
  'src/assets/branding/gtsinfo-logo.png',
  'src/assets/images/company/01-open-office-workstations.jpg',
  'src/assets/images/company/02-open-office-wide-view.jpg',
  'src/assets/images/company/03-meeting-room.jpg',
  'src/assets/images/company/04-office-corridor.jpg',
  'src/assets/images/company/05-office-entrance-signage.jpg',
  'src/assets/images/company/06-office-workspace-alternate-view.jpg',
];

requiredAssets.forEach(relPath => {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`[PASS] Asset present: ${relPath} (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`[FAIL] Asset missing: ${relPath}`);
  }
});

// 2. Verify all strictly organized modules
const targetModules = [
  // App Shell & Routing
  'src/app/App.jsx',
  'src/app/routes.jsx',
  'src/main.jsx',
  'src/styles/index.css',
  
  // Shared Components
  'src/components/common/Logo.jsx',
  'src/components/layout/Navbar.jsx',
  'src/components/layout/Footer.jsx',
  'src/components/layout/Layout.jsx',
  'src/components/ui/index.jsx',

  // Public Corporate Website Feature
  'src/features/public-website/home/HomePage.jsx',
  'src/features/public-website/home/components/Hero.jsx',
  'src/features/public-website/home/components/CompanyIntro.jsx',
  'src/features/public-website/home/components/ServicesOverview.jsx',
  'src/features/public-website/home/components/TechExpertise.jsx',
  'src/features/public-website/home/components/WhyChooseUs.jsx',
  'src/features/public-website/home/components/FeaturedCareers.jsx',
  'src/features/public-website/home/components/ContactCTA.jsx',
  'src/features/public-website/about/AboutPage.jsx',
  'src/features/public-website/about/components/WorkplaceGallery.jsx',
  'src/features/public-website/services/ServicesPage.jsx',
  'src/features/public-website/careers/CareersPage.jsx',
  'src/features/public-website/jobs/JobListingsPage.jsx',
  'src/features/public-website/jobs/JobDetailsPage.jsx',
  'src/features/public-website/contact/ContactPage.jsx',
  'src/features/public-website/not-found/NotFoundPage.jsx',

  // Applicant Portal Module (Candidate Auth Screens)
  'src/features/applicant-portal/auth/LoginPage.jsx',
  'src/features/applicant-portal/auth/RegisterPage.jsx',
  'src/features/applicant-portal/auth/ForgotPasswordPage.jsx',
  'src/features/applicant-portal/auth/ResetPasswordPage.jsx',
  'src/features/applicant-portal/README.md',

  // Admin Portal Module (Reserved)
  'src/features/admin-portal/README.md',

  // Shared Data, Constants & Utilities
  'src/constants/companyInfo.js',
  'src/data/companyGalleryData.js',
  'src/data/jobsData.js',
  'src/data/servicesData.js',
  'src/utils/formatters.js',
  'src/hooks/useScrollPosition.js'
];

targetModules.forEach(p => {
  const full = path.join(__dirname, p);
  if (fs.existsSync(full)) {
    console.log(`[PASS] Module verified: ${p}`);
  } else {
    console.error(`[FAIL] Module missing: ${p}`);
  }
});

console.log("=== MODULAR AUDIT COMPLETE ===");
