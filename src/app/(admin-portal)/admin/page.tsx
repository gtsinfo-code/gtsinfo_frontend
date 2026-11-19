import { Metadata } from 'next';
import AdminDashboardPage from '@/features/admin-portal/dashboard/AdminDashboardPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Administrator Dashboard - Operations Console',
  description: 'Enterprise administration dashboard for candidate tracking, job posting management, and recruitment operations.',
  path: '/admin',
  noIndex: true,
});

export default function Page() {
  return <AdminDashboardPage />;
}
