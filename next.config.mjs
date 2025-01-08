/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   LAUNCHDARKLY_SDK_KEY: process.env.LAUNCHDARKLY_SDK_KEY,
  // },
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
