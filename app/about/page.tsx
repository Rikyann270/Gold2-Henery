import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { OFFICES, SITE } from "../data";

export const metadata: Metadata = {
  title: `About Us | ${SITE.name}`,
  description:
    "Learn about Kibali Gold Market, our heritage in sovereign wealth preservation, LBMA-accredited refining partners, and our commitment to pure physical gold.",
};

export default function AboutPage() {
  return (
    <main id="top" className="subpage-content">
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="about-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <h1 id="about-page-title" className="subpage-title">
            Generational Wealth, <span className="gold-text">Built on Gold</span>
          </h1>
          <p className="subpage-lead">
            {SITE.name} is a global precious-metals firm dedicated to helping individuals, families,
            and institutions own physical gold with absolute confidence, privacy, and integrity.
          </p>
        </div>
      </section>

      {/* CORE STORY / MEDIA SPLIT */}
      <section className="section" aria-labelledby="heritage-title">
        <div className="container split">
          <Reveal>
            <div className="media-card">
              <Image
                src="/images/gold-bars-stack2.jpg"
                alt="Certified stack of Kibali gold bars"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="section-title" id="heritage-title">
              Preserving value across <span className="gold-text">centuries</span>
            </h2>
            <p className="section-sub">
              Paper currencies fluctuate and digital assets face unpredictable systemic risks.
              Physical gold has remained the bedrock of sovereign financial sovereignty for over 5,000 years.
            </p>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              At {SITE.name}, we do not deal in paper gold, unallocated certificates, or synthetic derivatives.
              Every bar purchased through our network is physical, individually numbered, fully allocated, and 100% owned by you.
            </p>
            <ul className="check-list" style={{ marginTop: "1.5rem" }}>
              <li>Direct allocation with no counterparty risk</li>
              <li>Accredited refiners adhering to LBMA Responsible Gold Guidance</li>
              <li>Discrete, armored logistics with full Lloyd&apos;s transit insurance</li>
              <li>Transparent live pricing tied directly to interbank spot markets</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GLOBAL HUBS */}
      <section className="section" aria-labelledby="hubs-title">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span className="eyebrow">Worldwide Footprint</span>
              <h2 className="section-title" id="hubs-title">
                Global presence, <span className="gold-text">local execution</span>
              </h2>
              <p className="section-sub">
                With regional offices across major precious-metals crossroads, our clients benefit from seamless international liquidity and multi-jurisdiction storage.
              </p>
            </div>
          </Reveal>

          <div className="grid-2">
            {OFFICES.map((o, idx) => (
              <Reveal key={o.city} delay={idx * 100}>
                <div className="feature" style={{ padding: "2.4rem" }}>
                  <div className="feature-icon">
                    <Icon name="globe" />
                  </div>
                  <h3>{o.city} Trading Desk</h3>
                  <p style={{ color: "var(--gold-300)", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: "0.8rem", fontWeight: 600 }}>
                    {o.note}
                  </p>
                  <p>
                    Full physical gold fulfillment, secure vault inspection, and private advisory services tailored to high-net-worth portfolios.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/contact" className="btn btn-gold">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
