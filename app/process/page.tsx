import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import JsonLd from "../components/JsonLd";
import { SITE, STEPS } from "../data";
import {
  buildBreadcrumbJsonLd,
  buildHowToJsonLd,
  buildPageMetadata,
} from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How It Works — 4-Step Gold Allocation & Tier-IV Vault Custody",
  description:
    "Learn the 4-step process of acquiring physical gold bars (1 kg to 10 tn) with Kibali Gold Enterprise: from live interbank spot lock to insured armored delivery or allocated vault storage in Zurich, Dubai, and London.",
  path: "/process",
  ogImage: `${SITE.url}/images/secure-vault.jpg`,
  keywords: [
    "how to buy 1 kg gold bar",
    "allocated gold vault storage Zurich Dubai London",
    "armored bullion delivery process",
    "Tier-IV gold vault custody",
  ],
});

export default function ProcessPage() {
  return (
    <main id="top" className="subpage-content">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/process" },
        ])}
      />
      <JsonLd data={buildHowToJsonLd()} />
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="process-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>How It Works</span>
          </nav>
          <h1 id="process-page-title" className="subpage-title">
            From Order to <span className="gold-text">Ownership</span>
          </h1>
          <p className="subpage-lead">
            Acquiring physical gold should be straightforward, discrete, and completely secure.
            Here is our end-to-end process from live price lock to final custody.
          </p>
        </div>
      </section>

      {/* 4 STEPS */}
      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="eyebrow">Step-by-Step Flow</span>
              <h2 className="section-title" id="steps-title">
                The 4-step <span className="gold-text">journey</span>
              </h2>
            </div>
          </Reveal>

          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="step">
                  <div className="step-num" style={{ ["--p" as string]: s.p }}>
                    {s.n}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VAULT STORAGE DEEP DIVE */}
      <section className="section" aria-labelledby="vault-title">
        <div className="container">
          <Reveal className="split">
            <div>
              <span className="eyebrow">Secure Custody</span>
              <h2 className="section-title" id="vault-title">
                Allocated <span className="gold-text">vault storage</span>
              </h2>
              <p className="section-sub">
                Prefer not to store physical gold at home? Our ultra-secure vault facilities in Zurich, Dubai, and London provide allocated, segregated storage.
              </p>
              <ul className="check-list" style={{ marginTop: "1.5rem" }}>
                <li><strong>100% Allocated:</strong> Your exact serial numbers remain solely yours, never pooled or loaned.</li>
                <li><strong>All-Risk Insurance:</strong> Fully insured with comprehensive coverage at full replacement market value.</li>
                <li><strong>Independent Auditing:</strong> Regular physical audits conducted by tier-one international accounting firms.</li>
                <li><strong>On-Demand Delivery:</strong> Request physical extraction and armored courier dispatch whenever desired.</li>
              </ul>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/contact" className="btn btn-gold">
                  Inquire About Vaulting
                </Link>
              </div>
            </div>
            <div className="media-card">
              <Image
                src="/images/secure-vault.jpg"
                alt="High-security gold vault with stacked bars"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
