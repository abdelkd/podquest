/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.thenakedscientists.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
