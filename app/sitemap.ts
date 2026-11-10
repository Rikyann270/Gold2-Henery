import type { MetadataRoute } from "next";
import { BASE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${BASE_URL}/images/hero-gold-bar.jpg`,
        `${BASE_URL}/images/gold-bars-stack.jpg`,
        `${BASE_URL}/images/gold-bars-stack2.jpg`,
        `${BASE_URL}/images/secure-vault.jpg`,
      ],
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
      images: [`${BASE_URL}/images/hero-gold-bar.jpg`],
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${BASE_URL}/images/secure-vault.jpg`],
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE_URL}/images/gold-bars-stack2.jpg`],
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/llms-full.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

