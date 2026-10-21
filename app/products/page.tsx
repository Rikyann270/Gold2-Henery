import type { Metadata } from "next";
import Link from "next/link";
import Collections from "../components/Collections";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: `Gold Bars Catalog | ${SITE.name}`,
  description:
    "Explore our complete range of certified investment gold bars from 1g to 1kg. Minted, cast, and institutional bars with instant spot pricing.",
};

export default function ProductsPage() {
  return (
    <main id="top" className="subpage-content">
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="products-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Gold Catalog</span>
          </nav>
          <h1 id="products-page-title" className="subpage-title">
            The Gold <span className="gold-text">Collection</span>
          </h1>
          <p className="subpage-lead">
            Physical, investment-grade gold bars refined to sovereign standards. Sourced exclusively
            from LBMA-accredited refineries, individually serialized, and backed by verifiable assay certificates.
          </p>
        </div>
      </section>

      {/* CHANEL-STYLE #E6EFFF CATALOG */}
      <Collections />

      {/* PRODUCT ASSURANCE & SPECIFICATIONS */}
      <section className="section" aria-labelledby="standards-title">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="eyebrow">Purity &amp; Standards</span>
              <h2 className="section-title" id="standards-title">
                Sovereign grade <span className="gold-text">refining</span>
              </h2>
              <p className="section-sub">
                Every bar that leaves our facilities meets stringent international hallmarking and vault custody standards.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            <Reveal delay={0}>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="shield" />
                </div>
                <h3>Assay Certified Purity</h3>
                <p>
                  Certified investment gold with verifiable origin. Each bar is strictly verified by independent spectrographic assay tests.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="scale" />
                </div>
                <h3>Tamper-Proof CertiCard</h3>
                <p>
                  Fractional and minted bars (1g - 100g) are hermetically encased in serial-matched tamper-evident packaging with assayer signature.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="refresh" />
                </div>
                <h3>Guaranteed Buy-Back</h3>
                <p>
                  Immediate liquidity whenever you need it. We offer instant repurchasing linked transparently to the global gold spot price.
                </p>
              </div>
            </Reveal>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/contact" className="btn btn-gold">
              Inquire for Custom Weights &amp; Bulk Orders
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
