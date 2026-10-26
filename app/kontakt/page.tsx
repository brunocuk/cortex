import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Dogovorite besplatnu analizu zaliha i uvodni razgovor. Javljamo se u roku jednog radnog dana.",
};

const steps = [
  {
    title: "Pošaljete upit",
    text: "Recite nam osnovno o svom objektu: tip, veličinu i što vas najviše muči.",
  },
  {
    title: "Uvodni razgovor",
    text: "Besplatan i neobvezujući. Prolazimo kroz vaše procese i trenutno stanje.",
  },
  {
    title: "Besplatna revizija kalkulacija",
    text: "Za vaša najprodavanija pića i jela provjeravamo ulazne kalkulacije i pokazujemo gdje curi marža.",
  },
];

export default function KontaktPage() {
  return (
    <section className="bg-frost">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal">
              Kontakt
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Zaustavite gubitke prije idućeg vikenda.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Javite nam se za uvodni razgovor i besplatnu reviziju ulaznih
              kalkulacija za vaša najprodavanija pića i jela.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-mono mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal text-sm font-semibold text-teal">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-navy">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-8 rounded-xl bg-teal-soft/50 px-5 py-4 text-sm leading-relaxed text-navy">
              Želite da se bolje pripremimo?{" "}
              <Link href="/analiza" className="font-semibold text-teal hover:underline">
                Ispunite kratki upitnik za besplatnu analizu
              </Link>{" "}
              (pet pitanja, dvije minute).
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Izravni kontakt
              </p>
              <p className="mt-3 text-[15px] font-semibold text-navy">
                Matej Kobaš, osnivač
              </p>
              <a
                href="mailto:info@cortex.hr"
                className="mt-1 block text-[15px] font-medium text-teal hover:underline"
              >
                info@cortex.hr
              </a>
              <p className="mt-1 text-sm text-muted">Zagreb, Hrvatska</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-[0_24px_60px_-28px_rgba(11,37,69,0.25)] lg:p-9">
              <h2 className="font-display text-xl font-bold text-navy">
                Zatražite neobvezujući sastanak
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Odgovaramo u roku jednog radnog dana.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
