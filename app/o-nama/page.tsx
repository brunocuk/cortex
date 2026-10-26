import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Matej Kobaš, 15+ godina operativnog iskustva u hospitality i F&B sektoru. Upoznajte metodologiju Cortex Business Operations: Clean Start, softverska fleksibilnost i sinergija s knjigovodstvom.",
  alternates: { canonical: "/o-nama" },
};

const experience = [
  {
    role: "Operativni direktor (COO)",
    org: "Rougemarin grupacija",
    detail:
      "Dugogodišnje vođenje cjelokupnog operativnog P&L-a, timova od 100+ zaposlenika, nabave, prodaje i B2B pregovora s ključnim dobavljačima.",
  },
  {
    role: "Direktor sektora ugostiteljstva",
    org: "Atalian Global Services Croatia",
    detail:
      "Restrukturiranje i razvoj ugostiteljskih operacija, uvođenje naprednih digitalnih sustava i novih softvera.",
  },
  {
    role: "Otvaranja i pre-opening faze",
    org: "Hotel Diplomat Zagreb · Hotel Nikola Vodice",
    detail:
      "Uspješna otvaranja novih hotela i restoranskih koncepata, od projektiranja operative do prvih gostiju.",
  },
  {
    role: "Produkcija gastronomskih manifestacija",
    org: "Advent na Zrinjevcu · Rougemarin Park · festivali",
    detail:
      "Vođenje produkcije vodećih nacionalnih gastronomskih događanja s kompleksnom logistikom hrane i pića.",
  },
];

const methodology = [
  {
    title: "Koncept Clean Start",
    text: "Postavljanje nove baze podataka od nulte točke eliminira povijesne pogreške, fiktivne viškove i zaboravljene artikle. Vlasnik dobiva 100% vjerodostojno polazište.",
  },
  {
    title: "Softverska fleksibilnost",
    text: "Optimizirani smo za implementaciju novog ugostiteljskog softvera s riješenom fiskalizacijom i stabilnim radom, uz mogućnost vođenja robnog poslovanja i u postojećem sustavu klijenta (npr. Remaris).",
  },
  {
    title: "Sinergija s financijskim knjigovodstvom",
    text: "Nismo konkurencija vanjskim knjigovodstvenim servisima, već njihov operativni partner koji im svakog mjeseca isporučuje proknjižene i matematički točne robne rekapitulacije.",
  },
];

export default function ONamaPage() {
  return (
    <>
      <section className="border-b border-line bg-frost">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Iza sustava stoji operativno iskustvo, a ne teorija
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Matej Kobaš
            </h1>
            <p className="font-display mt-2 text-lg font-medium text-teal">
              Osnivač &amp; glavni operativni savjetnik
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Preko 15 godina rukovodećeg i operativnog iskustva u vođenju,
              restrukturiranju i razvoju hospitality &amp; F&amp;B sektora.
              Cortex Business Operations utemeljen je na tom terenskom iskustvu
              kako bi klijentima pružio najvišu razinu operativne discipline,
              transparentnosti i zaštite profita.
            </p>
            <blockquote className="mt-7 border-l-2 border-teal pl-5 text-[15px] italic leading-relaxed text-navy">
              „Ugostiteljski biznis uspijeva ili propada na operativnoj
              disciplini. CBO je nastao kako bi vlasnicima lokala omogućio miran
              san, a investitorima potpunu zaštitu kapitala.“
            </blockquote>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-teal/40" />
              <Image
                src="/matej.png"
                alt="Matej Kobaš, osnivač Cortex Business Operations"
                width={560}
                height={746}
                priority
                className="relative rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Iskustvo
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              15+ godina na terenu, u najvećim ugostiteljskim sustavima.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {experience.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.07} className="bg-white">
                <div className="h-full p-7 transition-colors hover:bg-frost lg:p-9">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {exp.org}
                  </p>
                  <h3 className="font-display mt-3 text-lg font-semibold text-navy">
                    {exp.role}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {exp.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-frost">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Metodologija
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Kako radimo i zašto to funkcionira.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {methodology.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <span className="font-mono text-sm font-medium text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-navy p-7 lg:p-9">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Želite ovakvu disciplinu u svom lokalu?
                </h3>
                <p className="mt-1.5 text-sm text-white/70">
                  Uvodni razgovor je besplatan i neobvezujući.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="rounded-full bg-teal-bright px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Javite nam se
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
