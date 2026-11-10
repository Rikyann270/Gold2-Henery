import type { MetadataRoute } from "next";
import { BASE_URL } from "./seo";

/**
 * Modern SEO + AEO + GEO robots.txt configuration for kibaligoldenterprise.com.
 * Explicitly grants indexing & citation permissions to search engines AND
 * AI answer/generative engines (OpenAI SearchBot/GPTBot, Perplexity, Claude, Google AI, Apple Intelligence).
 */
export default function robots(): MetadataRoute.Robots {
  const aiAndSearchAgents = [
    "*",
    "Googlebot",
    "Googlebot-Image",
    "Googlebot-Video",
    "Google-Extended",
    "Bingbot",
    "Applebot",
    "Applebot-Extended",
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
    "DuckDuckBot",
    "YouBot",
    "PhindBot",
  ];

  return {
    rules: aiAndSearchAgents.map((agent) => ({
      userAgent: agent,
      allow: ["/", "/llms.txt", "/llms-full.txt"],
      disallow: ["/api/", "/_next/"],
    })),
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

