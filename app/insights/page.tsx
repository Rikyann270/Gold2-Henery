import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import JsonLd from "../components/JsonLd";
import { NEWS, SITE } from "../data";
import {
  buildBreadcrumbJsonLd,
  buildInsightsJsonLd,
  buildPageMetadata,
} from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Precious Metals Market Insights & Institutional Gold Research",
  description:
    "Institutional perspectives on physical gold allocations (1 kg to 10 tn), central bank reserve accumulation, currency devaluation hedging, and allocated vs. unallocated bullion title.",
  path: "/insights",
  type: "article",
  keywords: [
    "physical gold market research",
    "central bank gold accumulation",
    "allocated vs unallocated gold",
    "institutional gold investment analysis",
  ],
});

const EXTRA_ARTICLES = [
  {
    icon: "shield",
    title: "Allocated vs. Unallocated: Why Physical Title Matters",
    text: "Understanding the crucial legal distinction between owning a physical bar in your name versus a paper claim against a bank balance sheet.",
    day: "14",
    month: "Oct",
  },
  {
    icon: "globe",
    title: "Central Bank Accumulation and the Changing Global Reserve Landscape",
    text: "How sovereign nations are accelerating gold reserves to diversify geopolitical exposure and strengthen currency backings.",
    day: "01",
    month: "Oct",
  },
];

export default function InsightsPage() {
  const allArticles = [...NEWS, ...EXTRA_ARTICLES];

  return (
    <main id="top" className="subpage-content">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Market Insights", path: "/insights" },
        ])}
      />
      <JsonLd data={buildInsightsJsonLd(allArticles)} />
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="insights-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Market Insights</span>
          </nav>
          <h1 id="insights-page-title" className="subpage-title">
            Precious Metals <span className="gold-text">Insights</span>
          </h1>
          <p className="subpage-lead">
            Timely analysis, market intelligence, and practical knowledge from {SITE.name}&apos;s advisory desk to guide your allocation decisions.
          </p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="section" aria-label="Research articles">
        <div className="container">
          <div className="news-list" style={{ marginTop: 0 }}>
            {allArticles.map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <article className="news-card">
                  <div className="news-icon">
                    <Icon name={n.icon} size={34} />
                  </div>
                  <div>
                    <h3>{n.title}</h3>
                    <p>{n.text}</p>
                    <Link href="/contact" className="more">
                      Discuss with an Advisor &rarr;
                    </Link>
                  </div>
                  <div className="date-box">
                    <b>{n.day}</b>
                    {n.month}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div
              style={{
                marginTop: "4.5rem",
                padding: "3rem",
                borderRadius: "20px",
                background: "linear-gradient(135deg, rgba(33, 20, 11, 0.8), rgba(13, 8, 5, 0.95))",
                border: "1px solid var(--line)",
                textAlign: "center",
              }}
            >
              <span className="eyebrow">Institutional Briefing</span>
              <h2 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>
                Need customized <span className="gold-text">market intelligence?</span>
              </h2>
              <p className="section-sub" style={{ maxWidth: 540, margin: "0 auto 1.8rem" }}>
                Our senior analysts provide quarterly private precious metals reports and spot trend analyses for corporate and high-volume wealth clients.
              </p>
              <Link href="/contact" className="btn btn-gold">
                Request Private Briefing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
