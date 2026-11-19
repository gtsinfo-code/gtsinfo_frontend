import { Metadata } from 'next';
import AboutPage from '@/features/public-website/about/AboutPage';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'About Us & Leadership Culture',
  description:
    "Learn about GTSInfo's corporate mission, engineering values, and verified technology centers in Mahalakshmi Layout and Whitefield, Bengaluru.",
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}
