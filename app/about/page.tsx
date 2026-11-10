import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import Reveal from "../components/Reveal";
import Topography from "@/components/Topography";
import { OFFICES, SITE } from "../data";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Kibali Gold Enterprise — Vision, LBMA Standards & Global Desks",
  description:
    "Discover Kibali Gold Enterprise (kibaligoldenterprise.com): sovereign physical gold allocations from 1 kg to 10 tn, LBMA-accredited refining standards, Tier-IV vault custody, and global trading desks in Istanbul, Dubai, London, and Nairobi.",
  path: "/about",
  ogImage: `${SITE.url}/images/gold-bars-stack2.jpg`,
  keywords: [
    "about Kibali Gold Enterprise",
    "LBMA responsible gold guidance",
    "allocated physical gold ownership",
    "Dubai London Istanbul Nairobi gold trading desk",
  ],
});

const PILLARS = [
  {
    title: "OUR VISION",
    text: "To establish the global benchmark for direct, unencumbered physical gold ownership—from 1 kg private allocations to 10 tn sovereign reserves.",
    href: "/products",
    cta: "EXPLORE ALLOCATIONS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "OUR STANDARDS",
    text: "Every ingot is sourced strictly from LBMA-accredited refineries, verified by X-ray fluorescence (XRF) spectrometry, and sealed with its assay certificate.",
    href: "/process",
    cta: "REFINING PROTOCOL",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "OUR CUSTODY",
    text: "Segregated Tier-IV vault facilities across Zurich, Dubai, and London paired with full-value insured armored logistics to your designated destination.",
    href: "/contact",
    cta: "INQUIRE CUSTODY",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 8.5v-2M12 17.5v-2M8.5 12h-2M17.5 12h-2" />
      </svg>
    ),
  },
];

const STORY_CARDS = [
  {
    step: "1 KG – 5 KG",
    featured: true,
    lead: "Kilogram Investment Bars refined to 999.9 fine sovereign purity.",
    body: "Individually cast and serialized bars engineered for private wealth portfolios, family offices, and direct physical delivery or segregated vaulting.",
  },
  {
    step: "12.5 KG – 100 KG",
    featured: false,
    lead: "London Good Delivery 400 oz ingots & multi-kilo treasury allocations.",
    body: "Institutional-grade central banking bars accompanied by complete refinery audit logs, ultrasonic density verification, and chain-of-custody dossiers.",
  },
  {
    step: "1 TN – 10 TN",
    featured: false,
    lead: "Sovereign & strategic wealth tranches up to 10,000 kilograms.",
    body: "Executed through dedicated treasury desks with bespoke central bank vault custody, independent tier-one auditing, and private armored charter.",
  },
];

const HUB_IMAGES = [
  "/images/slider_images/1c744bae-5415-43db-9488-461140ce50c5.webp",
  "/images/slider_images/2a2f091d-351d-4dd4-bbf4-dc0fe0fbe77c.webp",
  "/images/slider_images/Professional_meet_studio_photo.jpg",
  "/images/slider_images/c919eed0-7830-442d-8568-7462b0f71ec5.webp",
];

export default function AboutPage() {
  return (
    <main id="top" className="ka-page">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />

      {/* 1. NEOM-INSPIRED FULL-BLEED CINEMATIC HERO */}
      <section className="ka-hero" aria-labelledby="about-page-title">
        <Image
          src="/images/gold-bars-stack.jpg"
          alt="Kibali Gold Enterprise sovereign gold reserves"
          fill
          priority
          sizes="100vw"
          className="ka-hero-img"
        />
        <div className="ka-hero-shade" />

        <div className="container ka-hero-content">
          <h1 id="about-page-title" className="ka-hero-title">
            ABOUT KIBALI
          </h1>
          <p className="ka-hero-sub">A vision of sovereign value</p>
        </div>
      </section>

      {/* BREADCRUMB STRIP */}
      <div className="ka-breadcrumb-bar">
        <div className="container">
          <nav className="ka-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="ka-crumb-current">ABOUT</span>
          </nav>
        </div>
      </div>

      {/* 2. ODINAUT HORIZON ARC + NEOM MANIFESTO STATEMENT */}
      <section className="ka-manifesto-section" aria-label="Company manifesto">
        <div className="ka-horizon-stage" aria-hidden="true">
          <div className="ka-horizon-ambient" />
          <svg
            className="ka-horizon-svg"
            viewBox="0 0 1440 260"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="kaArcOuter" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8a3200" stopOpacity="0" />
                <stop offset="18%" stopColor="#b84a0a" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#f59322" stopOpacity="0.95" />
                <stop offset="82%" stopColor="#b84a0a" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#8a3200" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="kaArcCore" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97724" stopOpacity="0" />
                <stop offset="22%" stopColor="#e88425" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ffdca4" stopOpacity="1" />
                <stop offset="78%" stopColor="#e88425" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d97724" stopOpacity="0" />
              </linearGradient>
              <filter id="kaGlowWide" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="24" />
              </filter>
              <filter id="kaGlowSharp" x="-10%" y="-40%" width="120%" height="180%">
                <feGaussianBlur stdDeviation="1.8" />
              </filter>
            </defs>
            <path
              d="M 40 245 Q 720 -45 1400 245"
              stroke="url(#kaArcOuter)"
              strokeWidth="34"
              strokeLinecap="round"
              filter="url(#kaGlowWide)"
            />
            <path
              d="M 90 238 Q 720 -40 1350 238"
              stroke="url(#kaArcCore)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#kaGlowSharp)"
            />
          </svg>
        </div>

        <div className="container">
          <Reveal>
            <p className="ka-manifesto-text">
              {SITE.legalName} was founded to serve a singular mandate: enabling
              private investors, family offices, and sovereign institutions to
              hold pure, assay-certified physical gold from{" "}
              <strong>1 kg to 10 metric tonnes</strong> with zero counterparty
              risk, complete privacy, and verifiable title.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. NEOM 3 FROSTED PILLARS OVER SCENIC BACKDROP */}
      <section className="ka-pillars-section" aria-label="Core pillars">
        <Image
          src="/images/slider_images/1c744bae-5415-43db-9488-461140ce50c5.webp"
          alt="Refining and sovereign custody pillars"
          fill
          sizes="100vw"
          className="ka-pillars-bg"
        />
        <div className="ka-pillars-overlay" />

        <div className="container ka-pillars-grid">
          {PILLARS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 100}>
              <article className="ka-pillar-card">
                <div className="ka-pillar-icon">{p.icon}</div>
                <h2 className="ka-pillar-title">{p.title}</h2>
                <p className="ka-pillar-desc">{p.text}</p>
                <Link href={p.href} className="ka-pillar-btn">
                  {p.cta} <span>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. NEOM "OUR STORY / ALLOCATION SCALE" TIMELINE CARDS */}
      <section className="ka-story-section" aria-labelledby="ka-story-heading">
        <Image
          src="/images/slider_images/c919eed0-7830-442d-8568-7462b0f71ec5.webp"
          alt="Sovereign gold allocation scale"
          fill
          sizes="100vw"
          className="ka-story-bg"
        />
        <div className="ka-story-overlay" />

        <div className="container ka-story-inner">
          <Reveal>
            <div className="ka-story-header">
              <h2 id="ka-story-heading" className="ka-story-title">
                OUR SCALE &amp; ARCHITECTURE
              </h2>
              <span className="ka-story-range">1 KG — 10,000 KG</span>
            </div>
          </Reveal>

          {/* Timeline rail */}
          <div className="ka-timeline-rail" aria-hidden="true">
            {STORY_CARDS.map((c) => (
              <div key={c.step} className="ka-timeline-stop">
                <span className="ka-timeline-label">{c.step}</span>
                <span className="ka-timeline-dot" />
              </div>
            ))}
          </div>

          <div className="ka-story-cards">
            {STORY_CARDS.map((card, i) => (
              <Reveal key={card.step} delay={i * 110}>
                <article
                  className={`ka-story-card ${
                    card.featured ? "ka-story-card-light" : "ka-story-card-glass"
                  }`}
                >
                  <span className="ka-story-card-tag">{card.step}</span>
                  <p className="ka-story-card-lead">{card.lead}</p>
                  <p className="ka-story-card-body">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEOM ALTERNATING EDITORIAL SPLIT SECTIONS */}
      <section className="ka-splits-section" aria-label="Philosophy and standards">
        <div className="container">
          {/* Split Row 1 */}
          <Reveal>
            <div className="ka-split-row">
              <div className="ka-split-copy">
                <span className="ka-eyebrow">01 / SOVEREIGN OWNERSHIP</span>
                <h2 className="ka-split-heading">
                  COMMITTED TO PURE PHYSICAL TITLE
                </h2>
                <p className="ka-split-text">
                  Paper currencies fluctuate and synthetic gold derivatives carry
                  multi-layered counterparty exposure. At {SITE.name}, we never
                  deal in unallocated certificates, pooled accounts, or paper
                  claims.
                </p>
                <p className="ka-split-text">
                  Every bar acquired through our trading desk—from a single 1 kg
                  investment bar to a 10 tn sovereign reserve tranche—is 100%
                  physical, individually serial-numbered, and legally titled
                  directly in your name.
                </p>
                <Link href="/products" className="ka-solid-btn">
                  3D BAR CONFIGURATOR <span>→</span>
                </Link>
              </div>

              <div className="ka-split-media">
                <Image
                  src="/images/gold-bars-stack2.jpg"
                  alt="Assay certified stack of Kibali physical gold bars"
                  fill
                  sizes="(max-width: 900px) 100vw, 580px"
                />
              </div>
            </div>
          </Reveal>

          {/* Split Row 2 (Reversed) */}
          <Reveal>
            <div className="ka-split-row ka-split-row-reverse">
              <div className="ka-split-media">
                <Image
                  src="/images/secure-vault.jpg"
                  alt="Tier-IV high-security gold custody vault"
                  fill
                  sizes="(max-width: 900px) 100vw, 580px"
                />
              </div>

              <div className="ka-split-copy">
                <span className="ka-eyebrow">02 / GLOBAL INFRASTRUCTURE</span>
                <h2 className="ka-split-heading">
                  ENGINEERED FOR TIER-IV CUSTODY
                </h2>
                <p className="ka-split-text">
                  Whether you require discrete armored delivery to your designated
                  facility or segregated vault storage in Zurich, Dubai, or
                  London, every movement is protected by comprehensive
                  full-replacement transit and custody insurance.
                </p>
                <p className="ka-split-text">
                  Clients holding allocated reserves in our partner vaults may
                  schedule physical bar inspections and independent XRF assay
                  audits with 48 hours notice.
                </p>
                <Link href="/process" className="ka-solid-btn">
                  HOW CUSTODY WORKS <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. NEOM "KEY REGIONAL HUBS" SHOWCASE */}
      <section className="ka-hubs-section" aria-labelledby="ka-hubs-heading">
        <div className="container">
          <Reveal>
            <div className="ka-hubs-header">
              <span className="ka-eyebrow">WORLDWIDE FOOTPRINT</span>
              <h2 id="ka-hubs-heading" className="ka-hubs-title">
                KEY REGIONAL TRADING DESKS
              </h2>
              <p className="ka-hubs-sub">
                Direct physical execution, private advisory, and multi-jurisdiction
                custody across four international precious-metals crossroads.
              </p>
            </div>
          </Reveal>

          <div className="ka-hubs-grid">
            {OFFICES.map((o, idx) => (
              <Reveal key={o.city} delay={idx * 90}>
                <article className="ka-hub-card">
                  <div className="ka-hub-img-wrap">
                    <Image
                      src={HUB_IMAGES[idx % HUB_IMAGES.length]}
                      alt={`${o.city} Gold Trading Desk`}
                      fill
                      sizes="(max-width: 900px) 100vw, 300px"
                    />
                  </div>
                  <div className="ka-hub-body">
                    <span className="ka-hub-country">{o.note}</span>
                    <h3 className="ka-hub-city">{o.city.toUpperCase()}</h3>
                    <p className="ka-hub-desc">
                      Physical gold allocation (1 kg – 10 tn), vault inspection
                      coordination, and institutional settlement desk.
                    </p>
                    <Link href="/contact" className="ka-hub-btn">
                      CONNECT DESK <span>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE 3D TOPOGRAPHY BACKGROUND FOR CLOSING EMBLEM */}
      <section className="ka-topography-section" aria-label="Closing statement and custody bridge">
        {/* Top & Bottom gradient faders for seamless blend */}
        <div className="ka-topography-fade-top" aria-hidden="true" />
        <div className="ka-topography-fade-bottom" aria-hidden="true" />

        {/* 3D Topography Canvas as Background Layer */}
        <div className="ka-topography-bg-wrap" aria-hidden="true">
          <Topography
            color="#eab308"
            lineCount={22}
            lineWidth={1.2}
            elevation={1}
            foreground={0.2}
            tilt={32}
            speed={0.25}
            direction="forward"
            glow={0.6}
            depthOfField={0.4}
            fog={0.35}
            hoverEffect="lift"
            clickEffect="pulse"
            majorLines
            scale={1}
            detail={0.35}
            morph={0.2}
            brightness={1}
            markers="none"
            glitch={0}
            opacity={1}
            mouseInteraction
            mouseRadius={1}
            mouseStrength={0.6}
            trail={0.3}
            parallax={0.5}
            intro
            lightMode={false}
          />
        </div>

        {/* Foreground Content Centered Directly On Top of Topography */}
        <div className="ka-topography-content">
          <div className="kc-emblem" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                fill="#050505"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <p className="ka-closing-statement">
            Kibali Gold Market is a sovereign partner connecting institutional gold
            reserves and generational wealth.
          </p>

          <div className="ka-bridge-actions">
            <Link href="/contact" className="kc-send-btn">
              Schedule Consultation
            </Link>
            <a href={`tel:${SITE.phone.replace(/\s+/g, "")}`} className="kc-chip">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
