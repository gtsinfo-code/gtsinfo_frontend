import React from 'react';
import PublicSiteLayout from '@/components/layout/PublicSiteLayout';

export default function ApplicantPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicSiteLayout>{children}</PublicSiteLayout>;
}
