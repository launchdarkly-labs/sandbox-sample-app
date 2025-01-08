/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LAUNCHDARKLY_SDK_KEY: process.env.LAUNCHDARKLY_SDK_KEY,
  },
}

export default nextConfig; 