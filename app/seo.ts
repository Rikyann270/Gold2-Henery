import type { Metadata } from "next";
import { FAQ, NEWS, OFFICES, PRODUCTS, SITE, STEPS } from "./data";

export const BASE_URL = SITE.url;

export const DEFAULT_OG_IMAGE = {
  url: `${BASE_URL}/images/hero-gold-bar.jpg`,
  width: 1200,
  height: 630,
  alt: `${SITE.name} (${SITE.domain}) — Certified Investment Gold Bars from 1 kg to 10 tn`,
};

export const CORE_KEYWORDS = [
  "Kibali Gold Enterprise",
  "Kibali Gold Market",
  "kibaligoldenterprise.com",
  "buy 1 kg gold bar",
  "buy physical gold bars",
  "institutional gold bullion",
  "1 kg to 10 tn gold allocation",
  "LBMA Good Delivery gold bars",
  "12.5 kg 400 oz gold ingot",
  "sovereign gold reserve allocation",
  "allocated gold vault storage",
  "Tier-IV gold custody Zurich Dubai London",
  "assay certified 999.9 fine gold",
  "wholesale gold bullion dealer",
  "insured armored gold delivery",
  "physical gold wealth preservation",
  "Istanbul Dubai London Nairobi gold trading desk",
];

type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
};

/**
 * Generates comprehensive Next.js Metadata for SEO, AEO, GEO, OpenGraph, and Twitter/X cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE.url,
  type = "website",
}: PageSeoConfig): Metadata {
  const canonicalUrl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_KEYWORDS]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "en-GB": canonicalUrl,
        "en-AE": canonicalUrl,
        "tr-TR": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: `${SITE.name} (${SITE.legalName})`,
      title: `${title} | ${SITE.name}`,
      description,
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.placename": "Dubai, London, Istanbul, Nairobi",
      "ai-content-declaration": "human-authored-verified-precious-metals-data",
      "llms-txt": `${BASE_URL}/llms.txt`,
      "llms-full-txt": `${BASE_URL}/llms-full.txt`,
    },
  };
}

/**
 * Global Organization + WebSite Entity Graph (GEO & Knowledge Graph authority).
 */
export function buildGlobalEntityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": `${BASE_URL}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        alternateName: ["Kibali Gold", "Kibali Gold Enterprise", "Kibali Gold Market"],
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/hero-gold-bar.jpg`,
          width: 1200,
          height: 630,
        },
        image: `${BASE_URL}/images/hero-gold-bar.jpg`,
        description:
          "Kibali Gold Enterprise (Kibali Gold Market) is an institutional and private physical gold bullion dealer offering LBMA-certified gold bars from 1 kg to 10 metric tonnes (10,000 kg) with insured armored delivery and allocated Tier-IV vault custody.",
        email: SITE.email,
        telephone: SITE.phone,
        slogan: SITE.tagline,
        priceRange: "$85,200 - Institutional Spot Tranches",
        currenciesAccepted: "USD, EUR, GBP, CHF, AED",
        paymentAccepted: "Bank Wire Transfer, Institutional Treasury Lines",
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Turkey" },
          { "@type": "Country", name: "Kenya" },
          { "@type": "Country", name: "Switzerland" },
          { "@type": "Country", name: "United States" },
          { "@type": "GeoShape", name: "Worldwide Insured Delivery" },
        ],
        knowsAbout: [
          "Physical Gold Bullion (1 kg to 10,000 kg)",
          "LBMA Good Delivery 12.5 kg (400 oz) Gold Ingots",
          "Assay Certified 999.9 Fine Investment Gold",
          "X-Ray Fluorescence (XRF) Spectrometry Assay Verification",
          "Allocated Tier-IV Vault Custody (Zurich, Dubai, London)",
          "Sovereign & Institutional Gold Reserve Allocations",
          "Insured International Armored Bullion Logistics",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales and private advisory desk",
            email: SITE.email,
            telephone: SITE.phone,
            availableLanguage: ["English", "Turkish", "Arabic", "French", "Swahili"],
            areaServed: "Worldwide",
          },
        ],
        location: OFFICES.map((o) => ({
          "@type": "Place",
          name: `${SITE.name} — ${o.city} Trading Desk`,
          address: {
            "@type": "PostalAddress",
            addressLocality: o.city,
            addressCountry: o.note,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE.name,
        alternateName: SITE.legalName,
        description: SITE.tagline,
        inLanguage: "en-US",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
    ],
  };
}

/**
 * Builds BreadcrumbList JSON-LD for subpages.
 */
export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path === "/" ? BASE_URL : `${BASE_URL}${item.path}`,
    })),
  };
}

/**
 * Builds Product & ItemList JSON-LD for 1 kg to 10 tn gold bars.
 */
export function buildProductsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/products#catalog`,
    name: "Kibali Gold Enterprise Physical Gold Bar Allocations (1 kg – 10 tn)",
    description:
      "LBMA-certified investment-grade physical gold bars and sovereign reserve allocations starting from 1 kg up to 10 metric tonnes (10,000 kg).",
    url: `${BASE_URL}/products`,
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, index) => {
      const numericPrice = Number(p.price.replace(/[^0-9.]/g, ""));
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          "@id": `${BASE_URL}/products#${p.id}`,
          sku: p.id.toUpperCase(),
          name: p.name,
          description: `${p.description}. Weight: ${p.weight} (${p.kg} kg). Purity: 999.9 Fine Investment Grade Gold. Fulfillment: ${p.service}.`,
          image: `${BASE_URL}/images/hero-gold-bar.jpg`,
          category: "Physical Gold Bullion",
          material: "999.9 Fine Gold (Au)",
          brand: {
            "@type": "Brand",
            name: SITE.name,
          },
          manufacturer: {
            "@id": `${BASE_URL}/#organization`,
          },
          weight: {
            "@type": "QuantitativeValue",
            value: p.kg,
            unitCode: "KGM",
            unitText: "kg",
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Purity",
              value: "999.9 Fine Investment Grade",
            },
            {
              "@type": "PropertyValue",
              name: "Premium",
              value: p.premium,
            },
            {
              "@type": "PropertyValue",
              name: "Custody & Delivery",
              value: p.service,
            },
          ],
          offers: {
            "@type": "Offer",
            url: `${BASE_URL}/contact`,
            priceCurrency: "USD",
            ...(numericPrice > 0 ? { price: numericPrice.toString() } : {}),
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@id": `${BASE_URL}/#organization`,
            },
          },
        },
      };
    }),
  };
}

/**
 * Builds FAQPage + Speakable JSON-LD for Answer Engine Optimization (AEO).
 */
export function buildFaqJsonLd(
  faqs: Array<{ q: string; a: string }> = FAQ,
  pagePath = "/faq"
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}${pagePath}#faq`,
    url: `${BASE_URL}${pagePath}`,
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".faq summary", ".faq p", ".lead"],
    },
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * Builds HowTo JSON-LD for the 4-Step Gold Acquisition & Custody Process (AEO / Rich Snippets).
 */
export function buildHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BASE_URL}/process#howto`,
    name: "How to Buy & Vault Physical Gold Bars (1 kg to 10 tn) with Kibali Gold Enterprise",
    description:
      "End-to-end 4-step institutional workflow for acquiring certified physical gold bars from 1 kg to 10,000 kg with live spot price lock, insured armored delivery, or allocated Tier-IV vault storage.",
    totalTime: "P3D",
    step: STEPS.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.text,
      url: `${BASE_URL}/process#steps-title`,
    })),
  };
}

/**
 * Builds CollectionPage & BlogPosting/Article JSON-LD for Insights.
 */
export function buildInsightsJsonLd(
  articles: Array<{ title: string; text: string; day: string; month: string }> = NEWS
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}/insights#collection`,
    url: `${BASE_URL}/insights`,
    name: `Precious Metals Market Insights & Research | ${SITE.name}`,
    description:
      "Institutional research on physical gold allocations, central bank reserves, and allocated vs. unallocated gold ownership.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Article",
          headline: a.title,
          description: a.text,
          author: {
            "@id": `${BASE_URL}/#organization`,
          },
          publisher: {
            "@id": `${BASE_URL}/#organization`,
          },
          mainEntityOfPage: `${BASE_URL}/insights`,
        },
      })),
    },
  };
}

