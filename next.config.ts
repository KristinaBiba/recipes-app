import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.themealdb.com',
                port: '',
                pathname: '/images/media/**',
            },
        ],
        deviceSizes: [320, 425, 640, 750, 828, 1080, 1200, 1920],
    },
};

export default nextConfig;
