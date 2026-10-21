"use client";

import { useState } from "react";
import { SITE } from "../data";

const CHIPS = [
  { id: "100 g", label: "100 g Bar" },
  { id: "250 g", label: "250 g Cast" },
  { id: "1 kg", label: "1 kg Sovereign" },
  { id: "Bulk order", label: "Bulk Order" },
  { id: "Vault storage", label: "Vault Storage" },
];

export default function QuickContactBanner() {
  const [selected, setSelected] = useState("100 g");

  return (
    <div className="contact-ribbon-card">
      {/* Left side: Editorial headline & prompt */}
      <div className="contact-ribbon-info">
        <div className="contact-ribbon-badge">
          <span className="contact-ribbon-pulse" aria-hidden="true" />
          <span>Trading Desk &bull; Live Spot</span>
        </div>
        <h2 className="contact-ribbon-title" id="contact-title">
          Ready to buy <span className="contact-ribbon-gold">gold?</span>
        </h2>
        <p className="contact-ribbon-desc">
          Lock live interbank spot pricing with guaranteed buyback &amp; insured delivery.
        </p>
        <div className="contact-ribbon-direct">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span className="contact-ribbon-sep">&bull;</span>
          <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
        </div>
      </div>

      {/* Right side: Playful chips + single-row capsule form */}
      <div className="contact-ribbon-action-wrap">
        {/* Playful product selector chips */}
        <div className="contact-ribbon-chips" role="radiogroup" aria-label="Select product interest">
          {CHIPS.map((chip) => {
            const isSelected = selected === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(chip.id)}
                className={`contact-ribbon-chip ${isSelected ? "contact-ribbon-chip-active" : ""}`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Minimal capsule input row */}
        <form
          className="contact-ribbon-form"
          id="contact-form"
          action={`mailto:${SITE.email}`}
          method="post"
          encType="text/plain"
        >
          <input type="hidden" name="interest" value={selected} />

          <div className="contact-ribbon-capsule">
            <input
              name="name"
              required
              placeholder="Your name"
              className="contact-ribbon-input"
              aria-label="Full name"
            />
            <span className="contact-ribbon-capsule-divider" aria-hidden="true" />
            <input
              name="contact"
              required
              placeholder="Email or WhatsApp"
              className="contact-ribbon-input"
              aria-label="Email or WhatsApp"
            />
            <button type="submit" className="contact-ribbon-submit" id="contact-submit">
              <span>Get quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
