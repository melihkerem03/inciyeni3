/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'golmptyxjzpsbyznhcrj.supabase.co', // Supabase storage domain'i
      // ... diğer domainler
    ],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  output: 'standalone',
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
}

module.exports = nextConfig 