/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'journey.moodforest.co',
          },
        ],
        destination: 'https://fasting.moodforest.co/:path*',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;