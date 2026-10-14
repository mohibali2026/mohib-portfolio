import type { NextConfig } from "next";

// The Omid prototype is its own Vercel project (github.com/mohibali2026/omid), built with
// basePath "/omid". These rewrites serve it at mohibali.com/omid without redirecting.
const OMID_ORIGIN = "https://omid-seven.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/omid", destination: `${OMID_ORIGIN}/omid` },
      { source: "/omid/:path*", destination: `${OMID_ORIGIN}/omid/:path*` },
    ];
  },
};

export default nextConfig;
