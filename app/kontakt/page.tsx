import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
        Uskoro
      </p>
      <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-navy">
        Kontakt
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Kontakt forma stiže uskoro. U međuvremenu nam se javite na{" "}
        <a href="mailto:info@cortex.hr" className="font-semibold text-teal">
          info@cortex.hr
        </a>
        .
      </p>
    </section>
  );
}
