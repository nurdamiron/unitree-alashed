import { MetadataRoute } from "next"

const BASE = "https://unitree.alashed.kz"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All standard search engines
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Google AI (Gemini training)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // OpenAI GPT crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Anthropic Claude crawler
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Apple AI
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
