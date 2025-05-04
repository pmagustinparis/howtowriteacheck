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
      // Redirecciones para el dominio sin www
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
      // Redirecciones para HTTP
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
      // Redirecciones para www sin HTTPS
      {
        source: '/',
        has: [{ type: 'host', value: 'www.howwriteacheck.com' }],
        destination: 'https://www.howwriteacheck.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.howwriteacheck.com' }],
        destination: 'https://www.howwriteacheck.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
