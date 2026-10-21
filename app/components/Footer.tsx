"use client";

import Link from "next/link";
import { useState } from "react";
import { OFFICES, SITE } from "../data";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="hg-footer-wrapper">
      {/* ——— Oversized brand wordmark sitting ON TOP of the footer in #F5F0E7 ——— */}
      <div className="hg-footer-wordmark-stand" aria-hidden="true">
        <span className="hg-footer-wordmark">
          Kibali
        </span>
      </div>

      <footer className="hg-footer">
        {/* ——— Main content grid ——— */}
        <div className="hg-footer-body">
          <div className="hg-footer-grid">
            {/* COL 1 — Brand tagline + email + socials */}
            <div className="hg-footer-brand-col">
              <h3 className="hg-footer-heading-lg">
                Crafted with precision.
                <br />
                Built to hold value.
              </h3>
              <p className="hg-footer-sub">
                Certified gold bars shaped into
                <br />
                secure investments.
              </p>

              <p className="hg-footer-cta-label">Stay Informed</p>
              <form
                className="hg-footer-email-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <input
                  type="email"
                  className="hg-footer-email-input"
                  placeholder="type your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="hg-footer-email-btn" aria-label="Subscribe">
                  →
                </button>
              </form>

              {/* Social icons */}
              <div className="hg-footer-socials">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="hg-footer-social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" aria-label="X" className="hg-footer-social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="hg-footer-social-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* COL 2 — Navigation */}
            <div className="hg-footer-link-col">
              <h4 className="hg-footer-col-title">Navigation</h4>
              <ul className="hg-footer-links">
                <li><Link href="/products">Gold Bars</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/process">How It Works</Link></li>
                <li><Link href="/insights">Market Insights</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* COL 3 — Support */}
            <div className="hg-footer-link-col">
              <h4 className="hg-footer-col-title">Support</h4>
              <ul className="hg-footer-links">
                <li><Link href="/process">Shipping &amp; Insurance</Link></li>
                <li><Link href="/process">Custody Guide</Link></li>
                <li><Link href="/process">Refining Standards</Link></li>
                <li><Link href="/faq">Warranty</Link></li>
              </ul>
            </div>

            {/* COL 4 — Gold Focus + hallmark emblem */}
            <div className="hg-footer-link-col hg-footer-focus-col">
              <h4 className="hg-footer-col-title">Gold Focus</h4>
              <ul className="hg-footer-links">
                <li>Investment Grade Gold</li>
                <li>LBMA Certified</li>
                <li>Assay Serialised</li>
                <li>Insured Vaulting</li>
              </ul>

              {/* Circular hallmark badge */}
              <div className="hg-footer-badge" aria-hidden="true">
                <svg viewBox="0 0 100 100" width="72" height="72">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#18181B" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#18181B" strokeWidth="0.8" />
                  {/* Au symbol */}
                  <text x="50" y="46" textAnchor="middle" fontSize="20" fontWeight="800" fill="#D8A12E" fontFamily="serif">Au</text>
                  <text x="50" y="60" textAnchor="middle" fontSize="6" fontWeight="600" fill="#18181B" letterSpacing="0.12em" fontFamily="sans-serif">KIBALI GOLD</text>
                  {/* Circular text */}
                  <defs>
                    <path id="footerArc" d="M 15,50 a 35,35 0 1,1 70,0" />
                    <path id="footerArcB" d="M 85,50 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text fontSize="5" fontWeight="600" fill="#18181B" letterSpacing="0.18em" fontFamily="sans-serif">
                    <textPath href="#footerArc" startOffset="50%" textAnchor="middle">CERTIFIED BY ASSAY</textPath>
                  </text>
                  <text fontSize="5" fontWeight="600" fill="#18181B" letterSpacing="0.18em" fontFamily="sans-serif">
                    <textPath href="#footerArcB" startOffset="50%" textAnchor="middle">INVESTMENT GRADE</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ——— Bottom bar ——— */}
        <div className="hg-footer-bottom">
          <span>© 2026 {SITE.name}. Rooted in gold, refined through trust.</span>
        </div>
      </footer>
    </div>
  );
}
