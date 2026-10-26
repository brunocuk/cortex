import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nama",
};

export default function ONamaPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
        Uskoro
      </p>
      <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-navy">
        O nama
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Priča o Mateju Kobašu, 15+ godina operativnog iskustva i Clean Start
        metodologiji uskoro je ovdje.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
      >
        Natrag na naslovnicu
      </Link>
    </section>
  );
}
