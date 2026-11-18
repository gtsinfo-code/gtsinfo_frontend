import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://gtsinfo.vercel.app';
const DEFAULT_TITLE = 'GTSInfo | Software Services & Technology';
const DEFAULT_DESCRIPTION =
  'GTSInfo delivers resilient enterprise software development, cloud infrastructure, automated QA testing, and data engineering solutions. Headquartered in Bengaluru.';

/**
 * PageSEO — Dynamic SEO Metadata and JSON-LD Schema Injector
 * Updates document title, meta description, canonical link, OpenGraph tags,
 * and page-specific Schema.org JSON-LD structured data on route changes.
 */
export default function PageSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  schema = null,
}) {
  const location = useLocation();
  const path = canonicalPath !== undefined ? canonicalPath : location.pathname;
  const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;

  useEffect(() => {
    // 1. Page Title
    const fullTitle = title ? `${title} | GTSInfo` : DEFAULT_TITLE;
    document.title = fullTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 3. Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;

    // 4. OpenGraph Tags
    const updateMeta = (prop, content) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (tag) {
        tag.content = content;
      }
    };
    updateMeta('og:title', fullTitle);
    updateMeta('og:description', description);
    updateMeta('og:url', canonicalUrl);

    // 5. Dynamic JSON-LD Structured Data
    const existingScript = document.getElementById('page-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('page-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalUrl, schema]);

  return null;
}
