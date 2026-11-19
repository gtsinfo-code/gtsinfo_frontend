import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JobDetailsPage from '@/features/public-website/jobs/JobDetailsPage';
import { JOBS_DATA } from '@/data/jobsData';
import { constructMetadata } from '@/lib/seo';

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

  return <JobDetailsPage id={id} />;
}
