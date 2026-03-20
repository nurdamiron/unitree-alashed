/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.unitree.com" },
      { protocol: "https", hostname: "oss-global-cdn.unitree.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  async headers() {
    return [
      // Security + SEO headers for all pages
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Long-term cache for static assets
      {
        source: "/(.*)\\.(ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Short cache for HTML pages (allow revalidation)
      {
        source: "/((?!_next/static|_next/image|favicon).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400" },
        ],
      },
      // Next.js static chunks — immutable cache
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Allow AI crawlers to access llms.txt
      {
        source: "/llms.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Canonical redirect: remove trailing slash
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
