import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Usluge i modeli suradnje",
};

export default function UslugePage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
        Uskoro
      </p>
      <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-navy">
        Usluge i modeli suradnje
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Detaljan pregled svih pet modula — od Basica do „Ključ u ruke“ — s
        usporednom tablicom uskoro je ovdje.
      </p>
      <Link
        href="/kontakt"
        className="mt-8 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-bright"
      >
        Kontaktirajte nas u međuvremenu
      </Link>
    </section>
  );
}
