import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AnalysisWizard from "@/components/analiza/AnalysisWizard";

export const metadata: Metadata = {
  title: "Besplatna analiza zaliha",
  description:
    "Odgovorite na pet kratkih pitanja o svom lokalu i dogovorite besplatnu analizu zaliha i reviziju ulaznih kalkulacija.",
};

export default function AnalizaPage() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Besplatna analiza zaliha
            </p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Pet pitanja. Dvije minute. Jasna slika gdje curi marža.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Recite nam osnovno o svom lokalu da se pripremimo za razgovor.
              Analiza i revizija ulaznih kalkulacija za vaša najprodavanija
              pića i jela su besplatne i neobvezujuće.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Bez prodajnog pritiska
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Odgovor u roku jednog radnog dana
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                Vaši podaci ostaju povjerljivi
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <AnalysisWizard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
