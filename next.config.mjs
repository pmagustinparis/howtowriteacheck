/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'howwriteacheck.com' }],
        destination: 'https://www.howwriteacheck.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'howwriteacheck.com' }],
        destination: 'https://www.howwriteacheck.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
