import { Metadata } from 'next';
import RegisterPage from '@/features/applicant-portal/auth/RegisterPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Applicant Registration - Candidate Portal',
  description: 'Create a candidate account at GTSInfo to submit engineering applications and manage your recruitment profile.',
  path: '/register',
  noIndex: true,
});

export default function Page() {
  return <RegisterPage />;
}
