
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {

                hostname: 'letsenhance.io',
            },
            {

                hostname: 'images.unsplash.com'
            }
        ],
    }
};

export default nextConfig;
