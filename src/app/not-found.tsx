import { Metadata } from 'next';
import NotFoundPage from '../features/public-website/not-found/NotFoundPage';
import { constructMetadata } from '../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Page Not Found (404)',
  description: 'The requested page could not be located.',
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundPage />;
}
