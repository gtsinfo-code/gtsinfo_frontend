import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=================================================");
console.log("=== GTSINFO NEXT.JS + TYPESCRIPT MIGRATION AUDIT ===");
console.log("=================================================\n");

let passedCount = 0;
let failedCount = 0;

function check(label, condition, detail = "") {
  if (condition) {
    console.log(`[PASS] ${label} ${detail ? `(${detail})` : ''}`);
    passedCount++;
  } else {
    console.error(`[FAIL] ${label} ${detail ? `(${detail})` : ''}`);
    failedCount++;
  }
}

// 1. Assets verification
const requiredAssets = [
  'src/assets/branding/GTS_Software_Services_Logo_Transparent.png',
  'src/assets/branding/gtsinfo-official-logo.png',
  'src/assets/branding/gtsinfo-logo.png',
  'src/assets/images/hero-globe-bg.jpg',
  'src/assets/images/company/01-open-office-workstations.jpg',
  'src/assets/images/company/02-open-office-wide-view.jpg',
  'src/assets/images/company/03-meeting-room.jpg',
  'src/assets/images/company/04-office-corridor.jpg',
  'src/assets/images/company/05-office-entrance-signage.jpg',
  'src/assets/images/company/06-office-workspace-alternate-view.jpg',
  'public/favlogo.png',
  'public/favlogo-share.png',
  'public/og-image.png'
];

console.log("--- 1. Critical Brand & Media Assets ---");
requiredAssets.forEach(rel => {
  const full = path.join(__dirname, rel);
  const exists = fs.existsSync(full);
  const size = exists ? `${(fs.statSync(full).size / 1024).toFixed(1)} KB` : "MISSING";
  check(`Asset: ${rel}`, exists, size);
});

// 2. Next.js App Router Modular Pages
const appRouterPages = [
  'src/app/layout.tsx',
  'src/app/globals.css',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/not-found.tsx',
  // Public Website Module
  'src/app/(public-website)/layout.tsx',
  'src/app/(public-website)/page.tsx',
  'src/app/(public-website)/about/page.tsx',
  'src/app/(public-website)/services/page.tsx',
  'src/app/(public-website)/careers/page.tsx',
  'src/app/(public-website)/jobs/page.tsx',
  'src/app/(public-website)/jobs/[id]/page.tsx',
  'src/app/(public-website)/contact/page.tsx',
  // Applicant Portal Module
  'src/app/(applicant-portal)/layout.tsx',
  'src/app/(applicant-portal)/login/page.tsx',
  'src/app/(applicant-portal)/register/page.tsx',
  'src/app/(applicant-portal)/forgot-password/page.tsx',
  'src/app/(applicant-portal)/reset-password/page.tsx',
  // Administrator Portal Module
  'src/app/(admin-portal)/layout.tsx',
  'src/app/(admin-portal)/admin/page.tsx',
  'src/app/(admin-portal)/admin/login/page.tsx'
];

console.log("\n--- 2. Next.js App Router Pages ---");
appRouterPages.forEach(rel => {
  const full = path.join(__dirname, rel);
  check(`Route: ${rel}`, fs.existsSync(full));
});

// 3. TypeScript Components & Modules
const tsModules = [
  'src/components/common/Logo.tsx',
  'src/components/common/ScrollToTopAndHash.tsx',
  'src/components/common/PageSEO.tsx',
  'src/components/common/NotFoundPage.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/PublicSiteLayout.tsx',
  'src/components/motion/GlassCard.tsx',
  'src/components/motion/ImageReveal.tsx',
  'src/components/motion/ScrollProgress.tsx',
  'src/components/motion/ScrollReveal.tsx',
  'src/components/ui/index.tsx',
  'src/features/public-website/home/HomePage.tsx',
  'src/features/public-website/home/components/Hero.tsx',
  'src/features/public-website/home/components/CompanyIntro.tsx',
  'src/features/public-website/home/components/ServicesOverview.tsx',
  'src/features/public-website/home/components/TechExpertise.tsx',
  'src/features/public-website/home/components/WhyChooseUs.tsx',
  'src/features/public-website/home/components/FeaturedCareers.tsx',
  'src/features/public-website/home/components/ContactCTA.tsx',
  'src/features/public-website/about/AboutPage.tsx',
  'src/features/public-website/about/components/WorkplaceGallery.tsx',
  'src/features/public-website/services/ServicesPage.tsx',
  'src/features/public-website/careers/CareersPage.tsx',
  'src/features/public-website/jobs/JobListingsPage.tsx',
  'src/features/public-website/jobs/JobDetailsPage.tsx',
  'src/features/public-website/contact/ContactPage.tsx',
  'src/features/applicant-portal/auth/LoginPage.tsx',
  'src/features/applicant-portal/auth/RegisterPage.tsx',
  'src/features/applicant-portal/auth/ForgotPasswordPage.tsx',
  'src/features/applicant-portal/auth/ResetPasswordPage.tsx',
  'src/features/admin-portal/auth/AdminLoginPage.tsx',
  'src/features/admin-portal/dashboard/AdminDashboardPage.tsx',
  'src/features/public-website/contact/services/contactService.ts',
  'src/config/integrations.ts',
  'src/constants/companyInfo.ts',
  'src/data/companyGalleryData.ts',
  'src/data/jobsData.ts',
  'src/data/servicesData.ts',
  'src/hooks/useScrollPosition.ts',
  'src/lib/seo.ts',
  'src/types/index.ts',
  'src/types/images.d.ts',
  'src/utils/formatters.ts'
];

console.log("\n--- 3. TypeScript Components & Modules ---");
tsModules.forEach(rel => {
  const full = path.join(__dirname, rel);
  check(`Module: ${rel}`, fs.existsSync(full));
});

// 4. Production Build Outputs
console.log("\n--- 4. Next.js Production Build Artifacts (.next) ---");
check('Build folder exists', fs.existsSync(path.join(__dirname, '.next')));
check('App path routes manifest exists', fs.existsSync(path.join(__dirname, '.next/app-path-routes-manifest.json')));
check('Prerender manifest exists', fs.existsSync(path.join(__dirname, '.next/prerender-manifest.json')));

// Check SSG output for jobs
const jobsBuild = path.join(__dirname, '.next/server/app/jobs');
check('Jobs SSG directory exists', fs.existsSync(jobsBuild));

console.log("\n=================================================");
console.log(`TOTAL AUDIT RESULT: ${passedCount} PASSED, ${failedCount} FAILED`);
console.log("=================================================");

if (failedCount > 0) {
  process.exit(1);
}
