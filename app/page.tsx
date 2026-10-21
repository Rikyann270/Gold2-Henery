import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import SectionVideoBg from "./components/SectionVideoBg";
import QuickContactBanner from "./components/QuickContactBanner";
import Icon from "./components/Icon";
import {
  WheelCarousel,
  type WheelCarouselItem,
} from "@/components/ui/wheel-carousel";
import {
  FAQ,
  OFFICES,
  PRODUCTS,
  SITE,
  STATS,
} from "./data";

const howItWorksSteps: WheelCarouselItem[] = [
  {
    label: "01. Choose Your Bars",
    image: "/images/slider_images/1c744bae-5415-43db-9488-461140ce50c5.webp",
    imageAlt: "Select investment gold bars from 1g to 1kg and lock live spot price",
  },
  {
    label: "02. Verify & Settle",
    image: "/images/slider_images/2a2f091d-351d-4dd4-bbf4-dc0fe0fbe77c.webp",
    imageAlt: "Complete a quick identity check and settle via secure wire or approved payment",
  },
  {
    label: "03. Insured Dispatch",
    image: "/images/slider_images/Professional_meet_studio_photo.jpg",
    imageAlt: "Bars ship sealed with their assay certificate via discrete, insured courier",
  },
  {
    label: "04. Hold or Vault",
    image: "/images/slider_images/c919eed0-7830-442d-8568-7462b0f71ec5.webp",
    imageAlt: "Keep physical gold at home, allocate in our insured vault, or liquidate any time",
  },
];

const PROTECTION_PILLARS = [
  {
    icon: "shield",
    title: "Certified Investment Gold",
    text: "Refined to sovereign standards. Each bar is individually serial-numbered and permanently sealed with its tamper-evident assay certificate.",
    stat: "Assay",
    statLabel: "Certified",
    href: "/about",
    linkText: "Refining standards",
  },
  {
    icon: "truck",
    title: "Discreet Insured Worldwide Delivery",
    text: "Full-value Lloyd's of London underwriters coverage from dispatch to handover. Armored logistics with encrypted signature verification.",
    stat: "100%",
    statLabel: "Insured",
    href: "/process",
    linkText: "Delivery specifications",
  },
  {
    icon: "vault",
    title: "Allocated Tier-IV Vault Custody",
    text: "Direct unencumbered legal title in Zurich, Dubai, or London. Your exact serial numbers are held segregated with regular independent audits.",
    stat: "Tier-IV",
    statLabel: "Custody",
    href: "/process",
    linkText: "Vault security protocol",
  },
  {
    icon: "refresh",
    title: "Guaranteed Liquidity & Buy-Back",
    text: "Liquidity on your terms. We provide guaranteed repurchase quotes directly pegged to the live interbank spot price whenever you decide to sell.",
    stat: "Live",
    statLabel: "Spot",
    href: "/process",
    linkText: "Liquidation policy",
  },
];

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-stage" aria-hidden="true">
          <video
            className="hero-video"
            src="/gold_vidoe.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero-glow" />
          <div className="hero-vignette" />
        </div>

        <div className="container hero-copy">
          <p className="hero-script">The art of</p>
          <h1 id="hero-title">Owning gold</h1>
          <p className="lead">
            Certified gold bars from 1g to 1kg. Insured delivery, secure
            vault storage and a buy-back guarantee.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="btn btn-gold" id="hero-explore">
              Explore gold bars
              <Icon name="arrow" size={16} />
            </Link>
            <Link href="/process" className="btn btn-ghost" id="hero-how">
              How it works
            </Link>
          </div>
        </div>

        <a href="#trust-title" className="scroll-cue" aria-label="Scroll down">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M12 4v16m0 0-6-6m6 6 6-6" />
          </svg>
        </a>

        <div className="hero-badge">
          Assay
          <b className="gold-text">Certified</b>
        </div>
      </section>

      {/* ASSAY & PURITY BENTO SECTION */}
      <section className="bento-section" aria-labelledby="trust-title">
        <div className="container">
          <Reveal>
            <div className="bento-grid">

              {/* LEFT — Bold typography card */}
              <div className="bento-card bento-left">
                <span className="bento-pill">
                  <span className="bento-dot" />
                  Assay &amp; Purity Guarantee
                </span>
                <h2 className="bento-headline" id="trust-title">
                  Signature<br />
                  <span className="bento-headline-gold">Gold</span><br />
                  Selection
                </h2>
                <p className="bento-subtext">
                  Every bar verified and certified for authenticity. LBMA-accredited, serial-numbered, and sealed with its tamper-evident assay certificate.
                </p>
                <Link href="/products" className="bento-cta">
                  Explore bars →
                </Link>
              </div>

              {/* CENTER — Real product image */}
              <div className="bento-card bento-center">
                <div className="bento-img-wrap">
                  <Image
                    src="/images/euq/fae141d3-09c5-403d-b6db-230344a56d42.webp"
                    alt="Investment gold bars glowing on dark surface"
                    fill
                    sizes="(max-width: 900px) 100vw, 460px"
                    style={{ objectFit: "cover", objectPosition: "center 60%" }}
                  />
                </div>
              </div>

              {/* RIGHT — Stats + highlight */}
              <div className="bento-right-col">
                {/* Right top — Assurance card */}
                <div className="bento-card bento-right-top">
                  <span className="bento-eyebrow">Invest in the world&apos;s currency</span>
                  <p className="bento-right-desc">
                    Buy, hold, and sell physical gold bars with full legal title, securely held in an insured Tier-IV vault, independently audited.
                  </p>
                  <Link href="/process" className="bento-cta bento-cta-dark">
                    How it works →
                  </Link>
                </div>

                {/* Right bottom — Stats grid */}
                <div className="bento-card bento-stats">
                  {STATS.map((s) => (
                    <div key={s.label} className="bento-stat">
                      <span className="bento-stat-val">{s.value}</span>
                      <span className="bento-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>


      {/* ABOUT — 2-CARD EDITORIAL LAYOUT (#F5F0E7 & #D8A12E & #18181B) */}
      <section className="about-duo-section" id="about" aria-labelledby="about-title">
        <div className="container">
          <Reveal>
            <div className="about-duo-grid">

              {/* CARD 1 (LEFT) — #F5F0E7 CREAM EDITORIAL CARD */}
              <div className="about-duo-card about-duo-left">
                <div className="about-duo-top">
                  <span className="about-duo-tag">Transfers</span>
                </div>

                <div className="about-duo-headline-wrap">
                  {/* Looping decorative line arrow matching reference */}
                  <svg
                    className="about-duo-arrow-svg"
                    viewBox="0 0 280 180"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 28 64 C 18 16, 230 8, 256 46"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="246,34 257,47 240,51"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 252 116 C 262 164, 48 172, 24 134"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="34,146 23,132 40,128"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3 className="about-duo-display-title">
                    Make<br />
                    Money<br />
                    Move
                  </h3>
                </div>

                <div className="about-duo-bottom">
                  <Link href="/about" className="about-duo-btn-dark" id="about-cta">
                    Get started
                  </Link>
                </div>
              </div>

              {/* CARD 2 (RIGHT) — #D8A12E GOLD ASSETS SHOWCASE CARD */}
              <div className="about-duo-card about-duo-right">
                {/* Left inner side: 3D Asset in geometric polygon backdrop */}
                <div className="about-duo-asset-wrap">
                  <div className="about-duo-polygon-backdrop">
                    <div className="about-duo-asset-img-box">
                      <Image
                        src="/images/euq/6643142d-4248-4dd3-baa5-970a9c5924f1.webp"
                        alt="Physical gold asset, gold bullion card, coins and rate emblem"
                        fill
                        sizes="(max-width: 900px) 100vw, 420px"
                        className="about-duo-asset-img"
                      />
                    </div>
                  </div>
                </div>

                {/* Vertical Hairline Divider */}
                <div className="about-duo-divider" aria-hidden="true" />

                {/* Right inner side: Editorial Info & Emblem */}
                <div className="about-duo-info-wrap">
                  <div className="about-duo-info-head">
                    <span className="about-duo-tag">Assets</span>

                    {/* Geometric Hallmark Emblem from reference screenshot */}
                    <div className="about-duo-emblem" aria-hidden="true">
                      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                        <polygon points="14,14 26,14 20,24 14,24" fill="#18181B" />
                        <polygon points="38,14 50,14 50,24 44,24" fill="#18181B" />
                        <polygon points="14,40 20,40 26,50 14,50" fill="#18181B" />
                        <polygon points="44,40 50,40 50,50 38,50" fill="#18181B" />
                        <polygon points="27,18 37,18 35,26 29,26" fill="#18181B" />
                        <polygon points="27,46 37,46 35,38 29,38" fill="#18181B" />
                        <polygon points="18,27 18,37 26,35 26,29" fill="#18181B" />
                        <polygon points="46,27 46,37 38,35 38,29" fill="#18181B" />
                      </svg>
                    </div>
                  </div>

                  <h2 className="about-duo-asset-title" id="about-title">
                    Invest in the world&apos;s currency
                  </h2>

                  <p className="about-duo-asset-desc">
                    Buy, hold, and sell physical metals with a few swipes, all securely held for you in an insured Grade 10 vault, audited by independent international assayers.
                  </p>

                  <div className="about-duo-info-actions">
                    <Link href="/contact" className="about-duo-btn-dark">
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS (HOW IT WORKS) WITH BG VIDEO */}
      <section className="section rounded-t-[200px] process-video-section" id="process" aria-labelledby="process-title">
        {/* Full-width 100% video background with slight blur that plays only when in focus/viewport */}
        <SectionVideoBg
          src="/images/slider_images/bg_video2.mp4"
          fallbackSrc="/bg_video2.mp4"
          blur={6}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span className="eyebrow">How it works</span>
              <h2 className="section-title" id="process-title">
                From order to <span className="gold-text">ownership</span> in 4 steps
              </h2>
              <p className="section-sub" style={{ margin: "0.5rem auto 0", maxWidth: 580 }}>
                Drag or scroll the wheel to explore each stage of our secure precious-metals acquisition process.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-[580px] md:h-[680px] w-full my-6">
              <WheelCarousel
                items={howItWorksSteps}
                mode="custom"
                background="transparent"
                textColor="rgba(242, 199, 92, 0.42)"
                selectedColor="#f2c75c"
                markerColor="#d9a02e"
                panelColor="rgba(26, 16, 9, 0.85)"
                photoAspect="3/4"
                photoWidth={38}
                contentWidth={1040}
                radius={360}
              />
            </div>
          </Reveal>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/process" className="btn btn-ghost">
              Full Process &amp; Vaulting Details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* YOUR GOLD, PROTECTED (USING NEWS HORIZONTAL CARD LAYOUT) */}
      <section className="section" id="security" aria-labelledby="protection-title">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
              <span className="eyebrow">Security &amp; Custody</span>
              <h2 className="section-title" id="protection-title">
                Your gold, <span className="gold-text">protected</span> end to end
              </h2>
              <p className="section-sub" style={{ margin: "0.5rem auto 0" }}>
                Take delivery at home or allocate in our insured vaults. Either way,
                your gold is accounted for, certified, and 100% legally yours.
              </p>
            </div>
          </Reveal>

          <div className="news-list">
            {PROTECTION_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="news-card">
                  <div className="news-icon">
                    <Icon name={p.icon} size={34} />
                  </div>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <Link href={p.href} className="more">
                      {p.linkText} →
                    </Link>
                  </div>
                  <div className="date-box">
                    <b>{p.stat}</b>
                    {p.statLabel}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/process" className="btn btn-ghost">
              Full Custody &amp; Refining Standards &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — editorial duo layout matching about section */}
      <section className="testi-duo-section" aria-label="Client testimonial">
        <div className="container">
          <Reveal>
            <div className="testi-duo-grid">

              {/* LEFT CARD — cream, large italic quote */}
              <div className="testi-duo-card testi-duo-left">
                <div className="testi-duo-top">
                  <span className="testi-duo-tag">Testimonial</span>
                </div>

                <div className="testi-duo-headline-wrap">
                  {/* Decorative quote-mark flourish arrows */}
                  <svg
                    className="testi-duo-arrow-svg"
                    viewBox="0 0 280 180"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 28 64 C 18 16, 230 8, 256 46"
                      stroke="#D8A12E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="246,34 257,47 240,51"
                      fill="none"
                      stroke="#D8A12E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 252 116 C 262 164, 48 172, 24 134"
                      stroke="#D8A12E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="34,146 23,132 40,128"
                      fill="none"
                      stroke="#D8A12E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h3 className="testi-duo-display-title">
                    &ldquo;Clear,<br />
                    Insured,<br />
                    Simple.&rdquo;
                  </h3>
                </div>

                <div className="testi-duo-bottom">
                  <Link href="/contact" className="testi-duo-btn-dark" id="testi-cta">
                    Share your story
                  </Link>
                </div>
              </div>

              {/* RIGHT CARD — gold, attribution + full quote + stars */}
              <div className="testi-duo-card testi-duo-right">

                {/* Stars + label top row */}
                <div className="testi-duo-info-head">
                  <span className="testi-duo-tag">Verified client&nbsp;&bull;&nbsp;Dubai</span>
                  <div className="testi-duo-stars" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#18181B" aria-hidden="true">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Hairline */}
                <div className="testi-duo-divider" aria-hidden="true" />

                {/* Full quote body */}
                <div className="testi-duo-info-wrap">
                  <p className="testi-duo-asset-desc">
                    &ldquo;Buying physical gold used to feel complicated — endless paperwork, opaque pricing, no clear chain of custody. Here it was the opposite: clear documentation, insured delivery, and a team that answered every question from the first call to the moment it landed at my door.&rdquo;
                  </p>

                  <div className="testi-duo-meta">
                    {/* Geometric hallmark emblem */}
                    <div className="testi-duo-emblem" aria-hidden="true">
                      <svg width="44" height="44" viewBox="0 0 64 64" fill="none">
                        <polygon points="14,14 26,14 20,24 14,24" fill="#18181B" />
                        <polygon points="38,14 50,14 50,24 44,24" fill="#18181B" />
                        <polygon points="14,40 20,40 26,50 14,50" fill="#18181B" />
                        <polygon points="44,40 50,40 50,50 38,50" fill="#18181B" />
                        <polygon points="27,18 37,18 35,26 29,26" fill="#18181B" />
                        <polygon points="27,46 37,46 35,38 29,38" fill="#18181B" />
                        <polygon points="18,27 18,37 26,35 26,29" fill="#18181B" />
                        <polygon points="46,27 46,37 38,35 38,29" fill="#18181B" />
                      </svg>
                    </div>
                    <div>
                      <p className="testi-duo-author">K. Al Mansouri</p>
                      <p className="testi-duo-role">Private Investor &mdash; Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title" id="faq-title">
                Questions, <span className="gold-text">answered</span>
              </h2>
            </div>
          </Reveal>
          <div className="faq">
            {FAQ.slice(0, 3).map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/faq" className="btn btn-ghost">
              View All Questions &amp; Answers (8) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PLAYFUL MINIMALIST WIDE CONTACT RIBBON (SHORT BUT LONG, #F5F0E7, #D8A12E, #18181B) */}
      <section className="contact-ribbon-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-ribbon-container">
          <Reveal>
            <QuickContactBanner />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
