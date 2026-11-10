import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { OFFICES, PRODUCTS, SITE } from "../data";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Connect with Kibali Gold Now — Advisory & Trading Desk",
  description:
    "Connect with precious metals specialists at Kibali Gold Enterprise (kibaligoldenterprise.com). Request live spot quotes for 1 kg to 10 tn gold bars or arrange allocated Tier-IV vault custody.",
  path: "/contact",
  keywords: [
    "contact Kibali Gold Enterprise",
    "request live gold bar quote",
    "institutional gold trading desk contact",
    "Dubai London Istanbul Nairobi gold advisor",
  ],
});

export default function ContactPage() {
  const cleanPhone = SITE.phone.replace(/\s+/g, "");

  return (
    <main id="top" className="kc-page">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      {/* 1. CENTERED HERO BLOCK */}
      <section className="kc-hero" aria-labelledby="contact-page-title">
        <h1 id="contact-page-title" className="kc-title">
          Connect with
          <br />
          <span className="kc-title-brand">Kibali Gold</span> Now
        </h1>

        {/* Minimal Social Icons Row (LinkedIn, Instagram, X/Direct) */}
        <div className="kc-socials" aria-label="Social and direct channels">
          <a
            href={`https://wa.me/${cleanPhone.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn & Institutional Desk"
            className="kc-social-icon"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Instagram"
            className="kc-social-icon"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={`tel:${cleanPhone}`}
            aria-label="Direct Line"
            className="kc-social-icon"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
            </svg>
          </a>
        </div>

        {/* Frosted Contact Chips (Email + Phone) */}
        <div className="kc-contact-chips">
          <a href={`mailto:${SITE.email}`} className="kc-chip">
            {SITE.email}
          </a>
          <a href={`tel:${cleanPhone}`} className="kc-chip">
            {SITE.phone}
          </a>
        </div>
      </section>

      {/* 2. PRECISION GLOWING PLANETARY HORIZON ARC + STACKED FORM */}
      <section className="kc-horizon-section" aria-labelledby="kc-form-heading">
        {/* True SVG Planetary Eclipse Horizon Rim */}
        <div className="kc-horizon-stage" aria-hidden="true">
          <div className="kc-horizon-ambient" />
          <svg
            className="kc-horizon-svg"
            viewBox="0 0 1440 290"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Outer wide orange/amber atmospheric glow */}
              <linearGradient id="kcArcOuter" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8a3200" stopOpacity="0" />
                <stop offset="18%" stopColor="#b84a0a" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#f59322" stopOpacity="0.95" />
                <stop offset="82%" stopColor="#b84a0a" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#8a3200" stopOpacity="0" />
              </linearGradient>

              {/* Hot core golden-white rim */}
              <linearGradient id="kcArcCore" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97724" stopOpacity="0" />
                <stop offset="22%" stopColor="#e88425" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ffdca4" stopOpacity="1" />
                <stop offset="78%" stopColor="#e88425" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d97724" stopOpacity="0" />
              </linearGradient>

              {/* Planet surface fill gradient below the rim */}
              <linearGradient id="kcPlanetFill" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#261205" stopOpacity="0.55" />
                <stop offset="32%" stopColor="#080605" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#050505" stopOpacity="1" />
              </linearGradient>

              <filter id="kcGlowWide" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="26" />
              </filter>
              <filter id="kcGlowMid" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
              <filter id="kcGlowSharp" x="-10%" y="-40%" width="120%" height="180%">
                <feGaussianBlur stdDeviation="1.8" />
              </filter>
            </defs>

            {/* Soft wide atmospheric halo along the curve */}
            <path
              d="M 40 270 Q 720 -55 1400 270"
              stroke="url(#kcArcOuter)"
              strokeWidth="38"
              strokeLinecap="round"
              filter="url(#kcGlowWide)"
            />

            {/* Planet dark body below the curve */}
            <path
              d="M 40 270 Q 720 -55 1400 270 L 1440 290 L 0 290 Z"
              fill="url(#kcPlanetFill)"
            />

            {/* Medium golden bloom */}
            <path
              d="M 60 266 Q 720 -52 1380 266"
              stroke="url(#kcArcOuter)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#kcGlowMid)"
            />

            {/* Crisp hot solar rim */}
            <path
              d="M 90 262 Q 720 -50 1350 262"
              stroke="url(#kcArcCore)"
              strokeWidth="3.2"
              strokeLinecap="round"
              filter="url(#kcGlowSharp)"
            />
          </svg>
        </div>

        <div className="kc-column">
          <h2 id="kc-form-heading" className="kc-lead-heading">
            Our desk is here for you, whether you&apos;re a private investor or
            an institutional reserve buyer.
          </h2>

          <form
            className="kc-form"
            id="contact-form"
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
          >
            <label className="kc-field">
              <span className="kc-field-label">
                Full name <span className="kc-req">*</span>
              </span>
              <input
                name="name"
                required
                placeholder="e.g. Jean-Luc Kabongo"
                className="kc-field-input"
              />
            </label>

            <label className="kc-field">
              <span className="kc-field-label">
                Email <span className="kc-req">*</span>
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder={`e.g. client@${SITE.domain}`}
                className="kc-field-input"
              />
            </label>

            <label className="kc-field">
              <span className="kc-field-label">
                Phone <span className="kc-req">*</span>
              </span>
              <input
                name="phone"
                required
                placeholder={`e.g. ${SITE.phone}`}
                className="kc-field-input"
              />
            </label>

            <label className="kc-field">
              <span className="kc-field-label">
                Allocation weight (1 kg – 10 tn) <span className="kc-req">*</span>
              </span>
              <select name="interest" defaultValue="1 kg" className="kc-field-select">
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.weight}>
                    {p.weight} — {p.name}
                  </option>
                ))}
                <option value="Custom Tranche (1 kg – 10,000 kg)">
                  Custom Tranche (1 kg – 10,000 kg)
                </option>
                <option value="Allocated Tier-IV Vault Custody">
                  Allocated Tier-IV Vault Custody
                </option>
              </select>
            </label>

            <label className="kc-field kc-field-textarea">
              <span className="kc-field-label">Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Leave us a message..."
                className="kc-field-input"
              />
            </label>

            <p className="kc-consent">
              <strong>I agree to</strong> the processing of personal data
            </p>

            <div className="kc-submit-row">
              <button type="submit" className="kc-send-btn" id="contact-submit">
                Send
              </button>
            </div>
          </form>

          {/* Subtle horizontal divider */}
          <div className="kc-divider" aria-hidden="true" />

          {/* 3. TWO-COLUMN OFFICE & CUSTODY DETAILS */}
          <div className="kc-info-grid">
            <div className="kc-info-block">
              <h3>Office location</h3>
              <p>
                {SITE.legalName},
                <br />
                {OFFICES.map((o) => o.city).join(" · ")},
                <br />
                {SITE.phone}
                <br />
                Global Armored Fulfillment
              </p>
              <a
                href="https://maps.google.com/?q=Dubai+Multi+Commodities+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="kc-accent-link"
              >
                Google Maps
              </a>
            </div>

            <div className="kc-info-block">
              <h3>Allocation details</h3>
              <p>
                Range: 1 kg – 10 tn (10,000 kg)
                <br />
                Assay: 999.9 Fine LBMA Good Delivery
                <br />
                Vaults: Zurich · Dubai · London
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM EMBLEM & RISING GOLDEN DOME */}
      <section className="kc-bottom-glow-section" aria-label="Brand statement">
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

        <p className="kc-closing-statement">
          {SITE.name} is a sovereign explorer connecting institutional gold
          reserves and generational wealth.
        </p>

        {/* Rising Semi-Circular Solar Dome with Vertical Rays & Sharp Horizon Base */}
        <div className="kc-bottom-dome-wrap" aria-hidden="true">
          <div className="kc-bottom-dome" />
          <div className="kc-bottom-rays" />
          <div className="kc-bottom-core" />
          <div className="kc-bottom-baseline" />
        </div>
      </section>
    </main>
  );
}
