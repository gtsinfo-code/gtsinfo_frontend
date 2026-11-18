import { Metadata } from 'next';
import { COMPANY_INFO } from '../constants/companyInfo';

export const SITE_URL = 'https://gtsinfo.vercel.app';
export const DEFAULT_SITE_TITLE = 'GTSInfo | Software Services & Technology';
export const DEFAULT_SITE_DESCRIPTION =
  'GTSInfo (GTS) - Software Services and Technology. Engineering the Future. Together. Enterprise technology solutions, software engineering, and career opportunities.';

export function constructMetadata({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  path = '',
  image = '/favlogo-share.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title ? `${title} | GTSInfo` : DEFAULT_SITE_TITLE;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 800,
          alt: `${COMPANY_INFO.name} Software Services & Technology`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
  };
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Corporation', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: 'GTS Software Services & Technology',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favlogo-share.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        'GTSInfo delivers enterprise full-stack software development, cloud infrastructure, automated QA testing, and data engineering solutions.',
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.line1,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0079767,
        longitude: 77.5426662,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: COMPANY_INFO.name,
      description: 'Software Services & Technology - Engineering the Future.',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
};
