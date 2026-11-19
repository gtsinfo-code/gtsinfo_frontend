import { Metadata } from 'next';
import HomePage from '@/features/public-website/home/HomePage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'GTS (GTSInfo) — Enterprise Software Services & Technology Bengaluru',
  description:
    'GTSInfo (GTS) is a leading software services and technology company in Bengaluru, delivering full-stack engineering, cloud DevOps, and automated QA solutions.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
