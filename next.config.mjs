/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  customWorkerSrc: "service-worker",
  dest: "public",
});

export default withPWA(nextConfig);
