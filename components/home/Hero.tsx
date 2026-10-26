"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/CountUp";

const headlineLines = [
  "Znate li točno koliko vas",
  "košta svaka kava, odrezak",
  "i runda pića, ili samo",
  "pogađate?",
];

function NetworkLines() {
  // Subtle nod to the CBO "neural" logo, light variant
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-10 right-0 hidden h-[520px] w-[520px] opacity-[0.35] lg:block"
      viewBox="0 0 520 520"
      fill="none"
    >
      <g stroke="#0d9488" strokeWidth="1">
        <path d="M80 120 L220 60 L380 110 L470 220 L430 380 L280 460 L120 400 L60 260 Z" opacity="0.35" />
        <path d="M220 60 L280 230 L470 220 M80 120 L280 230 L120 400 M280 230 L430 380 M280 230 L280 460" opacity="0.25" />
        <path d="M220 60 L120 400 M380 110 L280 460 M60 260 L470 220" opacity="0.15" />
      </g>
      {[
        [80, 120], [220, 60], [380, 110], [470, 220], [430, 380],
        [280, 460], [120, 400], [60, 260], [280, 230],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i === 8 ? 5 : 3.5}
          fill={i % 3 === 0 ? "#d97706" : "#14b8a6"}
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

function KpiPanel() {
  return (
    <div className="relative rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-24px_rgba(11,37,69,0.25)]">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Mjesečni pregled · vaš lokal
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-teal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-bright opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-bright" />
          </span>
          ažurno
        </span>
      </div>

      <dl className="divide-y divide-line">
        <div className="flex items-baseline justify-between py-4">
          <dt className="text-sm text-muted">Food cost</dt>
          <dd className="font-mono text-2xl font-semibold text-navy">
            <CountUp to={27.8} decimals={1} suffix=" %" />
          </dd>
        </div>
        <div className="flex items-baseline justify-between py-4">
          <dt className="text-sm text-muted">Beverage cost</dt>
          <dd className="font-mono text-2xl font-semibold text-navy">
            <CountUp to={21.4} decimals={1} suffix=" %" />
          </dd>
        </div>
        <div className="flex items-baseline justify-between py-4">
          <dt className="text-sm text-muted">Inventurna razlika</dt>
          <dd className="font-mono text-2xl font-semibold text-teal">
            <CountUp to={0} decimals={2} suffix=" €" />
          </dd>
        </div>
        <div className="flex items-baseline justify-between pt-4">
          <dt className="text-sm text-muted">Operativna marža</dt>
          <dd className="font-mono text-2xl font-semibold text-amber">
            <CountUp to={23.6} decimals={1} suffix=" %" />
          </dd>
        </div>
      </dl>

      <p className="mt-5 rounded-lg bg-frost px-4 py-3 text-xs leading-relaxed text-muted">
        Ovako izgleda lokal kad brojke vodi Cortex: svaki decilitar i gram
        poznat, svakog 1. u mjesecu.
      </p>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <NetworkLines />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal"
          >
            Robno poslovanje · F&amp;B kontroling · Digitalizacija
          </motion.p>

          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl">
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === headlineLines.length - 1 ? "text-teal" : ""}`}
                  initial={reduced ? false : { y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Preuzimamo kompletno robno poslovanje, inventure, digitalizaciju
            procesa i kontrolu troškova hrane i pića. Vaš knjigovođa dobiva
            čiste brojeve, vi miran san, a vaš lokal profit koji prestaje
            neprimjetno curiti.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/analiza"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(13,148,136,0.7)] transition-all hover:-translate-y-0.5 hover:bg-teal-bright"
            >
              Dogovorite besplatnu analizu zaliha
            </Link>
            <Link
              href="/usluge"
              className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
            >
              Pogledajte modele suradnje
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <KpiPanel />
        </motion.div>
      </div>
    </section>
  );
}
