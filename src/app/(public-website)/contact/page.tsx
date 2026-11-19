import { Metadata } from 'next';
import ContactPage from '@/features/public-website/contact/ContactPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Engineering & Corporate Office',
  description:
    'Contact GTSInfo in Bengaluru for enterprise software services, client project consultations, careers, and engineering partnerships.',
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
