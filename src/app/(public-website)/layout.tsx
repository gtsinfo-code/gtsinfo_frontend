import React from 'react';
import PublicSiteLayout from '@/components/layout/PublicSiteLayout';

export default function PublicWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicSiteLayout>{children}</PublicSiteLayout>;
}
