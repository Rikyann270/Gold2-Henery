import type { Metadata } from "next";
import { SITE } from "../data";
import ProductConfigurator from "./ProductConfigurator";

export const metadata: Metadata = {
  title: `Products | ${SITE.name}`,
  description: `Choose your gold bar weight, from 1 kg to 10,000 kg, with ${SITE.name}.`,
};

export default function ProductsPage() {
  return (
    <main className="gp-page">
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
