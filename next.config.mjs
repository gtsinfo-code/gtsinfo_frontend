/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  env: {
    NEXT_APP_ENV: process.env.NEXT_APP_ENV || process.env.NEXT_PUBLIC_APP_ENV || 'production',
    NEXT_SITE_URL: process.env.NEXT_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://gtsinfo.in',
    NEXT_CONTACT_RECIPIENT_EMAIL:
      process.env.NEXT_CONTACT_RECIPIENT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAIL ||
      'hr@gtsinfo.in',
    NEXT_GOOGLE_SITE_VERIFICATION:
      process.env.NEXT_GOOGLE_SITE_VERIFICATION ||
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      '',
  },
};

export default nextConfig;
