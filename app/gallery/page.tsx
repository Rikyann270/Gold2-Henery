import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { SITE } from "../data";
import { BASE_URL, buildBreadcrumbJsonLd, buildPageMetadata } from "../seo";
import GalleryGrid, { type GalleryItem } from "./GalleryGrid";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery — Physical Gold Reserves & Cast Bullion",
  description: `A visual archive of ${SITE.name}: LBMA-certified investment gold bars, casting, and sovereign allocations from 1 kg to 10 tn.`,
  path: "/gallery",
  keywords: [
    "Kibali gold gallery",
    "physical gold bar photography",
    "gold bullion photos",
    "certified investment gold bars",
  ],
});

const ITEMS: GalleryItem[] = [
  {
    src: "/images/gallery/3A6A1814.jpg",
    alt: "Kibali physical gold bar inspection and assay serialisation",
    caption: "Cast gold bar serialisation & assay",
    tall: true,
  },
  {
    src: "/images/gallery/3A6A1815.jpg",
    alt: "Certified investment-grade physical gold bars",
    caption: "Investment gold bullion",
  },
  {
    src: "/images/gallery/3A6A1816.jpg",
    alt: "High-purity physical gold bar surface detail",
    caption: "Surface inspection & fineness",
  },
  {
    src: "/images/gallery/kibaligoldenterprise.com (video-converter.com).mp4",
    alt: "Kibali Gold Enterprise physical bullion showcase video",
    caption: "Physical bullion motion showcase",
    isVideo: true,
  },
  {
    src: "/images/gallery/3A6A1821.jpg",
    alt: "Allocated gold bar handling and security inspection",
    caption: "Sovereign allocation & custody check",
    tall: true,
  },
  {
    src: "/images/gallery/3A6A1822.jpg",
    alt: "Precision cast gold ingot under direct studio lighting",
    caption: "Precision cast bullion ingot",
  },
  {
    src: "/images/gallery/3A6A1823.jpg",
    alt: "LBMA accredited sovereign gold bars presentation",
    caption: "Sovereign wealth gold reserve",
  },
];

export default function GalleryPage() {
  return (
    <main id="top" className="kg-page">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: `${SITE.name} Gallery`,
          url: `${BASE_URL}/gallery`,
          image: ITEMS.filter((i) => !i.isVideo).map((i) => ({
            "@type": "ImageObject",
            contentUrl: `${BASE_URL}${i.src}`,
            name: i.caption,
            description: i.alt,
          })),
        }}
      />

      <header className="kg-head">
        <h1 className="kg-title">Gallery</h1>
        <p className="kg-sub">{ITEMS.length} media · 1 kg to 10 tn</p>
      </header>

      <GalleryGrid items={ITEMS} />
    </main>
  );
}
