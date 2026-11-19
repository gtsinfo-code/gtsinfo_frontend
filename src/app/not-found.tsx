import { Metadata } from 'next';
import NotFoundPage from '@/components/common/NotFoundPage';
import PublicSiteLayout from '@/components/layout/PublicSiteLayout';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Page Not Found (404)',
  description: 'The requested page could not be located.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <PublicSiteLayout>
      <NotFoundPage />
    </PublicSiteLayout>
  );
}
