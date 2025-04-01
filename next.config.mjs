/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/2023',
            destination: '/2023/index.html',
          },
          {
            source: '/2024',
            destination: '/2024/index.html',
          },
        ];
      },
};

export default nextConfig;
