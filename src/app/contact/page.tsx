import { Metadata } from 'next';
import ContactPage from '../../features/public-website/contact/ContactPage';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us & Bengaluru Office Directions',
  description:
    'Connect with GTSInfo Headquarters in Mahalakshmipuram Layout, Bengaluru. Contact us for software engineering solutions, enterprise partnerships, or hiring.',
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
