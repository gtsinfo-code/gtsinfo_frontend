import { Metadata } from 'next';
import CareersPage from '../../features/public-website/careers/CareersPage';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Careers & Engineering Opportunities in Bengaluru',
  description:
    'Explore technology careers at GTSInfo in Bengaluru. Discover life at GTSInfo, modern office spaces, collaborative culture, and open software engineering roles.',
  path: '/careers',
});

export default function Page() {
  return <CareersPage />;
}
