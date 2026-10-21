import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import { OFFICES, PRODUCTS, SITE } from "../data";

export const metadata: Metadata = {
  title: `Contact Our Advisory Desk | ${SITE.name}`,
  description:
    "Get in touch with precious metals advisors at Kibali Gold Market. Request live quotes, discuss bulk orders, or arrange insured vault storage across our global hubs.",
};

export default function ContactPage() {
  return (
    <main id="top" className="subpage-content">
      {/* SUBPAGE HERO */}
      <section className="subpage-hero" aria-labelledby="contact-page-title">
        <div className="container">
          <nav className="subpage-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 id="contact-page-title" className="subpage-title">
            Connect with an <span className="gold-text">Advisor</span>
          </h1>
          <p className="subpage-lead">
            Whether inquiring about individual investment bars, bulk institutional purchases,
            or allocated vault storage, our advisors are here to provide tailored assistance.
          </p>
        </div>
      </section>

      {/* INTERACTIVE INQUIRY PANEL */}
      <section className="section" aria-labelledby="inquiry-form-title">
        <div className="container">
          <Reveal>
            <div className="contact-panel">
              <div>
                <span className="eyebrow">Trading Desks</span>
                <h2 className="section-title" id="inquiry-form-title">
                  Direct <span className="gold-text">inquiry</span>
                </h2>
                <p className="section-sub">
                  Tell us what you are looking for. An experienced metals specialist will respond promptly with live market quotes.
                </p>

                <ul className="office-list">
                  {OFFICES.map((o) => (
                    <li key={o.city}>
                      <span className="dot" />
                      <span>
                        <b>{o.city} Desk</b>
                        {o.note} &bull; Physical Collection &amp; Vaulting
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}>
                  <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", margin: "0.2rem 0" }}>
                    Direct Email: <a href={`mailto:${SITE.email}`} style={{ color: "var(--gold-300)" }}>{SITE.email}</a>
                  </p>
                  <p style={{ color: "var(--text-dim)", fontSize: "0.85rem", margin: "0.2rem 0" }}>
                    Telephone / WhatsApp: <span style={{ color: "#FFFFFF" }}>{SITE.phone}</span>
                  </p>
                </div>
              </div>

              <form
                className="form"
                id="contact-form"
                action={`mailto:${SITE.email}`}
                method="post"
                encType="text/plain"
              >
                <div className="form-row">
                  <label>
                    Full name
                    <input name="name" required placeholder="Your full name" />
                  </label>
                  <label>
                    Email address
                    <input name="email" type="email" required placeholder="you@example.com" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Phone / WhatsApp
                    <input name="phone" placeholder="+000 000 000" />
                  </label>
                  <label>
                    Interested In
                    <select name="interest" defaultValue="100 g">
                      {PRODUCTS.map((p) => (
                        <option key={p.weight}>{p.weight} ({p.name})</option>
                      ))}
                      <option>Bulk Order (Multiple Kilograms)</option>
                      <option>Allocated Vault Storage</option>
                      <option>Liquidation / Buy-Back Consultation</option>
                    </select>
                  </label>
                </div>

                <label>
                  Message / Delivery Country
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Specify desired quantity, destination country, vault preference, or any specific questions…"
                  />
                </label>

                <button type="submit" className="btn btn-gold" id="contact-submit">
                  Request Live Quote &amp; Consultation
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
