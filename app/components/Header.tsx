"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled} data-menu={open}>
        <nav className="container nav" aria-label="Main navigation">
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="menu-overlay"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" aria-hidden="true">
              <i />
              <i />
            </span>
            <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          </button>

          <Link
            href="/"
            className="brand"
            aria-label={`${SITE.name} home`}
            onClick={() => setOpen(false)}
          >
            {SITE.name}
          </Link>

          <div className="nav-right">
            <Link href="/products" className="nav-link-text nav-cta" id="nav-buy-gold">
              Buy Gold
            </Link>
          </div>
        </nav>
      </header>

      <div
        className="menu-overlay"
        id="menu-overlay"
        data-open={open}
        aria-hidden={!open}
      >
        <ul className="menu-links">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                <span>0{i + 1}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
