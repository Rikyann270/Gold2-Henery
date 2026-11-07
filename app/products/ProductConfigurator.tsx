"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { animate } from "framer-motion";

const GoldBarViewer = dynamic(() => import("./GoldBarViewer"), {
  ssr: false,
  loading: () => <div className="gp-viewer-loading" aria-hidden="true" />,
});

const MIN_KG = 1;
const MAX_KG = 10000;
const STEPS = 1000; // slider resolution (log scale)
const PRESETS = [1, 2, 5, 10, 100, 1000];

const kgToPos = (kg: number) =>
  Math.round((Math.log10(kg / MIN_KG) / Math.log10(MAX_KG / MIN_KG)) * STEPS);
const posToKg = (pos: number) =>
  Math.round(MIN_KG * Math.pow(MAX_KG / MIN_KG, pos / STEPS));

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

function moodFor(kg: number) {
  if (kg < 5) return "The first step";
  if (kg < 50) return "A quiet confidence";
  if (kg < 500) return "Built to last";
  if (kg < 5000) return "Generational weight";
  return "Sovereign scale";
}

function useTween(target: number) {
  const [value, setValue] = useState(target);
  const current = useRef(target);
  useEffect(() => {
    const controls = animate(current.current, target, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        current.current = v;
        setValue(v);
      },
    });
    return () => controls.stop();
  }, [target]);
  return value;
}

export default function ProductConfigurator() {
  const [kg, setKg] = useState(10);
  const shown = useTween(kg);
  const pos = kgToPos(kg);

  return (
    <section className="gp-stage" aria-label="Gold bar weight selector">
      <div className="gp-panel">
        <div className="gp-viewer">
          <GoldBarViewer kg={kg} />
        </div>

        <div className="gp-controls">
          <span className="gp-eyebrow">Kibali Gold Collection</span>

          <div className="gp-weight" aria-live="polite">
            <span className="gp-weight-num">{fmt(shown)}</span>
            <span className="gp-weight-unit">kg</span>
          </div>
          <p className="gp-mood">
            {moodFor(kg)}
            {kg >= 1000 && <em> · {(kg / 1000).toFixed(kg % 1000 === 0 ? 0 : 1)} tn</em>}
          </p>

          <div className="gp-slider-wrap">
            <input
              className="gp-slider"
              type="range"
              min={0}
              max={STEPS}
              step={1}
              value={pos}
              aria-label="Weight in kilograms"
              aria-valuetext={`${fmt(kg)} kilograms`}
              style={{ ["--p" as string]: `${(pos / STEPS) * 100}%` }}
              onChange={(e) => setKg(posToKg(Number(e.target.value)))}
            />
            <div className="gp-slider-scale">
              <span>1 kg</span>
              <span>10,000 kg</span>
            </div>
          </div>

          <div className="gp-presets" role="group" aria-label="Quick weights">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className={`gp-preset ${kg === p ? "active" : ""}`}
                onClick={() => setKg(p)}
              >
                {fmt(p)} kg
              </button>
            ))}
          </div>

          <Link href="/contact" className="gp-cta">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

