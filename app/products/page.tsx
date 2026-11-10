import type { Metadata } from "next";
import { SITE } from "../data";
import JsonLd from "../components/JsonLd";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildProductsJsonLd,
} from "../seo";
import ProductConfigurator from "./ProductConfigurator";

export const metadata: Metadata = buildPageMetadata({
  title: "3D Gold Bar Configurator & Catalog (1 kg – 10,000 kg)",
  description: `Configure and acquire LBMA-certified physical gold bars from 1 kg to 10,000 kg (10 tn) at ${SITE.domain}. Instant spot allocation, insured armored delivery, and Tier-IV vault custody.`,
  path: "/products",
  keywords: [
    "3D gold bar configurator",
    "1 kg gold bar",
    "2 kg gold bar",
    "5 kg gold bar",
    "10 kg gold bar",
    "12.5 kg 400 oz Good Delivery gold bar",
    "100 kg gold allocation",
    "1000 kg 1 tonne gold reserve",
    "10000 kg 10 tonne sovereign gold tranche",
  ],
});

export default function ProductsPage() {
  return (
    <main className="gp-page">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products (1 kg – 10,000 kg)", path: "/products" },
        ])}
      />
      <JsonLd data={buildProductsJsonLd()} />

      {/* Background video */}
      <video
        className="gp-bg-video"
        src="/gold%20black.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="gp-bg-overlay" />

      <ProductConfigurator />
    </main>
  );
}
