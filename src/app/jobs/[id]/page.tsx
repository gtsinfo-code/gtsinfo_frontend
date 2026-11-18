import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JobDetailsPage from '../../../features/public-website/jobs/JobDetailsPage';
import { JOBS_DATA } from '../../../data/jobsData';
import { constructMetadata, SITE_URL } from '../../../lib/seo';

export function generateStaticParams() {
  return JOBS_DATA.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = JOBS_DATA.find((j) => j.id === id);

  if (!job) {
    return constructMetadata({
      title: 'Job Opening Not Found',
      description: 'The requested career opportunity could not be found.',
      path: `/jobs/${id}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${job.title} | Career Openings`,
    description: `${job.title} in Bengaluru at GTSInfo. ${job.summary}`,
    path: `/jobs/${job.id}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = JOBS_DATA.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary,
    datePosted: '2026-11-01',
    validThrough: job.deadline,
    employmentType: job.employmentType === 'Full-time' ? 'FULL_TIME' : 'INTERN',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'GTSInfo',
      sameAs: `${SITE_URL}/`,
      logo: `${SITE_URL}/favlogo-share.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2nd Floor, 7, 1st Main Road, Mahalakshmipuram Layout',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560086',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />
      <JobDetailsPage id={id} />
    </>
  );
}
