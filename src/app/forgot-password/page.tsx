import { Metadata } from 'next';
import ForgotPasswordPage from '@/features/applicant-portal/auth/ForgotPasswordPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Forgot Password - Candidate Portal',
  description: 'Recover access to your GTSInfo candidate account with self-service password recovery instructions.',
  path: '/forgot-password',
  noIndex: true,
});

export default function Page() {
  return <ForgotPasswordPage />;
}
