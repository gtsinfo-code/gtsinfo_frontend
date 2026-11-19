import { Metadata } from 'next';
import ResetPasswordPage from '@/features/applicant-portal/auth/ResetPasswordPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Reset Password - Candidate Portal',
  description: 'Set a new secure password for your GTSInfo candidate recruitment account.',
  path: '/reset-password',
  noIndex: true,
});

export default function Page() {
  return <ResetPasswordPage />;
}
