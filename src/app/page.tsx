import { Metadata } from 'next';
import HomePage from '../features/public-website/home/HomePage';
import { constructMetadata } from '../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Enterprise Software Services & Engineering',
  description:
    'GTSInfo is a software services and technology firm in Bengaluru, architecting full-stack web applications, cloud DevOps, data pipelines, and quality assurance.',
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
