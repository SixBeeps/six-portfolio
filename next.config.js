/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['lastfm.freetls.fastly.net']
    remotePatterns: [{
      hostname: 'lastfm.freetls.fastly.net',
    }]
  }
}

module.exports = nextConfig
