import { Metadata } from 'next';
import JobListingsPage from '../../features/public-website/jobs/JobListingsPage';
import { constructMetadata } from '../../lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Open Software Engineering Job Listings',
  description:
    'Search active software engineering vacancies at GTSInfo Bengaluru. Explore roles in Full Stack Development, Cloud DevOps, Quality Automation, and internships.',
  path: '/jobs',
});

export default function Page() {
  return <JobListingsPage />;
}
