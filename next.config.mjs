/** @type {import('next').NextConfig} */
// Content-Security-Policy — a sane baseline. 'unsafe-inline'/'unsafe-eval' are
// required by Next's runtime + dev refresh + styled-jsx without a nonce setup;
// can be hardened with nonces later. frame-src allows the embedded Ivy assistant.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "connect-src 'self' https:",
  "frame-src 'self' https://ivyanimation.netlify.app https://ivywall-app.vercel.app",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: 'camera=(self "https://ivyanimation.netlify.app"), microphone=(self "https://ivyanimation.netlify.app"), geolocation=(), browsing-topics=()',
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig = {
  reactStrictMode: true,
  // Native Next.js on Vercel (no static export) so API routes / serverless work.
  // Image optimizer ON — serves per-device AVIF/WebP so phones/old devices get
  // small images instead of full 1600px JPEGs.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1280, 1600],
  },
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
