/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform.defymobile.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w80/**",
      },
      {
        protocol: "https",
        hostname: "portal.esimcard.com", // ✅ Added your new domain
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
