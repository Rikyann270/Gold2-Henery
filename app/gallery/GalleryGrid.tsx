"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
  isVideo?: boolean;
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="kg-grid">
        {items.map((item, i) => (
          <li key={item.src} className={`kg-item ${item.tall ? "kg-tall" : ""}`}>
            <button
              type="button"
              className="kg-tile"
              onClick={() => setActive(i)}
              aria-label={`Open: ${item.caption}`}
            >
              {item.isVideo ? (
                <div className="kg-video-tile">
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="kg-img"
                  />
                  <div className="kg-video-badge" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="kg-img"
                />
              )}
            </button>
            <p className="kg-caption">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {item.caption}
            </p>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          className="kg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={items[active].caption}
          onClick={close}
        >
          <button type="button" className="kg-lb-close" onClick={close} aria-label="Close">
            Close
          </button>

          <button
            type="button"
            className="kg-lb-nav kg-lb-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ←
          </button>

          <figure className="kg-lb-figure" onClick={(e) => e.stopPropagation()}>
            <div className="kg-lb-frame">
              {items[active].isVideo ? (
                <video
                  src={items[active].src}
                  controls
                  autoPlay
                  playsInline
                  className="kg-lb-video"
                />
              ) : (
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  sizes="90vw"
                  className="kg-lb-img"
                  priority
                />
              )}
            </div>
            <figcaption className="kg-lb-caption">
              <span>
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              {items[active].caption}
            </figcaption>
          </figure>

          <button
            type="button"
            className="kg-lb-nav kg-lb-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
