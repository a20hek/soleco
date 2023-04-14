/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pxrrrtdbrnvxcqocepac.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/project-screenshots/**',
      },
    ],
  },
};

module.exports = nextConfig;
