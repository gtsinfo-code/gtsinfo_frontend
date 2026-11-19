import { Metadata } from 'next';
import LoginPage from '@/features/applicant-portal/auth/LoginPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Applicant Login - Candidate Portal',
  description: 'Sign in to your candidate account to track job applications, update your profile, and explore engineering careers at GTSInfo.',
  path: '/login',
  noIndex: true,
});

export default function Page() {
  return <LoginPage />;
}
