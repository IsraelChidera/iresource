/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static01.nyt.com',          
          },
        ],
      },
};

module.exports = nextConfig;

