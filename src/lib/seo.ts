import { Metadata } from 'next';
import { COMPANY_INFO } from '../constants/companyInfo';

export const SITE_URL = 'https://gtsinfo.in';
export const DEFAULT_SITE_TITLE = 'GTSInfo (GTS) — Enterprise Software Services & Technology Bengaluru';
export const DEFAULT_SITE_DESCRIPTION =
  'GTSInfo (GTS) is a premier enterprise software services and technology firm in Bengaluru, delivering full-stack web applications, cloud DevOps, data engineering, and automated QA.';

export function constructMetadata({
  title,
  description = DEFAULT_SITE_DESCRIPTION,
  path = '',
  image = '/favlogo-share.png',
  noIndex = false,
  keywords = [
    'GTS',
    'GTS Info',
    'GTSInfo',
    'GTS Bengaluru',
    'GTS Software Services',
    'Software Services Bengaluru',
    'Mahalakshmi Layout Technology Center',
  ],
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const fullTitle = title ? `${title} | GTSInfo` : DEFAULT_SITE_TITLE;
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: fullTitle,
    description,
    keywords,
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
      siteName: `${COMPANY_INFO.name} (GTS)`,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} (GTS) Software Services & Technology`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
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
      alternateName: ['GTS', 'GTS Info', 'GTSInfo', 'GTS Software Services & Technology', 'GTS Bengaluru'],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favlogo-share.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        'GTSInfo (GTS) delivers enterprise full-stack software development, cloud infrastructure, automated QA testing, and data engineering solutions in Bengaluru.',
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.line1,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.pincode,
        addressCountry: 'IN',
      },
      location: [
        {
          '@type': 'Place',
          name: 'GTS Corporate Headquarters',
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
        },
        {
          '@type': 'Place',
          name: 'GTS Whitefield Technology Center',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3rd Floor, Crescent 4, Prestige Shantiniketan, ITPL Main Road',
            addressLocality: 'Whitefield, Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560048',
            addressCountry: 'IN',
          },
        },
      ],
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
      alternateName: 'GTS Info Official Website',
      description: 'GTSInfo (GTS) — Software Services & Technology. Engineering the Future. Together.',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
};

export function constructBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
      })),
    ],
  };
}
