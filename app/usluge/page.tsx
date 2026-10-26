import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ComparisonTable from "@/components/usluge/ComparisonTable";
import { modules } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Usluge i modeli suradnje",
  description:
    "Pet modela suradnje — od operativne robne administracije do eksternog voditelja poslovanja i projekta 'Ključ u ruke'. Usporedite module i pronađite svoj.",
};

export default function UslugePage() {
  return (
    <>
      <section className="border-b border-line bg-frost">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Katalog usluga i modela suradnje
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Pet modula. Jedan cilj: lokal pod kontrolom.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Specijalizirani smo za caffe barove, bistroe, restorane i hotele.
              Preuzimamo kompletan operativni robni teret i analitiku, dok vaše
              financijsko knjigovodstvo dobiva proknjižene i matematički točne
              izvještaje — bilo da krećete od nule ili preuzimamo postojeće
              stanje.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <nav className="mt-8 flex flex-wrap gap-2.5">
              {modules.map((mod, i) => (
                <a
                  key={mod.slug}
                  href={`#${mod.slug}`}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    mod.featured
                      ? "border-teal bg-teal text-white hover:bg-teal-bright"
                      : "border-line bg-white text-navy hover:border-teal hover:text-teal"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {mod.name}
                </a>
              ))}
              <a
                href="#usporedba"
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
              >
                Usporedna tablica ↓
              </a>
            </nav>
          </Reveal>
        </div>
      </section>

      {modules.map((mod, i) => (
        <section
          key={mod.slug}
          id={mod.slug}
          className={`scroll-mt-20 ${i % 2 === 1 ? "bg-frost" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <span className="font-mono text-sm font-medium text-teal">
                    Modul {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-navy">
                    {mod.name}
                  </h2>
                  <p className="font-display mt-1 text-lg font-medium text-teal">
                    {mod.tagline}
                  </p>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                    {mod.audience}
                  </p>
                  <Link
                    href="/kontakt"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal"
                  >
                    Zatražite ponudu za {mod.name}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                <ul className="space-y-0">
                  {mod.items.map((item) => (
                    <li key={item.title} className="keyline py-4 first:border-t-0 first:pt-0">
                      <h3 className="flex items-start gap-3 text-[15px] font-semibold text-navy">
                        <svg
                          aria-hidden
                          className="mt-1 h-4 w-4 shrink-0 text-teal"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4 10.5L8.5 15L16 5.5"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 pl-7 text-sm leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section id="usporedba" className="scroll-mt-20 border-t border-line bg-frost">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Usporedni pregled modula
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Što je uključeno u koji paket?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <ComparisonTable />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-navy p-7 lg:p-9">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Niste sigurni koji modul odgovara vašem lokalu?
                </h3>
                <p className="mt-1.5 text-sm text-white/70">
                  Javite se za uvodni razgovor — preporučit ćemo opseg koji ima
                  smisla, bez prodajnog pritiska.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="rounded-full bg-teal-bright px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Dogovorite besplatnu analizu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
