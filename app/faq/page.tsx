import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import JsonLd from "../components/JsonLd";
import { FAQ, SITE } from "../data";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageMetadata,
} from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions (FAQ) — Assay, Delivery & Vaulting",
  description:
    "Direct answers on buying physical gold bars (1 kg to 10 tn), XRF assay authentication, live spot pricing, international armored shipping, and allocated vault storage with Kibali Gold Enterprise.",
  path: "/faq",
  keywords: [
    "physical gold FAQ",
    "how is gold bar purity verified XRF",
    "allocated gold ownership FAQ",
    "can I inspect my gold vault storage",
  ],
});

const DETAILED_FAQS = [
  ...FAQ,
  {
    q: "How does Kibali Gold Market verify purity?",
    a: "Every gold bar is assayed using non-destructive X-ray fluorescence (XRF) spectrometry and density verification. Bars are sourced strictly from refineries accredited by the LBMA or equivalent sovereign mints.",
  },
  {
    q: "Are the gold bars allocated in my own name?",
    a: "Yes, 100%. Whether you take physical delivery or elect for vault custody, you hold unencumbered legal title to the specific, serialized bars. Your assets are never pooled, loaned, or leveraged.",
  },
  {
    q: "Can I inspect my vault storage in person?",
    a: "Yes. Clients storing gold in our partner facilities in Zurich, Dubai, or London may schedule physical audit visits with 48 hours notice in accordance with vault security protocols.",
  },
  {
    q: "How does allocated ownership work?",
    a: "Every bar purchased through our network is physical, individually numbered, fully allocated, and 100% owned by you. You receive the specific serial numbers and certified assay logs immediately upon settlement.",
  },
];

export default function FAQPage() {
  return (
    <main id="top" className="subpage-content">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(DETAILED_FAQS, "/faq")} />
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="faq-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>FAQ</span>
          </nav>
          <h1 id="faq-page-title" className="subpage-title">
            Frequently Asked <span className="gold-text">Questions</span>
          </h1>
          <p className="subpage-lead">
            Transparent guidance on bar authentication, ordering, settlement, armored shipping, and allocated custody.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION LIST */}
      <section className="section" aria-label="FAQ Accordion">
        <div className="container">
          <div className="faq" style={{ marginTop: 0 }}>
            {DETAILED_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div
              style={{
                marginTop: "4.5rem",
                textAlign: "center",
                padding: "3rem 2rem",
                borderRadius: "20px",
                background: "rgba(22, 13, 7, 0.6)",
                border: "1px solid var(--line)",
              }}
            >
              <h2 className="section-title" style={{ fontSize: "1.7rem", marginBottom: "0.8rem" }}>
                Have a question not listed <span className="gold-text">here?</span>
              </h2>
              <p className="section-sub" style={{ maxWidth: 500, margin: "0 auto 1.8rem" }}>
                Our private desk is at your service. Speak directly to an advisor who can answer technical specifications or custom order inquiries.
              </p>
              <Link href="/contact" className="btn btn-gold">
                Speak With an Advisor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
