/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
            {
                hostname: "res.cloudinary.com"
            }
        ]
    }
};

export default nextConfig;
