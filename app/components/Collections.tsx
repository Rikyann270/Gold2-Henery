"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, SWATCH_CATEGORIES, type Product } from "../data";

interface CollectionsProps {
  featuredOnly?: boolean;
}

export default function Collections({ featuredOnly = false }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayedProducts = featuredOnly
    ? PRODUCTS.slice(0, 3)
    : activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="collections-section" id="products" aria-labelledby="collections-title">
      <div className="collections-card">
        {/* EDITORIAL INTRO (CHANEL J12 STYLE) */}
        <div className="collection-intro">
          <h2 id="collections-title" className="collection-title">
            {featuredOnly ? "Signature Gold Selection" : "The Gold Bar Collection"}
          </h2>
          <p className="collection-lead">
            {featuredOnly
              ? "A curated selection of our most requested investment gold bars, refined to sovereign wealth standards."
              : "As the cornerstone of sovereign wealth preservation, our investment gold bars are crafted to the highest standards. In minted, cast or institutional gold, their allure is timeless."}
          </p>

          {/* CIRCULAR CATEGORY SWATCHES (FULL CATALOG ONLY) */}
          {!featuredOnly && (
            <div className="collection-swatches" role="tablist" aria-label="Gold categories">
              {SWATCH_CATEGORIES.slice(1).map((swatch) => {
                const isSelected = activeCategory === swatch.id;
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`swatch-item ${isSelected ? "active" : ""}`}
                    onClick={() =>
                      setActiveCategory(activeCategory === swatch.id ? "all" : swatch.id)
                    }
                  >
                    <div className="swatch-circle">
                      <div className={`swatch-bar-mini swatch-${swatch.id}`} />
                    </div>
                    <span className="swatch-label">{swatch.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* TOOLBAR / FILTERS BAR (FULL CATALOG ONLY) */}
        {!featuredOnly && (
          <div className="collection-toolbar">
            <div className="toolbar-left">
              <span className="filters-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="21" x2="4" y2="14" />
                  <line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" />
                  <line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" />
                  <line x1="9" y1="8" x2="15" y2="8" />
                  <line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                Filters
              </span>

              <div className="filter-pills">
                {SWATCH_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <span className="product-count">{displayedProducts.length} products</span>
          </div>
        )}

        {/* 3-COLUMN PRODUCT GRID (CHANEL STYLE) */}
        <div className="chanel-product-grid">
          {displayedProducts.map((p: Product) => (
            <article key={p.id} className="chanel-card">
              {/* Product Visual Container */}
              <div className="chanel-image-box">
                {p.tag && <span className="chanel-tag">{p.tag}</span>}

                <div className="chanel-bar-stage">
                  <div
                    className="chanel-gold-bar"
                    style={{
                      width: p.size.w,
                      height: p.size.h,
                    }}
                  >
                    <div className="bar-engraving">
                      <span className="bar-brand">KIBALI</span>
                      <span className="bar-weight">{p.weight}</span>
                      <span className="bar-fineness">ASSAY</span>
                      <span className="bar-hallmark">GOLD</span>
                    </div>
                  </div>
                  <div className="chanel-bar-shadow" />
                </div>
              </div>

              {/* Product Editorial Details */}
              <div className="chanel-details">
                <h3 className="chanel-title">{p.name}</h3>
                <p className="chanel-desc">{p.description}</p>
                <p className="chanel-service">{p.service}</p>
                <div className="chanel-price-row">
                  <span className="chanel-price">{p.price}</span>
                  <span className="chanel-premium">{p.premium}</span>
                </div>

                <Link href="/contact" className="chanel-action-btn">
                  Order / Inquire
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* FEATURED CTA ROW (HOME ONLY) */}
        {featuredOnly && (
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link
              href="/products"
              className="btn btn-gold"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}
            >
              Explore All 6 Formats &amp; Weights
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
