import { Metadata } from 'next';
import ServicesPage from '../../features/public-website/services/ServicesPage';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Software Engineering & Cloud Services Catalog',
  description:
    'Explore GTSInfo software services: full-stack enterprise web development, cloud DevOps automation, data engineering pipelines, and automated QA testing.',
  path: '/services',
});

export default function Page() {
  return <ServicesPage />;
}
