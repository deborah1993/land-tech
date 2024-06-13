/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value:
              "ALLOW-FROM https://land-tech-iuodj3roi-deborah1993s-projects.vercel.app/",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://land-tech-iuodj3roi-deborah1993s-projects.vercel.app/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
