import type { Metadata, Viewport } from "next";
import { Work_Sans, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { SITE } from "./data";
import { cn } from "@/lib/utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import {
  BASE_URL,
  CORE_KEYWORDS,
  DEFAULT_OG_IMAGE,
  buildGlobalEntityGraph,
} from "./seo";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0704",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: SITE.name,
  title: {
    default: `${SITE.name} | Certified Physical Gold Bars (1 kg – 10 tn)`,
    template: `%s | ${SITE.name}`,
  },
  description: `Buy LBMA-certified physical investment gold bars from 1 kg to 10 metric tonnes (10,000 kg) at ${SITE.domain}. Insured worldwide armored delivery and allocated Tier-IV vault custody in Zurich, Dubai, and London.`,
  keywords: CORE_KEYWORDS,
  authors: [{ name: SITE.legalName, url: BASE_URL }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Precious Metals & Sovereign Wealth Custody",
  classification: "Investment Grade Physical Gold Bullion (1 kg – 10 tn)",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "en-GB": BASE_URL,
      "en-AE": BASE_URL,
      "tr-TR": BASE_URL,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: `${SITE.name} (${SITE.legalName})`,
    title: `${SITE.name} | Certified Gold Bars from 1 kg to 10 tn`,
    description:
      "LBMA-accredited investment gold bars from 1 kg to 10,000 kg with insured armored delivery and allocated Tier-IV vault custody.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Certified Gold Bars (1 kg – 10 tn)`,
    description:
      "Acquire physical, assay-certified gold bars from 1 kg to 10 metric tonnes with insured delivery and allocated Tier-IV vaulting.",
    images: [DEFAULT_OG_IMAGE.url],
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
    "geo.placename": "Dubai, London, Istanbul, Nairobi, Zurich",
    "ai-content-declaration": "human-authored-verified-precious-metals-data",
    "llms-txt": `${BASE_URL}/llms.txt`,
    "llms-full-txt": `${BASE_URL}/llms-full.txt`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(workSans.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="LLM Full Knowledge Base"
        />
        <JsonLd data={buildGlobalEntityGraph()} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
