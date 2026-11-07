import type { Metadata } from "next";
import Link from "next/link";
import Collections from "../components/Collections";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { SITE } from "../data";

export const metadata: Metadata = {
  title: `Gold Bars Catalog | ${SITE.name}`,
  description:
    "Explore our complete range of certified investment gold bars from 1 kg to 10 tn. Kilogram, multi-kilo, and institutional reserve allocations with instant spot pricing.",
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
                <h3>Tamper-Proof CertiCard &amp; Ingot Seals</h3>
                <p>
                  Kilogram bars and institutional tranches (1 kg – 10 tn) are hermetically encased or serialized with assayer signatures and verifiable audit ledgers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="vault" />
                </div>
                <h3>Segregated Vault Custody</h3>
                <p>
                  Direct unencumbered legal title in Zurich, Dubai, or London. Your exact serial numbers are held segregated with regular independent audits.
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
