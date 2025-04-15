/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'golmptyxjzpsbyznhcrj.supabase.co', // Supabase storage domain'i
      // ... diğer domainler
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 