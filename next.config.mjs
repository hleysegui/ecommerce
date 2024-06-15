/* /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost"],
        remotePatterns: [
           {
              protocol: "https",
              hostname: "avatars.githubusercontent.com",
              port: "",
              pathname: "/**",
           },
        ],
        
    },
};

export default nextConfig;