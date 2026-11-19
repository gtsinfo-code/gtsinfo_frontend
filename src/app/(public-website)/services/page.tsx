import { Metadata } from 'next';
import ServicesPage from '@/features/public-website/services/ServicesPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Engineering & Technology Services',
  description:
    'Comprehensive software development solutions: Full-Stack Web Development, Cloud Infrastructure, Data Engineering, Quality Assurance, and AI Integration.',
  path: '/services',
});

export default function Page() {
  return <ServicesPage />;
}
