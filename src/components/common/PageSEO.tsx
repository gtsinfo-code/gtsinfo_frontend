'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { SITE_URL } from '@/lib/seo';

const BASE_URL = SITE_URL;
const DEFAULT_TITLE = 'GTSInfo | Software Services & Technology';
const DEFAULT_DESCRIPTION =
  'GTSInfo delivers resilient enterprise software development, cloud infrastructure, automated QA testing, and data engineering solutions. Headquartered in Bengaluru.';

export interface PageSEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, any> | null;
}

/**
 * PageSEO — Client Structured Data & Fallback Injector
 * (Primary metadata is rendered server-side via Next.js Metadata API)
 */
export default function PageSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  schema = null,
}: PageSEOProps) {
  const pathname = usePathname();
  const path = canonicalPath !== undefined ? canonicalPath : pathname;
  const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (title) {
      document.title = `${title} | GTSInfo`;
    }

    if (schema) {
      const existingScript = document.getElementById('page-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'page-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const scriptToRemove = document.getElementById('page-structured-data');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [title, description, canonicalUrl, schema]);

  return null;
}
