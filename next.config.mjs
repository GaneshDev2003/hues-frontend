/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  customWorkerSrc: 'service-worker',
  customWorkerPrefix: 'not/a-worker',
});

export default withPWA(nextConfig);
