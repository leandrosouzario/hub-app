const { PWA_ICON_VERSION } = require('./lib/pwa-icons')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/icons/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, must-revalidate',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/apple-touch-icon.png',
        destination: `/icons/apple-touch-icon-180.png?v=${PWA_ICON_VERSION}`,
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
