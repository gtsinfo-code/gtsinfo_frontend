import { Metadata } from 'next';
import AdminLoginPage from '@/features/admin-portal/auth/AdminLoginPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Administrator Sign In - Secure Operations Console',
  description: 'Enterprise administration sign in for authorized GTSInfo staff.',
  path: '/admin/login',
  noIndex: true,
});

export default function Page() {
  return <AdminLoginPage />;
}
