/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Native Next.js on Vercel (no static export) so API routes / serverless work.
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
