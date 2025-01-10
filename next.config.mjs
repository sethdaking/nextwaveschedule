/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  extends: [
    'next', // or your base ESLint configuration
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh", port: "", protocol: "https" },
      { hostname: "utfs.io", port: "", protocol: "https" },
      {
        hostname: "avatars.githubusercontent.com",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
