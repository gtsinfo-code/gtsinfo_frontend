import { Metadata } from 'next';
import AboutPage from '@/features/public-website/about/AboutPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'About Us & Leadership Culture',
  description:
    "Learn about GTSInfo's corporate mission, engineering culture, verified Mahalakshmipuram technology center in Bengaluru, and delivery methodology.",
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
