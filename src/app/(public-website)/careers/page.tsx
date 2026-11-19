import { Metadata } from 'next';
import CareersPage from '@/features/public-website/careers/CareersPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Careers & Engineering Opportunities',
  description:
    'Join GTSInfo in Bengaluru. Explore our workplace culture, competitive engineering benefits, mentorship initiatives, and open technology vacancies.',
  path: '/careers',
});

export default function Page() {
  return <CareersPage />;
}
